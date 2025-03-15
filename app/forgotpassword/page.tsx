"use client";
import ShieldIcon from "../components/ShieldIcon";
import Logo from "../icons/Logo";
import { useRouter } from "next/navigation";
import { PrimaryButton } from "../components/Buttons";
import EyeIcon from "../icons/EyeIcon";
import PasswordStrengthIndicator from "../components/PasswordStrengthIndicator";
import Arrow from "../components/Arrow";

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
                                Forgot password?
                            </div>
                            <div className="justify-start">
                                <span className="text-textgray-100 text-sm font-medium font-inter leading-tight">
                                    Follow the steps to reset your password.
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <div id="MasterPassword-field">
                                <label htmlFor="email">
                                    <input
                                        className="w-96 h-12  rounded  border-2 border-stone-300 outline-none  text-textgray-100 placeholder:text-textgray-100 outline-stone-300 overflow-hidden px-4"
                                        id="email"
                                        type="email"
                                        placeholder="Email"
                                    />
                                </label>
                            </div>
                        </div>

                        <div
                            onClick={() => {
                                router.push("/forgotpassword/forgotpassword2");
                            }}
                        >
                            <PrimaryButton
                                height="40"
                                width="100%"
                                text="Reset password"
                            />
                        </div>

                        <div
                            className="flex items-center gap-2 cursor-pointer"
                            onClick={() => {
                                router.push("/signin");
                            }}
                        >
                            <span className="pt-[2px]">
                                <Arrow />
                            </span>
                            <div className=" text-textgray-100 text-sm font-[500] font-interleading-tight">
                                Back to sign in
                            </div>
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
