import isProtected from "@/components/ui/protected";
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";
const prisma = new PrismaClient();

const page = async ({ params }) => {
  const doctorId = params.slug;
  const clinicId = params.id;
  const user = await isProtected();
  const doctor = await prisma.doctor.findUnique({
    where: {
      id: doctorId,
    },
    include: {
      clinic: true,
    },
  });
  if (!user) {
    return redirect("/login");
  }
  return (
    <div className="bg-gradient-to-br from-blue-100 to-blue-300 rounded-2xl m-2 grid grid-cols-3 gap-6 min-h-[80vh] shadow-lg">
      {/* Left Panel: Doctor Info */}
      <div className="bg-blue-50 m-2 p-6 rounded-2xl flex flex-col items-center col-span-1 min-w-[280px] shadow-md">
        {/* Doctor Avatar */}
        <div className="bg-blue-200 rounded-full h-32 w-32 m-2 mt-4 flex items-center justify-center overflow-hidden shadow">
          <img
            src="https://cdn-icons-png.flaticon.com/512/6073/6073873.png"
            alt="Doctor Avatar"
            className="h-full w-full object-cover rounded-full"
          />
        </div>
        {/* Doctor Name */}
        <div className="bg-blue-100 m-2 p-2 text-center rounded-2xl w-full">
          <p className="text-2xl font-bold text-blue-800">Dr. {doctor.name}</p>
          <p className="text-sm text-blue-500 mt-1">{doctor.specialization || "Specialization"}</p>
        </div>
        {/* Doctor Email */}
        <div className="bg-blue-200 mt-4 font-light w-full rounded-2xl p-2">
          <div className="bg-blue-100 m-1 p-2 rounded-2xl flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 text-blue-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            <span className="text-blue-800">{doctor.email}</span>
          </div>
        </div>
        {/* Clinic Info */}
        <div className="bg-blue-100 w-full mt-6 p-4 rounded-2xl flex flex-col items-center justify-center shadow">
          <h2 className="text-lg font-semibold text-blue-900 mb-2">Clinic</h2>
          <p className="text-blue-700 font-medium">{doctor.clinic?.name || "Clinic"}</p>
        </div>
      </div>

      {/* Center Panel: Doctor Details & How to Book */}
      <div className="flex flex-col items-center justify-center col-span-1">
        <div className="bg-blue-200 w-80 h-auto m-2 p-6 rounded-2xl flex flex-col items-center justify-center shadow-lg">
          <h2 className="text-xl font-bold text-blue-900 mb-4">Doctor Details</h2>
          <div className="w-full space-y-3">
            <div className="flex justify-between items-center bg-blue-100 rounded-xl px-4 py-2">
              <span className="font-medium text-blue-700">Doctor ID:</span>
              <span className="text-blue-900">{doctorId}</span>
            </div>
            <div className="flex justify-between items-center bg-blue-100 rounded-xl px-4 py-2">
              <span className="font-medium text-blue-700">Experience:</span>
              <span className="text-blue-900">{doctor.experience || "5+ years"}</span>
            </div>
            <div className="flex justify-between items-center bg-blue-100 rounded-xl px-4 py-2">
              <span className="font-medium text-blue-700">Specialization:</span>
              <span className="text-blue-900">{doctor.specialization || "MBBS, MD"}</span>
            </div>
            <div className="flex justify-between items-center bg-blue-100 rounded-xl px-4 py-2">
              <span className="font-medium text-blue-700">Contact:</span>
              <span className="text-blue-900">{doctor.doctorEmail || doctor.email || "doctor@email.com"}</span>
            </div>
            <div className="flex justify-between items-center bg-blue-100 rounded-xl px-4 py-2">
              <span className="font-medium text-blue-700">Clinic:</span>
              <span className="text-blue-900">{doctor.clinic?.name || "Clinic"}</span>
            </div>
          </div>
        </div>
        {/* How to Book Section - visible and padded */}
        <div className="bg-blue-100 w-full mt-8 p-6 rounded-2xl flex flex-col items-center justify-center shadow-lg">
          <h2 className="text-lg font-semibold text-blue-900 mb-2">How to Book</h2>
          <ol className="list-decimal list-inside text-blue-700 text-base space-y-1 text-left w-full pl-4">
            <li>Select a date for your appointment.</li>
            <li>Confirm your booking.</li>
            <li>Choose a time slot.</li>
            <li>Arrive at the clinic on time.</li>
          </ol>
        </div>
      </div>

      {/* Right Panel: Appointment Form */}
      <div className="bg-blue-50 m-2 p-6 rounded-2xl w-full flex flex-col items-center col-span-1 shadow-md">
        <h1 className="mt-2 text-2xl font-bold text-blue-900 mb-6">Schedule an Appointment</h1>
        <form
          className="flex flex-col gap-5 w-full max-w-xs"
          action={async (formData) => {
            "use server";
            const date = formData.get("date");
            redirect(
              `/user_dashboard/schedule/${clinicId}/${doctorId}/${date}`
            );
          }}
        >
          <label className="text-blue-900 font-medium" htmlFor="date">
            Select Date
          </label>
          <input
            type="date"
            name="date"
            id="date"
            className="rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-blue-900 p-2"
            required
            min={new Date().toISOString().split("T")[0]}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white rounded-lg px-6 py-2 font-semibold hover:bg-blue-700 transition"
          >
            Confirm
          </button>
        </form>
        <div className="mt-10 text-blue-700 text-sm text-center">
          <p>
            After confirming, you will be redirected to select a time slot for your appointment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
