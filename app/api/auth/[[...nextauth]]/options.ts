import type { NextAuthOptions } from "next-auth";
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

        const user = await fetchUser(
          credentials?.username as string,
          credentials?.password as string
        );
        // const user = {id: "42", username: "test", password: "test"}
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
};
