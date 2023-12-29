import type { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import {
  CreateUser,
  fetchUser,
  fetchUserByEmail,
} from "@/lib/actions/user.actions";

export const options: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "test",
        },
        password: {
          label: "Password",
          type: "text",
          placeholder: "test",
        },
      },
      async authorize(credentials) {
        //user info from database here

        const user = await fetchUser(
          credentials?.username as string,
          credentials?.password as string
        );
        if (
          user &&
          credentials?.username === user.username &&
          credentials?.password === user.password
        ) {
          console.log(user?.name, ": sign in");
          return user;
        } else return null;
      },
    }),
    // ...add more providers here
  ],
  callbacks: {
    async session({ session }) {
      return session;
    },
    async signIn({ profile }) {
      console.log(profile);
      try {
        const userExists = await fetchUserByEmail(profile?.email || "");
        if (!userExists) {
          const user = await CreateUser({
            username: profile?.name || "",
            name: profile?.name || "",
            email: profile?.email || "",
            password: "",
          });
        }
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
