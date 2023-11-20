import React from "react";
import img1 from "../../../../images/paradyes_logo.webp";
import Image from "next/image";
import Link from "next/link";

function Advert() {
  return (
    <>
      <main className="flex flex-col justify-start items-start h-80 rounded-xl bg-[url('../images/secondaryFooter.jpeg')] w-[80%] my-10  px-8 pt-20 text-white text-2xl font-bold">
        <h1 className="flex px-10 items-center text-start">
        Retail ki duniya, online mein chamakao,
        </h1>
        <h1 className="flex px-10 items-center text-start">
        Humse jud kar, apna business badhao!
        </h1>
        <Link href={"/Listings"} className="bg-[#22B2E6] text-lg rounded-lg px-4 hover:bg-[#1DA1F2] ease-in duration-300 h-auto text-white my-10 mx-10 py-3" >List your shelf</Link>
      </main>
    </>
  );
}

export default Advert;
