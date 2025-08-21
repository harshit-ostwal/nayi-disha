import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const body = await req.json();
  const newUser = await prisma.user.create({
    data: body,
  });

  return NextResponse.json(
    { data: newUser, message: "User Created Successfully!" },
    { status: 201 }
  );
}
