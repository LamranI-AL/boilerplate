"use client";
import { usePathname, useSearchParams } from "next/navigation";
import NavBar from "./NavBar";
const ClientOnlyNavBar = () => {
  const pathname = usePathname();
  // const searchParams = useSearchParams();
  console.log(pathname);

  return pathname !== "/auth/login" ? <NavBar /> : null;
};

export default ClientOnlyNavBar;
