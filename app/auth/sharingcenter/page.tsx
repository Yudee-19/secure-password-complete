import React from "react";
import Squircle from "../../icons/Squircle";
import SharingCenterIcon from "../../icons/SharingCenterIcon";

const page = () => {
    return (
        <div className="w-full min-h-screen pl-[335px]  bg-customDark-50 flex flex-col justify-center items-center gap-5 ">
            <Squircle
                height="100"
                width="100"
                color="#0C0C2C"
                insideIcon={
                    <SharingCenterIcon
                        height="27px"
                        width="37px"
                        color="#8F8DFA"
                    />
                }
            />
            <div className="flex flex-col justify-center items-center gap-1">
                <div className=" h-[29px] font-inter font-bold text-[24px] leading-[29.05px] tracking-normal text-customWhite">
                    No shared items
                </div>
                <div className="w-[275px] h-[48px] font-inter font-medium text-[16px] leading-[24px] tracking-[-0.5%] text-center text-textgray-200">
                    Need to share a password securely with a friend?
                </div>
            </div>
        </div>
    );
};

export default page;
