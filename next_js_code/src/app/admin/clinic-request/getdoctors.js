import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default async function getDoctors(){
    const docs = await prisma.doctor.findMany();
    return docs
}