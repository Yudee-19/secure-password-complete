import React from "react";

const DropdownMenu = () => {
  return (
    <div className="bg-transparent min-h flex items-center justify-end p-6">
      {/* Navbar */}
      <div className="relative flex h-[]  items-center gap-2 bg-customDark2 px-4 py-2 rounded-[20vw] cursor-pointer hover:bg-black-400">
        {/* Icon */}
        <div className="bg-blue-500 text-white text-xs font-bold flex items-center justify-center h-8 w-8 rounded-full">
          KD
        </div>
        {/* Username */}
        <span className="text-white text-base ">Kevin Doe</span>

        {/* Dropdown */}
        <div className="absolute top-14 right-0 bg-white rounded-lg shadow-lg w-48 hidden group-hover:block">
          <ul className="list-none p-0 m-0">
            <li className="px-4 py-2 hover:bg-gray-200">
              <a href="#" className="text-black text-sm">Option 1</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-200">
              <a href="#" className="text-black text-sm">Option 2</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-200">
              <a href="#" className="text-black text-sm">Option 3</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-200">
              <a href="#" className="text-black text-sm">Option 4</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;