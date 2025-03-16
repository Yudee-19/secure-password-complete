"use client";
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { FaUser , FaUnlock , FaInfinity , FaBandcamp , FaMobile , FaLock} from 'react-icons/fa';



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
       <div className='w-[230px] h-[400px]'>
       <h2 className="absolute top-[10%] left-[24%] transform -translate-x-1/2 -translate-y-[-60%] text-gray-100  text-xl ">
        Standard
      </h2>
      <h3 className="absolute w-[200px] top-[13%] left-[47%] transform -translate-x-1/2 -translate-y-[-100%] text-gray-400 text-xs">
      Best for personal use . High security at your fingertips.
      </h3>
      <div className="text-4xl font-bold mt-4 absolute w-[200px] top-[18%] left-[47%] transform -translate-x-1/2 -translate-y-[-100%] text-gray-100 text-4xl ">$2.49<span className="text-base font-medium">/mo</span></div>
       </div>

       <div className='absolute top-[13%] left-[45%] w-[200px] transform -translate-x-1/2 -translate-y-[-60%] text-gray-300  text-xs'>
       <ul className="mt-4 space-y-2 text-sm">
        <li className="flex items-center gap-2">
          <span className="text-gray-100 text-xs"></span><FaUser className="" />1 user account
        </li>
        <li className="flex items-center gap-2">
          <span className="text-gray-100 text-xs"></span><FaUnlock className="" />Password generator
        </li>
        <hr className="my-4 border-gray-700" />
        {/* <h4 className="text-sm text-gray-400 font-medium text-xs">b</h4> */}
        <li className="flex items-center gap-2">
          <span className="text-gray-100 text-xs"></span><FaInfinity className="" />Unlimited passwords
        </li>
        <li className="flex items-center gap-2">
          <span className="text-gray-300 text-xs"></span><FaBandcamp className="" />Save and autofill pass
        </li>
        <li className="flex items-center gap-2">
          <span className="text-gray-100 text-xs"></span><FaMobile className="" />Unlimited devices
        </li>
        <li className="flex items-center gap-2">
          <span className="text-gray-100 text-xs"></span><FaLock className="" />SecurePasswords Auth
        </li>
      </ul>
      <Link href="/standardcheckout">
      <div className='flex justify-center absolute top-[95%] left-[56%] h-[50px] w-[220px] rounded-xl transform -translate-x-1/2 -translate-y-[-60%] bg-customgreen text-black  '>
        <button  className='text-xs '>Choose this plan</button>
      </div></Link>
       </div>
  </div>
</div>
  );
};

export default PricingCard;


