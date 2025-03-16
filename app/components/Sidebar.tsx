"use client";
import React, { useState } from "react";
import SidebarButton, { SidebarButtonProps } from "./SidebarButton";
import RocketIcon from "../icons/RocketIcon";
import DropDownIcon from "../icons/DropDownIcon";
import { useRouter, usePathname } from "next/navigation";

interface SidebarProps {
    categories: SidebarButtonProps[];
    walletItems: SidebarButtonProps[];
    folders: SidebarButtonProps[];
    tools: SidebarButtonProps[];
}

export default function Sidebar({
    categories,
    walletItems,
    folders,
    tools,
}: SidebarProps) {
    const router = useRouter();
    const pathname = usePathname();

    // State to manage visibility of each section
    const [isCategoriesVisible, setCategoriesVisible] = useState(true);
    const [isWalletVisible, setWalletVisible] = useState(true);
    const [isFoldersVisible, setFoldersVisible] = useState(true);
    const [isToolsVisible, setToolsVisible] = useState(true);

    const handleNavigation = (path: string | undefined) => {
        if (path) {
            router.push(path);
        }
    };
    return (
        <div className="h-screen w-[335px] no-scrollbar bg-customDark-300 fixed flex flex-col top-[82px] left-0 overflow-scroll text-gray-200  ">
            <div
                className=""
                onClick={() => {
                    router.push("/auth/getstarted");
                }}
            >
                <SidebarButton
                    title={"Get Started"}
                    icon={<RocketIcon />}
                    hoverIcon={<RocketIcon color="#FFFFFF" />}
                    selected={pathname === "/auth/getstarted"}
                />

                {/* Progress Bar */}
                <div className="h-[7px] w-[112px] bg-[#969696]  ml-14 rounded-full divide-x-3 divide-customDark-300 grid grid-cols-5 ">
                    <div className="bg-[#2ED370] rounded-l-full w-[22px]"></div>
                    <div className="bg-[#2ED370] w-[22px]"></div>
                    <div className="w-[22px]"></div>
                    <div className="w-[22px]"></div>
                    <div className="w-[22px]"></div>
                </div>
            </div>

            <div>
                <div
                    className="h-4  cursor-pointer group mx-3  my-4 flex justify-between items-center px-3"
                    onClick={() => setCategoriesVisible(!isCategoriesVisible)}
                >
                    <h2 className="font-bold group-hover:text-white font-sans  text-xs leading-4  text-textgray-100 tracking-[0.1rem] ">
                        CATEGORIES
                    </h2>
                    <span>
                        <DropDownIcon color="#969696" />
                    </span>
                </div>
                {isCategoriesVisible &&
                    categories.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => handleNavigation(item.path)}
                        >
                            <SidebarButton
                                icon={item.icon}
                                hoverIcon={item.hoverIcon}
                                title={item.title}
                                selected={pathname === item.path}
                            />
                        </div>
                    ))}
            </div>

            <div>
                <div
                    className="h-4  cursor-pointer group mx-3  my-4 flex justify-between items-center px-3"
                    onClick={() => setWalletVisible(!isWalletVisible)}
                >
                    <h2 className="font-bold group-hover:text-white font-sans  text-xs leading-4  text-textgray-100 tracking-[0.1rem] ">
                        WALLET
                    </h2>
                    <span>
                        <DropDownIcon color="#969696" />
                    </span>
                </div>

                {isWalletVisible &&
                    walletItems.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => handleNavigation(item.path)}
                        >
                            <SidebarButton
                                icon={item.icon}
                                hoverIcon={item.hoverIcon}
                                title={item.title}
                                selected={pathname === item.path}
                            />
                        </div>
                    ))}
            </div>

            <div>
                <div
                    className="h-4  cursor-pointer group mx-3  my-4 flex justify-between items-center px-3"
                    onClick={() => setFoldersVisible(!isFoldersVisible)}
                >
                    <h2 className="font-bold group-hover:text-white font-sans  text-xs leading-4  text-textgray-100 tracking-[0.1rem] ">
                        FOLDERS
                    </h2>
                    <span>
                        <DropDownIcon color="#969696" />
                    </span>
                </div>

                {isFoldersVisible &&
                    folders.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => handleNavigation(item.path)}
                        >
                            <SidebarButton
                                icon={item.icon}
                                hoverIcon={item.hoverIcon}
                                title={item.title}
                                selected={pathname === item.path}
                            />
                        </div>
                    ))}
            </div>

            <div className=" sticky pb-23 bottom-0 bg-customDark-300 border-t-2 border-white">
                <div className="mt-6">
                    <div
                        className="h-4 cursor-pointer group mx-3  my-4 flex justify-between items-center px-3"
                        onClick={() => setToolsVisible(!isToolsVisible)}
                    >
                        <h2 className="font-bold group-hover:text-white font-sans  text-xs leading-4  text-textgray-100 tracking-[0.1rem] ">
                            TOOLS
                        </h2>
                        <span>
                            <DropDownIcon color="#969696" />
                        </span>
                    </div>
                    {isToolsVisible &&
                        tools.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => handleNavigation(item.path)}
                            >
                                <SidebarButton
                                    icon={item.icon}
                                    hoverIcon={item.hoverIcon}
                                    title={item.title}
                                    selected={pathname === item.path}
                                />
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}
