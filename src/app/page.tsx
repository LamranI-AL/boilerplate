import UserControle from "@/_components/UserControle";
import { auth } from "@/auth";
export default async function Home() {
  const session = await auth();
  console.log(session);
  if (!session) return;
  return (
    <main>
      <UserControle session={session} />
      {/* hello from home , bienvenue mr {session.user?.name} */}
    </main>
  );
}
