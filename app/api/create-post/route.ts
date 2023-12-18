import { NextResponse } from "next/server";
import prisma from "@/lib/prisma/prisma";

export async function POST(request: any) {
  const res = await request.json();
  const { title, content } = res;
  console.log({ res });

  const result = await prisma.post.create({
    data: {
      title,
      content,
      author: { create: { name: "Nick" } }, //fix later
    },
  });
  return NextResponse.json({ result });
}
