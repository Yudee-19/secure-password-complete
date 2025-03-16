"use client";

import { useState } from "react";
import CloseIcon from "../icons/CloseIcon";

export default function SettingsNeverURLPage() {
  const [urls, setUrls] = useState<string[]>(["apple.com", "citi.uk"]);
  const [newUrl, setNewUrl] = useState("");
  const [showInput, setShowInput] = useState(false);

  const addUrl = () => {
    if (newUrl.trim() !== "") {
      setUrls([...urls, newUrl]);
      setNewUrl("");
    }
  };

  const removeUrl = (index: number) => {
    setUrls(urls.filter((_, i) => i !== index));
  };

  return (
    <div className=" bg-[#151515] w-[984px] h-auto top-[265px] left-[402px] rounded-[12px] p-5">
      <h2 className="text-2xl pl-5 pt-5 pb-3 text-gray-200">Never URLs</h2>
      
      <div className="pl-4 pt-1">
        <h4 className="text-[#A0A0A0] text-lg">
          Turn off secure password on specific sites. Click add and choose the specific functionality you dont want to use when visiting the URL.
        </h4>
      </div>
      
      <div className="pl-4 pt-5">
        {urls.map((url, index) => (
          <div key={index} className="flex justify-between items-center border-none p-3 rounded-md text-gray-300">
            <span>{url}</span>
            <div  onClick={() => removeUrl(index)} className="text-gray-500 hover:text-gray-700"><CloseIcon /></div>
          </div>
        ))}
      </div>
      
      <div className="pl-4 pt-2">
        <button
          onClick={() => setShowInput(!showInput)}
          className="w-[920px] text-[#A0A0A0] h-[40px] rounded-[3px] border border-[1px] border-[#A0A0A0] pt-[8px] pr-[32px] pb-[8px] pl-[32px]"
        >
          {showInput ? "Cancel" : "Add a never URL"}
        </button>
      </div>
      
      {showInput && (
        <div className="space-y-3 mt-3">
          <div className="flex rounded-md p-3">
            <input
              type="text"
              value={newUrl}
              onChange={(e) => setNewUrl(e.target.value)}
              placeholder="Enter a URL"
              className="bg-transparent flex-grow outline-none text-gray-300"
            />
            <button onClick={addUrl} className="text-gray-400 hover:text-gray-500">
              Add a URL
            </button>
          </div>
        </div>
      )}
    </div>
  );
}