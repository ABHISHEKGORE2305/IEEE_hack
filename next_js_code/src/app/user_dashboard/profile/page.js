"use client"
import { adddetails } from "@/components/ui/details";
import { uploadpic } from "@/components/ui/upload";
import { CldUploadWidget } from "next-cloudinary";

const page = ()=>{
    return (
        <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <div className="flex flex-col items-center gap-4">
                <div className="relative">
                    <img
                        src={"https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
                        alt="Profile"
                        className="w-32 h-32 rounded-full object-cover border-4 border-blue-200"
                    />
                    <div className="absolute bottom-0 right-0">
                        <CldUploadWidget
                            uploadPreset="ieeehacka"
                            onSuccess={async (result, { widget }) => {
                                await uploadpic(result.info.secure_url);
                                // Optionally, refresh user data after upload
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
                <h2 className="text-2xl font-bold text-gray-800">User Name</h2>
                <p className="text-gray-600 text-sm">user@email.com</p>
                <form action={adddetails} className="w-full mt-6 flex flex-col gap-4">
                    <div>
                        <label className="block text-gray-700 font-medium mb-1" htmlFor="address">Address</label>
                        <input
                            type="text"
                            name="address"
                            id="address"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                            placeholder="Enter your address"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-1" htmlFor="dob">Date of Birth</label>
                        <input
                            type="date"
                            name="dob"
                            id="dob"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-1" htmlFor="phone">Phone</label>
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                            placeholder="Enter your phone number"
                        />
                    </div>
                    <input
                        type="submit"
                        value="Save Changes"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg px-4 py-2 mt-2 cursor-pointer"
                    />
                </form>
            </div>
        </div>
    )
}

export default page;