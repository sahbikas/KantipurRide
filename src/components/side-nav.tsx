'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { SIDENAV_ITEMS } from '@/constants';
import { SideNavItem } from '@/types';
import { Icon } from '@iconify/react';

const SideNav = () => {
  return (
    <div className="md:w-70 bg-white h-screen flex-1 fixed border-r border-zinc-100 hidden md:flex ">
      <div className="flex flex-col space-y-6 w-full ">
        <Link
          href="/"
          className="flex flex-row space-x-3 items-center justify-center md:justify-start md:px-6 border-b border-zinc-200 h-12 w-full"
        >
          <Image className="h-12 w-15  rounded-lg"
      src="/site_logo.png"
      width={70}
      height={70}
      alt="Picture of the author"
    />
          {/* <span className="h-9 w-9 bg-zinc-300 rounded-lg" />
          
          <span className="font-bold text-xl hidden md:flex">Logo</span> */}
        </Link>

        <div className="flex flex-col space-y-2  md:px-6 w-50 overflow-y-auto ">
          {SIDENAV_ITEMS.map((item, idx) => {
            return <MenuItem key={idx} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SideNav;

const MenuItem = ({ item }: { item: SideNavItem }) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  return (
    <div className="">
      {item.submenu ? (
        <>
          <button
            onClick={toggleSubMenu}
            className={`flex flex-row items-center p-2 rounded-lg hover-bg-zinc-100 w-full justify-between hover:bg-zinc-100 ${
              pathname.includes(item.path) ? 'bg-zinc-100' : ''
            }`}
          >
            <div className="flex flex-row space-x-4 items-center">
              {item.icon}
              <span className="font-semibold text-sm  flex ">{item.title}</span>
            </div>

            <div className={`${subMenuOpen ? 'rotate-180' : ''} flex`}>
              <Icon icon="lucide:chevron-down" width="24" height="24" />
            </div>
          </button>

          {subMenuOpen && (
            <div className="my-2 ml-12 flex flex-col space-y-4  ">
              {item.subMenuItems?.map((subItem, idx) => {
                return (
                  <Link
                    key={idx}
                    href={subItem.path}
                    className={`${

                      subItem.path === pathname ? 'font-bold ' : ''
                    }`}
                  >
                    <div className='flex gap-4'>
                    <div className='rounded-md'>
                      {subItem?.icon}
                    </div>
                    <span className='hover:bg-green-600 rounded-md '>{subItem.title}</span>
                    
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </>
      ) : (
        <Link
          href={item.path}
          className={`flex flex-row space-x-4 items-center p-2 rounded-lg hover:bg-zinc-100 ${
            item.path === pathname ? 'bg-zinc-100' : ''
          }`}
        >
          {item.icon}
          <span className="font-semibold text-sm flex ">{item.title}</span>
        </Link>
      )}
    </div>
  );
};