import AllItemsIcon from "../icons/AllItemsIcon";
import LockIcon from "../icons/LockIcon";
import NotesIcon from "../icons/NotesIcon";
import PersonalInfoIcon from "../icons/PersonalInfoIcon";
import SharingCenterIcon from "../icons/SharingCenterIcon";
import TrashIcon from "../icons/TrashIcon";
import CreditCardIcon from "../icons/CreditCardIcon";
import BankIcon from "../icons/BankIcon";
import CryptoIcon from "../icons/CryptoIcon";
import AddFolderIcon from "../icons/AddFolderIcon";
import PasswordGeneratorIcon from "../icons/PasswordGeneratorIcon";
import PasswordHealthIcon from "../icons/PasswordHealthIcon";

export const categories = [
    {
        icon: <AllItemsIcon />,
        hoverIcon: <AllItemsIcon color="#FFFFFF" />, // Assuming AllItemsIcon accepts color prop
        title: "All Items",
        path: "/auth/vault",
    },
    {
        icon: <LockIcon />,
        hoverIcon: <LockIcon color="#FFFFFF" />,
        title: "Passwords",
        path: "/auth/passwords",
    },
    {
        icon: <NotesIcon height="20px" width="20px" color="#a0a0a0" />,
        hoverIcon: <NotesIcon height="20px" width="20px" color="#FFFFFF" />,
        title: "Notes",
        path: "/auth/notes",
    },
    {
        icon: <PersonalInfoIcon height="20px" width="20px" color="#a0a0a0" />,
        hoverIcon: (
            <PersonalInfoIcon height="20px" width="20px" color="#FFFFFF" />
        ),
        title: "Personal Info",
        path: "/auth/personalinfo",
    },
    {
        icon: <SharingCenterIcon height="20px" width="20px" color="#a0a0a0" />,
        hoverIcon: (
            <SharingCenterIcon height="20px" width="20px" color="#FFFFFF" />
        ),
        title: "Sharing Center",
        path: "/auth/sharingcenter",
    },
    {
        icon: <TrashIcon height="20px" width="20px" color="#a0a0a0" />,
        hoverIcon: <TrashIcon height="20px" width="20px" color="#FFFFFF" />,
        title: "Trash",
        path: "/auth/trash",
    },
];

// Similarly update walletItems, folders, and tools arrays
export const walletItems = [
    {
        icon: <CreditCardIcon height="20px" width="20px" color="#a0a0a0" />,
        hoverIcon: (
            <CreditCardIcon height="20px" width="20px" color="#FFFFFF" />
        ),
        title: "Credit Card",
        path: "/auth/creditcard",
    },
    // Add hover icons for the remaining items
    {
        icon: <BankIcon />,
        hoverIcon: <BankIcon color="#FFFFFF" />,
        title: "Bank Account",
        path: "/auth/bankaccount",
    },
    {
        icon: <CryptoIcon height="20px" width="20px" color="#a0a0a0" />,
        hoverIcon: <CryptoIcon height="20px" width="20px" color="#FFFFFF" />,
        title: "Crypto Wallet",
        path: "/auth/cryptowallet",
    },
];

export const folders = [
    {
        icon: <AddFolderIcon />,
        hoverIcon: <AddFolderIcon color="#FFFFFF" />,
        title: "Add new folder",
    },
];

export const tools = [
    {
        icon: <PasswordGeneratorIcon />,
        hoverIcon: <PasswordGeneratorIcon />,
        title: "Password Generator",
        path: "/auth/passwordgenerator",
    },
    {
        icon: <PasswordHealthIcon />,
        hoverIcon: <PasswordHealthIcon />,
        title: "Password Health",
        path: "/auth/passwordhealth",
    },
];
