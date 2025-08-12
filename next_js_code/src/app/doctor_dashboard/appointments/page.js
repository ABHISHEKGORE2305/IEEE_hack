"use client"

import isdoctor from "@/components/ui/isdoctor"
import isProtected from "@/components/ui/protected"
import StatusButton from "../statusButton"
import { CldUploadWidget } from "next-cloudinary"
import { useEffect, useState } from "react"
import getAppoint from "@/components/ui/getAooint"
import { uploadreport } from "@/components/ui/uploadreport"

// Remove PrismaClient usage from client component

const Page = () => {
    const [appointments, setAppointments] = useState([])
    const [loading, setLoading] = useState(true)

    // Fix: Actually call getData in useEffect
    useEffect(() => {
        const getData = async () => {
            try {
                const doctor = await isdoctor()
                if (!doctor || !doctor.id) {
                    setAppointments([])
                    setLoading(false)
                    return
                }
                const appointments = await getAppoint(doctor.id)
                setAppointments(appointments)
            } catch (err) {
                setAppointments([])
            } finally {
                setLoading(false)
            }
        }
        getData()
    }, [])

    // Remove undefined uploadpic usage
    // If you want to upload a picture, you need to define uploadpic or remove the upload button

    if (loading) {
        return (
            <div className="flex h-64 w-full items-center justify-center">
                <div className="flex space-x-2">
                    {[1, 2, 3].map((dot) => (
                        <div
                            key={dot}
                            className="h-3 w-3 rounded-full bg-blue-500 animate-bounce"
                            style={{
                                animationDelay: `${dot * 0.2}s`,
                                animationDuration: '0.8s'
                            }}
                        />
                    ))}
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="w-full max-w-3xl mx-auto mt-6">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Your Appointments</h2>
                {appointments.length === 0 ? (
                    <div className="text-center text-gray-500 py-10 text-lg">
                        No appointments found.
                    </div>
                ) : (
                    <div className="space-y-4">
                        {appointments.map((app) => (
                            <div
                                key={app.id}
                                className="h-20 bg-white flex p-3 items-center justify-between rounded-lg shadow hover:shadow-lg transition-shadow duration-200"
                            >
                                <div className="h-full aspect-square rounded-full overflow-hidden border border-blue-200">
                                    <img
                                        width="60"
                                        height="60"
                                        src={
                                            app.user?.profile ||
                                            "https://cdn-icons-png.flaticon.com/512/6073/6073873.png"
                                        }
                                        alt={app.user?.name || "Patient"}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div className="font-thin w-32 text-blue-900 text-lg truncate">
                                    {app.user?.name || "Unknown"}
                                </div>
                                <div className="font-semibold text-blue-700 w-28 text-center">
                                    {app.date
                                        ? new Date(app.date).toLocaleDateString()
                                        : "No date"}
                                </div>
                                <div className="font-semibold text-blue-700 w-20 text-center">
                                    {app.time ? `${app.time}:00` : "--:--"}
                                </div>
                                <StatusButton color="red" status="done" id={app.id}>done</StatusButton>
                                <StatusButton color="red" status="cancel" id={app.id}>cancel</StatusButton>
                                <StatusButton color="blue" status="accept" id={app.id}>accept</StatusButton>
                                
                        <CldUploadWidget
                            uploadPreset="ieeehacka"
                            onSuccess={async (result, { widget }) => {
                        
                                await uploadreport(app.user.id,result.info.secure_url)
                                
                            }}
                        >
                            {({ open }) => (
                                <button
                                    onClick={() => open()}
                                    className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 shadow-lg"
                                    title="Upload reports"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                    </svg>
                                </button>
                            )}
                        </CldUploadWidget>
                    

                                <div className="h-2/3 aspect-square flex items-center justify-center">
                                    {app.status === "done" ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="green"
                                            className="w-7 h-7"
                                        >
                                            <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1.293-6.707l7-7-1.414-1.414-5.293 5.293-2.293-2.293-1.414 1.414 3.707 3.707z" />
                                        </svg>
                                    ) : app.status === "cancel" ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="red"
                                            className="w-7 h-7"
                                        >
                                            <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm5-13.59L13.59 12 17 15.41 15.41 17 12 13.59 8.59 17 7 15.41 10.41 12 7 8.59 8.59 7 12 10.41 15.41 7 17 8.59z" />
                                        </svg>
                                    ) : app.status === "accept" ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="blue"
                                            className="w-7 h-7"
                                        >
                                            <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1.293-6.707l7-7-1.414-1.414-5.293 5.293-2.293-2.293-1.414 1.414 3.707 3.707z" />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="#f59e42"
                                            className="w-7 h-7"
                                        >
                                            <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm1-10V7h-2v7h6v-2h-4z" />
                                        </svg>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}

export default Page