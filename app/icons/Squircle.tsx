import React from "react";

interface SquircleProp {
    color?: string;
    insideIcon?: React.ReactNode;
}

const Squircle = ({ insideIcon }: SquircleProp) => {
    return (
        <svg
            width="98"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M0 46.64C0 8.23196 8.23196 0 46.64 0H53.36C91.768 0 100 8.23196 100 46.64V53.36C100 91.768 91.768 100 53.36 100H46.64C8.23196 100 0 91.768 0 53.36V46.64Z"
                fill="url(#paint0_radial_1_6908)"
            />
            <defs>
                <radialGradient
                    id="paint0_radial_1_6908"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(11 -7.99999) rotate(51.6112) scale(132.046)"
                >
                    <stop stopColor="#066431" />
                    <stop
                        offset="0.701411"
                        stopColor="#21B364"
                        stopOpacity="0.8"
                    />
                    <stop offset="1" stopColor="#08291A" />
                </radialGradient>
            </defs>
            <g transform="translate(29, 29)">
                <foreignObject width="40" height="40">
                    {insideIcon}
                </foreignObject>
            </g>
        </svg>
    );
};

export default Squircle;
