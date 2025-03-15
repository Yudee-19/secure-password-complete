import React from "react";

interface PasswordStrength {
    strength: "weakest" | "weak" | "strong" | "strongest";
    color: string;
}

interface PasswordStrengthIndicatorProps {
    passwordStrength: PasswordStrength;
}

const PasswordStrengthIndicator: React.FC<PasswordStrengthIndicatorProps> = ({
    passwordStrength,
}) => {
    const getWidthClass = (strength: string) => {
        switch (strength) {
            case "weakest":
                return "w-1/4"; // 25% width for weakest
            case "weak":
                return "w-1/2"; // 50% width for weak
            case "strong":
                return "w-3/4"; // 75% width for strong
            case "strongest":
                return "w-full"; // 100% width for strongest
            default:
                return "w-full"; // Default to full width
        }
    };

    return (
        <div className="flex justify-between items-center">
            <div className="w-80 bg-zinc-100 rounded-2xl relative h-2">
                <div
                    className={`h-2 ${
                        passwordStrength.color
                    } rounded-2xl transition-all duration-300 ${getWidthClass(
                        passwordStrength.strength
                    )}`}
                ></div>
            </div>
            <div className="text-Color-text-secondary text-sm font-medium font-inter leading-tight">
                {passwordStrength.strength.charAt(0).toUpperCase() +
                    passwordStrength.strength.slice(1)}
            </div>
        </div>
    );
};

export default PasswordStrengthIndicator;
