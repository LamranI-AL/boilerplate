"use server";

import { CreatUser } from "@/_services/GetCurrentUser";
import { User } from "@/interfaces/Interfaces";

export const addAdminUserAction = async (formData: FormData) => {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const newUser: User = {
    isSuperAdmin: false,
    dateChangeRole: new Date(Date.now()),
    name: name,
    email: email,
    password: password,
  };
  await CreatUser(newUser);
  console.log(name, email, password);
};
