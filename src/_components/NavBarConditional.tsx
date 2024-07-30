"use client";
import { usePathname } from "next/navigation";
import NavBar from "./NavBar";
const ClientOnlyNavBar = () => {
  const pathname = usePathname();
  return pathname !== "/auth/login" ? <NavBar /> : null;
};
export default ClientOnlyNavBar;
