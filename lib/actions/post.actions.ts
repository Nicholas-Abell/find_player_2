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
    orderBy: {
      createdAt: "desc",
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
    orderBy: {
      createdAt: "desc",
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

// export async function CreatePost({ title, content, roles, id }: Post) {
//   try {
//     const createdPost = await prisma.post.create({
//       data: { title, content, role: roles, authorId: id },
//     });
//     console.log(createdPost);
//     revalidatePath("/");
//   } catch (error) {
//     console.log("CreatePost Error: ", error);
//   }
// }

export async function CreatePost(formdata: FormData) {
  const title = formdata.get("title");
  const content = formdata.get("content");
  const authorId = formdata.get("authorId");

  const tank = formdata.get("tank");
  const healer = formdata.get("healer");
  const damage = formdata.get("damage");
  const roles: Role[] = [];

  if (tank === "tank") roles.push(Role.tank);
  if (healer === "healer") roles.push(Role.healer);
  if (damage === "damage") roles.push(Role.damage);

  const createdPost = await prisma.post.create({
    data: {
      title: title as string,
      content: content as string,
      authorId: authorId as string,
      role: roles,
    },
  });
  revalidatePath("/");
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
