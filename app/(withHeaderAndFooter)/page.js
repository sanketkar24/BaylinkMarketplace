"use client";
import Image from "next/image";
// import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../components/navigation/navbar";
import SearchBar from "../components/navigation/searchBar";
import Text1 from "../components/navigation/heropageText/index.js";
import OfferingCards from "../components/navigation/offerings/index.js"; // TODO: Fix these paths 
import Explore from "../components/navigation/explore/index.js"
import Brands from "../components/navigation/ourBrands/index.js"
import Advert from "../components/navigation/homeListingAdd/index.js"
import Footer from "../components/footer/index"


const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white text-black">
      <div className="pb-16 mb- text-black w-full">
        {/* <Navbar /> */}
      </div>
      <div className=" bg-[url('../images/heropage_image.jpeg')] bg-no-repeat bg-cover flex flex-col w-full items-center my-0 text-2xl">
        <Text1 />
        <SearchBar />
      </div>
      <div className=" flex flex-col items-center w-full">
        <OfferingCards />
      </div>
      <div className=" flex flex-col items-center w-full">
        <Explore />
      </div>
      <div className=" flex flex-col items-center w-full">
        <Brands />
      </div>
      <div className=" flex flex-col items-center w-full">
        <Advert />
      </div>
      <div className=" flex flex-col items-center w-full">
        {/* <Footer /> */}
      </div>
    </main>
  );
}
