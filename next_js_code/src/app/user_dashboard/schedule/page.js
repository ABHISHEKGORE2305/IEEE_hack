import isProtected from "@/components/ui/protected";
import {PrismaClient} from '@prisma/client';
import Link from "next/link";
const prisma = new PrismaClient();

const page = async () => {
   const user = await isProtected();
   if (!user) {
       return redirect('/login');
   }
   const clinic = await prisma.clinic.findMany()
   // const clinic=[
   //    {
   //       id:"222233",
   //       name:"dbfhdfk",
   //       address:"weewwwee"
   //    },
   //    {
   //       id:"222233",
   //       name:"dbfhdfk",
   //       address:"weewwwee"
   //    },
   //    {
   //       id:"222233",
   //       name:"dbfhdfk",
   //       address:"weewwwee"
   //    },
   //    {
   //       id:"222233",
   //       name:"dbfhdfk",
   //       address:"weewwwee"
   //    },
   //    {
   //       id:"222233",
   //       name:"dbfhdfk",
   //       address:"weewwwee"
   //    },
   //    {
   //       id:"222233",
   //       name:"dbfhdfk",
   //       address:"weewwwee"
   //    },
   //    {
   //       id:"222233",
   //       name:"dbfhdfk",
   //       address:"weewwwee"
   //    },
   // ]
console.log(clinic);
   return(
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 py-16 px-4 flex flex-col items-center">
      <div className="w-full max-w-5xl">
        <div className="flex items-center justify-between bg-blue-800 rounded-3xl px-10 py-8 shadow-2xl mb-12">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-2">Select a Clinic</h1>
            <p className="text-blue-200 text-lg font-light">Choose a clinic below to schedule your appointment</p>
          </div>
          <div className="hidden md:flex items-center justify-center bg-blue-700 rounded-full w-20 h-20 shadow-lg">
            <svg className="w-10 h-10 text-blue-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          </div>
        </div>
        {/* Make the cards scrollable */}
        <div className="max-h-[60vh] overflow-y-auto no-scrollbar">
          <ol className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {clinic.map((clinic) => (
              <li
                key={clinic.id}
                className="group bg-white/95 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-200 p-8 flex flex-col justify-between border border-blue-200 hover:border-blue-500"
              >
                <div className="flex items-center mb-6">
                  <div className="rounded-xl bg-gradient-to-br from-blue-200 to-blue-500 w-16 h-16 flex items-center justify-center shadow-md mr-5">
                    <svg className="w-8 h-8 text-blue-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2h5" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div>
                    <Link
                      href={`/user_dashboard/schedule/${clinic.id}`}
                      className="text-2xl font-semibold text-blue-900 group-hover:text-blue-700 transition-colors duration-150"
                    >
                      {clinic.name}
                    </Link>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-blue-600 text-base mb-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2h5" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <span className="font-medium">Address:</span>
                  <span className="text-blue-800">{clinic.address}</span>
                </div>
                <div className="mt-8 flex justify-end">
                  <Link
                    href={`/user_dashboard/schedule/${clinic.id}`}
                    className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold rounded-xl px-7 py-2.5 shadow-lg transition-all duration-150 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    View Doctors
                  </Link>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
   )
}


export default page;