import React from "react";
import img1 from "../../../../images/paradyes_logo.webp";
import Image from "next/image";
import Link from "next/link";

function Advert() {
  return (
    <>
      <main className="flex flex-col justify-start items-start h-80 rounded-xl bg-gray-800 w-[80%] my-10  px-8 pt-20 text-white text-2xl font-bold">
        <div className="flex px-10 items-center text-start">
        Retail ki duniya, online mein chamakao,
        </div>
        <div className="flex px-10 items-center text-start">
        Humse jud kar, apna business badhao!
        </div>
        <Link href={"/Listings"} className="bg-sky-500 text-lg rounded-lg px-4 hover:bg-blue-500 ease-in duration-300 h-auto text-white my-10 mx-10 py-3" >List your shelf</Link>
      </main>
    </>
  );
}

export default Advert;
