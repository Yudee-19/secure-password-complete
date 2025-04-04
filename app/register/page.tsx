"use client";
import React, { useState } from "react";
import ShieldIcon from "../components/ShieldIcon";
import Logo from "../icons/Logo";
import { useRouter } from "next/navigation";
import { PrimaryButtonSignIn } from "../components/Buttons";
import AppleStore from "../icons/AppleStore";
const Page = () => {
    const router = useRouter();
    const [fullName, setfullName] = useState("");
    const [userName, setuserName] = useState("");
    const [emailAddress, setemailAddress] = useState("");
    const [remember, setRemember] = useState(false); // Track checkbox state
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const handleNext = () => {
        // Basic validation
        if (!fullName || !userName || !emailAddress || !remember) {
            setError("All fields are required");
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailAddress)) {
            setError("Please enter a valid email address");
            return;
        }

        setIsLoading(true);
        setError(null);

        try {
            // Store data from first page
            localStorage.setItem(
                "registration_data",
                JSON.stringify({
                    full_name: fullName,
                    username: userName,
                    email_address: emailAddress,
                })
            );
            router.push("/register/register2");
        } catch (err) {
            setError(`An error occurred. Please try again. ${err}`);
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <div>
            <div className="flex h-screen w-screen">
                <div className="md:w-[661px] w-full    md:pb-11 flex flex-col justify-between items-center md:items-start h-full  bg-white">
                    <div className="Logo flex gap-3 pt-[50px] md:pt-21 md:pl-17 px:5 ">
                        <Logo width="35" height="31" />
                        <div className="justify-start text-customDark-0 md:text-2xl text-lg font-black md:font-extrabold font-inter">
                            Secure Passwords
                        </div>
                    </div>

                    <div className="xs:w-96 w-72 h-auto gap-5 flex flex-col  md:pl-17 px:5 ">
                        <div className="flex flex-col gap-2">
                            <div className="justify-start text-customDark-0 md:text-3xl xs:text2xl text-lg font-bold font-inter">
                                Account Registration
                            </div>
                            <div className="justify-start">
                                <span className="text-textgray-100 text-sm font-medium font-inter leading-tight">
                                    Already have an account ?{" "}
                                </span>
                                <span
                                    className="text-[#20934E] cursor-pointer text-sm font-medium font-inter leading-tight"
                                    onClick={() => {
                                        router.push("/signin");
                                    }}
                                >
                                    Sign in
                                </span>
                            </div>
                        </div>
                        <div id="FullName-field">
                            <label htmlFor="fullname">
                                <input
                                    className="xs:w-96 w-72 h-12  rounded  border-2 border-stone-300 outline-none  text-textgray-100 placeholder:text-textgray-100 outline-stone-300 overflow-hidden px-4"
                                    id="fullname"
                                    type="text"
                                    placeholder="Full Name"
                                    value={fullName} // Controlled input
                                    onChange={(e) =>
                                        setfullName(e.target.value)
                                    } // Update stat
                                />
                            </label>
                        </div>
                        <div id="Username-field">
                            <label htmlFor="username">
                                <input
                                    className="xs:w-96 w-72 h-12  rounded  border-2 border-stone-300 outline-none  text-textgray-100 placeholder:text-textgray-100 outline-stone-300 overflow-hidden px-4"
                                    id="username"
                                    type="text"
                                    placeholder="Username"
                                    value={userName} // Controlled input
                                    onChange={(e) =>
                                        setuserName(e.target.value)
                                    } // Update stat
                                />
                            </label>
                        </div>
                        <div id="Email-field" className="relative">
                            <label htmlFor=" email ">
                                <input
                                    className="xs:w-96 w-72 h-12 rounded border-2 border-stone-300 outline-none text-textgray-100 placeholder:text-textgray-100 outline-stone-300 overflow-hidden px-4"
                                    id="password"
                                    type="email"
                                    placeholder="Email"
                                    value={emailAddress} // Controlled input
                                    onChange={(e) =>
                                        setemailAddress(e.target.value)
                                    }
                                />
                            </label>
                        </div>
                        <div className=" flex justify-between items-center h-5 md:w-[427px] w-[319px]">
                            <div className="flex h-[21px] items-center justify-center gap-2">
                                <label
                                    htmlFor="remember"
                                    className="flex gap-1"
                                >
                                    <input
                                        checked={remember} // Controlled checkbox
                                        onChange={(e) =>
                                            setRemember(e.target.checked)
                                        } // Update state
                                        type="checkbox"
                                        className=" border-stone-300  appearance-none w-4 h-4 border-2  rounded-sm checked:bg-[#0F6FFD] checked:border-[#0F6FFD] relative checked:after:content-['✓'] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:text-white checked:after:text-sm checked:after:transform checked:after:-translate-x-1/2 checked:after:-translate-y-1/2"
                                    />
                                </label>
                                <div className=" justify-start md:w-[450px] w-[319px]   ">
                                    <span className="text-textgray-100 text-sm font-medium font-inter leading-tight">
                                        I agree to SecurePasswords 
                                    </span>
                                    <span className="text-blue-500 text-sm font-medium font-inter leading-tight">
                                        Terms of service
                                    </span>
                                    <span className="text-textgray-100 text-sm font-medium font-inter leading-tight">
                                         and 
                                    </span>
                                    <span className="text-blue-500 text-sm font-medium font-inter leading-tight">
                                        Privacy Policy
                                    </span>
                                    <span className="text-textgray-100 text-sm font-medium font-inter leading-tight">
                                        .
                                    </span>
                                </div>
                            </div>
                        </div>

                        {error && (
                            <div className="text-red-500 text-sm mt-2">
                                {error}
                            </div>
                        )}

                        <div className="xs:w-96 w-72" onClick={handleNext}>
                            <PrimaryButtonSignIn
                                height="40"
                                width="100%"
                                text={isLoading ? "Processing..." : "Next"}
                                enabled={
                                    !!(
                                        emailAddress &&
                                        fullName &&
                                        userName &&
                                        remember
                                    )
                                }
                            />
                        </div>
                    </div>

                    {/* Version Info */}
                    <div className="VersionInfo md:block hidden  md:pt-21 md:pl-17 px:5">
                        <span className="text-textgray-100 text-base font-medium font-inter leading-normal">
                            Version{" "}
                        </span>
                        <span className="text-textgray-100 text-base font-medium font-inter leading-normal tracking-tight">
                            2024.1.0
                        </span>
                    </div>

                    {/* Mobile version */}
                    <div className="flex md:hidden w-full mt-8 flex-col justify-center items-center gap-4 py-6 border-t-2 border-[#cccccc] ">
                        <div className="xs:w-96 w-72 text-center justify-start text-textgray-100 text-sm font-medium font-inter leading-tight">
                            It seems you&apos;re on a mobile device. For the
                            best experience, we suggest downloading our <br />
                            mobile app.
                        </div>
                        <div className="">
                            <AppleStore />
                        </div>
                    </div>
                </div>
                <div className="md:w-[779px] hidden md:flex h-full flex-1  bg-[url(../public/bg.png)] bg-cover justify-center items-center bg-blend-overlay bg-green-500/40 ">
                    <ShieldIcon />
                </div>
            </div>
        </div>
    );
};

export default Page;
