import { SignIn } from "@/_components/LoginForm";
import UserControle from "@/_components/UserControle";
import { auth } from "@/auth";
// import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
// import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await auth();
  console.log(session);
  if (!session) return;
  return (
    <main>
      <UserControle session={session} />
    </main>
  );
}
