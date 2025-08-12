'use server'

import { PrismaClient } from '@prisma/client'
import { redirect } from 'next/navigation'

const prisma = new PrismaClient()


export async function uploadreport(userId, reportUrl) {
  if (!userId || !reportUrl) {
    throw new Error('User ID and report URL are required.')
  }

  await prisma.user.update({
    where: { id: userId },
    data: {
      reports: {
        push: reportUrl
      }
    }
  })

  redirect('/doctor_dashboard/appointments')
}