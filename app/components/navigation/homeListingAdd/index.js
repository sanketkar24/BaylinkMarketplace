import React from "react";
import Link from "next/link";

function Advert() {
  return (
    <>
      <main className="flex flex-col justify-cemter items-start bg-[url('../images/secondaryFooter.jpeg')] w-full my-10  px-8 pt-20 text-white text-2xl font-bold">
        <h1 className="flex px-4 items-center text-start">
          Retail ki duniya, online mein chamakao,
        </h1>
        <h1 className="flex px-4 items-center text-start">
          Humse jud kar, apna business badhao!
        </h1>
        <Link href={"/Listings"} className="bg-[#22B2E6] text-lg rounded-lg px-4 hover:bg-[#1DA1F2] ease-in duration-300 h-auto text-white my-10 mx-4 py-3" >List your shelf</Link>
      </main>
    </>
  );
}

export default Advert;
