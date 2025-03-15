import React from "react";
import GetStartedItemProps from "../../types/GetStartedItem";
import DropDownIcon from "../icons/DropDownIcon";
import GreenTickIcon from "../icons/GreenTickIcon";

const GetStartedItem = ({
    icon,
    title,
    description,
    completionTime,
    completed,
    onclick,
}: GetStartedItemProps) => {
    return (
        <div
            className={`w-[990px] h-[90px] flex justify-between items-center transition-all duration-300 `}
        >
            <div
                className={`w-[536px] h-[65px] flex items-center justify-center gap-4 ${
                    completed ? "opacity-40" : "opacity-100"
                }`}
            >
                <div className={` w-[65px] h-[65px] `}>{icon}</div>

                <div className="flex flex-col gap-2 w-[455px] h-[54px]    ">
                    <h2 className=" h-[18px] font-semibold leading-[21.78px] font-inter text-white  ">
                        {title}
                    </h2>
                    <p className=" h-[16px] font-normal leading-6 text-[#CCCCCC] font-inter  ">
                        {description}
                    </p>
                </div>
            </div>
            <div
                className=" cursor-pointer  pl-[15px] h-[24px] w-[144px]  flex gap-2 justify-between items-center  "
                onClick={onclick}
            >
                <div
                    className={`h-6 w-[112px] text-[16px] font-normal leading-6 tracking-tight ${
                        completed ? "text-[#2ED370]" : "text-white"
                    }`}
                >
                    {completed ? (
                        <div className=" pl-5 flex items-center gap-1">
                            <span className="w-[40px] h-[24px] font-inter font-normal text-[16px] leading-[24px] tracking-[-0.5%]">
                                Done
                            </span>
                            <GreenTickIcon />
                        </div>
                    ) : (
                        `Takes ${completionTime}`
                    )}
                </div>

                {!completed && (
                    <div className=" h-6 w-6 -rotate-90 flex justify-center pr-1 cursor-pointer ">
                        <DropDownIcon color="white" />
                    </div>
                )}

                {/* <div className=" h-6 w-6 -rotate-90 flex justify-center pr-1 cursor-pointer ">
                    <DropDownIcon color={completed ? "#2dd171" : "white"} />
                </div> */}
            </div>
        </div>
    );
};

export default GetStartedItem;
