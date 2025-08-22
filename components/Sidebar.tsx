'use client';

import { sidebarLinks } from '@/constants';
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { isRouteActive } from '@/lib/utils/helperFunctions';

function Sidebar() {
  const pathName = usePathname();
  return (
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col  justify-between  bg-dark-primary p-6 pt-28 text-white max-sm:hidden lg:w-[264px] border border-red-100">
      {/* <Image
        src="icons/class-cast-logo.svg"
        alt="ClassCast LOGO "
        width={300}
        height={300}
      /> */}
      <div className="flex flex-col gap-6">
        {sidebarLinks.map(({ label, route, imgUrl }) => {
          const isActive = isRouteActive(pathName, route);
          return (
            <Link
              key={label}
              href={route}
              className={`flex gap-4 items-center p-4 rounded-lg justify-start ${
                isActive && `bg-blue-primary`
              }`}
            >
              <Image src={imgUrl} alt={label} width={24} height={24} />
              <p className="text-lg font-semibold max-lg:hidden">{label}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default Sidebar;
