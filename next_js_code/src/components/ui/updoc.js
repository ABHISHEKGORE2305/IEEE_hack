'use server'

import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache'
import isdoctor from './isdoctor'


const prisma = new PrismaClient()

export async function uploadpic(profile) {
const doctor = await isdoctor()
  await prisma.user.update({
    where: {
      id: doctor.id
    },
    data:{
        profile
    }
  })

  revalidatePath('/profile')
}