"use server";
import { CreatePost } from "@/_services/GetPosts";
import { Poste } from "@/interfaces/Interfaces";
import { revalidatePath } from "next/cache";

export const addPosteAction = async (poste: Poste) => {
  await CreatePost(poste as Poste);
  revalidatePath(`/dashboard/${poste.EmployerId}/view`);

  console.log(poste);
};
