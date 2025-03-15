import React from "react";
import { IconProp } from "../types/icon";
const Logo = ({ width, height, color }: IconProp) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 35 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M9.35658 19.6223L8.29591 19.0162L12.2734 12.1219L13.3341 12.728L16.6676 6.9322V0H15.9478L0 27.653L0.340928 28.2591L6.36399 24.7741L9.35658 19.6223Z"
                fill={color ? color : "#20934E"}
            />
            <path
                d="M7.15978 26.1758L1.13672 29.6608L1.51553 30.2669H10.266L12.6904 28.8653H22.9561L25.3805 30.2669H33.4112L33.79 29.6608L27.767 26.1758H7.15978Z"
                fill={color ? color : "#20934E"}
            />
            <path
                d="M18.2578 0V6.9322L21.4398 12.4249L22.5005 11.8188L26.478 18.7132L25.4173 19.3192L28.5614 24.7741L34.5845 28.2591L34.9254 27.653L18.9775 0H18.2578Z"
                fill={color ? color : "#20934E"}
            />
        </svg>
    );
};

export default Logo;
