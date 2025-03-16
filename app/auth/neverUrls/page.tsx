import Navbar from "@/app/components/Navbar";
import NeverUrls from "@/app/components/settings-neverurls"
import SettingsPageNavbar from "@/app/components/settings-navbar"


export default function Home() {
  return (
    <div className="flex flex-col  bg-[#191919] text-white">
    <div>
      <Navbar />
    </div>

   
      
      <div className="bg-customDark2 text-white pl-[380px] pt-25 min-h-screen p-9 flex flex-col">
      <div>
        <SettingsPageNavbar/>
      </div>
      <div className="">
        <NeverUrls/>
      </div>
      </div>
      </div>
   
  );
}