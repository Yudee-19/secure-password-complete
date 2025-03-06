import React from "react";
import { ButtonInterface } from "../types/Button";

const PrimaryButton = ({ height, width, text }: ButtonInterface) => {
    return (
        <div
            className={`w-[${width}px] h-[${height}px] bg-[#2ED370] flex items-center justify-center rounded-sm cursor-pointer `}
        >
            <p className=" font-inter font-semibold text-[16px] leading-[24px] tracking-[-0.5%] text-center text-[#1A1A1A]">
                {text}
            </p>
        </div>
    );
};
const SecondaryButton = ({ height, width, text }: ButtonInterface) => {
    return (
        <div
            className={`w-[${width}px] h-[${height}px] border-[#2ED370] border-[2px] flex items-center justify-center  rounded-sm cursor-pointer `}
        >
            <p className="w-full font-inter font-semibold text-[16px] leading-[24px] tracking-[-0.5%] text-center text-[#2ED370]">
                {text}
            </p>
        </div>
    );
};

export { PrimaryButton, SecondaryButton };
