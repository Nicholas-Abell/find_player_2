"use server";
import prisma from "../prisma/prisma";

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
