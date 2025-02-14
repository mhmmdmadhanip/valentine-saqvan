'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [noButtonStyle, setNoButtonStyle] = useState<{ position: "absolute" | "relative"; left: number; top: number }>({ position: "relative", left: 0, top: 0 });

  const moveNoButton = () => {
    const viewportWidth = window.innerWidth - 150; // Ensuring button stays in viewport
    const viewportHeight = window.innerHeight - 150;
    const newX = Math.random() * viewportWidth;
    const newY = Math.random() * viewportHeight;
    setNoButtonStyle({ position: "absolute", left: newX, top: newY });
  };

  return (
    <div className="min-h-screen min-w-screen bg-white flex flex-col justify-center items-center relative overflow-hidden px-6 sm:px-20 py-8 home">
      <div className=" bg-white  w-full sm:max-w-[23rem] h-[18rem] sm:h-[23rem] relative rounded-[1.875rem]">
        <Image src="/landing.gif" alt="" className=" w-full h-full object-cover p-4 rounded-[1.875rem]" fill/>
      </div>

      <div className="text-center mb-4 text-white mt-6 text-[2rem] sm:text-[2.5rem]">
        <p className="font-bold">Hello, Ruth!!!</p>
        <p className="-mt-2 text-[1.7rem] sm:text-[2.5rem]">Will you be my Valentine?</p>
      </div>
      <div className="flex gap-6 sm:gap-10 flex-row mt-4">
        <Link className="px-12 sm:px-20 py-3 bg-[#630B1B] text-white font-bold w-fit rounded-[5.625rem] text-[1.8rem] sm:text-[2.5rem]" href={"/yes"}>Yes</Link>
        <button
          className="px-12 sm:px-20 py-3 bg-white text-[#630B1B] font-bold w-fit rounded-[5.625rem] text-[1.8rem] sm:text-[2.5rem]"
          style={noButtonStyle as React.CSSProperties}
          onMouseEnter={moveNoButton}
          onClick={moveNoButton}
        >
          No
        </button>
      </div>
    </div>
  );
}
