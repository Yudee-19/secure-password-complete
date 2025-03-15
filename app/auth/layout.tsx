import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import {
    categories,
    folders,
    tools,
    walletItems,
} from "../components/SidebarContents";
import PremiumBox from "../components/PremiumBox";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="antialiased bg-customDark-100 flex flex-col h-screen">
            <Navbar />
            <div className="">
                <Sidebar
                    categories={categories}
                    walletItems={walletItems}
                    folders={folders}
                    tools={tools}
                />
                <div className="flex-1">
                    <PremiumBox />
                    {children}
                </div>
            </div>
        </div>
    );
}
