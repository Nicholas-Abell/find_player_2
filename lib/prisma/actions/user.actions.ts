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

export async function DeletePost(id: string) {
  try {
    await prisma.post.delete({
      where: {
        id: id,
      },
    });
  } catch (error) {
    console.log("deletePost Error: ", error);
  }
}
