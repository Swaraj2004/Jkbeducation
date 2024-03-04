'use client';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import InputBox from '@/components/ui/InputBox';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';

const SignupFormSchema = z.object({
  first_name: z.string().min(2, {
    message: 'First name is required.',
  }),
  middle_name: z.string().min(2, {
    message: 'Middle name is required.',
  }),
  last_name: z.string().min(2, {
    message: 'Last name is required.',
  }),
  email: z.string().email({
    message: 'Invalid email address.',
  }),
  contact: z.string().min(10, {
    message: 'Contact must be at least 10 characters.',
  }),
  address: z.string().min(5, {
    message: 'Address is required.',
  }),
  username: z.string().min(3, {
    message: 'Username must be at least 3 characters.',
  }),
  password: z.string().min(8, {
    message: 'Password must be at least 8 characters.',
  }),
});

interface fetchResponse {
  message: string;
  success: boolean;
  error: string | undefined;
}

const SignupForm = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof SignupFormSchema>>({
    resolver: zodResolver(SignupFormSchema),
    defaultValues: {
      first_name: '',
      middle_name: '',
      last_name: '',
      email: '',
      contact: '',
      address: '',
      username: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof SignupFormSchema>) {
    const {
      first_name,
      middle_name,
      last_name,
      email,
      contact,
      address,
      username,
      password,
    } = values;
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({
        first_name,
        middle_name,
        last_name,
        username,
        email,
        phone: contact,
        password,
        location: address,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = (await res.json()) as fetchResponse;

    if (data.success) {
      toast.success('User registered successfully!');
      router.push('/login');
    } else {
      toast.error(data.message);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5"
      >
        <div className="flex flex-col sm:flex-row gap-5">
          <InputBox
            label="First Name"
            id="first_name"
            type="text"
            form={form}
          />
          <InputBox
            label="Middle Name"
            id="middle_name"
            type="text"
            form={form}
          />
          <InputBox label="Last Name" id="last_name" type="text" form={form} />
        </div>
        <div className="flex flex-col sm:flex-row gap-5">
          <InputBox label="Email" id="email" type="email" form={form} />
          <InputBox label="Contact" id="contact" type="number" form={form} />
        </div>
        <InputBox label="Address" id="address" type="text" form={form} />
        <div className="flex flex-col sm:flex-row gap-5">
          <InputBox label="Username" id="username" type="text" form={form} />
          <InputBox
            label="Password"
            id="password"
            type="password"
            form={form}
          />
        </div>
        <div className="mt-3 flex justify-center">
          <Button className="w-32 text-card font-bold">Sign up</Button>
        </div>
      </form>
    </Form>
  );
};

export default SignupForm;
