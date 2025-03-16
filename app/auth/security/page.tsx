import Navbar from "@/app/components/Navbar";
import SecuritySettings from "@/app/components/settings-security"
import SettingsPageNavbar from "@/app/components/settings-navbar"


export default function Home() {
  return (
    <div className="flex flex-col bg-[#191919] text-white">
    <div>
      <Navbar />
    </div>

   
      
      <div className="bg-[#191919] pl-[380px] pt-25 text-white min-h-screen p-9 flex flex-col">
      <div>
        <SettingsPageNavbar/>
      </div>
      <div className="">
        <SecuritySettings/>
      </div>
      </div>
      </div>
    
  );
}