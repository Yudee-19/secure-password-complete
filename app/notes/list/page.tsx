"use client";
import NotesSidebar from "@/app/components/NotesSidebar";
import { PrimaryButton, SecondaryButton } from "@/app/components/Buttons";
import DropDownIcon from "@/app/icons/DropDownIcon";
import NotesIcon from "@/app/icons/NotesIcon";
import OptionsIcon from "@/app/icons/OptionsIcon";
import PremiumIconGold from "@/app/icons/PremiumIconGold";
import ShareIcon from "@/app/icons/ShareIcon";
import Squircle from "@/app/icons/Squircle";
import React, { useState } from "react";

const Page = () => {
    const [isSidebarModalOpen, setisSidebarModalOpen] = useState(false);
    const openSidebarModal = () => {
        setisSidebarModalOpen(true);
    };
    const closeSidebarModal = () => {
        setisSidebarModalOpen(false);
    };

    return (
        <div className="w-full h-full pl-[335px] pt-[82px] bg-customDark-50 flex flex-col  ">
            {/* Header */}
            <div className="flex justify-between mt-[57px] px-15">
                <h1 className="text-white text-[32px] font-extrabold font-Inter">
                    Secure notes
                </h1>
                <div className=" flex gap-4 justify-end">
                    <span className="cursor-pointer" onClick={openSidebarModal}>
                        <PrimaryButton
                            text="Add Secure Note"
                            height="40"
                            width="189"
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
                            className="appearance-none border-[1px]  w-4 h-4 col-start-1 border-[#bebebe] rounded-sm checked:bg-customWhite checked:border-customWhite "
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
                        <span className="">
                            <DropDownIcon color="#a0a0a0" />
                        </span>
                    </div>
                    <div className="flex items-center gap-2 col-start-11 col-span-2">
                        <p className="text-textgray-200 text-sm font-semibold font-inter leading-[21px]">
                            Last modified
                        </p>
                        <span className="">
                            <DropDownIcon color="#a0a0a0" />
                        </span>
                    </div>
                </div>

                {/* Individual items */}
                <div className="grid grid-cols-12 col-span-12 border-b-2 h-[72px] border-[#5a5a5a] hover:bg-hoverdark-2 group">
                    <span className=" flex justify-between items-center px-[2px]">
                        <input
                            type="checkbox"
                            className="appearance-none border-[1px]  w-4 h-4 col-start-1 border-[#bebebe] rounded-sm checked:bg-customWhite checked:border-customWhite "
                        ></input>

                        <div className="col-start-1">
                            <Squircle
                                height="40"
                                width="40"
                                color="#353128"
                                insideIcon={
                                    <NotesIcon
                                        height="50px"
                                        width="50px"
                                        color="#F0CA68"
                                    />
                                }
                            />
                        </div>
                    </span>
                    <div className="col-start-2 col-span-2 flex items-center pl-3">
                        <p className=" text-[#efefef] text-base font-medium leading-normal">
                            My wifi password
                        </p>
                    </div>
                    <div className="col-start-7 col-span-2 flex items-center ">
                        <p className=" text-[#b8b8b8] text-sm font-medium leading-[21px]">
                            less than a minute ago
                        </p>
                    </div>
                </div>
            </div>

            <NotesSidebar
                isOpen={isSidebarModalOpen}
                onClose={closeSidebarModal}
            />
        </div>
    );
};

interface OptionsModalProp {
    isOpen: boolean;
    column: string;
}
const OptionsModal: React.FC<OptionsModalProp> = ({ isOpen, column }) => {
    if (!isOpen) return null;
    const positionClass = `${column} col-span-2`;
    return (
        <div
            className={`w-[181px] h-[210px] ${positionClass}      bg-customDark-0 flex flex-col rounded-md`}
        >
            <div className="h-[45px] border-b-[2px] border-[#555555] flex items-center pl-4">
                <span className="text-customWhite text-sm font-medium leading-[21px]">
                    Move to folder
                </span>
            </div>
            <div className="flex flex-col gap-2 px-4 pt-3">
                <div className="text-customWhite text-sm font-medium leading-[21px] cursor-pointer">
                    Edit
                </div>
                <div className=" flex justify-between text-customWhite text-sm font-medium leading-[21px] cursor-pointer">
                    <span>Attach a file</span>
                    <span>
                        <PremiumIconGold />
                    </span>
                </div>
                <div className="flex justify-between text-customWhite text-sm font-medium leading-[21px] cursor-pointer">
                    <span>Share</span>
                    <span>
                        <PremiumIconGold />
                    </span>
                </div>
                <div className="text-customWhite text-sm font-medium leading-[21px] cursor-pointer">
                    Password history
                </div>
                <div className="text-customWhite text-sm font-medium leading-[21px] cursor-pointer">
                    Move to trash
                </div>
            </div>
        </div>
    );
};

export default Page;
