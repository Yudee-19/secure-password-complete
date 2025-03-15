"use client";
import AddPasswordSidebar from "@/app/components/AddPasswordSidebar";
import { RedSecondaryButton } from "@/app/components/Buttons";
import DropDownIcon from "@/app/icons/DropDownIcon";
import OptionsIcon from "@/app/icons/OptionsIcon";
import PremiumIconGold from "@/app/icons/PremiumIconGold";
import RestoreIcon from "@/app/icons/RestoreIcon";
import ShareIcon from "@/app/icons/ShareIcon";
import Squircle from "@/app/icons/Squircle";
import TrashIcon from "@/app/icons/TrashIcon";
import React, { useState } from "react";

const Page = () => {
    const [_isSidebarModalOpen, setisSidebarModalOpen] = useState(false);
    const openSidebarModal = () => {
        setisSidebarModalOpen(true);
    };
    const closeSidebarModal = () => {
        setisSidebarModalOpen(false);
    };

    const [isOptionsModalOpen, setisOptionsModalOpen] = useState(false);
    const openOptionsModal = () => {
        setisOptionsModalOpen(!isOptionsModalOpen);
    };

    return (
        <div className="w-full min-h-screen pl-[335px] pt-[82px] bg-customDark-50 flex flex-col  ">
            {/* Header */}
            <div className="flex justify-between mt-[57px] px-15">
                <h1 className="text-white text-[32px] font-extrabold font-Inter">
                    Trash
                </h1>
                <div className=" flex gap-4 justify-end">
                    <span className="cursor-pointer">
                        <RedSecondaryButton
                            text="Empty Trash"
                            height="40"
                            width="154"
                        />
                    </span>
                </div>
            </div>

            {/* Passwords lists */}
            <div className="grid grid-cols-12 px-9 pt-[27px] divide-y-10 ">
                <div className="grid grid-cols-12 col-span-12 pb-4 border-b-2  border-[#5a5a5a]">
                    <span className=" flex justify-between items-center px-[2px]">
                        <input
                            type="checkbox"
                            className="w-4 h-4 col-start-1 border-[#bebebe] rounded-sm "
                        ></input>

                        <div className="col-start-1">
                            <p className="text-textgray-200 text-sm font-semibold font-inter leading-[21px]">
                                Title
                            </p>
                        </div>
                    </span>
                    <div className="flex items-center gap-2 col-start-7">
                        <p className="text-textgray-200 text-sm font-semibold font-inter leading-[21px]">
                            Last used
                        </p>
                        <span className="pt-1">
                            <DropDownIcon color="#a0a0a0" />
                        </span>
                    </div>
                </div>

                {/* Individual items */}
                <div className="grid grid-cols-12 col-span-12 border-b-2 h-[72px] border-[#5a5a5a] hover:bg-hoverdark-2 group">
                    <span className=" flex justify-between items-center px-[2px]">
                        <input
                            type="checkbox"
                            className="w-4 h-4 col-start-1 border-[#bebebe] rounded-sm "
                        ></input>

                        <div className="col-start-1">
                            <Squircle height="40" width="40" color="black" />
                        </div>
                    </span>
                    <div className="col-start-2 flex items-center pl-3">
                        <p className=" text-[#efefef] text-base font-medium leading-normal">
                            Telegram
                        </p>
                    </div>
                    <div className="col-start-7 col-span-2 flex items-center ">
                        <p className=" text-[#b8b8b8] text-sm font-medium leading-[21px]">
                            less than a minute ago
                        </p>
                    </div>
                    <div className="col-start-11 flex justify-center items-center">
                        <span
                            className="group-hover:visible invisible cursor-pointer"
                            onClick={openOptionsModal}
                        >
                            <RestoreIcon />
                        </span>
                    </div>
                    <div className="col-start-12 flex items-center">
                        <span className="group-hover:visible invisible cursor-pointer">
                            <TrashIcon height="20" width="20" color="#F06868" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
