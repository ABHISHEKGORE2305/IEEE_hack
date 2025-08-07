import isProtected from "@/components/ui/protected";
import {PrismaClient} from '@prisma/client';
import Link from "next/link";

const prisma = new PrismaClient();

const page = async ({params}) => {
    const yser = await isProtected();
    if (!yser) {
        return redirect('/login');
    }
    const clinicId = params.id;
    const clinic = await prisma.clinic.findUnique({
        where: {
            id : clinicId
        }
    })
    if (!clinic) {
        return redirect('/error');
    }
    const doctors = await prisma.doctor.findMany({
        where: {
            clinicId: clinicId
        }
    })
    return(
        <div className="bg-gradient-to-br from-blue-100 to-blue-300 min-h-screen grid grid-cols-4 gap-4 h-full overflow-y-auto p-4">
          {/* Clinic Info Header */}
          <div className="bg-blue-500 rounded-2xl p-6 m-2 col-span-4 shadow flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white mb-2">Schedule your appointments at <span className="text-blue-100">{clinic.name}</span></h1>
              <p className="text-blue-100 text-sm">Address: {clinic.address}</p>
              <p className="text-blue-100 text-sm">Phone: {clinic.phone}</p>
            </div>
            <div className="mt-4 md:mt-0">
              <svg className="w-20 h-20 text-blue-200 opacity-60" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              </svg>
            </div>
          </div>
          
          {/* Doctors List */}
          <ol className="col-span-4 flex flex-wrap gap-6 justify-center">
            {doctors.map((doctor) => (
              <li key={doctor.id} className="bg-white/80 shadow-lg rounded-2xl p-4 m-2 w-72 flex flex-col items-center hover:shadow-2xl transition-shadow duration-200">
                {/* Doctor Avatar */}
                <div className="rounded-full bg-blue-200 w-28 h-28 flex items-center justify-center mb-3 shadow">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/6073/6073873.png"
                    alt="Doctor Avatar"
                    className="h-24 w-24 object-cover rounded-full"
                  />
                </div>
                {/* Doctor Name */}
                <Link
                  href={`/user_dashboard/schedule/${clinicId}/${doctor.id}`}
                  className="text-lg font-semibold text-blue-700 hover:underline"
                >
                  Dr. {doctor.name}
                </Link>
                {/* Rating */}
                <div className="flex items-center mt-2 mb-1">
                  <svg className="w-5 h-5 text-blue-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/>
                  </svg>
                  <span className="text-blue-500 font-medium">4.5</span>
                </div>
                {/* Specialization */}
                <div className="text-xs text-blue-400 font-light mb-1">Specialization</div>
                <div className="bg-blue-100 text-blue-700 text-center text-base rounded-xl px-4 py-1 mb-2 font-semibold">
                  {doctor.specialization}
                </div>
                {/* Contact Info */}
                <div className="w-full mt-2">
                  <div className="flex items-center justify-center gap-2 text-blue-500 text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 01-8 0 4 4 0 018 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v7m0 0H9m3 0h3" />
                    </svg>
                    <span>{doctor.email || "doctor@email.com"}</span>
                  </div>
                </div>
                {/* Book Button */}
                <div className="mt-4 w-full flex justify-center">
                  <Link
                    href={`/user_dashboard/schedule/${clinicId}/${doctor.id}`}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg px-6 py-2 transition"
                  >
                    Book Appointment
                  </Link>
                </div>
              </li>
            ))}
          </ol>
        </div>
    )
}


export default page;