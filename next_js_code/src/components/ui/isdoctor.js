import { PrismaClient } from "@prisma/client";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

export default async function isdoctor(){
    const cookieStore = await cookies()
    const session = cookieStore.get('session')
    if(!session){
        redirect('/login')
    }
    const email = session.value.split('-')[0]

    const doctor = prisma.doctor.findUnique({
        where: {
            email
        }
    })
    if(!doctor){
        redirect('/login')
    }
    return doctor
}