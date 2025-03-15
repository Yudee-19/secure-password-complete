"use client";
import React, { useState } from "react";
import Squircle from "../../icons/Squircle";
import { PrimaryButton, SecondaryButton } from "../../components/Buttons";
import AddBankAccountSidebar from "../../components/AddBankAccountSidebar";
import GreenBankIcon from "../../icons/GreenBankIcon";

const Page = () => {
    const [isSidebarModalOpen, setisSidebarModalOpen] = useState(false);
    const openSidebarModal = () => {
        setisSidebarModalOpen(true);
    };
    const closeSidebarModal = () => {
        setisSidebarModalOpen(false);
    };
    return (
        <div className="w-full min-h-screen pl-[335px]  bg-customDark-50 flex flex-col justify-center items-center gap-5 ">
            <Squircle
                color="#244A33"
                height="100"
                width="98"
                insideIcon={
                    <GreenBankIcon color="#9FEBBD" height="39" width="37" />
                }
            />
            <div className=" h-[29px] font-inter font-bold text-[24px] leading-[29.05px] tracking-normal text-customWhite">
                Fill forms online stress-free
            </div>
            <div className="w-[307px] h-[48px] font-inter font-medium text-[16px] leading-[24px] tracking-[-0.5%] text-center text-textgray-200">
                Jot down a Wi-Fi code, office security alarm code or your
                friend’s birthday
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
            <AddBankAccountSidebar
                isOpen={isSidebarModalOpen}
                onClose={closeSidebarModal}
            />
        </div>
    );
};

export default Page;
