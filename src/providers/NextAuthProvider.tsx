"use client";
import { SessionProvider, useSession } from "next-auth/react";

const NextAuthProvider = ({ children }: { children: React.ReactNode }) => {
  // const { data: session } = useSession();
  return <SessionProvider>{children}</SessionProvider>;
};

export default NextAuthProvider;
