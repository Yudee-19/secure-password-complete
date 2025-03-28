import React from "react";
import Squircle from "../../icons/Squircle";
import TrashIcon from "../../icons/TrashIcon";

const page = () => {
    return (
        <div className="w-full min-h-screen 2xl:pl-[335px] pl-[270px]   bg-customDark-50 flex flex-col justify-center items-center gap-5 ">
            <Squircle
                height="100"
                width="100"
                color="#1B0F0F"
                insideIcon={
                    <TrashIcon height="41px" width="37px" color="#F06868" />
                }
            />
            <div className="flex flex-col justify-center items-center gap-1">
                <div className=" h-[29px] font-inter font-bold text-[24px] leading-[29.05px] tracking-normal text-customWhite">
                    Trash
                </div>
                <div className="w-[364px] h-[48px] font-inter font-medium text-[16px] leading-[24px] tracking-[-0.5%] text-center text-textgray-200">
                    Review items before they are permanently deleted after 60
                    days from moving into trash.
                </div>
            </div>
        </div>
    );
};

export default page;
