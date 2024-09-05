'use client';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React, { useState } from 'react';
import NavbarMobile from './ui/navbar-mobile';

export const navbar: {
  title: string;
  href: string;
  description?: string;
  children?: { title: string; href: string }[];
}[] = [
  {
    title: 'HOME',
    href: '/',
  },
  {
    title: 'PRODUCTS',
    href: '#',
    children: [
      {
        title: 'Flour Mill',
        href: '/products/flour-mill',
      },
      {
        title: 'Pump & Motors',
        href: '/products/pump-motors',
      },
    ],
  },
  {
    title: 'DOWNLOADS',
    href: '/',
  },
  {
    title: 'CONTACT US',
    href: '/',
  },
];

export default function NavBar() {
  return (
    <>
      <NavigationMenu className="hidden md:flex ">
        <NavigationMenuList>
          {navbar.map(item =>
            item.children ? (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuTrigger className="block  font-medium text-base bg-transparent relative md:flex">
                  <Link
                    href={item.href}
                    className="bg-transparent hover:bg-transparent hover:text-red-500  px-2"
                  >
                    {item.title}
                  </Link>
                </NavigationMenuTrigger>

                <NavigationMenuContent className="">
                  <ul className="grid grid-cols-1 text-base   content-center md:w-[200px]   ">
                    {item.children.map(chil => (
                      <ListItem
                        key={chil.title}
                        href={chil.href}
                        title={chil.title}
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ) : (
              <Link
                key={item.title}
                href={item.href}
                className="bg-transparent font-medium text-base   hover:text-red-500 px-4"
              >
                {item.title}
              </Link>
            )
          )}
        </NavigationMenuList>
      </NavigationMenu>
      <NavbarMobile />
    </>
  );
}

export const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline border-b border-gray-300 outline-none transition-colors hover:bg-[#000]   hover:text-white  focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none ">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = 'ListItem';
