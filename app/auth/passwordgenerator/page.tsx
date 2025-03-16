"use client";
import { BlackPrimaryButton, SecondaryButton } from "@/app/components/Buttons";
import RefreshIcon from "@/app/icons/RefreshIcon";
import DropDownIcon from "@/app/icons/DropDownIcon";
import React, { useState } from "react";

const generatePassword = (
  length: number,
  useUpper: boolean,
  useLower: boolean,
  useNumbers: boolean,
  useSymbols: boolean
) => {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+{}[]";

  let characters = "";
  if (useUpper) characters += upper;
  if (useLower) characters += lower;
  if (useNumbers) characters += numbers;
  if (useSymbols) characters += symbols;

  if (!characters) return "Select at least one option";

  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }
  return password;
};

const Page = () => {
  const [passwordLength, setPasswordLength] = useState(12);
  const [useUpper, setUseUpper] = useState(true);
  const [useLower, setUseLower] = useState(false);
  const [useNumbers, setUseNumbers] = useState(false);
  const [useSymbols, setUseSymbols] = useState(false);
  const [password, setPassword] = useState("apple-mango-tree");

  const refreshPassword = () => {
    setPassword(
      generatePassword(passwordLength, useUpper, useLower, useNumbers, useSymbols)
    );
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
  };

  return (
    <div className="w-full  h-screen overflow-y-scroll pl-[335px] pt-[82px] flex flex-col ">
      <div className=" h-[370px] w-full bg-[#060606] relative">
        <div className=" absolute top-[50px] left-[75px] text-textgray-200 text-xs font-bold font-inter uppercase tracking-wide">
          Password generator
        </div>
        <div className="absolute top-[80px] left-[75px] text-white text-4xl font-bold font-jetbrains">
          {password.split("").map((char, index) => (
            <span
              key={index}
              className={/\d/.test(char) ? "text-green-600" : "text-white"}
            >
              {char}
            </span>
          ))}
        </div>

        <div className="absolute bottom-[32px] left-[75px] px-4 py-2 bg-[#EEB258] rounded-lg inline-flex justify-center items-center gap-2">
          <div className="justify-start text-white text-xs font-bold font-sans uppercase tracking-wide">
            Moderate
          </div>
        </div>

        <span className="absolute flex gap-3 bottom-[21px] right-[32px]">
          <div 
            className=" w-10 h-10  border-[2px] border-[#CCCCCC] rounded-full flex justify-center items-center  bg-customDark-200 cursor-pointer"
            onClick={refreshPassword}
          >
            <RefreshIcon />
          </div>
          <BlackPrimaryButton
            height="40"
            width="179"
            text="Copy Password"
            onClick={copyToClipboard}
          />
        </span>
      </div>
      <div className="w-full flex-1 flex flex-col divide-y divide-[#353535] h-full px-20 bg-customDark-100">
        <div className=" py-10 flex items-center gap-20 ">
          <div className="flex flex-col gap-3">
            <div className=" text-white text-lg font-medium font-inter ">
              Password Type :{" "}
            </div>
            <div className="">
              <label
                htmlFor="passwordType"
                className="text-[#efefef] relative text-lg font-medium font-inter mb-2 block"
              >
                <span className="absolute right-4 top-1/2 ">
                  <DropDownIcon color="#efefef" />
                </span>
                <select
                  id="passwordType"
                  className="w-72 h-12 appearance-none bg-customDark-50 text-[#efefef] border-2 border-[#efefef] rounded pr-4 pl-4"
                >
                  <option value="RandomPassword">Random Password</option>
                  <option value="MemorablePassword">Memorable Password</option>
                  <option value="Pin">Pin</option>
                </select>
              </label>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-3  ">
            <div className="text-white text-lg font-medium font-inter">
              Password Length : {passwordLength}
            </div>

            <div className=" w-[480px] h-12">
            <input
        type="range"
        min="4"
        max="32"
        value={passwordLength}
        onChange={(e) => setPasswordLength(parseInt(e.target.value))}
        className="w-full  h-1 rounded-lg appearance-none cursor-pointer accent-[#00FF85]"
        style={{
          background: `linear-gradient(to right, #00FF85 ${
            ((passwordLength - 4) / (32 - 4)) * 100
          }%,rgb(67, 67, 67) ${(passwordLength - 4) / (32 - 4) * 100}%)`,
        }}
      />
            </div>
          </div>
        </div>
        <div className=" py-10 flex flex-col gap-7 justify-between">
          <div className=" text-white text-lg font-medium font-inter ">
            More Options:
          </div>
          <div className="flex gap-20">
            <div>
              <label
                htmlFor="uppercase"
                className="flex items-center gap-2"
              >
                <input
                  type="checkbox"
                  id="uppercase"
                  checked={useUpper}
                  onChange={() => setUseUpper(!useUpper)}
                  className=" border-stone-300  appearance-none w-4 h-4 border-2  rounded-sm checked:bg-[#0F6FFD] checked:border-[#0F6FFD] relative checked:after:content-['✓'] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:text-white checked:after:text-sm checked:after:transform checked:after:-translate-x-1/2 checked:after:-translate-y-1/2"
                />
                <p className="text-white text-base font-normal font-inter leading-normal ">
                  Use Uppercase
                </p>
              </label>
            </div>

            <div>
              <label
                htmlFor="number"
                className="flex items-center gap-2"
              >
                <input
                  type="checkbox"
                  id="numbers"
                  checked={useNumbers}
                  onChange={() => setUseNumbers(!useNumbers)}
                  className=" border-stone-300  appearance-none w-4 h-4 border-2  rounded-sm checked:bg-[#0F6FFD] checked:border-[#0F6FFD] relative checked:after:content-['✓'] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:text-white checked:after:text-sm checked:after:transform checked:after:-translate-x-1/2 checked:after:-translate-y-1/2"
                />
                <p className="text-white text-base font-normal font-inter leading-normal ">
                  Use Numbers
                </p>
              </label>
            </div>

            <div>
              <label
                htmlFor="lowercase"
                className="flex items-center gap-2"
              >
                <input
                  type="checkbox"
                  id="lowercase"
                  checked={useLower}
                  onChange={() => setUseLower(!useLower)}
                  className=" border-stone-300  appearance-none w-4 h-4 border-2  rounded-sm checked:bg-[#0F6FFD] checked:border-[#0F6FFD] relative checked:after:content-['✓'] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:text-white checked:after:text-sm checked:after:transform checked:after:-translate-x-1/2 checked:after:-translate-y-1/2"
                />
                <p className="text-white text-base font-normal font-inter leading-normal ">
                  Use Lowercase
                </p>
              </label>
            </div>
            <div>
              <label
                htmlFor="symbols"
                className="flex items-center gap-2"
              >
                <input
                  type="checkbox"
                  id="symbols"
                  checked={useSymbols}
                  onChange={() => setUseSymbols(!useSymbols)}
                  className=" border-stone-300  appearance-none w-4 h-4 border-2  rounded-sm checked:bg-[#0F6FFD] checked:border-[#0F6FFD] relative checked:after:content-['✓'] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:text-white checked:after:text-sm checked:after:transform checked:after:-translate-x-1/2 checked:after:-translate-y-1/2"
                />
                <p className="text-white text-base font-normal font-inter leading-normal ">
                  Use Symbols
                </p>
              </label>
            </div>
          </div>
          <div>
            <SecondaryButton
              text="+Save Password"
              height="40"
              width="993"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;