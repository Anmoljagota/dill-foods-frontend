import { TbUserCheck } from "react-icons/tb";
import { HiDocumentReport } from "react-icons/hi";
import { AiOutlineCodeSandbox, AiOutlineDribbbleSquare } from "react-icons/ai";
import { BiBox } from "react-icons/bi";
import { TbUsers, TbReportSearch } from "react-icons/tb";


export const Links = [
  { path: "/", title: "Home", icon: <AiOutlineCodeSandbox /> },
  { path: "/adminproducts", title: "Products", icon: <BiBox /> },
  { path: "/users", title: "Members", icon: <AiOutlineDribbbleSquare /> },
  { path: "/k", title: "Sales", icon: <TbUsers /> },
  { path: "/p", title: "Analysis", icon: <HiDocumentReport /> },
  { path: "/l", title: "Back Accounts", icon: <AiOutlineDribbbleSquare /> },
  { path: "/i", title: "Admin/Hr", icon: <TbUserCheck /> },
  { path: "/o", title: "Reporting", icon: <TbReportSearch /> },
  { path: "/chart", title: "Members", icon: <AiOutlineDribbbleSquare /> },
];
