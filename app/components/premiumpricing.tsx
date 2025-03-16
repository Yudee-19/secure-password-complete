
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { FaUser , FaHeartbeat  , FaShare , FaFile , FaBandcamp , FaCheck} from 'react-icons/fa';

const profilePic1: string = "/images/Premium.png"; // Path relative to the public folder

const PricingCard2: React.FC = () => {
  return (
    
          <div className="relative w-[260px] h-[450px] "> {/* Container with relative positioning */}
            <Image
              src={profilePic1} // Reference the image correctly
              width={230} // Set the width of the image
              height={230} // Set the height of the image
              alt="Standard Plan Image" // Provide an alt text for accessibility
              className="object-cover w-full h-full" // Ensure the image fills the container
            />
             <div className='w-[230px] h-[400px]'>
             <h2 className="absolute top-[10%] left-[24%] transform -translate-x-1/2 -translate-y-[-60%] text-gray-100  text-xl ">
              Premium
            </h2>
            <h3 className="absolute w-[200px] top-[13%] left-[47%] transform -translate-x-1/2 -translate-y-[-100%] text-gray-400 text-xs">
            Ultimate control and security . For the tech-savvy user.
            </h3>
            <div className="text-4xl font-bold mt-4 absolute w-[200px] top-[18%] left-[47%] transform -translate-x-1/2 -translate-y-[-100%] text-gray-100 text-4xl ">$3.33<span className="text-base font-medium">/mo</span></div>
             </div>
      
             <div className='absolute top-[13%] left-[45%] w-[200px] transform -translate-x-1/2 -translate-y-[-60%] text-gray-300  text-xs'>
             <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-gray-100 text-xs"></span><FaUser className="" />1 user account
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gray-100 text-xs"></span><FaHeartbeat className="" />Password Health Features
              </li>
              <hr className="my-4 border-gray-700" />
              {/* <h4 className="text-sm text-gray-400 font-medium text-xs">b</h4> */}
              <li className="flex items-center gap-2">
                <span className="text-gray-100 text-xs"></span>< FaShare className="" />Password sharing
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gray-300 text-xs"></span><FaFile className="" />File Storage w/1gb
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gray-100 text-xs"></span><FaBandcamp className="" />Shareable Authenticator
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gray-100 text-xs"></span><FaCheck className="" />all standard feature
              </li>
            </ul>
            <Link href="/premiumcheckout">
            <div className='flex justify-center absolute top-[95%] left-[56%] h-[50px] w-[220px] rounded-xl transform -translate-x-1/2 -translate-y-[-60%] bg-customorange text-black  '>
              <button className='text-xs '>Choose this plan</button>
            </div></Link>
             </div>
        </div>
     
  );
};

export default PricingCard2;