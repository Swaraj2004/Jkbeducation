import { options } from '@/app/api/auth/[...nextauth]/options';
import EnquiryDialog from '@/app/dashboard/EnquiryDialog';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { getServerSession } from 'next-auth/next';
import Image from 'next/image';
import Link from 'next/link';

const DashboardNav = async () => {
  const session = await getServerSession(options);
  console.log(session);

  return (
    <nav className="container h-14 flex items-center justify-between">
      <Link href="/dashboard">
        <Image
          src="/jkb_logo.png"
          alt="jkb_logo"
          priority
          width={100}
          height={100}
          className="h-10 w-auto"
        />
      </Link>
      <div className="flex gap-3 items-center">
        <EnquiryDialog />
        <Avatar>
          <AvatarFallback>
            {session?.user?.username?.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
};

export default DashboardNav;
