'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '../components/ui/sheet';
import { sidebarLinks } from '@/constants';

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <section className="w-full">
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src="/icons/hamburger.svg"
            width={46}
            height={46}
            alt="hamburger icon"
            className="cursor-pointer sm:hidden px-1"
          />
        </SheetTrigger>
        <SheetContent
          side="left"
          className="border-none bg-dark-primary  text-white"
        >
          <Link href="/" className="flex items-center gap-1">
            <Image
              src="/icons/logo.svg"
              width={32}
              height={32}
              alt="Class Cast logo"
            />
            <p className="text-[26px] font-extrabold text-white">Class Cast</p>
          </Link>
          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <section className=" flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map(({ label, route, imgUrl }) => {
                  const isActive = pathname === route;

                  return (
                    <SheetClose asChild key={route}>
                      <Link
                        key={label}
                        href={route}
                        className={`flex gap-4 items-center p-4 rounded-lg w-full max-w-60 ${
                          isActive && `bg-blue-primary`
                        }`}
                      >
                        <Image
                          src={imgUrl}
                          alt={label}
                          width={24}
                          height={24}
                        />
                        <p className="font-semibold">{label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
