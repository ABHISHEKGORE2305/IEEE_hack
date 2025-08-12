"use server"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function getDoctors(){
    const doctor = prisma.doctor.findMany({
        include:{
            clinic: true
        }
    })
    return doctor
}