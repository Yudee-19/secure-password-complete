"use client";
import React, { useState } from "react";
import Squircle from "../icons/Squircle";
import { PrimaryButton } from "../components/Buttons";
import NotesSidebar from "../components/NotesSidebar";
import NotesIcon from "../icons/NotesIcon";
import CryptoIcon from "../icons/CryptoIcon";

const Page = () => {
    const [isSidebarModalOpen, setisSidebarModalOpen] = useState(false);
    const openSidebarModal = () => {
        setisSidebarModalOpen(true);
    };
    const closeSidebarModal = () => {
        setisSidebarModalOpen(false);
    };
    return (
        <div className="w-full h-full pl-[335px]  bg-customDark-50 flex flex-col justify-center items-center gap-5 ">
            <Squircle
                color="#514629"
                height="100"
                width="98"
                insideIcon={
                    <CryptoIcon height="50px" width="50px" color="#D3A52E" />
                }
            />
            <div className=" h-[29px] font-inter font-bold text-[24px] leading-[29.05px] tracking-normal text-customWhite">
                Fill forms online stress-free
            </div>
            <div className="w-[394px] h-[48px] font-inter font-medium text-[16px] leading-[24px] tracking-[-0.5%] text-center text-textgray-200">
                Jot down a Wi-Fi code, office security alarmcode or your
                friend’s birthday
            </div>
            <div className="flex justify-center items-center gap-4 relative">
                {" "}
                <div className="flex justify-center" onClick={openSidebarModal}>
                    <PrimaryButton
                        text="Add Crypto Wallet"
                        height="40"
                        width="376"
                    />
                </div>
            </div>
            <NotesSidebar
                isOpen={isSidebarModalOpen}
                onClose={closeSidebarModal}
            />
        </div>
    );
};

export default Page;
