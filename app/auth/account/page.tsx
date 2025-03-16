import Navbar from "@/app/components/Navbar";
import SettingsPage from "@/app/components/settings-acc"
import SettingsPageNavbar from "@/app/components/settings-navbar"


export default function Home() {
  return (
    <div className="flex flex-col  bg-[#191919] text-white">
    <div>
      <Navbar />
    </div>

    
      
      <div className="bg-customDark2 pl-[380px] pt-25 text-white min-h-screen p-9 flex flex-col">
      <div className=" ">
        <SettingsPageNavbar/>
      </div>
      <div className="p-8">
        <SettingsPage/>
      </div>
      </div>
      </div>
    
  );
}
