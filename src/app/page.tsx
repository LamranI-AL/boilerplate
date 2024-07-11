import GetCurrentUser from "../_services/GetCurrentUser";

export default async function Home() {
  // const user = await GetCurrentUser();
  // console.log(user);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      hello from home page
    </main>
  );
}
