"use server";
import { revalidatePath } from "next/cache";
import prisma from "../prisma/prisma";
import { redirect } from "next/navigation";

type User = { username: string; name: string; password: string; email: string };

export async function CreateUser(
  // { name, username, email, password }: User
  formData: FormData
) {
  const username = formData.get("username");
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");

  const user = await prisma.user.create({
    data: {
      username: username as string,
      name: name as string,
      email: email as string,
      password: password as string,
    },
  });
  redirect("/sign-in");
}

export async function fetchUserByEmail(email: string) {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  return user;
}

export async function fetchUser(username: string, password: string) {
  const user = await prisma.user.findUnique({
    where: {
      username,
      password,
    },
  });
  return user;
}
