"use client";
import React, { useState, useEffect } from "react";
import SearchIcon from "../icons/SearchIcon";
import NotificationIcon from "../icons/NotificationIcon";
import SettingsIcon from "../icons/SettingsIcon";
import DropDownIcon from "../icons/DropDownIcon";
import SearchModal from "./SearchModal";
import NotificationSidebar from "./NotificationSidebar";
import { useRouter } from "next/navigation";
import ProfileModal from "./ProfileModal";
import Logo from "../icons/Logo";

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isNotificationBarOpen, setNotificationBarOpen] = useState(false);
    // Function to open the modal
    const router = useRouter();
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

    // Add keyboard shortcut listener
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            // Check for Ctrl+K or Cmd+K (for Mac)
            if ((event.ctrlKey || event.metaKey) && event.key === "k") {
                event.preventDefault(); // Prevent default browser behavior
                openModal();
            }
        };

        // Add event listener
        window.addEventListener("keydown", handleKeyDown);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <nav className="w-screen h-[82px] fixed top-0 bg-customDark-0 shadow-[0px_-8px_0px_0px_rgba(0,0,0,0.1)] z-50 ">
            <div className="flex items-center justify-between h-full px-[50px]">
                {/* Secure Passwords Logo */}
                <div
                    className=" w-auto h-[32px] flex items-center gap-3 justify-between "
                    onClick={() => {
                        router.push("/");
                    }}
                >
                    <span className="cursor-pointer">
                        <Logo width="35" height="31" color="white" />
                    </span>
                    <h1 className="text-customWhite cursor-pointer font-satoshi font-black text-[24px] leading-[32.4px]">
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
                        readOnly
                        placeholder="Search Securepasswords (⌘K) "
                        className="w-full h-full bg-transparent outline-0 pl-[24px] text-textgray-200 placeholder:text-textgray-200 placeholder:font-inter placeholder:font-semibold placeholder:text-[16px] placeholder:leading-[24px]"
                    />
                </div>

                <div className="flex items-center gap-8 ">
                    {/* Notification Icon */}
                    <div
                        className="w-[28px] h-[28px]  cursor-pointer"
                        onClick={openNotificationBar}
                    >
                        <NotificationIcon />
                    </div>

                    {/* Settings Icon */}
                    {/* Agnitro add onlcick  in the below div */}
                    <div className="w-[28px] h-[28px] cursor-pointer">
                        <SettingsIcon />
                    </div>

                    {/* Profile Section */}
                    <span className="relative group">
                        <div className="w-[178px] h-[50px]  group bg-customDark-200 rounded-full flex items-center  gap-3 px-[7px]">
                            {/* Avatar */}
                            <div className="w-[40px] h-[40px] bg-[#549DE1] rounded-full flex items-center justify-center">
                                <span className="text-customDark-50 font-inter font-semibold text-[14px] leading-[21px]">
                                    KD
                                </span>
                            </div>

                            <div className="flex items-center justify-between gap-2 ">
                                <div className="h-[19px] w-[77px] text-base text-white leading-[19.36px] ">
                                    Kevin Doe
                                </div>

                                {/* Dropdown Icon */}
                                <div className="w-[24px] h-[24px] cursor-pointer pt-[10px]">
                                    <DropDownIcon color="white" />
                                </div>
                            </div>
                        </div>
                        <span className="hidden group-hover:block top-14 right-1 absolute">
                            <ProfileModal />
                        </span>
                    </span>
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
