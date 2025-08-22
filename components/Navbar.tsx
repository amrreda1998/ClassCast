import Image from 'next/image';
import Link from 'next/link';
// import { SignedIn, UserButton } from '@clerk/nextjs';

import MobileNav from './MobileNav';

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-primary px-6 py-4 lg:px-3 border border-red-100">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.svg"
          width={58}
          height={58}
          alt="lesson-cast logo"
          className="max-sm:size-12"
        />
        <p className="text-[26px] font-extrabold text-white max-sm:hidden">
          Class Cast
        </p>
      </Link>
      <div className="flex-between gap-5">

        {/* clerk user mangement */}
        {/* <SignedIn> */}
        {/* <UserButton afterSignOutUrl="/sign-in" /> */}
        {/* </SignedIn> */}

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
