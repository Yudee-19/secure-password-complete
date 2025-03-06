import React from "react";
import PremiumIcon from "../icons/PremiumIcon";

const PremiumBox = () => {
    return (
        <div className=" cursor-pointer fixed w-[228px] h-[56px] flex items-center  bottom-[45px] right-[45px] rounded-4xl pt-[8px] pr-[12px] pb-[8px] pl-[12px] gap-[8px] bg-[#212F27]">
            <PremiumIcon />
            <p className="w-[156px] h-[24px] font-inter font-medium text-[16px] leading-[24px] tracking-[-0.5%] text-[#EFEFEF]">
                Upgrade to Premium
            </p>
        </div>
    );
};

export default PremiumBox;
