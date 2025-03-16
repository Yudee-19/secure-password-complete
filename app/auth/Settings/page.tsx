import Navbar from "@/app/components/Navbar";
import SettingsPage from "@/app/components/settings-acc"
import SettingsPageNavbar from "@/app/components/settings-navbar"


export default function Home() {
  return (
    <div className="flex flex-col bg-[#191919] text-white">
    <div>
      <Navbar />
    </div>

    
      
      <div className="bg-customDark2 text-white min-h-screen pl-[380px] pt-25 flex flex-col">
      <div>
        <SettingsPageNavbar/>
      </div>
      <div className="">
        <SettingsPage/>
      </div>
      </div>
      </div>
    
  );
}
