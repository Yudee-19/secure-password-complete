import Navbar from "@/app/components/Navbar";
import Backupsettings from "@/app/components/settings-backup"
import SettingsPageNavbar from "@/app/components/settings-navbar"


export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-[#191919] text-white">
    <div>
      <Navbar />
    </div>

    
      
      <div className="bg-customDark2  pl-[380px] pt-25 text-white min-h-screen p-9 flex flex-col">
      <div>
        <SettingsPageNavbar/>
      </div>
      <div className="">
        <Backupsettings/>
      </div>
      </div>
      </div>
    
  );
}