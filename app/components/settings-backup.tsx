"use client";
export default function Backupsettings(){
    return(
        <div className="w-[984px] bg-[#151515] h-[335px] top-[265px] left-[401px] rounded-[12px]">
             <h2 className="w-[200px] pl-5 pt-5 h-[29px] top-[297px] left-[433px] font-inter font-normal text-[24px] leading-[29.05px]">
          Export
        </h2>
        <div className="pl-5 pt-10">
        <div className="flex justify-between items-center w-[919px] h-[69px] top-[342px] left-[433px] border-[#5A5A5A] border-[1.5px] rounded-md">
            {/* Text Div */}
            <div className="pl-5">
              <label className="font-medium text-[13px] leading-[15.73px] text-[#A0A0A0]">
                Export from 
              </label>
            </div>

            {/* Select Button Div */}
            <div className="flex items-center pl-10 rounded-xl p-4">
              <select className="w-[220px] h-[44px] top-[12px] left-[6px] rounded  pt-[10px] pr-[16px] pb-[10px] pl-[24px]  bg-[#252525] text-[#EFEFEF]">
                <option selected>My Vault</option>
                <option></option>
              </select>
            </div>
          </div>
        </div>
        <div className="pl-5 pt-6">
        <div className="flex justify-between items-center w-[919px] h-[69px] top-[342px] left-[433px] border-[#5A5A5A] border-[1.5px] rounded-md">
            {/* Text Div */}
            <div className="pl-5">
              <label className="font-medium text-[13px] leading-[15.73px] text-[#A0A0A0]">
                choose a file format
              </label>
            </div>

            {/* Select Button Div */}
            <div className="flex items-center pl-10 rounded-xl p-4">
              <select className="w-[220px] h-[44px] top-[12px] left-[6px] rounded  pt-[10px] pr-[16px] pb-[10px] pl-[24px]  bg-[#252525] text-[#EFEFEF]">
                <option selected>.json</option>
                <option>.json(Encrypted)</option>
                <option>.csv</option>
                <option>xml</option>
              </select>
            </div>
          </div>
        </div>
        <div className="pt-6 flex justify-end pr-12">
        <button className="w-[151px] h-[40px] bg-green-500 text-black font-semibold rounded-md px-8 py-2 hover:bg-green-600 transition">
      Export now
    </button>
        </div>
        </div>
    )
}