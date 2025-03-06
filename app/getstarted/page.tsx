"use client";
import React, { useState } from "react";
import GetStartedItem from "../components/GetStartedItem";
import AddPasswordIcon from "../icons/AddPasswordIcon";
import MobileIcon from "../icons/MobileIcon";
import MfaIcon from "../icons/MfaIcon";
import PuzzleIcon from "../icons/PuzzleIcon";
import ShieldIcon from "../icons/ShieldIcon";

const Page = () => {
    const [steps, setSteps] = useState([
        { id: 1, completed: false },
        { id: 2, completed: false },
        { id: 3, completed: false },
        { id: 4, completed: false },
        { id: 5, completed: false },
    ]);

    const toggleStepCompletion = (id: number) => {
        setSteps(
            steps.map((step) =>
                step.id === id ? { ...step, completed: !step.completed } : step
            )
        );
    };
    return (
        <div className=" w-screen">
            <div className="w-[180px] h-[39px] absolute top-[142px] left-[395px] font-inter font-semibold text-[32px] leading-[38.73px] tracking-normal text-white">
                Get Started
            </div>
            <div className="w-[640px] h-[24px] absolute top-[189px] left-[395px] font-inter font-normal text-[16px] leading-[24px] tracking-[-0.5%] text-[#CCCCCC]">
                Now it’s time to explore secure passwords and make your life
                more easier and secure.
            </div>
            <div className="absolute top-[273px] left-[395px] flex flex-col gap-6">
                <GetStartedItem
                    icon={<AddPasswordIcon />}
                    title="Save First Password or Import Passwords"
                    description="Importing passwords from any password manager or browser."
                    completionTime="1 minute"
                    completed={steps[0].completed}
                    onclick={() => toggleStepCompletion(1)}
                />

                <div className="w-[990px] border-t border-[#333333] border-[1px]"></div>
                <GetStartedItem
                    icon={<MobileIcon />}
                    title="Download mobile app"
                    description="Take SecurePasswords with you every with the mobile app."
                    completionTime="3 minute"
                    completed={steps[1].completed}
                    onclick={() => toggleStepCompletion(2)}
                />

                <div className="w-[990px] border-t border-[#333333] border-[1px]"></div>
                <GetStartedItem
                    icon={<MfaIcon />}
                    title="Setup MFA with mobile app"
                    description="Improve the security of your digital life."
                    completionTime="3 minute"
                    completed={steps[2].completed}
                    onclick={() => toggleStepCompletion(3)}
                />

                <div className="w-[990px] border-t border-[#333333] border-[1px]"></div>
                <GetStartedItem
                    icon={<PuzzleIcon />}
                    title="Add SecurePasswords browser extension"
                    description="For fast and easy logins get the plugin for your favorite browser."
                    completionTime="3 minute"
                    completed={steps[3].completed}
                    onclick={() => toggleStepCompletion(4)}
                />

                <div className="w-[990px] border-t border-[#333333] border-[1px]"></div>
                <GetStartedItem
                    icon={<ShieldIcon />}
                    title="Review Security Audit (Only if imported password)"
                    description="Check to ensure you are following best security practices."
                    completionTime="3 minute"
                    completed={steps[4].completed}
                    onclick={() => toggleStepCompletion(5)}
                />
            </div>
        </div>
    );
};

export default Page;
