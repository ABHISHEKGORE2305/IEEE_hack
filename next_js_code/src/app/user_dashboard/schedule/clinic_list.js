
import {PrismaClient} from '@prisma/client';
import React from 'react'
import Link from "next/link";
import Search from '../search';
const prisma= new PrismaClient()
async function Cliniclist({query}) {
  

    const clinics = await prisma.clinic.findMany()
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

   const filteredclinics=Array.isArray(clinics)?clinics.filter((clinic)=>{
    return clinic.name.toLowerCase().includes(query.toLowerCase())
   }):[]

  return (
    
      <div className="w-full max-w-5xl">
        
        {/* Make the cards scrollable */}
        <div className="max-h-[60vh] overflow-y-auto no-scrollbar">
          <ol className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {filteredclinics.map((clinic) => (
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
    
  )
}

export default Cliniclist

