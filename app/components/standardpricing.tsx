"use client";
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';




const profilePic: string = "/images/Standard.png"; // Path relative to the public folder

const PricingCard: React.FC = () => {
  
  return (
<div>
    <div className="relative w-[260px] h-[450px] "> {/* Container with relative positioning */}
      <Image
        src={profilePic} // Reference the image correctly
        width={230} // Set the width of the image
        height={230} // Set the height of the image
        alt="Standard Plan Image" // Provide an alt text for accessibility
        className="object-cover w-full h-full" // Ensure the image fills the container
      />
       


<div className="w-[230px] h-[560px]">
<h2 className="absolute top-[10%] left-[22%] transform -translate-x-1/2 -translate-y-[-60%] text-gray-100 text-lg">
  Standard
</h2>
<h3 className="absolute w-[200px]    top-[14%] left-[47%] transform -translate-x-1/2 -translate-y-[-100%] text-gray-400 text-xs">
  Best for personal use . High security at your fingertips.
</h3>
<div className="text-2xl font- mt-2 absolute w-[200px] top-[22%] left-[47%] transform -translate-x-1/2 -translate-y-[-100%] text-gray-100 text-2xl ">
  $2.49<span className="text-xs font-small">/mo</span>
</div>
</div>
<div className="absolute top-[15%] left-[44%] w-[200px] transform -translate-x-1/2 -translate-y-[-60%] text-gray-300  text-xs">
<ul className="flex flex-col gap-1 mt-2 space-y-2 text-sm">
  <li className="flex items-center pl-[8px] gap-2">
    <Image className="" src="/images/acc.svg" alt="Description" width={17} height={17} />
    <span className="text-gray-100 text-xs">1 user account</span>
  </li>
  
  <li className="flex items-center pl-[8px] gap-2">
  <Image className="" src="/images/stpass.svg" alt="Description" width={17} height={17} />
    <span className="text-gray-100 text-xs">Password generator</span>
  </li>

  <div className="gap-3 flex justify-center w-full items-center">
    <hr className="border-white-200 w-12" />
    <p className="text-white-200 font-light text-[10px]">B E N E F I T S</p>
    <hr className="w-14 border-white-200" />
  </div>
  {/* <h4 className="text-sm text-gray-400 font-medium text-xs">b</h4> */}

  <li className="flex items-center pl-[8px] gap-2">
  <Image className="" src="/images/stinfinity.png" alt="Description" width={17} height={17} />
    <span className="text-gray-300 text-xs">Unlimited passwords</span>
  </li>
  
  <li className="flex items-center pl-[8px] gap-2">
  <Image className="" src="/images/stlock.svg" alt="Description" width={17} height={17} />
    <span className="text-gray-300 text-xs">Save and autofill pass</span>
  </li>

  <li className="flex items-center pl-[8px] gap-2">
  <Image className="" src="/images/stlap.svg" alt="Description" width={17} height={17} />
    <span className="text-gray-300 text-xs">Unlimited devices</span>
  </li>

  <li className="flex items-center pl-[8px] gap-2">
  <Image className="" src="/images/stkey.svg" alt="Description" width={17} height={17} />
    <span className="text-gray-300 text-xs">SecurePasswords Auth</span>
  </li>
  
</ul>
<Link href="/standardcheckout">
  <div className=" flex justify-center absolute top-[95%] left-[56%] h-[40px] w-[220px] rounded-xl transform -translate-x-1/2 -translate-y-[-60%] bg-customgreen text-black  ">
    <button className="text-xs ">Choose this plan</button>
  </div>
</Link>
</div>
</div>
</div>
  );
};

export default PricingCard;


