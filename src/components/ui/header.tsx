import React from 'react';
import Wrapper from './wrapper';
import Logo from './logo';
import { homeHero, homeHeroSecond, logo } from '@/lib/images';
import { NavigationMenu } from './navigation-menu';
import NavBar from '../navbar';
import BgImage from '../bg-image';
import Image from 'next/image';
import HeroImg from './hero-img';

export default function Header() {
  return (
    <>
      <header className="relative">
        <div className="inset-0 bg-black z-40 opacity-10 shadow-lg  w-full fixed h-32"></div>
        <HeroImg />
        <Wrapper>
          <div className="fixed left-20 right-20 transition-all duration-0 top-0 z-50">
            <nav className="flex justify-between items-center py-7 ">
              <Logo imgSrc={logo} />

              <NavBar />
            </nav>
          </div>
        </Wrapper>
      </header>
    </>
  );
}
