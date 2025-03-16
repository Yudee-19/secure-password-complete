"use client";
import Image from "next/image";


export default function SettingsTrustedDevicePage() {
  return (
    <div className=" bg-[#191919]">
      <div className=" p-6 rounded-lg  bg-[#191919]  w-[100%] mx-auto">
        <h2 className="text-2xl font-light mb-4 text-gray-300">
          Trusted Devices
        </h2>
        <p className="w-[965px] h-[48px] top-[310px] left-[402px] font-inter font-medium text-[16px] leading-[24px] tracking-[-0.5%] text-[#A0A0A0]">
          Here are the devices you are currently logged in to your
          SecurePasswords. If you see a device which you can’t recognise make
          sure to log out.{" "}
        </p>
        <h2 className="mt-8 mb-3 w-[127px] h-[24px] top-[396px] left-[402px] font-inter font-semibold text-[13px] leading-[24px] tracking-[8%] text-[#EFEFEF]">
          CURRENT DEVICES
        </h2>

        <div className="flex items-center h-16 border border-[#2ED370] w-[964px] h-fit top-[432px] left-[402px] rounded-xl border-[1.5px] p-4 ">
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            
            <Image className="w-fit h-fit" src="/images/Desktop.png" alt="Description" width={500} height={500} />
            <div className=""></div>
          </div>

          {/* OS and Browser Section */}
          <div className="flex items-center gap-20 pl-1">
            <h2 className="w-[300px] h-[24px] font-inter  font-medium text-[16px] leading-[24px] tracking-tight">
              Mac OS X <span className="text-gray-300">•</span> Chrome
            </h2>
            <div className="flex justify-end items-center gap-20 w-full ">
    <h2 className="text-sm font-medium text-gray-300">Berlin, Germany</h2>
    <h2 className="text-sm font-medium text-gray-300">January 30, 2023 | 12:56 PM</h2>
  </div>
          </div>
        </div>

       <div>
       <h2 className="mt-8 mb-3 w-[127px] h-[24px] top-[396px] left-[402px] font-inter font-semibold text-[13px] leading-[24px] tracking-[8%] text-[#EFEFEF]">
          OTHER DEVICES
        </h2>

        <div className="flex items-center h-16 w-[964px] h-fit top-[432px] left-[402px]  p-4 ">
          {/* Logo Section */}
          <div className="flex items-center gap-4">
          
            <Image className="w-fit h-fit" src="/images/Desktop1.svg" alt="Description" width={100} height={100}  />
            <div className=""></div>
          </div>

          {/* OS and Browser Section */}
          <div className="flex items-center gap-20 pl-1">
            <h2 className="w-[300px] h-[24px] font-inter  font-medium text-[16px] leading-[24px] tracking-tight">
              Mac OS X <span className="text-gray-300">•</span> Chrome
            </h2>
            <div className="flex justify-end items-center gap-20 w-full ">
    <h2 className="text-sm font-medium text-gray-300">Berlin, Germany</h2>
    <h2 className="text-sm font-medium text-gray-300">January 30, 2023 | 12:56 PM</h2>
  </div>
          </div>
        </div>

        <div className="flex items-center h-16 w-[964px] h-fit top-[432px] left-[402px]  p-4 ">
          {/* Logo Section */}
          <div className="flex items-center gap-4">
          <Image className="w-fit h-fit" src="/images/Phone.svg" alt="Description" width={100} height={100} />
            <div className=""></div>
          </div>

          {/* OS and Browser Section */}
          <div className="flex items-center gap-20 pl-1">
            <h2 className="w-[300px] h-[24px] font-inter  font-medium text-[16px] leading-[24px] tracking-tight">
            IOS <span className="text-gray-300">•</span> Apple iPhone 13 Pro
            </h2>
            <div className="flex justify-end items-center gap-20 w-full ">
    <h2 className="text-sm font-medium text-gray-300">Berlin, Germany</h2>
    <h2 className="text-sm font-medium text-gray-300">January 30, 2023 | 12:56 PM</h2>
  </div>
          </div>
        </div>


       </div>

        

       
      </div>
    </div>
  );
}
