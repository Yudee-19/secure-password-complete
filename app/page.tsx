import Image from "next/image";
import Sidebar from "./components/Sidebar";
import AddItemsIcon from ".//icons/AllItemsIcon"
import LockIcon from "./icons/LockIcon";
import NotesIcon from "./icons/NotesIcon";
import PersonalInfoIcon from "./icons/PersonalInfoIcon";
import SharingCenterIcon from "./icons/SharingCenterIcon";
import TrashIcon from "./icons/TrashIcon";
import CredirCardIcon from "./icons/CredirCardIcon";
import BankIcon from "./icons/BankIcon";
import CryptoIcon from "./icons/CryptoIcon";
import AddFolderIcon from "./icons/AddFolderIcon";
import PasswordGeneratorIcon from "./icons/PasswordGeneratorIcon";
import PasswordHealthIcon from "./icons/PasswordHealthIcon";

const categories = [
  { icon: <AddItemsIcon /> , title: "All Items" },
  { icon: <LockIcon /> , title: "Passwords" },
  { icon: <NotesIcon /> , title: "Notes" },
  { icon: <PersonalInfoIcon /> , title: "Personal Info" },
  { icon: <SharingCenterIcon /> , title: "Sharing Center" },
  { icon: <TrashIcon /> , title: "Trash" },
];

const walletItems = [
  { icon: <CredirCardIcon />, title: "Credit Card" },
  { icon: <BankIcon />, title: "Bank Account" },
  { icon: <CryptoIcon />, title: "Crypto Account" },
];

const folders = [
  { icon: <AddFolderIcon />, title: "Add new folder" },
];

const tools = [
  { icon: <PasswordGeneratorIcon />, title: "Password Generator" },
  { icon: <PasswordHealthIcon />, title: "Password Health" },
];

export default function Home() {
  return (
    <div>
      <Sidebar categories={categories} walletItems={walletItems} folders={folders} tools={tools} />
    </div>
  )
}
