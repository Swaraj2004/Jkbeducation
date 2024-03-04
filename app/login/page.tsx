import { options } from '@/app/api/auth/[...nextauth]/options';
import LoginForm from '@/app/login/LoginForm';
import { Card } from '@/components/ui/card';
import { getServerSession } from 'next-auth/next';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const LoginPage = async () => {
  const session = await getServerSession(options);
  if (session) {
    redirect('/dashboard');
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="p-6 max-w-[350px] m-4 sm:m-auto w-full">
        <div className="flex justify-center mb-5 h-14">
          <Image src="/jkb_logo.png" alt="jkb_logo" width={100} height={100} />
        </div>
        <div className="text-center mb-8">
          <h1 className="text-xl font-bold mb-1.5">Welcome Here 👋</h1>
          <h2 className="text-muted-foreground">
            Enter your credentials to continue
          </h2>
        </div>
        <LoginForm />
        <div className="text-center mt-8">
          <span className="text-muted-foreground">
            Don't have an account?&nbsp;
          </span>
          <Link href="/signup" className="text-primary">
            Signup
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;
