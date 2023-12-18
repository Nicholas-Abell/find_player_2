"use server";
import prisma from "../prisma";

export async function fetchPosts() {
    const posts = await prisma.post.findMany({
      // where: { published: true },
      // include: {
      //   author: {
      //     select: { name: true },
      //   },
      // },
    });
    return posts;
}
