"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import navbarLogo from "../../../../images/navbarLogo.png";
import { Button } from 'antd';
const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <>
      <div className="w-full fixed bg-white flex flex-row justify-between py-4 px-10 m-0 border-b border-black" style={{ zIndex: "99999" }}>
        <div className="h-30 w-24 md:h-30 md:w-40">
          <Image src={navbarLogo} alt="navbar logo" height={50} />
        </div>
        <div className=" items-center hidden gap-10 tablet:flex">
          <Link
            className="hover:text-sky-500 hover:underline-offset-8 hover:underline"
            href="/"
            onClick={() => handleLinkClick("/")}
            style={activeLink === "/" ? { color: "#0E87D1" } : {}}
          >
            Home
          </Link>
          <Link
            className="hover:text-sky-500 hover:underline-offset-8 hover:underline"
            href="/listings"
            onClick={() => handleLinkClick("/listings")}
            style={activeLink === "/listings" ? { color: "#0E87D1" } : {}}
          >
            Listings
          </Link>
          <Link
            className="hover:text-sky-500 hover:underline-offset-8 hover:underline"
            href="/newList"
            onClick={() => handleLinkClick("/newList")}
            style={activeLink === "/newList" ? { color: "#0E87D1" } : {}}
          >
            List Your Shelf
          </Link>
          <Link
            className="hover:text-sky-500 hover:underline-offset-8 hover:underline"
            href="/about"
            onClick={() => handleLinkClick("/about")}
            style={activeLink === "/about" ? { color: "#0E87D1" } : {}}
          >
            About Us
          </Link>
          <Link
            className="hover:text-sky-500 hover:underline-offset-8 hover:underline"
            href="/signup"
            onClick={() => handleLinkClick("/signup")}
            style={activeLink === "/signup" ? { color: "#0E87D1" } : {}}
          >
            Sign Up
          </Link>
          <Link
            className="hover:text-sky-500 hover:underline-offset-8 hover:underline"
            href="/login"
            onClick={() => handleLinkClick("/login")}
            style={activeLink === "/login" ? { color: "#0E87D1" } : {}}
          >
            Log In
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;