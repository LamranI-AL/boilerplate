import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import connectDb from "./_db/db";
import { User } from "./interfaces/Interfaces";
import { getUserFromDb } from "./_services/GetCurrentUser";
export const { handlers, signIn, signOut, auth } = NextAuth({
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log("signIn", user, account, profile, email, credentials);
      return true;
    },
  },
  secret: process.env.NEXTAUTH_SECRET, // Assurez-vous que cette variable d'environnement est définie
  providers: [
    Credentials({
      name: "credentials",
      authorize: async (credentials) => {
        await connectDb();
        console.log("connect database from auth.ts");
        console.log(" credentials email  :  " + credentials.email);
        // logic to verify if user exists
        const user: User = await getUserFromDb(credentials?.email as string);
        console.log(user);
        if (!user) {
          // No user found, so this is their first attempt to login
          // meaning this is also the place you could do registration
          console.log("user note found");
          throw new Error("User not found.");
        } else {
          if (user.password === credentials.password) {
            console.log("user return succesfully");
            return user;
          } else {
            console.log("password incorrect");
            throw new Error("password incorrect.");
          }
        }
      },
    }),
  ],
});
