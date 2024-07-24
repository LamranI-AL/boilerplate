"use server";
import { UpdateUser } from "@/_services/GetCurrentUser";
import { User } from "@/interfaces/Interfaces";
import { revalidatePath } from "next/cache";

export const updateUserAction = async (newUserUpdated: User) => {
  // const nom = formData.get("first_name") as string;
  // const prenom = formData.get("last_name") as string;
  // const email = formData.get("email") as string;
  // const ancienPassword = formData.get("password_ancienn");
  // const newPassword = formData.get("password_new");
  // console.log(nom, prenom, email, ancienPassword, newPassword);
  await UpdateUser(newUserUpdated?._id as string, newUserUpdated as User);
  revalidatePath(`/${newUserUpdated._id}/edit`);

  // await UpdateUser(user._id, user as User);
  // revalidatePath(`/${user._id}/edite`);
  // console.log(user);
};
