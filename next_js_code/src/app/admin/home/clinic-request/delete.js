import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function unverify(email){
    await prisma.doctor.update({
        where:{
            email: email
        },
        data:{
            verified: false
        }
    })
}