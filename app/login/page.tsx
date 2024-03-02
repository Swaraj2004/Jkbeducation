import InputBox from '@/components/ui/InputBox';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

const Signup = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="p-6 max-w-[350px] m-4 sm:m-auto w-full">
        <div className="flex justify-center mb-5 h-14">
          <Image
            src="/jkb_logo.png"
            alt="jkb_logo"
            width={100}
            height={100}
            objectFit="contain"
          />
        </div>
        <div className="text-center mb-8">
          <h1 className="text-xl font-bold mb-1.5">Welcome Here 👋</h1>
          <h2 className="text-muted-foreground">
            Enter your credentials to continue
          </h2>
        </div>
        <form className="flex flex-col gap-5">
          <InputBox label="Username" id="username" type="text" />
          <InputBox label="Password" id="password" type="password" />
          <div className="mt-2.5 flex justify-center">
            <Button className="w-32">Login</Button>
          </div>
        </form>
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

export default Signup;
