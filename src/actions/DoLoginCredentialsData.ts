"use server";
import { signIn } from "@/auth";
export async function DoLoginCredentialsData(formData: FormData) {
  try {
    const responce = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    console.log("all right from doLogin.....");
    return responce;
  } catch (error) {
    console.log("errorr from doLogin....." + error);
  }
}
export async function DoLoginCredentialsDataONE(formData: {}) {
  "use server";
  console.log(formData);
  await signIn("credentials", formData);
}
