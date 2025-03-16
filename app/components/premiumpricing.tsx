
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { FaFile} from 'react-icons/fa';

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
             
<div className="w-[230px] h-[400px]">
<h2 className="absolute top-[10%] left-[22%] transform -translate-x-1/2 -translate-y-[-60%] text-gray-100 text-lg">
  Premium
</h2>
<h3 className="absolute w-[200px]    top-[14%] left-[47%] transform -translate-x-1/2 -translate-y-[-100%] text-gray-400 text-xs">
  Ultimate control and security. For the tech-savvy user.
</h3>
<div className="text-2xl font- mt-2 absolute w-[200px] top-[22%] left-[47%] transform -translate-x-1/2 -translate-y-[-100%] text-gray-100 text-2xl ">
  $3.33<span className="text-xs font-small">/mo</span>
</div>
</div>
<div className="absolute top-[15%] left-[44%] w-[200px] transform -translate-x-1/2 -translate-y-[-60%] text-gray-300  text-xs">
<ul className="flex flex-col gap-1 mt-2 space-y-2 text-sm">
  <li className="flex items-center pl-[8px] gap-2">
   <Image className="" src="/images/acc.svg" alt="Description" width={17} height={17} />
    <span className="text-gray-100 text-xs">1 user account</span>
  </li>
  <li className="flex items-center pl-[8px] gap-2">
    <Image className="" src="/images/prhealth.svg" alt="Description" width={17} height={17} />
    <span className="text-gray-100 text-xs">
      Password Health Features
    </span>
  </li>

  <div className="gap-3 flex justify-center w-full items-center">
    <hr className="border-white-200 w-14" />
    <p className="text-white-200 font-light text-[10px]">B E N E F I T S</p>
    <hr className="w-14 border-white-200" />
  </div>

  {/* <hr className="my-4 border-gray-700" /> */}
  {/* <h4 className="text-sm text-gray-400 font-medium text-xs">b</h4> */}

  <li className="flex items-center pl-[8px] gap-2">
  <Image className="" src="/images/prshare.svg" alt="Description" width={17} height={17} />
    <span className="text-gray-300 text-xs">Password sharing</span>
  </li>

  <li className="flex items-center pl-[8px] gap-2">
    <FaFile className="" />
    <span className="text-gray-300 text-xs">File Storage w/1gb</span>
  </li>

  <li className="flex items-center pl-[8px] gap-2">
  <Image className="" src="/images/stlap.svg" alt="Description" width={17} height={17} />
    <span className="text-gray-300 text-xs">Shareable Authenticator</span>
  </li>

  <li className="flex items-center pl-[8px] gap-2">
  <Image className="" src="/images/prtick.svg" alt="Description" width={17} height={17} />
    <span className="text-gray-300 text-xs">All standard features</span>
  </li>

</ul>


<Link href="/premiumcheckout">
  <div className=" flex justify-center absolute top-[95%] left-[56%] h-[40px] w-[220px] rounded-xl transform -translate-x-1/2 -translate-y-[-60%] bg-customorange text-black  ">
    <button className="text-xs ">Choose this plan</button>
  </div>
</Link>
</div>
</div>
     
  );
};

export default PricingCard2;