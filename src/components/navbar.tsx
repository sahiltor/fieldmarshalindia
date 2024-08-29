'use client';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

const navbar: {
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
    href: '/products',
    children: [
      {
        title: 'Flour Mill',
        href: '/products/flour-mill',
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
      <NavigationMenu>
        <NavigationMenuList>
          {navbar.map(item =>
            item.children ? (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuTrigger>
                  <Link
                    href={item.href}
                    className="bg-transparent hover:text-red-500 px-4"
                  >
                    {item.title}
                  </Link>
                </NavigationMenuTrigger>

                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    {/* <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            shadcn/ui
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Beautifully designed components built with Radix UI
                            and Tailwind CSS.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li> */}

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
                className="bg-transparent hover:text-red-500 px-4"
              >
                {item.title}
              </Link>
            )
          )}
        </NavigationMenuList>
      </NavigationMenu>
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
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = 'ListItem';
