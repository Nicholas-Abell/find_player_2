"use server";
import { revalidatePath } from "next/cache";
import prisma from "../prisma/prisma";

export async function FetchMessages(postId: string) {
  const messages = await prisma.message.findMany({
    include: {
      author: {
        select: {
          username: true,
        },
      },
    },
    where: {
      postId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  console.log(messages);
  return messages;
}

export async function CreateMessage(formdata: FormData) {
  const postId = formdata.get("postId");
  const userId = formdata.get("userId");
  const content = formdata.get("content");

  const message = await prisma.message.create({
    data: {
      postId: postId as string,
      userId: userId as string,
      content: content as string,
    },
  });
  revalidatePath("/post/[id]");
}
