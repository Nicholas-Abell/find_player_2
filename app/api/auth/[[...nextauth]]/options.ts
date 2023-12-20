import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { fetchUser } from "@/lib/actions/user.actions";

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
          placeholder: "your-username",
        },
        password: {
          label: "Password",
          type: "text",
          placeholder: "your-password",
        },
      },
      async authorize(credentials) {
        //user info from database here

        const user = await fetchUser(credentials?.username, credentials?.password);
        if (
          credentials?.username === user?.username &&
          credentials?.password === user?.password
        ) {
          return user;
        } else return null;
      },
    }),

    // ...add more providers here
  ],
};
