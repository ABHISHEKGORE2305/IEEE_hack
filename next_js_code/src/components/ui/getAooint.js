

"use server"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function getAppoint(id){
    const appointments = await prisma.appointment.findMany({
        where: {
            doctorId: id,
        },
        include:{
            user: true
        },
        orderBy:{
            createdAt: 'desc'
        }
    })
    return appointments
}