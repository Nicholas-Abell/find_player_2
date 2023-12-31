"use server";
import { revalidatePath } from "next/cache";
import prisma from "../prisma/prisma";
import { Role } from "@prisma/client";

export async function fetchPosts() {
  const posts = await prisma.post.findMany({
    include: {
      author: {
        select: {
          username: true,
        },
      },
    },
  });
  return posts;
}

export async function fetchFilteredPosts(role: "damage" | "healer" | "tank") {
  const posts = await prisma.post.findMany({
    include: {
      author: {
        select: {
          username: true,
        },
      },
    },
    where: {
      role: {
        has: role,
      },
    },
  });
  return posts;
}

export async function fetchPost(id: string) {
  try {
    const post = await prisma.post.findUnique({
      include: {
        author: {
          select: {
            username: true,
          },
        },
      },
      where: {
        id: id,
      },
    });
    console.log(post);
    return post;
  } catch (error) {
    console.log("fetchPost Error: ", error);
  }
}

type Post = { title: string; content: string; roles: Role[]; id: string };

export async function CreatePost({ title, content, roles, id }: Post) {
  try {
    const createdPost = await prisma.post.create({
      data: { title, content, role: roles, authorId: id },
    });
    console.log(createdPost);
    revalidatePath("/");
  } catch (error) {
    console.log("CreatePost Error: ", error);
  }
}

export async function DeletePost(id: string) {
  try {
    const deletedPost = await prisma.post.delete({
      where: {
        id: id,
      },
    });
    console.log(deletedPost);
  } catch (error) {
    console.log("DeletePost Error: ", error);
  }
  revalidatePath("/");
}
