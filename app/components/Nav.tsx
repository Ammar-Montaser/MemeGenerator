import Image from "next/image";
import React from "react";

function Nav() {
  return (
    <nav className="h-[80px] bg-gradient-to-r from-[#672280] to-[#A626D3] flex flex-row py-1 px-5 justify-between">
      <div className="flex items-center justify-evenly gap-3 ">
        <Image
          src="https://upload.wikimedia.org/wikipedia/en/9/9a/Trollface_non-free.png"
          alt=""
          width={60}
          height={70}
        />
        <h1 className=" font-bold text-[25.75px] tracking-wide">
          Meme Generator
        </h1>
      </div>
      <div className="flex items-center">
        <h2 className=" text-[15px] font-medium">React Course - Project 3</h2>
      </div>
    </nav>
  );
}

export default Nav;
