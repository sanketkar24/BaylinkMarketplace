// create an signup page
"use client";
import React from "react";
import Logo from "../../../images/logo_white.png";
import SideImage from "../../../images/login_img.png";
import Brand_side_img from "../../../images/brand_side_img.png";
import BlueLogo from "../../../images/logo_blue.png";
import Image from "next/image";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import {SiFacebook} from "react-icons/si";
import './page.css'
import Link from "next/link";

const Login = (props) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div
      className="flex justify-center items-center h-screen w-screen"
      style={{
        fontFamily: "General Sans Regular",
        height: 'fit-content'
      }}
    >
      <div className="flex w-full h-full  bg-white">
        <div className="hidden tablet:block md:block flex-1 relative h-screen">
          <div className="relative h-full">
            <Image
              src={props.check == "Brand" ? Brand_side_img : SideImage}
              alt="Logo"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute top-0 left-0 p-4">
              <Image
                src={props.check == "Brand" ? Logo : BlueLogo}
                alt="Logo"
              />
            </div>
            <div className="absolute bottom-10 left-10 p-4">
              <div className="text-gray-100 font-bold text-4xl">
                Explore your Favourite
              </div>
              <div className="md:flex">
                {props.check == "Brand" ? (
                  <div className="text-gray-100 font-semibold text-4xl">
                    Brands on
                  </div>
                ) : (
                  <div className="text-white font-semibold text-4xl">
                    Stores on
                  </div>
                )}
                <div className="text-primary-p-300 font-bold text-4xl blue-brand">
                  &nbsp;Baylink!
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center p-8">
          <div className="mt-1/2 w-2/3 ">
            <div className="text-primary-p-500 font-bold text-lg blue-text">
              LOGIN
            </div>
            <div className="text-black font-bold text-4xl my-5">
              Welcome Back!
            </div>
            <div className="mt-4">
              <div className="text-gray-700 font-normal text-base">
                Email or mobile number
              </div>
              <input
                type="text"
                className="border border-gray-300 p-2 rounded-lg w-full mt-2"
                placeholder="Enter your Email or mobile number"
              />
            </div>
            <div className="mt-4">
              <div className="text-secondary-2-s-300 font-general-sans text-base font-normal leading-6">
                Password
              </div>
              <input
                type="password"
                className="border border-gray-300 p-2 rounded-lg w-full mt-2"
                placeholder="Enter your Password"
              />
            </div>
            <div className="flex justify-between w-full mt-2">
              <div className="w-full text-right text-primary-p-500 font-general-sans text-sm font-normal leading-6">
                <a href="#" className="hover:underline text-blue-500">
                  Forgot Password?
                </a>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <button
                className="blue-background text-white p-2 rounded-lg w-full border-2 border-blue-300 hover:bg-blue-700 hover:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300"
               
              >
                Sign In
              </button>
            </div>
            <div
              className="flex justify-center mt-4"
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <hr className="horizontal-rular" />
              <div className="mx-2 ">Or</div>
              <hr className="horizontal-rular" />
            </div>
            <div className="flex w-full mt-4">
              <button className="mr-10 border border-gray-300 p-2 rounded-lg w-full items-center justify-center">
                <FcGoogle size={24} className="inline-block mr-2" />
                Google
              </button>

              <button className="border border-gray-300 p-2 rounded-lg w-full items-center justify-center">
                <SiFacebook size={24} className="inline-block mr-2" />
                Facebook
              </button>
            </div>
            <div className="flex w-full justify-center items-center mt-4">
              <div className="flex justify-center mt-4 text-secondary-2-s-200 font-general-sans text-base font-normal leading-6 text-center">
                <div>Don't have an account?&nbsp;</div>
              </div>
              <Link className="flex justify-center items-center mt-4 text-primary-p-500 font-general-sans text-sm font-medium leading-6 blue-text" href='/signup'>
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
