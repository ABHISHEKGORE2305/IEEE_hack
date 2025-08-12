"use server"

import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";

const prisma= new PrismaClient()

async function handleClickfalse(email) {
    await prisma.doctor.update({
        where:{
            email
        },
        data:{
            verified:false
        }

    })    
    
    redirect('/admin/home/clinic-request')
}



export default handleClickfalse
