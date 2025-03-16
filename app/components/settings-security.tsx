"use client";

import { useState } from "react";

export default function SecuritySettings() {
  const [passwordAlerts, setPasswordAlerts] = useState(true);
  const [countryRestriction, setCountryRestriction] = useState(true);
  const [torRestriction, setTorRestriction] = useState(true);
  const [activityLogs, setActivityLogs] = useState(true);
  const [errorReporting, setErrorReporting] = useState(true);
  const [appAttribution, setAppAttribution] = useState(true);

  return (
    <div className=" bg-[#191919] p-6  rounded-lg flex-grow text-white min-h-screen w-[70vw] mx-auto">
      <div className="pb-7">
        <div className="w-[984px] h-[230px] top-[265px] left-[401px] rounded-l gap-0 opacity-100 bg-[#151515] p-8">
          {/* Alerts Heading */}
          <div className="mb-8">
            <h2 className="font-Inter font-normal text-[24px] leading-[29.05px] text-[#EFEFEF]">
              Alerts
            </h2>
          </div>

          {/* Password Alerts Container */}
          <div className="flex justify-between items-center w-[919px] h-[69px]  rounded-[9px] border border-[1.5px] border-[#5A5A5A] p-4 ml-[12px] ">
            <span className="font-medium text-[13px] leading-[15.73px] text-[#A0A0A0]">
              Password Alerts
            </span>
            <button
              onClick={() => setPasswordAlerts(!passwordAlerts)}
              className={`px-4 py-2 rounded-lg ${
                passwordAlerts ? "text-green-500" : "text-red-500"
              }`}
            >
              {passwordAlerts
                ? "Disable Password Alerts"
                : "Enable Password Alerts"}
            </button>
          </div>

          {/* Second Container */}
          

              {/* Checkbox Elements */}
              
              {/* <label className="flex items-center gap-2">
          <input type="checkbox" className="w-4 h-4" /> Access a Form Fill
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" className="w-4 h-4" /> Log into a site
        </label> */}
            
          
        </div>
      </div>

      {/* Primary Security Section */}
      <div className="mb-6 p-4 space-y-5 bg-[#151515] rounded-lg  w-[984px] h-[352px] top-[703px] left-[401px] rounded-[12px] ">
      <div className="pt-4 pl-4">
            <h2 className="font-Inter font-normal text-[24px] leading-[29.05px] text-[#EFEFEF]">
              Primary Security
            </h2>
          </div>
        <div className="flex justify-between items-center w-[919px] h-[69px]  rounded-[9px] border border-[1.5px] border-[#5A5A5A] p-4 ml-[12px] ">
          <span className="text-[#A0A0A0] h-[16px] w-[195px] text-[13px]">Security Email</span>
          <button className="text-green-400">Send test email</button>
        </div>
        <div className="flex justify-between items-center w-[919px] h-[69px]  rounded-[9px] border border-[1.5px] border-[#5A5A5A] p-4 ml-[12px]">
          <span className="text-[#A0A0A0] h-[16px] w-[195px] text-[13px]">Country Restriction</span>
         <div className="w-[303px] h-[24px] top-[22px] left-[145px] mr-40 text-[#EFEFEF] font-Inter font-medium text-[16px] leading-[24px] tracking-[-0.5%]">
          <span className="h-[48px] w-[545px] text-[15px] font-medium">Only allow login from selected countries</span>
         </div>
          <input
            type="checkbox"
            checked={countryRestriction}
            onChange={() => setCountryRestriction(!countryRestriction)}
          />
        </div>
        <div className="flex justify-between items-center w-[919px] h-[69px]  rounded-[9px] border border-[1.5px] border-[#5A5A5A] p-4 ml-[12px]">
          <span className="text-[#A0A0A0] h-[16px] w-[195px] text-[13px]">Tor Networks</span>
          <div className="w-[303px] h-[24px] top-[22px] left-[145px] mr-40  text-[#EFEFEF] font-Inter font-medium text-[16px] leading-[24px] tracking-[-0.5%]">
          <span className="h-[48px] w-[545px] text-[15px] font-medium">Prohibit logins from Tor networks</span>
         </div>
          <input
            type="checkbox"
            checked={torRestriction}
            onChange={() => setTorRestriction(!torRestriction)}
          />
        </div>
      </div>

      {/* Privacy Section */}
      <div className="w-[984px] p-4 bg-[#151515] space-y-5 rounded-lg">
        <h2 className="text-lg mb-4">Privacy</h2>
        <div className="flex justify-between items-center w-[919px] h-[69px]  rounded-[9px] border border-[1.5px] border-[#5A5A5A] p-4 ml-[12px]">
          <span className="text-[#A0A0A0] h-[16px] w-[195px] text-[13px]">Activity Logs</span>
          <div className="w-[303px] h-[24px] top-[22px] left-[145px] mr-40  text-[#EFEFEF] font-Inter font-medium text-[16px] leading-[24px] tracking-[-0.5%]">
          <span className="h-[48px] w-[545px] text-[15px] font-medium">Keep track of login and form fill history</span>
         </div>
          <input
            type="checkbox"
            checked={activityLogs}
            onChange={() => setActivityLogs(!activityLogs)}
          />
        </div>
        <div className="flex justify-between items-center w-[919px] h-[69px]  rounded-[9px] border border-[1.5px] border-[#5A5A5A] p-4 ml-[12px]">
          <span className="text-[#A0A0A0] h-[16px] w-[195px] text-[13px] ">Help improve SecurePasswords</span>
          <div className="w-[550px] h-[24px] top-[22px] left-[145px]  mr-30 text-[#EFEFEF] font-Inter font-medium text-[16px] leading-[24px] tracking-[-0.5%]">
          <span className="h-[48px] w-[545px] text-[15px] font-medium">Send anonymous error reporting and interaction data to improve securepass</span>
         </div>
          <input
            type="checkbox"
            checked={errorReporting}
            onChange={() => setErrorReporting(!errorReporting)}
          />
        </div>
        <div className="flex justify-between items-center w-[919px] h-[69px]  rounded-[9px] border border-[1.5px] border-[#5A5A5A] p-4 ml-[12px]">
          <span className="text-[#A0A0A0] h-[16px] w-[195px] text-[13px] font-medium">Enable app attribution</span>
          <div className="w-[500px] h-[24px] top-[12px] left-[145px] mr-30 mb-6   text-[#EFEFEF] font-Inter font-medium text-[16px] leading-[24px] tracking-[-0.5%]">
          <span className="h-[48px] w-[545px] text-[15px] font-medium">Send anonymous data about your SecurePasswords journey to help us improve your experience.</span>
         </div>
          <input
            type="checkbox"
            checked={appAttribution}
            onChange={() => setAppAttribution(!appAttribution)}
          />
        </div>
      </div>
    </div>
  );
}
