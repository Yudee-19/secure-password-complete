"use client";
import React, { useState } from "react";

export interface SidebarButtonProps {
    icon: React.ReactNode;
    title: string;
    path?: string;
    hoverIcon?: React.ReactNode;
    selected?: boolean;
}

export default function SidebarButton({
    icon,
    hoverIcon,
    title,
    selected = false,
}: SidebarButtonProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`h-[55px] group w-[335px] flex align-middle gap-2 pl-6 items-center ${
                selected
                    ? "bg-hoverdark text-white"
                    : "bg-customDark-300 hover:bg-hoverdark hover:text-white"
            } cursor-pointer`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div>{selected || (isHovered && hoverIcon) ? hoverIcon : icon}</div>

            <div
                className={`leading-6 text-base font-semibold ${
                    selected
                        ? "text-white"
                        : "text-textgray-200 group-hover:text-white"
                }`}
            >
                {title}
            </div>
        </div>
    );
}
