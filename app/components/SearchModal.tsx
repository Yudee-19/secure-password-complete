import React from "react";
import SearchIcon from "../icons/SearchIcon";
import ContactIcon from "../icons/ContactIcon";
import GreenNotesIcon from "../icons/GreenNotesIcon";
import FolderIcon from "../icons/FolderIcon";
import GreenBankIcon from "../icons/GreenBankIcon";
import LockIcon from "../icons/LockIcon";
import CryptoIcon from "../icons/CryptoIcon";
import CloseIcon from "../icons/CloseIcon";

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-[#0a0a0ac7] flex justify-center items-start pt-20 z-50"
            onClick={onClose}
        >
            {/* Modal Content */}
            <div
                className="bg-[#1a1a1a] rounded-2xl w-[600px] shadow-lg"
                onClick={(e) => e.stopPropagation()} // Prevent closing on click inside
            >
                {/* Search Bar */}
                <div className="flex items-center border-b border-[#555555] p-4">
                    <SearchIcon />
                    <input
                        type="text"
                        placeholder="Search Securepasswords"
                        className="w-full bg-transparent outline-none text-[#CCCCCC] placeholder-[#CCCCCC] placeholder:text-[18px] placeholder:font-medium ml-4"
                    />
                    <button onClick={onClose} className="text-white">
                        <CloseIcon />
                    </button>
                </div>

                {/* Recent Searches */}
                <div className="p-4">
                    <h3 className="text-[#CCCCCC] text-[14px] font-medium mb-2">
                        Recents
                    </h3>
                    <ul className="space-y-3">
                        <li className=" cursor-pointer flex items-center gap-2 text-[#EDEDED] text-[16px] font-medium">
                            <ContactIcon />
                            <span>Sharing Center</span>
                        </li>
                        <li className="cursor-pointer flex items-center gap-2 text-[#EDEDED] text-[16px] font-medium">
                            <GreenNotesIcon />
                            <span>Notes</span>
                        </li>
                        <li className="cursor-pointer flex items-center gap-2 text-[#EDEDED] text-[16px] font-medium">
                            <FolderIcon />
                            <span>Folders &gt; Zaplog</span>
                        </li>
                        <li className="cursor-pointer flex items-center gap-2 text-[#EDEDED] text-[16px] font-medium">
                            <GreenBankIcon
                                color="#2ED370"
                                height="18"
                                width="19"
                            />
                            <span>Bank Account</span>
                        </li>
                    </ul>
                </div>

                {/* Suggested Searches */}
                <div className="p-4">
                    <h3 className="text-[#CCCCCC] text-[14px] font-medium mb-2">
                        Suggested
                    </h3>
                    <ul className="space-y-3">
                        <li className="cursor-pointer flex items-center gap-2 text-[#EDEDED] text-[16px] font-medium">
                            <LockIcon />
                            <span>Passwords</span>
                        </li>
                        <li className=" cursor-pointer flex items-center gap-2 text-[#EDEDED] text-[16px] font-medium">
                            <CryptoIcon
                                height="20px"
                                width="20px"
                                color="#a0a0a0"
                            />
                            <span>Crypto Account</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SearchModal;
