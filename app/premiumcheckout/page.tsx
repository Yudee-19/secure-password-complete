import React from "react";
import DropdownMenu from "@/app/components/userid";
import Image from "next/image";
const logoPic: string = "/images/logopass.svg";
import Pagecomponent from "@/app/components/pagecomponent1";
import PremiumSecondcomponent from "@/app/components/premiumsecondcomponent";





export default function Home() {
  return (
    <div className="bg-[#1A1A1A]">
      <div>
        {/* navbar */}
        <nav>
          <nav className="bg-[#1A1A1A] h-[10vh]  p-4  shadow-md px-4 py-3 flex items-center justify-between">
            <Image
              src={logoPic}
              width={256.93}
              height={32}
              alt="Standard Plan Image"
              className="w-[256.93px] h-[32px] mt-[5px] ml-[42px] flex gap-[13px]"
            />
            <div className="text-2xl text-gray-100">
              <DropdownMenu />
            </div>
          </nav>
        </nav>
      </div>
      <div>
        <div>
          <div>
            <h2 className="absolute w-[234px] h-[22px] text-[#FFFFFF] top-[115px] left-[52px] font-inter font-semibold text-[18px] leading-[21.78px] tracking-[0%]">
              Enter your payment details
            </h2>
          </div>
          <div>
            <div className="pt-20 pl-11">
              <Pagecomponent />
            </div>
          </div>
          <div>
          <h2 className="absolute w-[234px] h-[22px] text-[#FFFFFF] top-[115px] left-[820px] font-inter font-semibold text-[18px] leading-[21.78px] tracking-[0%]">
          Checkout Summary
            </h2>

          </div>
          <div>
          <div className="top-[100px]">
            {/* pagecomponent2 */}
            <PremiumSecondcomponent />
          </div>

          </div>

          
        
          </div>
        </div>
        <div></div>
      </div>
 
  );
}