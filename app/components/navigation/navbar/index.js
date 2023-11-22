"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import navbarLogo from "../../../../images/navbarLogo.png";
import { Button } from 'antd';

import { useRouter } from 'next/navigation'
import { BarChartOutlined } from "@ant-design/icons";
import { FaArrowRight, FaBars, FaCross, FaPlus } from "react-icons/fa";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const router = useRouter()

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsNavbarOpen(false)
  };

  const handleNavbarOpen = () => {
    setIsNavbarOpen(prev => !prev)
  }

  return (
    <>
      <div className="w-full fixed bg-white flex text-black items-center flex-row justify-between py-4 px-10 m-0 border-b border-black" style={{ zIndex: "99999" }}>
        <div onClick={() => router.push("/")} className="h-30 w-24 cursor-pointer md:h-30 md:w-40">
          <Image src={navbarLogo} alt="navbar logo" height={50} />
        </div>
        {!isNavbarOpen && <div className="items-center gap-6 tablet:flex hidden">
          <CustomLink handleLinkClick={handleLinkClick} activeLink={activeLink} href="/">
            <h1 className="hover:text-sky-500">
              Home
            </h1>
          </CustomLink>
          <CustomLink handleLinkClick={handleLinkClick} activeLink={activeLink} href="/listings">
            <h1 className="hover:text-sky-500">
              Listings
            </h1>
          </CustomLink>
          <CustomLink handleLinkClick={handleLinkClick} activeLink={activeLink} href="/newList">
            <h1 className="hover:text-sky-500">
              List Your Shelf
            </h1>
          </CustomLink>
          <CustomLink handleLinkClick={handleLinkClick} activeLink={activeLink} href="about_us">
            <h1 className="hover:text-sky-500">
              About Us
            </h1>
          </CustomLink>
          <CustomLink handleLinkClick={handleLinkClick} activeLink={activeLink} href="/signup">
            <h1 className="hover:text-sky-500">
              Sign Up
            </h1>
          </CustomLink>
          <CustomLink handleLinkClick={handleLinkClick} activeLink={activeLink} href="/login">
            <h1 className="hover:text-sky-500">
              Log In
            </h1>
          </CustomLink>
        </div>
        }

        {/* The navigation can be made into one , but leaving it as it is  */}

        {
          isNavbarOpen &&
          <div className="flex fixed mt-16 space-y-1 top-0 left-0 px-24 bg-white w-full h-screen flex-col items-center gap-6 tablet:hidden">
            <CustomLink handleLinkClick={handleLinkClick} activeLink={activeLink} href="/">
              <h1 className="mt-16 text-lg hover:text-sky-500">
                Home
              </h1>
            </CustomLink>
            <CustomLink handleLinkClick={handleLinkClick} activeLink={activeLink} href="/listings">
              <h1 className="text-lg  hover:text-sky-500">
                Listings
              </h1>
            </CustomLink>
            <CustomLink handleLinkClick={handleLinkClick} activeLink={activeLink} href="/newList">
              <h1 className="text-lg  hover:text-sky-500">
                List Your Shelf
              </h1>
            </CustomLink>
            <CustomLink handleLinkClick={handleLinkClick} activeLink={activeLink} href="about_us">
              <h1 className="text-lg  hover:text-sky-500">
                About Us
              </h1>
            </CustomLink>
            <CustomLink handleLinkClick={handleLinkClick} activeLink={activeLink} href='/login' className="hover:bg-sky-600 w-full text-center py-2 text-gray-50  bg-sky-500 text-base hover:underline-offset-8 hover:underline">
              <div className="flex items-center gap-2 justify-center">
                <h1 className="text-lg  hover:text-sky-500">Log In</h1>
                <FaArrowRight size={14} className="inline-block" />
              </div>
            </CustomLink>
          </div>
        }
        <div className="tablet:hidden block">
          {!isNavbarOpen ?
            <FaBars size={18} onClick={handleNavbarOpen} className="cursor-pointer" /> :
            <FaPlus size={18} onClick={handleNavbarOpen} className="cursor-pointer rotate-45" />
          }
        </div>
      </div>
    </>
  );
};

export default Navbar;


export const CustomLink = ({ href, children, className, activeLink, handleLinkClick }) => {

  return (
    <Link
      className={[className, "hover:text-sky-500 text-sm hover:underline-offset-8"]}
      href={href}
      onClick={() => handleLinkClick(href)}
      style={activeLink === href ? { color: "#0E87D1" } : {}}
    >
      {children}
    </Link>
  )
}