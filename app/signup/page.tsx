import { options } from '@/app/api/auth/[...nextauth]/options';
import SignupForm from '@/app/signup/SignupForm';
import { Card } from '@/components/ui/card';
import { getServerSession } from 'next-auth/next';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const SignupPage = async () => {
  const session = await getServerSession(options);
  if (session) {
    redirect('/dashboard');
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="p-6 sm:max-w-[900px] m-4 [900px]:m-auto w-full">
        <div className="flex justify-center mb-5 h-14">
          <Image src="/jkb_logo.png" alt="jkb_logo" width={100} height={100} />
        </div>
        <div className="text-center mb-8">
          <h1 className="text-xl font-bold mb-1.5">Welcome Here 👋</h1>
          <h2 className="text-muted-foreground">
            Enter your details to register
          </h2>
        </div>
        <SignupForm />
        <div className="mt-8 text-center">
          <span className="text-muted-foreground">
            Already Registered?&nbsp;
          </span>
          <Link href="/login" className="text-primary">
            Login
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default SignupPage;
