import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(req, res) {
  const { id } = req.params;

  if (!id) {
    return NextResponse.json(
      { message: "Member ID is required!" },
      { status: 400 }
    );
  }

  await prisma.user.delete({
    where: { id },
  });

  return NextResponse.json(
    { message: "User Deleted Successfully!" },
    { status: 200 }
  );
}

export async function PATCH(req, res) {
  const body = await req.json();
  const { id, ...data } = body;

  if (!id) {
    return NextResponse.json(
      { message: "User ID is required!" },
      { status: 400 }
    );
  }

  const updatedUser = await prisma.user.update({
    where: { id },
    data,
  });

  return NextResponse.json(
    { data: updatedUser, message: "User Updated Successfully!" },
    { status: 200 }
  );
}

export async function GET(req, res) {
  const users = await prisma.user.findMany();

  return NextResponse.json(
    { data: users, message: "All Users Fetched Successfully!" },
    { status: 200 }
  );
}
