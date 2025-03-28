"use client";
import React, { useState } from "react";
import Squircle from "../../icons/Squircle";
import { PrimaryButton } from "../../components/Buttons";
import PersonalInfoSidebar from "../../components/PersonalInfoSidebar";
import PersonalInfoIcon from "../../icons/PersonalInfoIcon";

const Page = () => {
    const [isSidebarModalOpen, setisSidebarModalOpen] = useState(false);
    const openSidebarModal = () => {
        setisSidebarModalOpen(true);
    };
    const closeSidebarModal = () => {
        setisSidebarModalOpen(false);
    };
    return (
        <div className="w-full min-h-screen 2xl:pl-[335px] pl-[270px]   bg-customDark-50 flex flex-col justify-center items-center gap-5 ">
            <Squircle
                color="#532A13"
                height="100"
                width="98"
                insideIcon={
                    <PersonalInfoIcon
                        height="41px"
                        width="37px"
                        color="#D3692E"
                    />
                }
            />
            <div className=" h-[29px] font-inter font-bold text-[24px] leading-[29.05px] tracking-normal text-customWhite">
                Fill forms online stress-free
            </div>
            <div className="w-[322px] h-[48px] font-inter font-medium text-[16px] leading-[24px] tracking-[-0.5%] text-center text-textgray-200">
                Auto fill for name, address, email, and phone number.
            </div>
            <div className="flex justify-center items-center gap-4 relative">
                {" "}
                <div className="flex justify-center" onClick={openSidebarModal}>
                    <PrimaryButton
                        text="Add Personal Info"
                        height="40"
                        width="376"
                    />
                </div>
            </div>
            <PersonalInfoSidebar
                isOpen={isSidebarModalOpen}
                onClose={closeSidebarModal}
            />
        </div>
    );
};

export default Page;
