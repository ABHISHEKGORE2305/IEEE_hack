"use server"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function getDoctor(id){
    const doctor = prisma.doctor.findUnique({
        where: {
            id
        },
        include:{
            clinic: true
        }
    })
    return doctor
}