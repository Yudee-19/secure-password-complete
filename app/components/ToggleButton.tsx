import React from "react";

const ToggleButton = () => {
    return (
        <label
            htmlFor="check"
            className="flex bg-customWhite  relative cursor-pointer h-[30px] w-[60px] rounded-full"
        >
            <input type="checkbox" id="check" className="peer sr-only" />
            <span className="absolute h-4/5 w-2/5 rounded-full top-[3px] left-[3px] bg-[#b3b3b3] peer-checked:bg-[#2ED370] peer-checked:left-[33px]"></span>
        </label>
    );
};

export default ToggleButton;
