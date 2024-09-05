import React from 'react';
import Logo from './logo';
import { logo } from '@/lib/images';
import NavBar from '../navbar';
import Link from 'next/link';

export default function Header() {
  return (
    <>
      <header className="relative ">
        <>
          <div className="absolute bg-[#00000012] w-full h-28 z-10"></div>

          <div className="absolute duration-0 top-0 left-0 right-0 container z-50">
            <div>
              <nav className="flex items-center justify-between py-7 ">
                <Link href={'/'}>
                  <Logo imgSrc={logo} />
                </Link>

                <div className="">
                  <NavBar />
                </div>
              </nav>
            </div>
          </div>
        </>
      </header>
    </>
  );
}
