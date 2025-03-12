"use client";
import React from "react";
import SidebarButton, { SidebarButtonProps } from "./SidebarButton";
import RocketIcon from "../icons/RocketIcon";
import DropDownIcon from "../icons/DropDownIcon";
import { useRouter } from "next/navigation";

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
    const handleNavigation = (path: string | undefined) => {
        if (path) {
            router.push(path);
        }
    };
    return (
        <div className="h-screen w-[335px] bg-customDark-300 fixed flex flex-col top-[82px] left-0 overflow-scroll text-gray-200  ">
            <div
                className="mt-8"
                onClick={() => {
                    router.push("/getstarted");
                }}
            >
                <SidebarButton title={"Get Started"} icon={<RocketIcon />} />
            </div>

            <div className=" flex items-center "></div>

            <div>
                <div className="w-24 h-4 ">
                    <h2 className="font-bold font-sans mt-6 mb-4 text-xs leading-4 ml-6 text-textgray-100 tracking-[0.1rem] ">
                        CATEGORIES
                    </h2>
                </div>
                {categories.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => handleNavigation(item.path)}
                    >
                        <SidebarButton icon={item.icon} title={item.title} />
                    </div>
                ))}
            </div>

            <div>
                <div className="w-24 h-4">
                    <h2 className="font-bold font-sans mt-6 mb-4 text-xs leading-4 ml-6 text-textgray-100 tracking-[0.1rem]">
                        WALLET
                    </h2>
                </div>

                {walletItems.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => handleNavigation(item.path)}
                    >
                        <SidebarButton icon={item.icon} title={item.title} />
                    </div>
                ))}
            </div>

            <div>
                <div className="w-24 h-4">
                    <h2 className="font-bold font-sans mt-6 mb-4 text-xs leading-4 ml-6 text-textgray-100 tracking-[0.1rem]">
                        FOLDERS
                    </h2>
                </div>

                {folders.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => handleNavigation(item.path)}
                    >
                        <SidebarButton icon={item.icon} title={item.title} />
                    </div>
                ))}
            </div>

            <div className=" sticky pb-23 bottom-0 bg-customDark-300 border-t-2 border-white">
                <div className="mt-6">
                    <div className="flex justify-between">
                        <h2 className="font-bold font-sans mb-4 text-xs leading-4 ml-6 text-textgray-100 tracking-[0.1rem]">
                            TOOLS
                        </h2>
                        <div className="pr-4">
                            <DropDownIcon />
                        </div>
                    </div>
                    {tools.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => handleNavigation(item.path)}
                        >
                            <SidebarButton
                                icon={item.icon}
                                title={item.title}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
