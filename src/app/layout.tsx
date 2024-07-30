import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import ClientOnlyNavBar from "@/_components/NavBarConditional";
import { Suspense } from "react";
import Loading from "./condidats/loading";
import { Toaster } from "react-hot-toast";
import { auth } from "@/auth";
import { Session, User } from "@/interfaces/Interfaces";
import { getUserFromDb } from "@/_services/GetCurrentUser";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Macobate app",
  description: "une application de gestion des ouvriers de E'se",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session: Session | any = await auth();
  // if (!session) return;
  // const currentUser: User = await getUserFromDb(session.user?.email as string);
  // const isSuperAdmin = currentUser.isSuperAdmin;
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <ClientOnlyNavBar />
        </SessionProvider>
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
