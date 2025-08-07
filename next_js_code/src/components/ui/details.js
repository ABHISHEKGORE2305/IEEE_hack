"use server";

import { PrismaClient } from "@prisma/client";
import isProtected from "./protected";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

export async function adddetails(formData) {
const user = await isProtected()
  const address = formData.get('address');
  const dob = formData.get('dob');
  const phone = formData.get('phone');
  await prisma.user.update({
    where:{
        email: user.email
    },
    data:{
        address,
        dob: new Date(dob),
        phone,
    }
  })
  redirect('/user_dashboard')
}
