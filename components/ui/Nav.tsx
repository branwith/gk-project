"use client"
import React from 'react';
import { usePathname } from 'next/navigation';
import UserAuthButton from './UserAuthButton';
import Image from 'next/image';

import { useStickyNavigation } from '@/functions/NavFunctions';

import '@/assets/libs/tobii/css/tobii.min.css';
import '@/assets/libs/tiny-slider/tiny-slider.css';
import '@/assets/libs/choices.js/public/assets/styles/choices.min.css';
import '@/assets/libs/@iconscout/unicons/css/line.css';
import '@/assets/libs/@mdi/font/css/materialdesignicons.min.css';
import '@/assets/css/tailwind.min.css';
import '@/assets/css/style.css';


import Logo from "@/assets/images/logo-icon-40.png";
import Logo_w from "@/assets/images/logo-icon-40-white.png";
import Logo_dark from "@/assets/images/logo-dark.png";
import Logo_light from "@/assets/images/logo-light.png";



function Nav() {
  const pathname = usePathname();


  const isSticky = useStickyNavigation();

  const handleClick = (event: any) => {
    event.preventDefault();
    // Your logic here
  };

  return (
    <nav id="topnav" className={`defaultscroll ${isSticky ? 'is-sticky nav-sticky' : ''} `}>
      <div className="container flex justify-between">
        <a className="logo" href="/">
          <div className="block sm:hidden">
            <Image src={Logo} className="h-10 inline-block dark:hidden" alt="" style={{ height: "40px", width: "40px" }} />
            <Image src={Logo_w} className="h-10 hidden dark:inline-block" alt="" style={{ height: "40px", width: "40px" }} />
          </div>
          <div className="sm:block hidden">
            <Image src={Logo_dark} style={{ height: "60px", width: "92px" }}
              className="object-cover inline-block dark:hidden" alt="" />
            <Image src={Logo_light} style={{ height: "60px", width: "92px" }}
              className="object-cover hidden dark:inline-block" alt="" />
          </div>
        </a>

        <div className="menu-extras">
          <div className="menu-item">
            <a className="navbar-toggle" id="isToggle" onClick={handleClick}>
              <div className="lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
          </div>
        </div>
        <div className="flex flex-row-reverse">
          <UserAuthButton />
          <div id="navigation">
            <ul className="navigation-menu justify-end nav-light">
              <li className={`parent-menu-item ${pathname === '/' ? 'active' : ''}`}>
                <a href="/">Home</a>
              </li>
              <li className={`has-submenu parent-parent-menu-item ${['/jobs/all', '/jobs/categories'].includes(pathname) ? 'active' : ''}`}>
                <a>Jobs</a>
                <span className="menu-arrow"></span>
                <ul className="submenu">

                  <li className={`${pathname === '/jobs/categories' ? 'active' : ''}`}>
                    <a href="/jobs/categories" className="sub-menu-item">Job Categories</a>
                  </li>

                  <li className={`${pathname === '/jobs/all' ? 'active' : ''}`}><a href="/jobs/all"
                    className="sub-menu-item">All Jobs</a></li>
                </ul>
              </li>
              <li className={`has-submenu parent-parent-menu-item ${['/aboutus', '/services', '/career'].includes(pathname) ? 'active' : ''}`}>
                <a>Pages</a>
                <span className="menu-arrow"></span>
                <ul className="submenu">
                  <li className={`sub-menu-item ${pathname === '/aboutus' ? 'active' : ''}`}>
                    <a href="/aboutus">About Us</a>
                  </li>
                  <li className={`sub-menu-item ${pathname === '/services' ? 'active' : ''}`}>
                    <a href="/services">Services</a>
                  </li>
                  <li className={`sub-menu-item ${pathname === '/career' ? 'active' : ''}`}>
                    <a href="/career">Career</a>
                  </li>
                </ul>
              </li>
              <li className={`sub-menu-item ${pathname === '/contact' ? 'active' : ''}`}>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

