"use client";
import React, { useRef, useState } from "react";

interface OtpBoxProps {
    length?: number;
    onComplete?: (otp: string) => void;
}

const OtpBox: React.FC<OtpBoxProps> = ({ length = 6, onComplete }) => {
    const [otp, setOtp] = useState<string[]>(new Array(length).fill(""));
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const handleChange = (element: HTMLInputElement, index: number) => {
        const value = element.value;

        // Only allow numbers
        if (!/^\d*$/.test(value)) return;

        // Update OTP state
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Move to next input if value is entered
        if (value && index < length - 1) {
            inputRefs.current[index + 1]?.focus();
        }

        // If all digits are filled, call onComplete
        if (value && index === length - 1) {
            onComplete?.(newOtp.join(""));
        }
    };

    const handleKeyDown = (
        e: React.KeyboardEvent<HTMLInputElement>,
        index: number
    ) => {
        // Move to previous input on backspace
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handlePaste = (e: React.ClipboardEvent) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData("text");
        const pastedNumbers = pastedData.match(/\d/g)?.slice(0, length) || [];

        const newOtp = [...otp];
        pastedNumbers.forEach((num, index) => {
            if (index < length) newOtp[index] = num;
        });
        setOtp(newOtp);

        // Focus the next empty input or the last input
        const nextEmptyIndex = newOtp.findIndex((val) => !val);
        if (nextEmptyIndex !== -1) {
            inputRefs.current[nextEmptyIndex]?.focus();
        } else {
            inputRefs.current[length - 1]?.focus();
            onComplete?.(newOtp.join(""));
        }
    };

    return (
        <div className="flex gap-2">
            {otp.map((digit, index) => (
                <input
                    key={index}
                    ref={(ref) => {
                        inputRefs.current[index] = ref;
                    }}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(e.target, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    onPaste={handlePaste}
                    className="w-12 h-12 text-center text-xl font-bold border-2 border-stone-300 rounded-md               focus:border-green-500 focus:outline-none transition-colors"
                />
            ))}
        </div>
    );
};

export default OtpBox;
