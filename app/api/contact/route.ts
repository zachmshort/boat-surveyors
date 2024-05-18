import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  const { name, email, phone, address, vesselLocation } = await request.json();
  const contact = await prisma.contact.create({
    data: {
      name,
      email,
      phone,
      address,
      vesselLocation,
    },
  });
  return NextResponse.json(contact);
}
