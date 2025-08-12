'use client'

import { columns } from "@/app/admin/home/clinic-request/columns"
import { DataTable } from "@/app/admin/home/clinic-request/data-table"
import getDoctors from "@/components/ui/alldoc"
import getDoctor from "@/components/ui/getDoc"
import { useEffect, useState } from "react"
import VerifyDocButton from "./verifyDocfunction"
import handleClick from "./verifyDocfunction"
import { Button } from "@mui/material"
import { Router } from "next/router"
import handleClickfalse from "./unverifyDocfunction"

export default function DemoPage() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchDoctors = async () => {
      const doctors = await getDoctors();
      setData(doctors)
      setLoading(false)
    }

    fetchDoctors()
  }, [])

  if (loading) {
    return <div className="container mx-auto py-10">Loading...</div>
  }
  

  console.log(data)
  return (
    // <div className="container mx-auto py-10">
    //   <div className="text-3xl text-bold p-6">Clinic Requests</div>
    //   <DataTable columns={columns} data={data} />
    // </div>
    <>
             <div className="w-full max-w-5xl mx-auto mt-10">
                <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Doctors Available</h2>
                {data.length === 0 ? (
                    <div className="text-center text-gray-500 py-10 text-lg">
                        No Doctors found.
                    </div>
                ) : (
                    <div className="overflow-x-auto rounded-lg shadow-lg bg-white">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-blue-50">
                                <tr>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-blue-900 uppercase tracking-wider">Profile</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-blue-900 uppercase tracking-wider">Email</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-blue-900 uppercase tracking-wider">Specialization</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-blue-900 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-blue-900 uppercase tracking-wider">License</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-blue-900 uppercase tracking-wider">Rating</th>
                                    <th className="px-6 py-4 text-center text-xs font-semibold text-blue-900 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-100">
                                {data.map((app) => (
                                    <tr key={app.id} className="hover:bg-blue-50 transition-colors duration-150">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center">
                                                <div className="h-12 w-12 rounded-full overflow-hidden border border-blue-200 bg-gray-100">
                                                    <img
                                                        width="48"
                                                        height="48"
                                                        src={
                                                            app.profile ||
                                                            "https://cdn-icons-png.flaticon.com/512/6073/6073873.png"
                                                        }
                                                        alt={app.name || "doctor"}
                                                        className="object-cover w-full h-full"
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-blue-900 font-medium">{app.email || "mail"}</td>
                                        <td className="px-6 py-4 text-blue-900">{app.specialization || "specialization"}</td>
                                        <td className="px-6 py-4">
                                            {app.verified === true ? (
                                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                                                    Verified
                                                </span>
                                            ) : (
                                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-800">
                                                    Not Verified
                                                </span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 text-blue-900">{app.license || "Unknown"}</td>
                                        <td className="px-6 py-4 text-blue-900">{app.rating || "nil"}</td>
                                        <td className="px-6 py-4 flex flex-col gap-2 items-center">
                                            <Button
                                                variant="contained"
                                                color="success"
                                                size="small"
                                                style={{ minWidth: 90, textTransform: "none" }}
                                                onClick={async () => {
                                                    await handleClick(app.email)
                                                }}
                                            >
                                                Verify
                                            </Button>
                                            <Button
                                                variant="outlined"
                                                color="warning"
                                                size="small"
                                                style={{ minWidth: 90, textTransform: "none" }}
                                                onClick={async () => {
                                                    await handleClickfalse(app.email)
                                                }}
                                            >
                                                Unverify
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
            </>
  )
}