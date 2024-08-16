import React from 'react';
import Wrapper from './wrapper';
import Logo from './logo';
import { logo } from '@/lib/images';
import Link from 'next/link';
import { NavigationMenu } from './navigation-menu';

export default function Header() {
  return (
    <>
      <header>
        <Wrapper>
          <nav>
            <div className="flex lg:flex-1">
              <Logo imgSrc={logo} />
            </div>

            <div>
              <NavigationMenu />
            </div>
          </nav>
        </Wrapper>
      </header>
    </>
  );
}
