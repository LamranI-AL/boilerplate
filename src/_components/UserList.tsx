import { GetAllUsers } from "@/_services/GetCurrentUser";
import { User } from "@/interfaces/Interfaces";
import React from "react";
import UserControle from "./UserControle";
import UserSlice from "./user-slice";
import UserAddForm from "./user-add-form";
interface Props {
  users: User[];
}
async function UserList({ users }: Props) {
  // const img = "";

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <header>
        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
          Les Utilisateurs de application
        </h2>

        <p className="mt-4 max-w-md text-gray-500">
          ici tous les utilisateur de application affiche si dessous
        </p>
      </header>

      {users ? (
        <div>
          <ul className="mt-8 grid gap-4 m-5 sm:grid-cols-2 lg:grid-cols-3">
            {users.map((user) => (
              <UserSlice user={user} key={user._id} />
            ))}
            <UserAddForm />
          </ul>
        </div>
      ) : (
        <UserAddForm />
      )}
    </div>
  );
}

export default UserList;
