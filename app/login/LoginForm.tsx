'use client';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import InputBox from '@/components/ui/InputBox';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';

const LoginFormSchema = z.object({
  username: z.string(),
  password: z.string(),
});

const LoginForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';

  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof LoginFormSchema>) {
    const { username, password } = values;
    const res = await signIn('credentials', {
      username,
      password,
      redirect: false,
    });

    const data = res?.error ? JSON.parse(res.error) : null;

    if (data && !data.success) {
      toast.error(data.message);
    } else if (res?.ok) {
      toast.success('User logged in successfully!');
      router.push(callbackUrl);
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5"
      >
        <InputBox label="Username" id="username" type="text" form={form} />
        <InputBox label="Password" id="password" type="password" form={form} />
        <div className="mt-2.5 flex justify-center">
          <Button className="w-32 text-card font-bold">Login</Button>
        </div>
      </form>
    </Form>
  );
};

export default LoginForm;
