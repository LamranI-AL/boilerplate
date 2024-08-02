import { GetUserByID } from "@/_services/GetCurrentUser";
import UpdateUserForm from "../_components/update-user";
import { User } from "@/interfaces/Interfaces";
import { getServerSession } from "next-auth";
interface Props {
  params: {
    userId: string;
  };
}
async function page({ params }: Props) {
  const session = await getServerSession();
  const user: User = await GetUserByID(params.userId.toString());
  console.log(user);
  if (!user) {
    return <div className="text-red-400 text-center items-center">404</div>;
  }
  return (
    <div>
      <UpdateUserForm currentUser={session?.user as User} user={user} />
    </div>
  );
}

export default page;
