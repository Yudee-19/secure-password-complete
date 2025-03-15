import React, { useState } from "react";
import CloseIcon from "../icons/CloseIcon";
import { PrimaryButton, SecondaryButton } from "./Buttons";
import Squircle from "../icons/Squircle";
import ToggleButton from "./ToggleButton";
import PersonalInfoIcon from "../icons/PersonalInfoIcon";

interface PersonalInfoSidebarProp {
    isOpen: boolean;
    onClose: () => void;
}

interface formFieldsProp {
    id: number;
    placeholder: string;
    height: string;
}

const contactFields: formFieldsProp[] = [
    {
        id: 1,
        placeholder: "Title*",
        height: "69px",
    },
    {
        id: 2,
        placeholder: "Full name*",
        height: "69px",
    },
    {
        id: 3,
        placeholder: "Email",
        height: "69px",
    },
    {
        id: 4,
        placeholder: "Phone",
        height: "69px",
    },
];

const addressFields: formFieldsProp[] = [
    {
        id: 1,
        placeholder: "Address Line 1",
        height: "69px",
    },
    {
        id: 2,
        placeholder: "Address Line 2",
        height: "69px",
    },
];

const addressGridFields: formFieldsProp[] = [
    {
        id: 1,
        placeholder: "Country",
        height: "69px",
    },
    {
        id: 2,
        placeholder: "City / Town",
        height: "69px",
    },
    {
        id: 3,
        placeholder: "State / Province",
        height: "69px",
    },
    {
        id: 4,
        placeholder: "ZIP code",
        height: "69px",
    },
];

const idFields: formFieldsProp[] = [
    {
        id: 1,
        placeholder: "Passport number",
        height: "69px",
    },
    {
        id: 2,
        placeholder: "License number",
        height: "69px",
    },
];

const otherFields: formFieldsProp[] = [
    {
        id: 1,
        placeholder: "Folder",
        height: "69px",
    },
    {
        id: 2,
        placeholder: "Note",
        height: "200px",
    },
];

const PersonalInfoSidebar: React.FC<PersonalInfoSidebarProp> = ({
    isOpen,
    onClose,
}) => {
    if (!isOpen) return null;

    return (
        <>
            <div
                className="fixed inset-0 flex bg-[#0a0a0ac7] justify-end z-50 "
                onClick={onClose}
            >
                {/* Form */}
                <div
                    className="w-[694px] h-screen bg-customDark-50 absolute right-0 top-0 overflow-y-auto "
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="flex justify-between items-center mb-4  pl-8 pr-8 pt-10 pb-8 border-b-1 border-b-[#5A5A5A] ">
                        <h2 className="text-[24px] font-bold text-white">
                            Add Personal Info
                        </h2>
                        <button
                            onClick={onClose}
                            className="text-white cursor-pointer "
                        >
                            <CloseIcon />
                        </button>
                    </div>
                    <div>
                        {/* Bank Icon */}
                        <div className="flex flex-col gap-10 items-center mt-10 mb-10">
                            <div className="w-[100px] h-[100px]">
                                <Squircle
                                    color="#532A13"
                                    height="100"
                                    width="98"
                                    insideIcon={
                                        <PersonalInfoIcon
                                            height="41px"
                                            width="37px"
                                            color="#D3692E"
                                        />
                                    }
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 items-center px-8">
                            {/* Contact Details */}
                            <div className="w-full">
                                <h2 className="text-xl font-Inter font-bold text-white mb-4">
                                    Contact Details
                                </h2>
                                <div className="flex flex-col gap-4">
                                    {contactFields.map((field) => (
                                        <input
                                            key={field.id}
                                            type="text"
                                            placeholder={field.placeholder}
                                            className="w-full h-[69px] outline-none bg-transparent rounded border-2 border-[#5a5a5a] text-[#a0a0a0] placeholder-[#a0a0a0] placeholder:text-base placeholder:font-semibold placeholder:font-inter placeholder:leading-normal pl-6"
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Address Details */}
                            <div className="w-full">
                                <h2 className="text-xl font-Inter font-bold text-white mb-4">
                                    Address details
                                </h2>
                                <div className="flex flex-col gap-4">
                                    {addressFields.map((field) => (
                                        <input
                                            key={field.id}
                                            type="text"
                                            placeholder={field.placeholder}
                                            className="w-full h-[69px] outline-none bg-transparent rounded border-2 border-[#5a5a5a] text-[#a0a0a0] placeholder-[#a0a0a0] placeholder:text-base placeholder:font-semibold placeholder:font-inter placeholder:leading-normal pl-6"
                                        />
                                    ))}
                                    <div className="grid grid-cols-2 gap-4">
                                        {addressGridFields.map((field) => (
                                            <input
                                                key={field.id}
                                                type="text"
                                                placeholder={field.placeholder}
                                                className="w-full h-[69px] outline-none bg-transparent rounded border-2 border-[#5a5a5a] text-[#a0a0a0] placeholder-[#a0a0a0] placeholder:text-base placeholder:font-semibold placeholder:font-inter placeholder:leading-normal pl-6"
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* ID Details */}
                            <div className="w-full">
                                <h2 className="text-xl font-Inter font-bold text-white mb-4">
                                    ID details
                                </h2>
                                <div className="flex flex-col gap-4">
                                    {idFields.map((field) => (
                                        <input
                                            key={field.id}
                                            type="text"
                                            placeholder={field.placeholder}
                                            className="w-full h-[69px] outline-none bg-transparent rounded border-2 border-[#5a5a5a] text-[#a0a0a0] placeholder-[#a0a0a0] placeholder:text-base placeholder:font-semibold placeholder:font-inter placeholder:leading-normal pl-6"
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Others */}
                            <div className="my-10 ">
                                <h2 className="text-xl font-Inter font-bold text-white mb-4">
                                    Other
                                </h2>
                                <div className="flex flex-col gap-4 items-center mb-4">
                                    <input
                                        placeholder="Folder"
                                        className="w-[634px] h-[69px] outline-none bg-transparent rounded border-2 border-[#5a5a5a] text-[#a0a0a0]  placeholder-[#a0a0a0] placeholder:text-base placeholder:font-semibold placeholder:font-inter placeholder:leading-normal pl-6  "
                                    ></input>

                                    <div className="relative w-[634px] h-[200px]">
                                        <textarea
                                            className="w-full h-full outline-none bg-transparent rounded border-2 border-[#5a5a5a] text-[#a0a0a0] px-6 pt-10" // Add pt-6 for top padding
                                        />
                                        <span className="absolute top-4 left-6 text-[#a0a0a0] text-base font-semibold font-inter leading-normal pointer-events-none">
                                            Notes
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="h-[30px]  mx-8 flex justify-between items-center">
                            <span>
                                <p className="text-textgray-200 text-base font-medium font-Inter leading-normal">
                                    Require master password to view
                                </p>
                            </span>

                            <span>
                                <ToggleButton />
                            </span>
                        </div>

                        {/* Buttons */}
                        <div className=" h-[72px] flex justify-start gap-2 px-8 mt-8 pb-4">
                            <PrimaryButton
                                text="Save"
                                height="40"
                                width="120"
                            />
                            <span onClick={onClose}>
                                <SecondaryButton
                                    text="Cancel"
                                    height="40"
                                    width="120"
                                />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PersonalInfoSidebar;
