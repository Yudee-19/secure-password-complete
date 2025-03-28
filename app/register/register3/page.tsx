"use client";
import React from "react";
import ShieldIcon from "../../components/ShieldIcon";
import Logo from "../../icons/Logo";
import { PrimaryButton } from "../../components/Buttons";
import OtpBox from "../../components/OtpBox";
import { useRouter } from "next/navigation";
const Page = () => {
    const router = useRouter();
    const handleOtpComplete = (otp: string) => {
        console.log("Completed OTP:", otp);
        // Handle verification here
    };

    return (
        <div>
            <div className="flex h-screen w-screen">
                <div className=" w-[661px] pt-21 pl-17 pb-11 flex flex-col justify-between h-full  bg-white">
                    <div className="Logo flex gap-3 ">
                        <Logo width="35" height="31" />
                        <div className="justify-start text-customDark-0 text-2xl font-extrabold font-inter">
                            Secure Passwords
                        </div>
                    </div>

                    <div className="w-96 h-72 gap-5 flex flex-col ">
                        <div className="flex flex-col gap-2">
                            <div className="justify-start text-customDark-0 text-3xl font-bold font-inter">
                                Verify your account
                            </div>
                            <div className="justify-start">
                                <span className="text-textgray-100 text-sm font-medium font-inter leading-tight">
                                    We sent a 6 digit code to “email-address”.
                                </span>
                            </div>
                        </div>

                        <div className="">
                            <OtpBox onComplete={handleOtpComplete} />
                        </div>

                        <div
                            onClick={() => {
                                router.push("/auth/vault");
                            }}
                        >
                            <PrimaryButton
                                height="40"
                                width="100%"
                                text="Verify"
                            />
                        </div>
                    </div>

                    {/* Version Info */}
                    <div className="VersionInfo">
                        <span className="text-textgray-100 text-base font-medium font-inter leading-normal">
                            Version{" "}
                        </span>
                        <span className="text-textgray-100 text-base font-medium font-inter leading-normal tracking-tight">
                            2024.1.0
                        </span>
                    </div>
                </div>
                <div className="w-[804px] h-full flex-2  bg-[url(../public/bg.png)] bg-cover  flex justify-center items-center bg-blend-overlay bg-green-500/40 ">
                    <ShieldIcon />
                </div>
            </div>
        </div>
    );
};

export default Page;
