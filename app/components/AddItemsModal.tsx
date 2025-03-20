import React from "react";
import CloseIcon from "../icons/CloseIcon";
import LockIcon from "../icons/LockIcon";
import NotesIcon from "../icons/NotesIcon";
import PersonalInfoIcon from "../icons/PersonalInfoIcon";
import CryptoIcon from "../icons/CryptoIcon";
import BankIcon from "../icons/BankIcon";
import CreditCardIcon from "../icons/CreditCardIcon";

interface AddItemsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AddItemsModal: React.FC<AddItemsModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-[#0a0a0ac7] flex justify-center items-center pt-20 z-50"
            onClick={onClose}
        >
            {/* Modal Content */}
            <div
                className="bg-customDark-0  rounded-lg w-[516px] h-[392px] py-8 px-6 shadow-lg"
                onClick={(e) => e.stopPropagation()} // Prevent closing on click inside
            >
                <div className="flex justify-between">
                    <div className="text-[#efefef] text-[20px] font-inter leading-[] font-bold text-lg">
                        Choose an Item
                    </div>
                    <button onClick={onClose}>
                        <CloseIcon />
                    </button>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-6">
                    <div className="flex flex-col justify-center items-center gap-2 px-8 py-6 hover:bg-hoverdark-2">
                        <LockIcon color="#A0A0A0" height="50" width="50" />
                        <div className=" font-inter text-textgray-200 font-medium text-base leading-6">
                            Password
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2 px-8 py-6 hover:bg-hoverdark-2">
                        <NotesIcon color="#A0A0A0" height="50" width="50" />
                        <div className=" font-inter text-textgray-200 font-medium text-base leading-6">
                            Notes
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2 px-8 py-6 hover:bg-hoverdark-2">
                        <PersonalInfoIcon
                            color="#A0A0A0"
                            height="50"
                            width="50"
                        />
                        <div className=" w-[120px] flex justify-center font-inter text-textgray-200 font-medium text-base leading-6">
                            Personal Info
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2 px-8 py-6 hover:bg-hoverdark-2">
                        <CryptoIcon color="#A0A0A0" height="50" width="50" />
                        <div className=" w-[120px] flex justify-center font-inter text-textgray-200 font-medium text-base leading-6">
                            Crypto Account
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2 px-8 py-6 hover:bg-hoverdark-2">
                        <BankIcon color="#A0A0A0" height="50" width="50" />
                        <div className=" w-[120px] flex justify-center font-inter text-textgray-200 font-medium text-base leading-6">
                            Bank Account
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2 px-8 py-6 hover:bg-hoverdark-2">
                        <CreditCardIcon
                            color="#A0A0A0"
                            height="50"
                            width="50"
                        />
                        <div className=" w-[120px] flex justify-center font-inter text-textgray-200 font-medium text-base leading-6">
                            Credit Card
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddItemsModal;
