import React from "react";

export interface SidebarButtonProps {
    icon: React.ReactNode;
    title: String;
}

export default function SidebarButton  ({ icon, title }: SidebarButtonProps)  {
    return (
        <div className="h-[55px] w-[335px] flex align-middle gap-2 pl-6 items-center  bg-customDark-300 hover:bg-hoverdark hover:text-white cursor-pointer">
            <div>{icon}</div>

            <div className="leading-6  text-base text-textgray-200  font-semibold">
                {title}
            </div>
        </div>
    );
};

