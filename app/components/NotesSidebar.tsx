import React, { useState, ChangeEvent } from "react";
import CloseIcon from "../icons/CloseIcon";
import UploadIcon from "../icons/UploadIcon";
import ToggleButton from "./ToggleButton";

interface NotesSidebarProp {
    isOpen: boolean;
    onClose: () => void;
}

const NotesSidebar: React.FC<NotesSidebarProp> = ({ isOpen, onClose }) => {
    const [activeSection, setActiveSection] = useState("Details");

    if (!isOpen) return null;

    // Function to get appropriate class based on section name
    const getSectionClass = (sectionName: string) => {
        return activeSection === sectionName
            ? "text-customWhite border-b-2 border-bg-customWhite pb-[2px] text-[18px] font-semibold font-Inter cursor-pointer"
            : "text-[#a0a0a0] text-lg font-semibold cursor-pointer";
    };
    return (
        <>
            <div
                className="fixed inset-0 flex bg-[#0a0a0ac7] justify-end z-50 "
                onClick={onClose}
            >
                {/* Form */}
                <div
                    className="w-[700px] h-screen bg-customDark-50 absolute right-0 top-0 overflow-y-auto "
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="flex justify-between items-center mb-4  pl-8 pr-8 pt-10 pb-8 border-b-1 border-b-[#5A5A5A] ">
                        <h2 className="text-[24px] font-Inter font-bold text-white">
                            Add a Secure Note
                        </h2>
                        <button
                            onClick={onClose}
                            className="text-white cursor-pointer "
                        >
                            <CloseIcon />
                        </button>
                    </div>

                    <div className="">
                        {/* Sections */}
                        <div className=" pl-8 flex justify-start gap-6 mb-4">
                            <span
                                className={getSectionClass("Details")}
                                onClick={() => setActiveSection("Details")}
                            >
                                Details
                            </span>
                            <span
                                className={getSectionClass("Attachments")}
                                onClick={() => setActiveSection("Attachments")}
                            >
                                Attachments
                            </span>
                            <span
                                className={getSectionClass("AdvancedSettings")}
                                onClick={() =>
                                    setActiveSection("AdvancedSettings")
                                }
                            >
                                Advanced Settings
                            </span>
                        </div>

                        {/* Content */}
                        {activeSection === "Details" && <DetailsSections />}
                        {activeSection === "Attachments" && <Attachments />}
                        {activeSection === "AdvancedSettings" && (
                            <AdvancedSettings />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

const DetailsSections = () => {
    return (
        <div className="mt-2 flex flex-col gap-4 items-center px-8 ">
            <div className="relative w-full h-[69px] ">
                <textarea className="w-full h-full outline-none bg-transparent rounded border-2 border-[#5a5a5a] text-medium text-customWhite pl-6 pt-7" />
                <span className="absolute top-3 left-6  text-[#a0a0a0] text-sm font-semibold font-inter leading-normal pointer-events-none">
                    Name*
                </span>
            </div>
            <div className="relative w-full h-[795px] ">
                <textarea
                    className="w-full h-full outline-none bg-transparent rounded border-2 border-[#5a5a5a] text-medium text-customWhite pl-6 pt-7 placeholder: text-base placeholder:font-semibold"
                    placeholder="Type your notes here..."
                />
            </div>
        </div>
    );
};

// Define types for your files
type FileItem = {
    name: string;
    type: string;
    // Add other properties as needed
};

const Attachments = () => {
    // Change the type definition from never[] to FileItem[]
    const [files, setFiles] = useState<FileItem[]>([]);
    const [error, setError] = useState<string>("");

    // Add proper type for the event
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;

        const selectedFiles = Array.from(e.target.files);

        // Check file type
        const validTypes = [
            "application/pdf",
            "image/png",
            "image/jpeg",
            "image/jpg",
            "image/webp",
        ];
        const invalidFiles = selectedFiles.filter(
            (file) => !validTypes.includes(file.type)
        );

        if (invalidFiles.length > 0) {
            setError("Only PDF, PNG, JPG & WEBP files are allowed.");
            return;
        }

        // Check maximum limit
        if (files.length + selectedFiles.length > 5) {
            setError("Maximum 5 files can be uploaded.");
            return;
        }

        setError("");

        // Convert File objects to FileItem type
        const newFiles: FileItem[] = selectedFiles.map((file) => ({
            name: file.name,
            type: file.type,
            // Map other properties as needed
        }));

        setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    };

    // Add proper type for index
    const handleRemoveFile = (index: number) => {
        setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    };

    // Add proper type for file
    const getFileIcon = (file: FileItem) => {
        if (file.type === "application/pdf") {
            return (
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M14 4.5V14C14 14.5523 13.5523 15 13 15H3C2.44772 15 2 14.5523 2 14V2C2 1.44772 2.44772 1 3 1H10.5L14 4.5Z"
                        stroke="#afafaf"
                        strokeWidth="1.5"
                    />
                    <path d="M14 5H11V2" stroke="#afafaf" strokeWidth="1.5" />
                </svg>
            );
        } else {
            // Icon for image files
            return (
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        x="2"
                        y="2"
                        width="12"
                        height="12"
                        rx="1"
                        stroke="#afafaf"
                        strokeWidth="1.5"
                    />
                    <circle cx="5.5" cy="5.5" r="1.5" fill="#afafaf" />
                    <path
                        d="M2 11L5 8L7 10L10 7L14 11"
                        stroke="#afafaf"
                        strokeWidth="1.5"
                    />
                </svg>
            );
        }
    };

    return (
        <div className="px-8">
            <div className="mb-4">
                <label
                    htmlFor="file-upload"
                    className="cursor-pointer w-full h-[244px] bg-[#1F2923] flex flex-col items-center gap-4 pt-11 border-dashed border-[#20934E] border-3 rounded-xl relative"
                >
                    <input
                        type="file"
                        id="file-upload"
                        className="sr-only"
                        accept=".pdf,.png,.jpg,.jpeg,.webp"
                        onChange={handleFileChange}
                        multiple
                    />
                    <div className="w-[75px] h-[75px] rounded-full bg-[#20934E] flex justify-center items-center">
                        <UploadIcon />
                    </div>
                    <p className="text-white text-xl font-medium font-inter">
                        Upload a file
                    </p>
                    <div>
                        <span className="text-[#f06868] text-base font-medium font-Inter leading-normal">
                            *{" "}
                        </span>
                        <span className="text-[#afafaf] text-base font-medium font-inter leading-normal">
                            Supported files: .png .jpg .pdf & .webp (
                            {files.length}/5)
                        </span>
                    </div>
                    {error && (
                        <div className="text-[#f06868] text-sm mt-2">
                            {error}
                        </div>
                    )}
                </label>
            </div>

            {/* File List Display */}
            {files.length > 0 && (
                <div className="bg-[#1F1F1F] rounded-lg p-4">
                    <div className="flex flex-col gap-2">
                        {files.map((file, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between py-2 border-b border-[#333333]"
                            >
                                <div className="flex items-center gap-2">
                                    {getFileIcon(file)}
                                    <span className="text-[#afafaf] text-sm truncate max-w-[280px]">
                                        {file.name}
                                    </span>
                                </div>
                                <button
                                    onClick={() => handleRemoveFile(index)}
                                    className="text-[#f06868] p-1"
                                >
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12 4L4 12M4 4L12 12"
                                            stroke="#f06868"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

const AdvancedSettings = () => {
    return (
        <div className="px-8">
            <div className="flex items-center justify-between mb-4">
                <label className="text-textgray-200 text-[16px] font-normal font-Inter leading-normal">
                    Require master password
                </label>
                <ToggleButton />
            </div>
            <div className="mb-4">
                <label className="text-textgray-200 text-lg font-medium font-inter mb-2 block"></label>
                <select className="w-full h-18 bg-customDark-50 text-textgray-200 border-2 border-[#5a5a5a] rounded px-4">
                    <option value="folder1">Folder 1</option>
                    <option value="folder2">Folder 2</option>
                    <option value="folder3">Folder 3</option>
                </select>
            </div>
        </div>
    );
};
export default NotesSidebar;
