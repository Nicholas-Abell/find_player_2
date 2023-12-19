"use server";
import { revalidatePath } from "next/cache";
import prisma from "../prisma";
import { Role } from "@prisma/client";

export async function fetchPosts() {
  const posts = await prisma.post.findMany({});
  return posts;
}

export async function fetchFilteredPosts(role: "damage" | "healer" | "tank") {
  const posts = await prisma.post.findMany({
    where: {
      roles: {
        has: role,
      },
    },
  });
  return posts;
}

export async function fetchPost(id: string) {
  try {
    const post = await prisma.post.findUnique({
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

type Post = { title: string; content: string; roles: Role[] };

export async function CreatePost({ title, content, roles }: Post) {
  try {
    const createdPost = await prisma.post.create({
      data: { title, content, roles: roles },
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
