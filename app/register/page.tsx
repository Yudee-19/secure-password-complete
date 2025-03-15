"use client";
import React from "react";
import ShieldIcon from "../components/ShieldIcon";
import Logo from "../icons/Logo";
import { useRouter } from "next/navigation";
import { PrimaryButton } from "../components/Buttons";
const page = () => {
    const router = useRouter();
    return (
        <div>
            <div className="flex h-screen w-screen">
                <div className=" w-full max-w-[700px] flex-1 pt-21 pl-17 pb-11 flex flex-col justify-between h-full  bg-white">
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
                                    className="w-96 h-12  rounded  border-2 border-stone-300 outline-none  text-textgray-100 placeholder:text-textgray-100 outline-stone-300 overflow-hidden px-4"
                                    id="fullname"
                                    type="text"
                                    placeholder="Full Name"
                                />
                            </label>
                        </div>
                        <div id="Username-field">
                            <label htmlFor="username">
                                <input
                                    className="w-96 h-12  rounded  border-2 border-stone-300 outline-none  text-textgray-100 placeholder:text-textgray-100 outline-stone-300 overflow-hidden px-4"
                                    id="username"
                                    type="text"
                                    placeholder="Username"
                                />
                            </label>
                        </div>
                        <div id="Email-field" className="relative">
                            <label htmlFor=" email ">
                                <input
                                    className="w-96 h-12  rounded border-2 border-stone-300 outline-none text-textgray-100 placeholder:text-textgray-100 outline-stone-300 overflow-hidden px-4"
                                    id="password"
                                    type="email"
                                    placeholder="Email"
                                />
                            </label>
                        </div>
                        <div className=" flex justify-between items-center h-5 w-[427px]">
                            <div className="flex items-center justify-center gap-1">
                                <label
                                    htmlFor="remember"
                                    className="flex gap-1"
                                >
                                    <input
                                        type="checkbox"
                                        className="appearance-none w-4 h-4 border-2 border-stone-300 rounded-sm checked:bg-[#20934E] checked:border-[#20934E] relative checked:after:content-['✓'] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:text-white checked:after:transform checked:after:-translate-x-1/2 checked:after:-translate-y-1/2"
                                    />
                                </label>
                                <div className=" flex items-center justify-center ">
                                    <span className="text-Color-text-secondary text-sm font-medium font-inter leading-tight">
                                        I agree to SecurePasswords 
                                    </span>
                                    <span className="text-blue-500 text-sm font-medium font-inter leading-tight">
                                        Terms of service
                                    </span>
                                    <span className="text-Color-text-secondary text-sm font-medium font-inter leading-tight">
                                         and 
                                    </span>
                                    <span className="text-blue-500 text-sm font-medium font-inter leading-tight">
                                        Privacy Policy
                                    </span>
                                    <span className="text-Color-text-secondary text-sm font-medium font-inter leading-tight">
                                        .
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div
                            onClick={() => {
                                router.push("/register/register2");
                            }}
                        >
                            <PrimaryButton
                                height="40"
                                width="100%"
                                text="Next"
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

export default page;
