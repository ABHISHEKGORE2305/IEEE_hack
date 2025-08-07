'use server'

import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache'

const prisma = new PrismaClient()

export async function createClinic(formData) {
  const name = formData.get('clinic-name') 
  const address = formData.get('address') 
  const email = formData.get('email') 
  const phone = formData.get('phone') 

  await prisma.clinic.create({
    data: {
      name,
      address,
      email,
      phone,
    },
  })

  revalidatePath('/')
}