import React from "react";
import Squircle from "../icons/Squircle";
import Lock2 from "../icons/Lock2";
import { PrimaryButton, SecondaryButton } from "../components/Buttons";

const storedPasswords = [
    {
        id: 1,
        platform: "Netflix",
        lastused: 1,
    },
];

const page = () => {
    return (
        <div className="w-full h-full pl-[335px] pt-[82px] bg-customDark-50 flex flex-col justify-center items-center gap-5 ">
            <Squircle insideIcon={<Lock2 />} />
            <div className="w-[313px] h-[29px] font-inter font-bold text-[24px] leading-[29.05px] tracking-normal text-customWhite">
                Goodbye Password Resets
            </div>
            <div className="w-[307px] h-[48px] font-inter font-medium text-[16px] leading-[24px] tracking-[-0.5%] text-center text-textgray-200">
                Add your passwords. You will find it here whenever you need it
            </div>
            <div className="flex justify-center items-center gap-4 relative">
                {" "}
                <div className="flex justify-center">
                    <PrimaryButton
                        text="Add Passwords"
                        height="40"
                        width="180"
                    />
                </div>
                <div className="flex justify-center">
                    <SecondaryButton
                        text="Import Passwords"
                        height="40"
                        width="180"
                    />
                </div>
            </div>
        </div>
    );
};

export default page;
