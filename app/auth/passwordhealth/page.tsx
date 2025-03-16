import Squircle from "@/app/icons/Squircle";
import DangerIcon from "@/app/icons/DangerIcon";
import React from "react";
import WrenchIcon from "@/app/icons/WrenchIcon";
import RefreshIcon2 from "@/app/icons/RefreshIcon2";
import Clock from "@/app/icons/Clock";
import WarningShield from "@/app/icons/WarningShield";
import DropDownIcon from "@/app/icons/DropDownIcon";
import Clock2 from "@/app/icons/Clock2";
import KeyIcon from "@/app/icons/keyIcon";
interface RiskPassword {
    id: number;
    title: string;
    risk: string;
}

const Page = () => {
    const riskPasswordsArray: RiskPassword[] = [
        {
            id: 1,
            title: "Telegram",
            risk: "old",
        },
        {
            id: 2,
            title: "Telegram",
            risk: "weak",
        },
        {
            id: 3,
            title: "Netflix",
            risk: "weak",
        },
        {
            id: 4,
            title: "Youtube",
            risk: "weak",
        },
    ];
    return (
        <div className=" flex flex-col gap-6 mt-[82px] ml-[335px] p-[42px] ">
            {/* first section */}
            <div className="h-[324px] w-full bg-[#121010] rounded-lg p-8">
                <div className="text-textgray-200 text-xs font-bold font-sans uppercase tracking-wide mb-6">
                    Password Health
                </div>
                <div className="flex gap-[135px]">
                    <div className="w-[184px] h-[184px] rounded-full border-[10px] border-[#2ED370] flex flex-col items-center justify-center">
                        <div className="text-[#2ED370] text-6xl font-extrabold font-inter">
                            100
                        </div>
                        <div className="text-textgray-200 text-base font-normal font-inter leading-normal">
                            High safety
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        {/* weak passwords */}
                        <div className="w-72 h-20 relative bg-customDark-100 rounded-lg  flex gap-3 items-center pl-4 py-4">
                            <div className=" h-12 w-12 rounded-full bg-[#F14444] flex items-center justify-center">
                                <span>
                                    <WarningShield />
                                </span>
                            </div>
                            <div className="flex flex-col  justify-between gap-1 ">
                                <span className="text-xs font-bold text-[#CCCCCC] font-inter  uppercase tracking-wide">
                                    WEAK PASSWORDS
                                </span>
                                <span className="flex items-center justify-between">
                                    <p className="text-[#EEEEEE] text-lg font-semibold font-inter">
                                        0
                                    </p>
                                    <span className=" absolute right-6 bottom-4 pt-4 transform -rotate-90">
                                        <DropDownIcon color="#EEEEEE" />
                                    </span>
                                </span>
                            </div>
                        </div>
                        {/* reused passwords */}
                        <div className="w-72 h-20 relative bg-customDark-100 rounded-lg  flex gap-3 items-center pl-4 py-4">
                            <div className=" h-12 w-12 rounded-full bg-[#F18D44] flex items-center justify-center">
                                <span>
                                    <RefreshIcon2 color="#EEEEEE" />
                                </span>
                            </div>
                            <div className="flex flex-col justify-between gap-1 ">
                                <span className="text-xs font-bold text-[#CCCCCC] font-inter  uppercase tracking-wide">
                                    REUSED PASSWORDS
                                </span>
                                <span className="flex items-center justify-between">
                                    <p className="text-[#EEEEEE] text-lg font-semibold font-inter">
                                        0
                                    </p>
                                    <span className=" absolute right-6 bottom-4 pt-4 transform -rotate-90">
                                        <DropDownIcon color="#EEEEEE" />
                                    </span>
                                </span>
                            </div>
                        </div>

                        {/* old passwords */}
                        <div className="w-72 h-20 relative bg-customDark-100 rounded-lg  flex gap-3 items-center pl-4 py-4">
                            <div className=" h-12 w-12 rounded-full bg-[#FFC52F] flex items-center justify-center">
                                <span>
                                    <Clock2 />
                                </span>
                            </div>
                            <div className="flex flex-col justify-between gap-1 ">
                                <span className="text-xs font-bold text-[#CCCCCC] font-inter  uppercase tracking-wide">
                                    OLD PASSWORDS
                                </span>
                                <span className="flex items-center justify-between">
                                    <p className="text-[#EEEEEE] text-lg font-semibold font-inter">
                                        24
                                    </p>
                                    <span className=" absolute right-6 bottom-4 pt-4 transform -rotate-90">
                                        <DropDownIcon color="#EEEEEE" />
                                    </span>
                                </span>
                            </div>
                        </div>
                        {/* mfa */}
                        <div className="w-72 h-20 relative bg-customDark-100 rounded-lg  flex gap-3 items-center pl-4 py-4">
                            <div className=" h-12 w-12 rounded-full bg-[#2ED370] flex items-center justify-center">
                                <span>
                                    <KeyIcon />
                                </span>
                            </div>
                            <div className="flex flex-col justify-between gap-1 ">
                                <span className="text-xs font-bold text-[#CCCCCC] font-inter  uppercase tracking-wide">
                                    MFA
                                </span>
                                <div className="  flex items-center justify-between">
                                    <p className="text-[#2ED370] text-lg font-semibold  font-inter">
                                        Active
                                    </p>
                                    <span className=" absolute right-6 bottom-4 pt-4 transform -rotate-90">
                                        <DropDownIcon color="#EEEEEE" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* second section */}
            <div className="h-auto w-full bg-customDark-0 pb-8 rounded-lg">
                <div className=" text-textgray-200 px-8 py-8 text-xs font-bold font-sans inter uppercase tracking-wide">
                    At-risk passwords
                </div>
                {riskPasswordsArray.map((password) => (
                    <div
                        key={password.id}
                        className="w-[984px] px-6 flex justify-between h-16 mx-4"
                    >
                        <div className="flex  w-[162px] items-center gap-2">
                            <span>
                                <Squircle
                                    height="40"
                                    width="40"
                                    color="white"
                                />
                            </span>
                            <div className="text-[#EFEFEF] text-base font-medium font-inter leading-normal">
                                {password.title}
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <span>
                                {password.risk === "weak" ? (
                                    <DangerIcon />
                                ) : (
                                    <Clock />
                                )}
                            </span>
                            <div className="text-zinc-400 text-sm font-medium font-inter leading-tight">
                                {password.risk === "weak"
                                    ? "Extremely weak"
                                    : "Old Password"}
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <span>
                                <div className="w-[191px] h-10 border-[2px] border-[#A0A0A0] flex gap-2 items-center justify-center rounded-sm cursor-pointer">
                                    <WrenchIcon color="#A0A0A0" />
                                    <p className="text-textgray-200 text-base font-medium font-inter leading-normal">
                                        Fix Password
                                    </p>
                                </div>
                            </span>
                            <div className="w-10 h-10 border-[2px] border-[#A0A0A0] flex gap-2 items-center justify-center rounded-sm cursor-pointer">
                                <RefreshIcon2 color="#A0A0A0" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Page;