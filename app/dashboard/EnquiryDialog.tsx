'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Form } from '@/components/ui/form';
import InputBox from '@/components/ui/InputBox';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';
import SingleSelectInput from '@/components/ui/SingleSelectInput';

const EnquiryFormSchema = z.object({
  username: z.string(),
  password: z.string(),
});

const EnquiryDialog = () => {
  const form = useForm<z.infer<typeof EnquiryFormSchema>>({
    resolver: zodResolver(EnquiryFormSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof EnquiryFormSchema>) {
    const { username, password } = values;
    // const res = await fetch('', {
    //   username,
    //   password,
    // });

    // const data = res?.error ? JSON.parse(res.error) : null;

    // if (data && !data.success) {
    //   toast.error(data.message);
    // } else if (res?.ok) {
    //   toast.success('Enquiry details submitted successfully!');
    // }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Enquiry Form</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Enquiry Form</DialogTitle>
          <DialogDescription>Enter your details for enquiry.</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            <InputBox
              label="Parent Contact"
              id="parent_contact"
              type="text"
              form={form}
            />
            <InputBox
              label="10th Score"
              id="x_score"
              type="number"
              form={form}
            />
            <InputBox
              label="12th Score"
              id="xii_score"
              type="number"
              form={form}
            />
            <InputBox
              label="CET Score"
              id="cet_score"
              type="number"
              form={form}
            />
            <InputBox
              label="JEE Score"
              id="jee_score"
              type="number"
              form={form}
            />
            <InputBox
              label="College Name"
              id="college_name"
              type="text"
              form={form}
            />
            <InputBox
              label="University Name"
              id="university_name"
              type="text"
              form={form}
            />
            <SingleSelectInput label="Branch" id="branch" form={form} />
            <InputBox
              label="Referred By"
              id="referred_by"
              type="text"
              form={form}
            />
            <DialogFooter className="mt-2.5 flex sm:justify-center">
              <Button type="submit">Submit</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default EnquiryDialog;
