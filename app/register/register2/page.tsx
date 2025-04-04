"use client";
import React, { useState, useEffect } from "react";
import ShieldIcon from "../../components/ShieldIcon";
import Logo from "../../icons/Logo";
import { useRouter } from "next/navigation";
import { PrimaryButton, PrimaryButtonSignIn } from "../../components/Buttons";
import EyeIcon from "../../icons/EyeIcon";
import PasswordStrengthIndicator from "../../components/PasswordStrengthIndicator";
import { Stream } from "stream";

type PasswordStrengthType = {
    strength: "weakest" | "weak" | "strong" | "strongest";
    color: string;
};

const Page = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [masterPassword, setMasterPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordStrength, setPasswordStrength] =
        useState<PasswordStrengthType>({
            strength: "weakest",
            color: "bg-red-500",
        });

    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    // Function to check password strength
    const checkPasswordStrength = (password: string): PasswordStrengthType => {
        const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        const hasNumber = /\d/.test(password);
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const isLongEnough = password.length >= 8;

        // Calculate the strength based on multiple factors
        let strengthScore = 0;

        if (isLongEnough) strengthScore += 1;
        if (hasSymbol) strengthScore += 1;
        if (hasNumber) strengthScore += 1;
        if (hasUpperCase) strengthScore += 1;
        if (hasLowerCase) strengthScore += 1;

        if (strengthScore === 5) {
            return { strength: "strongest", color: "bg-green-500" };
        } else if (strengthScore >= 3) {
            return { strength: "strong", color: "bg-blue-500" };
        } else if (strengthScore >= 2) {
            return { strength: "weak", color: "bg-yellow-500" };
        } else {
            return { strength: "weakest", color: "bg-red-500" };
        }
    };

    // Effect to check password strength whenever password changes
    useEffect(() => {
        const strength = checkPasswordStrength(masterPassword);
        setPasswordStrength(strength);
    }, [masterPassword]);

    // Toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const router = useRouter();
    const handleSignUp = async () => {
        if (
            masterPassword !== confirmPassword ||
            (masterPassword === "" && confirmPassword === "")
        ) {
            setError("Empty Passwords or Passwords do not match! ");
            return;
        }
        if (
            passwordStrength.strength == "weak" ||
            passwordStrength.strength == "weakest"
        ) {
            setError("Please choose strong Password!! ");
            return;
        }

        setIsLoading(true);
        setError(null);

        try {
            // Retrieve stored registration data
            const registrationData = JSON.parse(
                localStorage.getItem("registration_data") || "{}"
            );

            // Prepare the request body
            const requestBody = {
                username: registrationData.username,
                password: masterPassword,
                email_address: registrationData.email_address,
                full_name: registrationData.full_name,
            };
            console.log(requestBody);
            console.log(process.env.NEXT_PUBLIC_BASE_URL);

            // Make the API call
            const response = await fetch(
                `https://staging-secure-passwords.onrender.com/auth/register`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(requestBody),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Registration failed");
            }

            // On success, redirect to the next page
            router.push("/register/register3");
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
                <div className=" w-[661px]  pt-21 pl-17 pb-11 flex flex-col justify-between h-full  bg-white">
                    <div className="Logo flex gap-3 ">
                        <Logo width="35" height="31" />
                        <div className="justify-start text-customDark-0 text-2xl font-extrabold font-inter">
                            Secure Passwords
                        </div>
                    </div>

                    <div className="w-96 h-72 gap-5 flex flex-col ">
                        <div className="flex flex-col gap-2">
                            <div className="justify-start text-customDark-0 text-3xl font-bold font-inter">
                                Account Registration
                            </div>
                            <div className="justify-start">
                                <span className="text-textgray-100 text-sm font-medium font-inter leading-tight">
                                    Choose a strong master password for your
                                    vault.
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <div id="MasterPassword-field">
                                <label htmlFor="id">
                                    <input
                                        className="w-96 h-12  rounded  border-2 border-stone-300 outline-none  text-textgray-100 placeholder:text-textgray-100 outline-stone-300 overflow-hidden px-4"
                                        id="MasterPassword"
                                        type="text"
                                        placeholder="Master Password"
                                        value={masterPassword}
                                        onChange={(e) =>
                                            setMasterPassword(e.target.value)
                                        }
                                    />
                                </label>
                            </div>

                            <PasswordStrengthIndicator
                                passwordStrength={passwordStrength}
                            />

                            <div id="Password-field" className="relative">
                                <label htmlFor=" password ">
                                    <input
                                        className="w-96 h-12  rounded border-2 border-stone-300 outline-none text-textgray-100 placeholder:text-textgray-100 outline-stone-300 overflow-hidden px-4"
                                        id="ConfirmMasterPassword"
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        placeholder="Confirm Master Password"
                                        value={confirmPassword}
                                        onChange={(e) =>
                                            setConfirmPassword(e.target.value)
                                        }
                                    />
                                    <span
                                        className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2"
                                        onClick={togglePasswordVisibility}
                                    >
                                        <EyeIcon />
                                    </span>
                                </label>
                            </div>
                            {/* Error message */}
                            {error && (
                                <p className="text-red-500 text-sm">{error}</p>
                            )}
                        </div>

                        {/* Sign up button */}
                        <div onClick={handleSignUp}>
                            <PrimaryButtonSignIn
                                height="40"
                                width="100%"
                                text={isLoading ? "Signing up..." : "Sign up"}
                                enabled={!!(masterPassword && confirmPassword)}
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
                <div className="w-[779px] h-full flex-1  bg-[url(../public/bg.png)] bg-cover  flex justify-center items-center bg-blend-overlay bg-green-500/40 ">
                    <ShieldIcon />
                </div>
            </div>
        </div>
    );
};

export default Page;
