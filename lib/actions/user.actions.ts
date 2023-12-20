"use server";
import prisma from "../prisma/prisma";

export async function fetchUser(username: string, password: string) {
  const user = await prisma.user.findUnique({
    where: {
      username,
      password,
    },
  });
  return user;
}
