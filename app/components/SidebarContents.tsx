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
  { icon: <AllItemsIcon /> , title: "All Items" },
  { icon: <LockIcon /> , title: "Passwords" },
  { icon: <NotesIcon /> , title: "Notes" },
  { icon: <PersonalInfoIcon /> , title: "Personal Info" },
  { icon: <SharingCenterIcon /> , title: "Sharing Center" },
  { icon: <TrashIcon /> , title: "Trash" },
];

export const walletItems = [
  { icon: <CredirCardIcon />, title: "Credit Card" },
  { icon: <BankIcon />, title: "Bank Account" },
  { icon: <CryptoIcon />, title: "Crypto Account" },
];

export const folders = [
  { icon: <AddFolderIcon />, title: "Add new folder" },
];

export const tools = [
  { icon: <PasswordGeneratorIcon />, title: "Password Generator" },
  { icon: <PasswordHealthIcon />, title: "Password Health" },
];