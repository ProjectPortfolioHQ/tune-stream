import { NextRequest, NextResponse } from "next/server";
import { encrypt, createSession } from "@/lib/session";
import { redirect } from "next/navigation";
import prisma from "@/lib/db";
const bcrypt = require("bcrypt");

export async function POST(request: NextRequest) {
  const body = await request.json();
  const user = await prisma.internalUser.findUnique({
    where: {
      email: body.email,
    },
    select: {
      email: true,
      password: true,
    },
  });

  if (!user) {
    return NextResponse.json({}, { status: 401 });
  }

  const isSamePassword = await bcrypt.compare(body.password, user.password);
  if (!isSamePassword) {
    return NextResponse.json({}, { status: 401 });
  }

  await encrypt(body);
  await createSession(body.email);
  redirect("/admin/dashboard");
}
