'use server'

import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache'
import isProtected from './protected'

const prisma = new PrismaClient()

export async function uploadpic(profile) {
const user = await isProtected()
  await prisma.user.update({
    where: {
      id: user.id
    },
    data:{
        profile
    }
  })

  revalidatePath('/profile')
}