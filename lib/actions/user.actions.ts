"use server";
import prisma from "../prisma/prisma";

type User = { username: string; name: string; password: string; email: string };

export async function CreateUser({ name, username, email, password }: User) {
  const user = await prisma.user.create({
    data: { username, name, email, password },
  });
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
