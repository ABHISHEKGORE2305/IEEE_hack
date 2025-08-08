'use server'

import { PrismaClient } from '@prisma/client'
import isProtected from './protected'
import { redirect } from 'next/navigation'

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

  redirect('/user_dashboard/profile')
}