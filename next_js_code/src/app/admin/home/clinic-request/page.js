'use client'

import { columns } from "@/app/admin/home/clinic-request/columns"
import { DataTable } from "@/app/admin/home/clinic-request/data-table"
import { useEffect, useState } from "react"

export default function DemoPage() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch('/api/doctors')
        const doctors = await response.json()
        setData(doctors)
      } catch (error) {
        console.error('Error fetching doctors:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchDoctors()
  }, [])

  if (loading) {
    return <div className="container mx-auto py-10">Loading...</div>
  }

  return (
    <div className="container mx-auto py-10">
      <div className="text-3xl text-bold p-6">Clinic Requests</div>
      <DataTable columns={columns} data={data} />
    </div>
  )
}