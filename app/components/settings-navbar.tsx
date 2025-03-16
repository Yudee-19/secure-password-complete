"use client";

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

export default function SettingsPageNavbar() {
  const router = useRouter();
  const pathname = usePathname(); // Get the current path

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <div className="bg-[#191919] text-white pt-6 pr-17 pb-6 w-[80vw]">
      <h1 className="font-Inter font-bold text-[32px] leading-[18.73px] pb-10 text-[#EFEFEF]">Settings</h1>

      {/* Tabs as individual buttons */}
      <div className="flex justify-between w-[1000px] pt-1 gap-[20px]">
        {[
          { name: 'Account', path: '/auth/account' },
          //{ name: 'MFA', path: '/mfa' },
          { name: 'Security', path: '/auth/security' },
          { name: 'Trusted Devices', path: '/auth/TrustedDevices' },
          { name: 'Appearance', path: '/auth/appearance' },
          //{ name: 'Equivalent Domains', path: '/equivalent-domains' },
          { name: 'Never URLs', path: '/auth/neverUrls' },
          { name: 'Backup', path: '/auth/backup' },
        ].map((tab) => (
          <button
            key={tab.name}
            onClick={() => navigateTo(tab.path)}
            className={`cursor-pointer transition relative pb-2 
              ${pathname === tab.path ? 'text-white' : 'text-gray-400 hover:text-white'}
            `}
          >
            {tab.name}
            {pathname === tab.path && (
              <div className="absolute left-0 bottom-0 w-full h-[2px] bg-white" ></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
