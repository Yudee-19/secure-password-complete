import React from "react";

interface SquircleProp {
    height: string;
    width: string;
    color?: string;
    insideIcon?: React.ReactNode;
}

const Squircle = ({ insideIcon, height, width, color }: SquircleProp) => {
    const foreignObjectSize = 70;
    const position = (100 - foreignObjectSize) / 2;
    return (
        <svg
            style={{ width: `${width}px`, height: `${height}px` }}
            viewBox="0 0 100 100"
            fill="black"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M0 46.64C0 8.23196 8.23196 0 46.64 0H53.36C91.768 0 100 8.23196 100 46.64V53.36C100 91.768 91.768 100 53.36 100H46.64C8.23196 100 0 91.768 0 53.36V46.64Z"
                fill={color ? color : "url(#paint0_radial_1_6908)"}
            />
            {!color && (
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
            )}
            {insideIcon && (
                <foreignObject
                    x={`${position}%`}
                    y={`${position}%`}
                    width={`${foreignObjectSize}%`}
                    height={`${foreignObjectSize}%`}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 10,
                    }}
                >
                    <div
                        style={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        {insideIcon}
                    </div>
                </foreignObject>
            )}
        </svg>
    );
};

export default Squircle;
