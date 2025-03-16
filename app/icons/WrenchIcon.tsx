import { IconProp } from "@/types/icon";
import React from "react";

const WrenchIcon = ({ color }: IconProp) => {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M18.9172 15.8328L11.3339 8.24948C12.0839 6.33281 11.6672 4.08281 10.0839 2.49948C8.41719 0.832814 5.91719 0.499481 3.91719 1.41615L7.50052 4.99948L5.00052 7.49948L1.33385 3.91615C0.333852 5.91615 0.750519 8.41615 2.41719 10.0828C4.00052 11.6661 6.25052 12.0828 8.16719 11.3328L15.7505 18.9161C16.0839 19.2495 16.5839 19.2495 16.9172 18.9161L18.8339 16.9995C19.2505 16.6661 19.2505 16.0828 18.9172 15.8328Z"
                fill={color ? color : "#EFEFEF"}
            />
        </svg>
    );
};

export default WrenchIcon;
