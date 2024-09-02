'use client';
import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { navbar } from '../navbar';
import Link from 'next/link';

export default function NavbarMobile() {
  return (
    <>
      <Sheet>
        <SheetTrigger className="block md:hidden">
          <GiHamburgerMenu />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
            <Sidebar>
              <Menu>
                {navbar.length > 0
                  ? navbar.map(navItem =>
                      navItem.children ? (
                        <SubMenu label={navItem.title} key={navItem.title}>
                          {navItem?.children?.length > 0
                            ? navItem.children.map(childItem => (
                                <SheetTrigger key={childItem.title} asChild>
                                  <MenuItem
                                    component={
                                      <Link href={childItem.href ?? '#'} />
                                    }
                                  >
                                    {childItem.title}
                                  </MenuItem>
                                </SheetTrigger>
                              ))
                            : null}
                        </SubMenu>
                      ) : (
                        <SheetTrigger key={navItem.title} asChild>
                          <MenuItem
                            component={<Link href={navItem.href ?? '#'} />}
                          >
                            {navItem.title}
                          </MenuItem>
                        </SheetTrigger>
                      )
                    )
                  : null}
              </Menu>
            </Sidebar>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
}
