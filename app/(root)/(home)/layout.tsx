import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import React from 'react';

interface homeLayoutProps {
  children: React.ReactNode;
}

function HomeLayout({ children }: homeLayoutProps) {
  return (
    <main className="relative">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <section
          className=" min-h-screen flex flex-1 flex-row px-6 pb-6 pt-28
         max-md:pb-14 sm:px-14"
        >
          <div className="w-full">{children}</div>
        </section>
      </div>
      <div>Footer</div>
    </main>
  );
}

export default HomeLayout;
