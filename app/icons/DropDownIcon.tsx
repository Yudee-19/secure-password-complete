import React from "react";
import { IconProp } from "../../types/icon";

const DropDownIcon = ({ color }: IconProp) => {
    return (
        <svg
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M6.53033 6.53033C6.23744 6.82322 5.76256 6.82322 5.46967 6.53033L0.696699 1.75736C0.403806 1.46447 0.403806 0.989593 0.696699 0.696699C0.989593 0.403806 1.46447 0.403806 1.75736 0.696699L6 4.93934L10.2426 0.696699C10.5355 0.403806 11.0104 0.403806 11.3033 0.696699C11.5962 0.989593 11.5962 1.46447 11.3033 1.75736L6.53033 6.53033ZM6.75 5V6H5.25V5H6.75Z"
                fill={color}
            />
        </svg>
    );
};

export default DropDownIcon;
