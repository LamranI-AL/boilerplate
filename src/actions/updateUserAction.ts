"use server";
import { UpdateUser } from "@/_services/GetCurrentUser";
import { User } from "@/interfaces/Interfaces";
import { revalidatePath } from "next/cache";

export const updateUserAction = async (newUserUpdated: User) => {
  await UpdateUser(newUserUpdated?._id as string, newUserUpdated as User);
  revalidatePath(`/${newUserUpdated._id}/edit`);
};
