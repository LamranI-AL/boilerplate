import { clerkClient } from "@clerk/clerk-sdk-node";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import employer from "@/_db/Employer.json";

async function checkIfEmailExistsInDatabase(email: string) {
  const emailFound = employer.find((empl) => empl.email === email);
  return emailFound ? true : false;
}

export default async function GetCurrentUser() {
  const { userId, orgRole, orgPermissions } = auth();
  console.log(orgRole, orgPermissions);

  if (!userId) {
    console.log("You are not signed in");
    redirect("/visitor"); // Redirige si l'utilisateur n'est pas connecté
    return;
  }

  console.log("You are signed in");
  const currentUser = await clerkClient.users.getUser(userId);
  const userEmail = currentUser.emailAddresses[0].emailAddress;

  const userActuell = employer.filter(
    (employer) => employer.email === userEmail
  );
  const userRole = userActuell.map((emp) => emp.role).toString();

  console.log(userRole);
  console.log(userEmail);
  console.log(currentUser);

  const emailExistsInDatabase = await checkIfEmailExistsInDatabase(userEmail);
  if (
    !emailExistsInDatabase ||
    (userRole !== "admin" && userRole !== "superAdmin")
  ) {
    redirect("/visitor"); // Redirige si l'email n'existe pas ou si le rôle n'est pas autorisé
    return;
  }

  return userActuell;
}
