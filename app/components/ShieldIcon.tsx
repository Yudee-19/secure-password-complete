import Image from "next/image";
import shieldPng from "../../public/shield-png.png"; // Import the image
import netflixPng from "../../public/Netflix-icon.png";
import Squircle from "../icons/Squircle";
import TelegramIcon from "../icons/TelegramIcon";
import DropDownIcon from "../icons/DropDownIcon";
import WarningShield from "../icons/WarningShield";
import WrenchIcon from "../icons/WrenchIcon";
import React from "react";

const ShieldIcon = () => {
    return (
        <div className=" w-full h-full flex flex-col justify-center items-center">
            <div className="justify-start text-white text-[14px] font-normal font-inter  uppercase tracking-widest">
                Next-Gen Password Management
            </div>
            <div className="  w-[662px] relative h-[500px] flex justify-center items-center">
                <span>
                    <Image
                        className=" relative z-50"
                        src={shieldPng}
                        alt="shield"
                        width={400}
                        height={400}
                    />
                </span>

                {/* Netflix layout */}
                <span>
                    <div className=" absolute  top-19 left-26 flex items-center justify-between gap px-4 py-2  bg-white/70 rounded-xl shadow-[0px_1px_4px_0px_rgba(0,0,0,0.10)] w-[346px] h-[56px]">
                        <div className="Icon flex items-center gap-2">
                            <Squircle
                                height="40"
                                width="40"
                                color="#FFFFFF"
                                insideIcon={
                                    <TelegramIcon height="100" width="100" />
                                }
                            />
                            <div>
                                <p className="font-inter font-medium text-base leading-[24px] tracking-[-0.5%] text-customDark-0">
                                    Telegram
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center align-center">
                            <p className="font-inter font-medium text-2xl leading-[24px] pt-[10px] tracking-[-0.5%] text-customDark-0">
                                ********
                            </p>
                        </div>
                        <div className="flex items-center justify-center align-center">
                            <p className="font-inter font-medium text-base leading-[24px]  tracking-[-0.5%] text-textgray-100">
                                3d ago
                            </p>
                        </div>
                    </div>
                    <div className=" absolute z-60 top-90 -right-5 flex items-center justify-between gap px-4 py-2 shadow-xl  bg-white rounded-xl  w-[346px] h-[56px]">
                        <div className="Icon flex items-center gap-2">
                            <span className="relative">
                                <Squircle
                                    height="40"
                                    width="40"
                                    color="#151515"
                                />
                                <Image
                                    className=" absolute top-[10px] left-[14px]"
                                    src={netflixPng}
                                    alt="shield"
                                    width={13}
                                    height={13}
                                />
                            </span>
                            <div>
                                <p className="font-inter font-medium text-base leading-[24px] tracking-[-0.5%] text-customDark-0">
                                    Netflix
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center align-center">
                            <p className="font-inter font-medium text-2xl leading-[24px] pt-[10px] tracking-[-0.5%] text-customDark-0">
                                ******
                            </p>
                        </div>
                        <div className="flex items-center justify-center align-center">
                            <p className="font-inter font-medium text-base leading-[24px]  tracking-[-0.5%] text-textgray-100">
                                3d ago
                            </p>
                        </div>
                    </div>
                    <div className=" absolute z-59 top-91 -right-[19px] flex items-center justify-between gap px-4 py-2 shadow-xl  bg-white rounded-xl  w-[343px] h-[56px]"></div>
                    <div className=" absolute z-58 top-92 -right-[16px] flex items-center justify-between gap px-4 py-2 shadow-xl  bg-white rounded-xl  w-[337px] h-[56px]"></div>
                </span>
                <div className="h-[75px] w-[275px] absolute bottom-35  left-7 bg-white/70 rounded-xl flex gap-3 items-center pl-4 py-4">
                    <div className=" h-10 w-10 rounded-full  bg-[#08291A] absolute -top-4 -left-4 flex justify-center items-center">
                        <span>
                            <WrenchIcon />
                        </span>
                    </div>
                    <div className=" h-12 w-12 rounded-full bg-[#F14444] flex items-center justify-center">
                        <span>
                            <WarningShield />
                        </span>
                    </div>
                    <div className="flex flex-col justify-between gap-1 ">
                        <span className="text-[13px] font-bold  uppercase tracking-wide">
                            WEAK PASSWORDS
                        </span>
                        <span className="flex items-center justify-between">
                            <p className="text-[#666666] text-lg font-semibold font-inter">
                                4
                            </p>
                            <span className=" pt-4 transform -rotate-90">
                                <DropDownIcon color="#252525" />
                            </span>
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
                <div className="justify-start text-white text-2xl font-semibold font-inter">
                    Confidentiality-Integrity-Availability
                </div>
                <div className=" w-120 text-center justify-start text-neutral-100 text-sm font-medium font-Inter leading-tight">
                    Effortlessly manage your passwords & protect your online
                    accounts withour secure, reliable, and easy-to-use password
                    manager.
                </div>
            </div>
        </div>
    );
};

export default ShieldIcon;
