"use client";
import React, { useState } from "react";
import ShieldIcon from "../components/ShieldIcon";
import Logo from "../icons/Logo";
import { useRouter } from "next/navigation";
import { PrimaryButton } from "../components/Buttons";
import EyeIcon from "../icons/EyeIcon";
import AppleStore from "../icons/AppleStore";

const Page = () => {
    const [showPassword, setShowPassword] = useState(false);
    // Toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const router = useRouter();
    return (
        <div>
            <div className="flex  h-screen w-screen">
                <div
                    className=" md:w-[661px] w-full   flex flex-col justify-between items-center md:items-start h-full  bg-white
                    md:pb-11"
                >
                    <div className="Logo flex gap-3 pt-[100px]  md:pt-21 md:pl-17 px:5 ">
                        <Logo width="35" height="31" />
                        <div className="justify-start text-customDark-0 md:text-2xl text-lg font-black md:font-extrabold font-inter">
                            Secure Passwords
                        </div>
                    </div>

                    <div className="xs:w-96 w-72  h-auto gap-5  flex flex-col  md:pl-17 px:5 ">
                        <div className="flex flex-col gap-2">
                            <div className="justify-start text-customDark-0 md:text-3xl xs:text2xl text-lg  font-bold font-inter">
                                Welcome back!
                            </div>
                            <div className="justify-start">
                                <span className="text-textgray-100 text-sm font-medium font-inter leading-tight">
                                    New around here ?{" "}
                                </span>
                                <span
                                    className="text-[#20934E] cursor-pointer text-sm font-medium font-inter leading-tight"
                                    onClick={() => {
                                        router.push("/register");
                                    }}
                                >
                                    Create an account.
                                </span>
                            </div>
                        </div>
                        <div id="Id-field">
                            <label htmlFor="id">
                                <input
                                    className="xs:w-96 w-72 h-12  rounded  border-2 border-stone-300 outline-none  text-textgray-100 placeholder:text-textgray-100 outline-stone-300 overflow-hidden px-4"
                                    id="id"
                                    type="text"
                                    placeholder="Username or Email"
                                />
                            </label>
                        </div>
                        <div id="Password-field" className="relative">
                            <label htmlFor=" password ">
                                <input
                                    className="xs:w-96 w-72 h-12  rounded border-2 border-stone-300 outline-none text-textgray-100 placeholder:text-textgray-100 outline-stone-300 overflow-hidden px-4"
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Master Password"
                                />
                                <span
                                    className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2"
                                    onClick={togglePasswordVisibility}
                                >
                                    <EyeIcon />
                                </span>
                            </label>
                        </div>
                        <div className=" flex justify-between h-5">
                            <div className="flex items-center gap-1">
                                <label
                                    htmlFor="remember"
                                    className="flex gap-1"
                                >
                                    <input
                                        type="checkbox"
                                        className=" border-stone-300  appearance-none w-4 h-4 border-2  rounded-sm checked:bg-[#0F6FFD] checked:border-[#0F6FFD] relative checked:after:content-['✓'] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:text-white checked:after:text-sm checked:after:transform checked:after:-translate-x-1/2 checked:after:-translate-y-1/2"
                                    />
                                </label>
                                <span className="text-textgray-100   text-sm font-medium font-inter leading-tight">
                                    Remember me
                                </span>
                            </div>
                            <span
                                className=" cursor-pointer"
                                onClick={() => {
                                    router.push("/forgotpassword");
                                }}
                            >
                                <div className="text-right justify-start text-textgray-100 text-sm font-medium font-inter leading-tight">
                                    Forgot password?
                                </div>
                            </span>
                        </div>
                        <div
                            className="cursor-pointer"
                            onClick={() => {
                                router.push("/auth/vault");
                            }}
                        >
                            <PrimaryButton
                                height="40"
                                width="100%"
                                text="Sign in"
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
                    <div className="flex md:hidden w-full flex-col justify-center items-center gap-4 py-6 border-t-2 border-[#cccccc] ">
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
                <div className="w-[779px] hidden h-full flex-1 bg-[url(../public/bg.png)] bg-cover  md:flex justify-center items-center bg-blend-overlay bg-green-500/40 ">
                    <ShieldIcon />
                </div>
            </div>
        </div>
    );
};

export default Page;
