import AllItemsIcon from "../icons/AllItemsIcon";
import LockIcon from "../icons/LockIcon";
import NotesIcon from "../icons/NotesIcon";
import PersonalInfoIcon from "../icons/PersonalInfoIcon";
import SharingCenterIcon from "../icons/SharingCenterIcon";
import TrashIcon from "../icons/TrashIcon";
import CredirCardIcon from "../icons/CredirCardIcon";
import BankIcon from "../icons/BankIcon";
import CryptoIcon from "../icons/CryptoIcon";
import AddFolderIcon from "../icons/AddFolderIcon";
import PasswordGeneratorIcon from "../icons/PasswordGeneratorIcon";
import PasswordHealthIcon from "../icons/PasswordHealthIcon";
export const categories = [
    { icon: <AllItemsIcon />, title: "All Items", path: "/vault" },
    { icon: <LockIcon />, title: "Passwords", path: "/passwords" },
    {
        icon: <NotesIcon height="24px" width="24px" color="#a0a0a0" />,
        title: "Notes",
        path: "/notes",
    },
    {
        icon: <PersonalInfoIcon />,
        title: "Personal Info",
        path: "/personalinfo",
    },
    {
        icon: <SharingCenterIcon />,
        title: "Sharing Center",
        path: "/sharingcenter",
    },
    { icon: <TrashIcon />, title: "Trash", path: "/trash" },
];

export const walletItems = [
    { icon: <CredirCardIcon />, title: "Credit Card", path: "/creditcard" },
    { icon: <BankIcon />, title: "Bank Account", path: "/bankaccount" },
    {
        icon: <CryptoIcon height="20px" width="20px" color="#a0a0a0" />,
        title: "Crypto Wallet",
        path: "/cryptowallet",
    },
];

export const folders = [{ icon: <AddFolderIcon />, title: "Add new folder" }];

export const tools = [
    {
        icon: <PasswordGeneratorIcon />,
        title: "Password Generator",
        path: "/passwordgenerator",
    },
    {
        icon: <PasswordHealthIcon />,
        title: "Password Health",
        path: "/passwordhealth",
    },
];
