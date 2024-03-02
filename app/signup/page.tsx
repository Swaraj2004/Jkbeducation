import InputBox from '@/components/ui/InputBox';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

const Signup = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="p-6 sm:max-w-[900px] m-4 [900px]:m-auto w-full">
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
            Enter your details to register
          </h2>
        </div>
        <form className="flex flex-col gap-5">
          <div className="flex flex-col sm:flex-row gap-5">
            <InputBox label="First Name" id="firstname" type="text" />
            <InputBox label="Middle Name" id="middlename" type="text" />
            <InputBox label="Last Name" id="lastname" type="text" />
          </div>
          <div className="flex flex-col sm:flex-row gap-5">
            <InputBox label="Email" id="email" type="email" />
            <InputBox label="Contact" id="contact" type="number" />
          </div>
          <InputBox label="Address" id="address" type="text" />
          <div className="flex flex-col sm:flex-row gap-5">
            <InputBox label="Username" id="username" type="text" />
            <InputBox label="Password" id="password" type="password" />
          </div>
          <div className="mt-3 flex justify-center">
            <Button className="w-32">Sign up</Button>
          </div>
        </form>
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

export default Signup;
