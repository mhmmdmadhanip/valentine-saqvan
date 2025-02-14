import React from 'react'
import Image from "next/image";

const page = () => {
  return (
    <div className="min-h-screen min-w-screen bg-white flex sm:flex-row flex-col justify-center items-center relative overflow-hidden gap-4 sm:gap-20 px-6 sm:px-12 py-8 home">
        <div className=" bg-[#46000D]  w-full sm:max-w-[23rem] h-[23rem] relative rounded-[1.875rem]">
            <Image src="/yes.gif" alt="" className=" w-full h-full object-cover p-4 rounded-[1.875rem]" fill/>
        </div>
        <div className="w-full sm:max-w-[30rem] h-[80vh] relative rounded-[1.875rem]">
            <Image src="/letter.png" alt="" className=" w-full h-full object-contain" fill/>
        </div>
    </div>
  )
}

export default page