"user server";
import prisma from "../prisma/prisma";

export async function fetchUser(username: string, password: string) {
  prisma.user.findUnique({
    where: {
      username: username,
    },
  });
}
