"use client";
import React, { useState } from "react";
import Squircle from "../../icons/Squircle";
import { PrimaryButton } from "../../components/Buttons";
import NotesSidebar from "../../components/NotesSidebar";
import NotesIcon from "../../icons/NotesIcon";

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
                color="#244A33"
                height="100"
                width="98"
                insideIcon={
                    <NotesIcon height="50px" width="50px" color="white" />
                }
            />
            <div className=" h-[29px] font-inter font-bold text-[24px] leading-[29.05px] tracking-normal text-customWhite">
                Notes with security
            </div>
            <div className="w-[394px] h-[48px] font-inter font-medium text-[16px] leading-[24px] tracking-[-0.5%] text-center text-textgray-200">
                Save Wi-Fi passwords, store software license keys, personal
                memos, etc.
            </div>
            <div className="flex justify-center items-center gap-4 relative">
                {" "}
                <div className="flex justify-center" onClick={openSidebarModal}>
                    <PrimaryButton
                        text="Add Secure Note"
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
