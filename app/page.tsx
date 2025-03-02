import Image from "next/image";
import { categories,walletItems,folders,tools } from "./components/SidebarContents";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import GetStartedItem from "./components/GetStartedItem";
import AddPasswordIcon from "./icons/AddPasswordIcon";

export default function Home() {
  return (
    <div className="bg-customDark-100">
      {/* <Navbar />
      <Sidebar categories={categories} walletItems={walletItems} folders={folders} tools={tools} /> */}
      <GetStartedItem color="#EF7530" icon={<AddPasswordIcon />} title="Save First Password or Import Passwords" description="Importing passwords from any password manager or browser." completionTime="1 minute" />
    </div>
  )
}
