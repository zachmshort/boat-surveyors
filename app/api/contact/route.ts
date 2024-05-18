import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  const { name, email, phone, address, vesselLocation, explanation } =
    await request.json();
  const contact = await prisma.contact.create({
    data: {
      name,
      email,
      phone,
      address,
      vesselLocation,
      explanation,
    },
  });
  return NextResponse.json(contact);
}
