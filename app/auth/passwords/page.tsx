"use client";
import React, { useState } from "react";
import Squircle from "../../icons/Squircle";
import Lock2 from "../../icons/Lock2";
import { PrimaryButton, SecondaryButton } from "../../components/Buttons";
import AddPasswordSidebar from "../../components/AddPasswordSidebar";

const Page = () => {
    const [isSidebarModalOpen, setisSidebarModalOpen] = useState(false);
    const openSidebarModal = () => {
        setisSidebarModalOpen(true);
    };
    const closeSidebarModal = () => {
        setisSidebarModalOpen(false);
    };
    return (
        <div className="w-full  min-h-screen 2xl:pl-[335px] pl-[270px]  bg-customDark-50 flex flex-col justify-center items-center gap-5 ">
            <Squircle height="100" width="98" insideIcon={<Lock2 />} />
            <div className="w-[313px] h-[29px] font-inter font-bold text-[24px] leading-[29.05px] tracking-normal text-customWhite">
                Goodbye Password Resets
            </div>
            <div className="w-[307px] h-[48px] font-inter font-medium text-[16px] leading-[24px] tracking-[-0.5%] text-center text-textgray-200">
                Add your passwords. You will find it here whenever you need it
            </div>
            <div className="flex justify-center items-center gap-4 relative">
                {" "}
                <div className="flex justify-center" onClick={openSidebarModal}>
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
            <AddPasswordSidebar
                isOpen={isSidebarModalOpen}
                onClose={closeSidebarModal}
            />
        </div>
    );
};

export default Page;
