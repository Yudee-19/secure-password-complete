"use client";
import React, { useState, useEffect } from "react";
import ShieldIcon from "../../components/ShieldIcon";
import Logo from "../../icons/Logo";
import { PrimaryButtonSignIn } from "../../components/Buttons";
import OtpBox from "../../components/OtpBox";
import { useRouter } from "next/navigation";
const Page = () => {
    const router = useRouter();
    const [otp, setOtp] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Get email from localStorage when component mounts
        try {
            const registrationData = JSON.parse(
                localStorage.getItem("registration_data") || "{}"
            );
            setEmail(registrationData.email_address || "");
        } catch (err) {
            console.error("Error retrieving email from localStorage:", err);
            router.push("/register");
        }
    }, []);

    const handleOtpComplete = (otp: string) => {
        console.log("Completed OTP:", otp);
        setOtp(otp);
    };

    const handleVerify = async () => {
        console.log(otp);
        if (!otp || otp.length !== 6) {
            setError("Please enter a valid 6-digit code");
            return;
        }

        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(
                "https://staging-secure-passwords.onrender.com/auth/verify-email",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        otp: otp,
                        email_address: email,
                    }),
                }
            );
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Verification failed");
            }
            localStorage.removeItem("registration_data");
            // On successful verification
            router.push("/auth/getstarted");
        } catch (err) {
            setError(
                err instanceof Error ? err.message : "An unknown error occurred"
            );
        } finally {
            setIsLoading(false);
        }
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
                                    We sent a 6 digit code to{" "}
                                    {email || "your email"}.
                                </span>
                            </div>
                        </div>

                        <div className="">
                            <OtpBox onComplete={handleOtpComplete} />
                        </div>

                        {error && (
                            <div className="text-red-500 text-sm">{error}</div>
                        )}

                        <div onClick={handleVerify}>
                            <PrimaryButtonSignIn
                                height="40"
                                width="100%"
                                text={isLoading ? "Verifying..." : "Verify"}
                                enabled={!!(otp && otp.length === 6)}
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
