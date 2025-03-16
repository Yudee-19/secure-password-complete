"use client";

export default function SettingsPage() {
  return (
    <div className="space-y-6 bg-[#151515]">
      {/* Account Info Section */}
      <div className="w-[984px] bg-[#151515] h-[352px] top-[265px] left-[401px] rounded-[12px] ">
        <h2 className="w-[200px] pl-6 pt-6 h-[29px] top-[297px] left-[433px] font-inter font-normal text-[24px] leading-[29.05px]">
          Account Info
        </h2>
        <div className="space-y-5 pt-10 pl-6">
          <div className="pr-5 pl-5 flex justify-between items-center w-[919px] h-[69px] top-[342px] left-[433px] border-[#5A5A5A] border-[1.5px] rounded-md ">
            {/* <span className="flex justify-between gap-5 w-screen h-[16px] pl-5 top-[26px] left-[24px] text-[#A0A0A0]"> */}
            <div className="flex gap-28 font-medium">
              <div className="text-[13px] leading-[15.73px] text-[#A0A0A0]">
                Email
              </div>
              <div className="text-[16px] leading-[15.73px]">
                adamevans@gmail.com
              </div>
            </div>
            <button className=" text-green-400  ">Change Email</button>
            {/* </span> */}
            {/* <span className="w-[181px] h-[24px] top-[21px] left-[160px] font-inter font-medium text-[16px] leading-[24px] tracking-[-0.5%] text-[#EFEFEF]">
              adamevans@gmail.com
            </span> */}
          </div>

          <div className="pr-5 pl-5 flex justify-between items-center w-[919px] h-[69px] top-[342px] left-[433px] border-[#5A5A5A] border-[1.5px] rounded-md ">
            <div className="flex gap-16 font-medium">
              <div className="text-[13px] leading-[15.73px] text-[#A0A0A0]">
                Account type
              </div>
              <div className="text-[16px] leading-[15.73px]">
              Secure Passwords - Premium use
              </div>
            </div>
            <button className=" text-green-400  ">Upgrade</button>
          </div>
          <div className="flex justify-between items-center w-[919px] h-[69px] top-[342px] left-[433px] border-[#5A5A5A] border-[1.5px] rounded-md">
            {/* Text Div */}
            <div className="pl-5">
              <label className="font-medium text-[13px] leading-[15.73px] text-[#A0A0A0]">
                Choose account language
              </label>
            </div>

            {/* Select Button Div */}
            <div className="flex item pl-10 rounded-xl p-4">
              <select className="w-[220px] h-[44px] top-[12px] left-[6px] rounded  pt-[10px] pr-[16px] pb-[10px] pl-[20px]  bg-[#252525] text-[#EFEFEF]">
                <option selected>English</option>
                <option>Mandarin(Chinese)</option>
                <option>Hindi</option>
                <option>Spanish</option>
                <option>French</option>

              </select>
            </div>
          </div>
        </div>
      </div>
      {/* Master Password Section */}
      <div className="w-[984px] bg-[#151515]  h-[178px] top-[265px] left-[401px] rounded-[12px]">
        <h2 className="w-[400px] pl-6 pt-6 h-[29px] top-[297px] left-[433px] font-inter font-normal text-[24px] leading-[29.05px] ">
          Master Password
        </h2>

        <div className="space-y-5 pt-10 pl-6">
        <div className="pr-5 pl-5 flex justify-between items-center w-[919px] h-[69px] top-[342px] left-[433px] border-[#5A5A5A] border-[1.5px] rounded-md ">
            {/* <span className="flex justify-between gap-5 w-screen h-[16px] pl-5 top-[26px] left-[24px] text-[#A0A0A0]"> */}
            <div className="flex gap-10 font-medium">
              <div className="text-[13px] leading-[15.73px] text-[#A0A0A0]">
                Master Password
              </div>
              <div className="text-[16px] leading-[15.73px]">
              Last changed on February 26th, 2022 at 03:07 PM.
              </div>
            </div>
            <button className=" text-green-400  ">Change Master Password</button>
            {/* </span> */}
            {/* <span className="w-[181px] h-[24px] top-[21px] left-[160px] font-inter font-medium text-[16px] leading-[24px] tracking-[-0.5%] text-[#EFEFEF]">
              adamevans@gmail.com
            </span> */}
          </div>
        </div>
        
      </div>
      {/* SMS Account Recovery Section */}
      <div className="w-[984px] bg-[#151515]  h-[178px] top-[265px] left-[401px] rounded-[12px]">
        <h2 className="w-[400px] pl-6 pt-6 h-[29px] top-[297px] left-[433px] font-inter font-normal text-[24px] leading-[29.05px] ">
          SMS account recovery
        </h2>
        <div className="space-y-5 pt-10 pl-6">
        <div className="pr-5 pl-5 flex justify-between items-center w-[919px] h-[69px] top-[342px] left-[433px] border-[#5A5A5A] border-[1.5px] rounded-md ">
            {/* <span className="flex justify-between gap-5 w-screen h-[16px] pl-5 top-[26px] left-[24px] text-[#A0A0A0]"> */}
            <div className="flex gap-24 font-medium">
              <div className="text-[13px] leading-[15.73px] text-[#A0A0A0]">
              Phone
              </div>
              <div className="pl-3 text-[16px] leading-[15.73px]">
              +1 393 333 393
              </div>
            </div>
            <button className=" text-green-400  ">Change Phone number</button>
            {/* </span> */}
            {/* <span className="w-[181px] h-[24px] top-[21px] left-[160px] font-inter font-medium text-[16px] leading-[24px] tracking-[-0.5%] text-[#EFEFEF]">
              adamevans@gmail.com
            </span> */}
          </div>
        </div>
      </div>
         
    </div>
  );
}
