import React from "react";
import PremiumIcon from "../icons/PremiumIcon";
import CrownIcon from "../icons/CrownIcon";
import SharingCenterIcon from "../icons/SharingCenterIcon";
import LockIcon from "../icons/LockIcon";
import LogoutIcon from "../icons/LogoutIcon";
const ProfileModal = () => {
    return (
        <div className="w-[336px] h-[400px] realtive bg-customDark-300 rounded-2xl p-6 flex flex-col gap-6">
            <div className="absolute bg-customDark-300 h-[30px] w-[30px] rotate-45 -top-3 right-15 "></div>
            <div className="flex gap-6 align-center pb-6 mb-4 border-b-2 border-textgray-200">
                <div className="w-[50px] h-[50px] bg-[#549DE1] rounded-full flex items-center justify-center">
                    <span className="text-customDark-50 font-inter font-semibold text-[14px] leading-[21px]">
                        KD
                    </span>
                </div>
                <div className="flex flex-col ">
                    <p className=" text-customWhite text-base font-semibold ">
                        jhondoe@gmail.com
                    </p>
                    <p className="text-textgray-200 text-base font-medium ">
                        Free Plan
                    </p>
                </div>
            </div>
            <div>
                <div className="py-4 flex gap-3 items-center">
                    <span className="w-[24px] h-[24px]">
                        <CrownIcon />
                    </span>
                    <p className="text-customWhite text-base font-semibold">
                        Upgrade
                    </p>
                </div>
                <div className="py-4 flex gap-3 items-center">
                    <span className="w-[24px] h-[24px]">
                        <SharingCenterIcon
                            width="24"
                            height="15"
                            color="#2ED370"
                        />
                    </span>
                    <p className="text-customWhite text-base font-semibold">
                        Invite a Friend
                    </p>
                </div>
                <div className="py-4 flex gap-3 items-center">
                    <span className="w-[24px] h-[24px]">
                        <LockIcon color="#2ED370" />
                    </span>
                    <p className="text-customWhite text-base font-semibold">
                        Lock App
                    </p>
                </div>
                <div className="py-4 flex gap-3 items-center">
                    <span className="w-[24px] h-[24px]">
                        <LogoutIcon />
                    </span>
                    <p className="text-[#E95353] text-base font-semibold">
                        Logout
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProfileModal;
