import UserControle from "@/_components/UserControle";
import UserList from "@/_components/UserList";
import {
  GetAllUsers,
  getUserFromDb,
  UpdateUser,
} from "@/_services/GetCurrentUser";
import { Session, User } from "@/interfaces/Interfaces";
import { DrawerDemo } from "@/_components/nav-message-dropdawn";
import { getServerSession } from "next-auth";
import LogoutButton from "@/_components/logoutButton";
export default async function Home() {
  const session: Session | any = await getServerSession();
  console.log(session);
  if (!session) return;
  const currentUser: User = await getUserFromDb(session.user?.email as string);
  const isSuperAdmin = currentUser.isSuperAdmin;
  const updateUser: User = {
    ...currentUser,
    lastLoginDate: new Date(Date.now()),
  };
  try {
    await UpdateUser(currentUser._id, updateUser).then(() =>
      console.log("userUpdateSuccesfull")
    );
  } catch (error: unknown) {
    throw new Error("error updating current user ... , error : " + error);
  }
  const users: User[] = await GetAllUsers();
  const adminUser = users.filter((u) => u.isSuperAdmin === false);

  return (
    <main>
      <UserControle currentUser={currentUser} session={session} />
      <div className="relative block m-24 overflow-hidden rounded-lg border shadow-lg border-gray-100 p-4 sm:p-6 lg:p-8">
        <LogoutButton />
      </div>{" "}
      <div className="flex justify-end">
        <DrawerDemo session={session} />
      </div>
      {isSuperAdmin && <UserList users={adminUser} />}
    </main>
  );
}
