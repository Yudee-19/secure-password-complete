import React from "react";
import LockIcon from "../icons/LockIcon";
import NotesIcon from "../icons/NotesIcon";
import PersonalInfoIcon from "../icons/PersonalInfoIcon";
import CredirCardIcon from "../icons/CredirCardIcon";
import BankIcon from "../icons/BankIcon";
import CryptoIcon from "../icons/CryptoIcon";

const dropDownItem = [
    {
        id: 1,
        title: "Password",
        icon: <LockIcon />,
    },
    {
        id: 2,
        title: "Notes",
        icon: <NotesIcon />,
    },
    {
        id: 3,
        title: "Personal Info",
        icon: <PersonalInfoIcon />,
    },
    {
        id: 4,
        title: "Credit Card",
        icon: <CredirCardIcon />,
    },
    {
        id: 5,
        title: "Bank Account",
        icon: <BankIcon />,
    },
    {
        id: 6,
        title: "Crypto",
        icon: <CryptoIcon />,
    },
];

interface AddItmesDropdownProps {
    isOpen: boolean;
    onClose: () => void;
}

const AddItemsDropdown: React.FC<AddItmesDropdownProps> = ({
    isOpen,
    onClose,
}: AddItmesDropdownProps) => {
    return (
        isOpen && (
            <div
                className="w-[240px] h-[290px]  bg-customDark-0 rounded-xl pt-7 "
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex flex-col gap-[14px]  ">
                    {dropDownItem.map((dropDownItem) => (
                        <div
                            className=" cursor-pointer flex pl-6 p-[2px] gap-2 hover:bg-hoverdark"
                            key={dropDownItem.id}
                        >
                            <span className="p-[2px] w-6 h-6  flex items-center">
                                {dropDownItem.icon}
                            </span>
                            <span className="text-[#EFEFEF] h-6 font-inter font-medium text-base leading-6 tracking-tight ">
                                {dropDownItem.title}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        )
    );
};

export default AddItemsDropdown;
