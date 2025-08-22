import Image from 'next/image';
import Link from 'next/link';
import MobileNav from './MobileNav';
import { SignedIn, UserButton } from '@clerk/nextjs';

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-primary px-6 py-4 lg:px-3 border border-red-100">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.svg"
          width={32}
          height={32}
          alt="lesson-cast logo"
          className="max-sm:size-10"
        />
        <p className="text-[26px] font-extrabold text-white max-sm:hidden">
          Class Cast
        </p>
      </Link>
      <div className="flex-between gap-5">
        {/* clerk user mangement */}
        <SignedIn>
          <UserButton/>
        </SignedIn>

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
