"use client";
import React, { useState } from "react";
import Squircle from "../../icons/Squircle";
import { PrimaryButton } from "../../components/Buttons";
import CreditCardSidebar from "../../components/CreditCardSidebar";
import CreditCardIcon from "../../icons/CreditCardIcon";

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
                color="#1E3E5C"
                height="100"
                width="98"
                insideIcon={
                    <CreditCardIcon
                        height="41px"
                        width="37px"
                        color="#539DE1"
                    />
                }
            />
            <div className=" h-[29px] font-inter font-bold text-[24px] leading-[29.05px] tracking-normal text-customWhite">
                Fill forms online stress-free
            </div>
            <div className="w-[322px] h-[48px] font-inter font-medium text-[16px] leading-[24px] tracking-[-0.5%] text-center text-textgray-200">
                Jot down a Wi-Fi code, office security alarm code or your
                friend’s birthday
            </div>
            <div className="flex justify-center items-center gap-4 relative">
                {" "}
                <div className="flex justify-center" onClick={openSidebarModal}>
                    <PrimaryButton
                        text="Add Credit Card"
                        height="40"
                        width="376"
                    />
                </div>
            </div>
            <CreditCardSidebar
                isOpen={isSidebarModalOpen}
                onClose={closeSidebarModal}
            />
        </div>
    );
};

export default Page;
