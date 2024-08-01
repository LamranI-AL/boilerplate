import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import connectDb from "./_db/db";
import { User } from "./interfaces/Interfaces";
import { getUserFromDb } from "./_services/GetCurrentUser";
export const { handlers, signIn, signOut, auth } = NextAuth({
  callbacks: {
    async signIn() {
      return true;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET!,
  providers: [
    Credentials({
      name: "credentials",
      authorize: async (credentials) => {
        await connectDb();
        const user: User = await getUserFromDb(credentials?.email as string);
        // console.log(user);
        if (!user) {
          throw new Error("User not found.");
        } else {
          if (user.password === credentials.password) {
            return user;
          } else {
            throw new Error("password incorrect.");
          }
        }
      },
    }),
  ],
});
