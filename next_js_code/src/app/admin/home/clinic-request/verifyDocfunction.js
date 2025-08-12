"use server"

import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";

const prisma= new PrismaClient()

async function handleClick(email) {
    await prisma.doctor.update({
        where:{
            email
        },
        data:{
            verified:true
        }

    })    
    
    redirect('/admin/home/clinic-request')
}



export default handleClick
