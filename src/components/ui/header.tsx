import React from 'react';
import Wrapper from './wrapper';
import Logo from './logo';
import { logo } from '@/lib/images';
import HeroImg from './hero-img';
import NavBar from '../navbar';

export default function Header() {
  return (
    <>
      <header className="relative">
        {/* <div className="inset-0 bg-black z-40 opacity-10 shadow-lg  w-full fixed h-32"></div> */}

        <Wrapper>
          <div className="  duration-0 top-0 z-50">
            <nav className="flex justify-between items-center py-7 ">
              <Logo imgSrc={logo} />

              <NavBar />
            </nav>
          </div>
        </Wrapper>
      </header>
      <HeroImg />
    </>
  );
}
