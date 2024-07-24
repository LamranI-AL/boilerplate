import UserControle from "@/_components/UserControle";
import UserList from "@/_components/UserList";
import {
  GetAllUsers,
  getUserFromDb,
  UpdateUser,
} from "@/_services/GetCurrentUser";
import { Session, User } from "@/interfaces/Interfaces";
import { auth } from "@/auth";
export default async function Home() {
  const session: Session = await auth();
  if (!session) return;
  const currentUser: User = await getUserFromDb(session.user?.email as string);
  const isSuperAdmin = currentUser.isSuperAdmin;
  const updateUser: User = {
    ...currentUser,
    lastLoginDate: new Date(Date.now()),
  };
  try {
    await UpdateUser(currentUser._id, updateUser);
    console.log("userUpdateSuccesfull");
  } catch (error: unknown) {
    throw new Error("error updating current user ... , error : " + error);
  }
  const users: User[] = await GetAllUsers();
  const adminUser = users.filter((u) => u.isSuperAdmin === false);

  return (
    <main>
      <UserControle currentUser={currentUser} session={session} />
      {isSuperAdmin && <UserList users={adminUser} />}
    </main>
  );
}
