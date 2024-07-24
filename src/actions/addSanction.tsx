"use server";
import { CreateSanction } from "@/_services/GetSanctions";
import { Sanction, User } from "@/interfaces/Interfaces";
import { revalidatePath } from "next/cache";

export const addSanction = async (sanction: unknown) => {
  await CreateSanction(sanction as Sanction);
  revalidatePath(`/dashboard/${sanction.EmployerId}/view`);
  console.log(sanction);
};
