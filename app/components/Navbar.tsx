"use client";
import React, { useState } from "react";
import SearchIcon from "../icons/SearchIcon";
import NotificationIcon from "../icons/NotificationIcon";
import SettingsIcon from "../icons/SettingsIcon";
import DropDownIcon from "../icons/DropDownIcon";
import SearchModal from "./SearchModal";
import NotificationSidebar from "./NotificationSidebar";

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isNotificationBarOpen, setNotificationBarOpen] = useState(false);
    // Function to open the modal
    const openModal = () => {
        setIsModalOpen(true);
    };
    const openNotificationBar = () => {
        setNotificationBarOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
    };
    const closeNotificationBar = () => {
        setNotificationBarOpen(false);
    };

    return (
        <nav className="w-screen h-[82px] fixed top-0 bg-customDark-0 shadow-[0px_-8px_0px_0px_rgba(0,0,0,0.1)] z-50 ">
            <div className="flex items-center justify-between h-full px-[50px]">
                {/* Secure Passwords Logo */}
                <div className=" h-[32px]  ">
                    <h1 className="text-customWhite font-satoshi font-black text-[24px] leading-[32.4px]">
                        Secure Passwords
                    </h1>
                </div>

                {/* Search Input Box */}
                <div
                    className="w-[681px] h-[50px] bg-customDark-200 rounded-md border-[2px] border-[#555555] flex items-center cursor-pointer "
                    onClick={openModal}
                >
                    <div className=" text-gray-400 pl-6">
                        <SearchIcon />
                    </div>
                    <input
                        type="text"
                        placeholder="Search Securepasswords (⌘K) "
                        className="w-full h-full bg-transparent outline-0 pl-[24px] text-textgray-200 placeholder:text-textgray-200 placeholder:font-inter placeholder:font-semibold placeholder:text-[16px] placeholder:leading-[24px]"
                    />
                </div>

                {/* Notification Icon */}
                <div
                    className="w-[28px] h-[28px]  cursor-pointer"
                    onClick={openNotificationBar}
                >
                    <NotificationIcon />
                </div>

                {/* Settings Icon */}
                <div className="w-[28px] h-[28px]  ml-[20px] cursor-pointer">
                    <SettingsIcon />
                </div>

                {/* Profile Section */}
                <div className="w-[178px] h-[50px] bg-customDark-200 rounded-full flex items-center justify-between px-[8px] py-[5px]">
                    {/* Avatar */}
                    <div className="w-[40px] h-[40px] bg-[#549DE1] rounded-full flex items-center justify-center">
                        <span className="text-customDark-50 font-inter font-semibold text-[14px] leading-[21px]">
                            KD
                        </span>
                    </div>

                    <div className="flex items-center justify-between ">
                        <div className="h-[19px] w-[77px] text-base text-customWhite leading-[19.36px] ">
                            Kevin Doe
                        </div>

                        {/* Dropdown Icon */}
                        <div className="w-[24px] h-[24px] cursor-pointer pt-[10px]">
                            <DropDownIcon color="white" />
                        </div>
                    </div>
                </div>
            </div>
            <SearchModal isOpen={isModalOpen} onClose={closeModal} />
            <NotificationSidebar
                isOpen={isNotificationBarOpen}
                onClose={closeNotificationBar}
            />
        </nav>
    );
};

export default Navbar;
