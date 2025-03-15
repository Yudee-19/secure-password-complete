import SettingsPage from "@/app/components/setting-acc";
import SettingsPageNavbar from "@/app/components/SettingsPageNavbar";

export default function Home() {
    return (
        <div className="flex flex-col h-screen bg-transparent text-white">
            <div></div>

            <div className="flex space-x-5   flex-grow">
                <div></div>

                <div className="bg-customDark2 text-white min-h-screen pl-[350px] mt-[82px] flex flex-col">
                    <div>
                        <SettingsPageNavbar />
                    </div>
                    <div className="">
                        <SettingsPage />
                    </div>
                </div>
            </div>
        </div>
    );
}
