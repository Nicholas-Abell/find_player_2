"use server";
import prisma from "../prisma/prisma";

export async function FetchMessages(postId: string) {
  const messages = await prisma.message.findMany({
    where: {
      postId,
    },
  });
  console.log(messages);
  return messages;
}

export async function CreateMessage(postId: string, content: string) {}
