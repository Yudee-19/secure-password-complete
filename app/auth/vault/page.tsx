"use client";
import React, { useState } from "react";
import { PrimaryButton, SecondaryButton } from "../../components/Buttons";
import Squircle from "../../icons/Squircle";
import BrokenLock from "../../icons/BrokenLock";
import AddItemsDropdown from "../../components/AddItemsDropdown";
import AddItemsModal from "../../components/AddItemsModal";
const Page = () => {
    const [isDropDownOpen, setisDropDownOpen] = useState(false);
    const [isAddItemsModalOpen, setIsAddItemsModalOpen] = useState(false);

    // Toggle dropdown visibility
    const toggleDropDown = (e: React.MouseEvent) => {
        e.stopPropagation(); // Stop event propagation to prevent immediate closing
        setisDropDownOpen((prevState) => !prevState);
    };

    // Close dropdown when clicking outside
    const closeDropDown = () => {
        setisDropDownOpen(false);
    };

    const openAddItemsModal = () => {
        setIsAddItemsModalOpen(true);
    };

    const closeAddItemsModal = () => {
        setIsAddItemsModalOpen(false);
    };

    return (
        <div className="w-screen h-screen  pl-[335px]  bg-customDark-50 flex flex-col justify-center items-center gap-5 ">
            <Squircle height="100" width="98" insideIcon={<BrokenLock />} />
            <div className="w-[313px] flex justify-center h-[29px] font-inter font-bold text-[24px] leading-[29.05px] tracking-normal text-customWhite">
                Let&apos;s Get Started
            </div>
            <div className="w-[307px] h-[48px] font-inter font-medium text-[16px] leading-[24px] tracking-[-0.5%] text-center text-textgray-200">
                Add your first item. You will find it here whenever you need it
            </div>
            <div className="flex justify-center items-center gap-4 relative">
                {" "}
                <div
                    className="flex justify-center"
                    onClick={openAddItemsModal}
                >
                    <PrimaryButton text="Add Items" height="40" width="154" />
                </div>
                {/* Dropdown positioned relative to the button */}
                {isDropDownOpen && (
                    <div className="absolute top-[47px] -left-7">
                        {" "}
                        {/* Adjusted positioning */}
                        <AddItemsDropdown
                            isOpen={isDropDownOpen}
                            onClose={closeDropDown}
                        />
                    </div>
                )}
                <div className="flex justify-center">
                    <SecondaryButton
                        text="Import Data"
                        height="40"
                        width="154"
                    />
                </div>
            </div>
            <AddItemsModal
                isOpen={isAddItemsModalOpen}
                onClose={closeAddItemsModal}
            />
        </div>
    );
};

export default Page;
