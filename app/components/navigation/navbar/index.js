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
            Home
          </CustomLink>
          <CustomLink handleLinkClick={handleLinkClick} activeLink={activeLink} href="/listings">
            Listings
          </CustomLink>
          <CustomLink handleLinkClick={handleLinkClick} activeLink={activeLink} href="/newList">
            List Your Shelf
          </CustomLink>
          <CustomLink handleLinkClick={handleLinkClick} activeLink={activeLink} href="about_us">
            About Us
          </CustomLink>
          <CustomLink handleLinkClick={handleLinkClick} activeLink={activeLink} href="/signup">
            Sign Up
          </CustomLink>
          <CustomLink handleLinkClick={handleLinkClick} activeLink={activeLink} href="/login">
            Log In
          </CustomLink>
        </div>
        }

        {/* The navigation can be made into one , but leaving it as it is  */}
      
        {
          isNavbarOpen &&
          <div className="flex fixed mt-16  top-0 left-0 px-24 bg-white w-full h-screen flex-col items-center gap-6 tablet:hidden">
            <CustomLink handleLinkClick={handleLinkClick} activeLink={activeLink} href="/">
              Home
            </CustomLink>
            <CustomLink handleLinkClick={handleLinkClick} activeLink={activeLink} href="/listings">
              Listings
            </CustomLink>
            <CustomLink handleLinkClick={handleLinkClick} activeLink={activeLink} href="/newList">
              List Your Shelf
            </CustomLink>
            <CustomLink handleLinkClick={handleLinkClick} activeLink={activeLink} href="about_us">
              About Us
            </CustomLink>
            <CustomLink handleLinkClick={handleLinkClick} activeLink={activeLink} href='/login' className="hover:text-sky-500 w-full text-center py-2 text-gray-50 bg-sky-500 text-base hover:underline-offset-8 hover:underline">
              <div className="flex items-center gap-2 justify-center">
                <h1 className="text-base">Log In</h1>
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
      className={[className, "hover:text-sky-500 text-sm hover:underline-offset-8 hover:underline"]}
      href={href}
      onClick={() => handleLinkClick(href)}
      style={activeLink === href ? { color: "#0E87D1" } : {}}
    >
      {children}
    </Link>
  )
}