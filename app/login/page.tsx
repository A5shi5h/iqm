"use client";

import React from 'react';
import localFont from "next/font/local";
import Link from 'next/link';

const creato = localFont({
  src: "../fonts/Creato.otf",
});

const page = () => {
  return (
    <>
      <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <div className='h-[568px] w-[320px] bg-[#FAEBD7] rounded-md px-[16px] py-[64px] relative'>

          {/* Cross Button */}
          <Link href={"/"}>
              <button className='absolute top-4 right-4 text-2xl font-bold text-gray-700 hover:text-black cursor-pointer'>
                ✕
              </button>
          </Link>

          <div className='text-[48px] font-bold text-center pt-[20%] leading-tight'>
            <h1 className={`${creato.className}`}>Welcome</h1>
            <h1><span className='text-[#107869] pr-2 underline'>back</span>!</h1>
          </div>

          <div className={`pt-[60px] text-sm ${creato.className}`}>
            <label>Email</label><br />
            <input type='email' placeholder='example@domain.com' className='bg-white p-2 rounded-md mt-2 mb-2 w-full border-1' /><br />
            <label>OTP</label><br />
            <input type='text' placeholder='Enter OTP' className='bg-white p-2 rounded-md mt-2 w-full border-1' />
          </div>

          <div className={`text-center mt-6 bg-[#107869] w-fit px-8 py-3 text-white absolute left-[26%] rounded-full ${creato.className}`}>
            <button>Get Started</button>
          </div>

        </div>
      </div>
    </>
  );
};

export default page;
