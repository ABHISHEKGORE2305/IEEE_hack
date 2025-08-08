'use server'

import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache'
import isdoctor from './isdoctor'
import { redirect } from 'next/navigation'


const prisma = new PrismaClient()

export async function uploadpic(profile) {
const doctor = await isdoctor()
  await prisma.doctor.update({
    where: {
      id: doctor.id
    },
    data:{
        profile
    }
  })

  redirect('/doctor_dashboard/profile')
}