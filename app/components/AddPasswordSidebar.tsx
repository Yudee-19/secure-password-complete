import React, { useState } from "react";
import CloseIcon from "../icons/CloseIcon";
import { PrimaryButton, SecondaryButton } from "./Buttons";
import EyeIcon from "../icons/EyeIcon";

interface AddPasswordSidebarProp {
    isOpen: boolean;
    onClose: () => void;
}

const AddPasswordSidebar: React.FC<AddPasswordSidebarProp> = ({
    isOpen,
    onClose,
}) => {
    const [showPassword, setShowPassword] = useState(false);

    // Toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    if (!isOpen) return null;

    const AddInputBox = () => {};
    return (
        <>
            <div
                className="fixed inset-0 flex bg-[#0a0a0ac7] justify-end z-50 "
                onClick={onClose}
            >
                {/* Form */}
                <div
                    className="w-[545px] h-screen bg-customDark-50 absolute right-0 top-0 overflow-y-auto "
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="flex justify-between items-center mb-4  pl-8 pr-8 pt-10 pb-8 border-b-1 border-b-[#5A5A5A] ">
                        <h2 className="text-[24px] font-bold text-white">
                            Add a Password
                        </h2>
                        <button
                            onClick={onClose}
                            className="text-white cursor-pointer "
                        >
                            <CloseIcon />
                        </button>
                    </div>

                    {/* Form */}
                    <div>
                        {/* Name */}
                        <div className="flex flex-col gap-10 items-center mb-10">
                            <div className="w-[100px] h-[100px] bg-black rounded-4xl text-white flex justify-center items-center">
                                Icon
                            </div>
                            <input
                                type="text"
                                placeholder="Name *"
                                className="w-[479px] h-[69px] outline-none bg-transparent rounded border-2 border-[#5a5a5a] text-[#a0a0a0]  placeholder-[#a0a0a0] placeholder:text-base placeholder:font-semibold placeholder:font-inter placeholder:leading-normal pl-6 "
                            ></input>
                        </div>

                        {/* Login Details */}
                        <div className=" mb-10">
                            <h2 className="text-xl font-Inter font-bold text-white pl-8 mb-4">
                                Login Details
                            </h2>
                            <div className="flex flex-col gap-4 items-center mb-4">
                                <input
                                    type="text"
                                    placeholder="Email or Username"
                                    className="w-[479px] h-[69px] outline-none bg-transparent rounded border-2 border-[#5a5a5a] text-[#a0a0a0]  placeholder-[#a0a0a0] placeholder:text-base placeholder:font-semibold placeholder:font-inter placeholder:leading-normal pl-6 "
                                ></input>
                                <div className="flex gap-0 ">
                                    <input
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        placeholder="Password"
                                        className="w-[338px] h-[69px] outline-none bg-transparent rounded-l-sm border-l-2 border-y-2 border-[#5a5a5a] text-[#a0a0a0]  placeholder-[#a0a0a0] placeholder:text-base placeholder:font-semibold placeholder:font-inter placeholder:leading-normal pl-6 "
                                    ></input>
                                    <div className="w-[141px] h-[69px] border-[#5a5a5a] border-y-2 rounded-r-sm border-r-2  flex  items-center gap-4 ">
                                        <div className="w-[71px] ml-0 text-[16px] leading-[24px] font-medium font-inter text-[#2ED370] text-right inline-block cursor-pointer">
                                            Generate
                                        </div>
                                        <span
                                            className="cursor-pointer"
                                            onClick={togglePasswordVisibility}
                                        >
                                            <EyeIcon />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="text-textgray-200 text-base font-medium leading-normal cursor-pointer pl-8"
                                onClick={AddInputBox}
                            >
                                + Add Custom Field
                            </div>
                        </div>

                        {/* Websites */}
                        <div>
                            <h2 className="text-xl font-Inter font-bold text-white pl-8 mb-4">
                                Websites
                            </h2>
                            <div className="flex flex-col gap-4 items-center mb-4">
                                <input
                                    type="text"
                                    placeholder="Website URL"
                                    className="w-[479px] h-[69px] outline-none bg-transparent rounded border-2 border-[#5a5a5a] text-[#a0a0a0]  placeholder-[#a0a0a0] placeholder:text-base placeholder:font-semibold placeholder:font-inter placeholder:leading-normal pl-6 "
                                ></input>
                            </div>
                        </div>

                        {/* Other */}
                        <div>
                            <h2 className="text-xl font-Inter font-bold text-white pl-8 mb-4">
                                Other
                            </h2>
                            <div className="flex flex-col gap-4 items-center mb-4">
                                <input
                                    type="text"
                                    placeholder="Folder"
                                    className="w-[479px] h-[69px] outline-none bg-transparent rounded border-2 border-[#5a5a5a] text-[#a0a0a0]  placeholder-[#a0a0a0] placeholder:text-base placeholder:font-semibold placeholder:font-inter placeholder:leading-normal pl-6 "
                                ></input>
                                <input
                                    type="text"
                                    placeholder="Note"
                                    className="w-[479px] h-[175px] outline-none bg-transparent rounded border-2 border-[#5a5a5a] text-[#a0a0a0]  placeholder-[#a0a0a0] placeholder:text-base placeholder:font-semibold placeholder:font-inter placeholder:leading-normal pl-6 "
                                ></input>
                                <input
                                    type="text"
                                    placeholder="Equivalent Domains"
                                    className="w-[479px] h-[69px] outline-none bg-transparent rounded border-2 border-[#5a5a5a] text-[#a0a0a0]  placeholder-[#a0a0a0] placeholder:text-base placeholder:font-semibold placeholder:font-inter placeholder:leading-normal pl-6 "
                                ></input>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className=" w-[545px] h-[72px] flex justify-end gap-2 pr-8 pt-4 pb-4">
                            <PrimaryButton
                                text="Save"
                                height="40"
                                width="120"
                            />
                            <SecondaryButton
                                text="Cancel"
                                height="40"
                                width="120"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddPasswordSidebar;
