"use client"

import { useEffect, useState } from "react";
import { uploadpic } from "@/components/ui/updoc";
import { CldUploadWidget } from "next-cloudinary";
import isdoctor from '@/components/ui/isdoctor';

const Page = () => {
    const [doctor, setDoctor] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDoctor = async () => {
            const doc = await isdoctor();
            setDoctor(doc);
            setLoading(false);
        };
        fetchDoctor();
    }, []);

    if (loading) {
        return <div className="flex items-center justify-center h-64 text-lg font-semibold">Loading...</div>;
    }

    return (
        <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <div className="flex flex-col items-center gap-4">
                <div className="relative">
                    <img
                        src={doctor?.profile || "https://cdn-icons-png.flaticon.com/512/6073/6073873.png"}
                        alt="Profile"
                        className="w-32 h-32 rounded-full object-cover border-4 border-blue-200"
                    />
                    <div className="absolute bottom-0 right-0">
                        <CldUploadWidget
                            uploadPreset="ieeehacka"
                            onSuccess={async (result, { widget }) => {
                        
                                await uploadpic(result.info.secure_url)

                                // Optionally, refresh doctor data after upload
                                
                            }}
                        >
                            {({ open }) => (
                                <button
                                    onClick={() => open()}
                                    className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 shadow-lg"
                                    title="Upload new profile picture"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                    </svg>
                                </button>
                            )}
                        </CldUploadWidget>
                    </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">{doctor?.name || "Doctor Name"}</h2>
                <p className="text-gray-600 text-sm">{doctor?.email}</p>
                <div className="flex flex-wrap gap-4 mt-4 w-full justify-center">
                    <div className="bg-blue-50 rounded-lg px-4 py-2 text-center">
                        <div className="text-sm text-gray-500">Specialization</div>
                        <div className="font-semibold text-gray-800">{doctor?.specialization || "N/A"}</div>
                    </div>
                    <div className="bg-blue-50 rounded-lg px-4 py-2 text-center">
                        <div className="text-sm text-gray-500">Experience</div>
                        <div className="font-semibold text-gray-800">{doctor?.experience || 0} yrs</div>
                    </div>
                    <div className="bg-blue-50 rounded-lg px-4 py-2 text-center">
                        <div className="text-sm text-gray-500">Rating</div>
                        <div className="font-semibold text-gray-800">{doctor?.rating || 0} / 5</div>
                    </div>
                    <div className="bg-blue-50 rounded-lg px-4 py-2 text-center">
                        <div className="text-sm text-gray-500">Verified</div>
                        <div className={`font-semibold ${doctor?.verified ? "text-green-600" : "text-red-600"}`}>
                            {doctor?.verified ? "Yes" : "No"}
                        </div>
                    </div>
                </div>
                {doctor?.clinic && (
                    <div className="mt-6 w-full">
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">Clinic Information</h3>
                        <div className="bg-gray-50 rounded-lg p-4">
                            <div className="text-gray-800 font-medium">{doctor.clinic.name}</div>
                            <div className="text-gray-600 text-sm">{doctor.clinic.address}</div>
                            <div className="text-gray-600 text-sm">{doctor.clinic.phone}</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Page;