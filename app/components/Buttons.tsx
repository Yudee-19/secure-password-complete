import React from "react";
import { ButtonInterface } from "../../types/Button";

const PrimaryButton = ({ height, width, text }: ButtonInterface) => {
    return (
        <div
            className={` bg-[#2ED370] flex items-center justify-center rounded-sm cursor-pointer `}
            style={{ width: `${width}px`, height: `${height}px` }}
        >
            <p className=" font-inter font-medium text-[16px] leading-[24px] tracking-[-0.5%] text-center text-[#1A1A1A]">
                {text}
            </p>
        </div>
    );
};
const PrimaryButtonSignIn = ({
    height,
    width,
    text,
    enabled,
}: {
    height: string;
    width: string;
    text: string;
    enabled?: boolean;
}) => {
    return (
        <div
            className={` ${
                enabled ? "bg-[#2ED370] cursor-pointer" : "bg-gray-400"
            } flex items-center justify-center rounded-sm  `}
            style={{ width: `${width}px`, height: `${height}px` }}
        >
            <p className=" font-inter font-medium text-[16px] leading-[24px] tracking-[-0.5%] text-center text-[#1A1A1A]">
                {text}
            </p>
        </div>
    );
};
const SecondaryButton = ({ height, width, text }: ButtonInterface) => {
    return (
        <div
            className={` border-[#2ED370] border-[2px] flex items-center justify-center  rounded-sm cursor-pointer `}
            style={{ width: `${width}px`, height: `${height}px` }}
        >
            <p className="w-full font-inter font-medium text-[16px] leading-[24px] tracking-[-0.5%] text-center text-[#2ED370]">
                {text}
            </p>
        </div>
    );
};
const RedSecondaryButton = ({ height, width, text }: ButtonInterface) => {
    return (
        <div
            className={` border-[#EFEFEF] border-[2px] flex items-center justify-center  rounded-sm cursor-pointer `}
            style={{ width: `${width}px`, height: `${height}px` }}
        >
            <p className="w-full font-inter font-medium text-[16px] leading-[24px] tracking-[-0.5%] text-center text-[#F14444]">
                {text}
            </p>
        </div>
    );
};

const BlackPrimaryButton = ({ height, width, text }: ButtonInterface) => {
    return (
        <div
            className={` bg-customDark-200 border-[2px] border-[#CCCCCC] flex items-center justify-center rounded-sm cursor-pointer `}
            style={{ width: `${width}px`, height: `${height}px` }}
        >
            <p className=" font-inter font-medium text-[16px] leading-[24px] tracking-[-0.5%] text-center text-[#CCCCCC]">
                {text}
            </p>
        </div>
    );
};

export {
    PrimaryButton,
    SecondaryButton,
    RedSecondaryButton,
    BlackPrimaryButton,
    PrimaryButtonSignIn,
};
