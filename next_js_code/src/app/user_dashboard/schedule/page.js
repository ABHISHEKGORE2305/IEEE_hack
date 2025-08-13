import isProtected from "@/components/ui/protected";
import {PrismaClient} from '@prisma/client';
import Link from "next/link";
import Search from "../search";
const prisma = new PrismaClient();
import Cliniclist from "./clinic_list";

const page = async ({searchParams}) => {
   const user = await isProtected();
   if (!user) {
       return redirect('/login');
   }
   
   const params = await searchParams; // resolves to the actual object
  const query = params?.query || "";
   console.log(query)

   return(
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 py-5 px-4 flex flex-col items-center" >
      <div className=" w-full max-w-200 h-21 flex items-center justify-between bg-blue-800 rounded-3xl px-10 py-8 shadow-2xl mb-2 -translate-x-2" style={{borderRadius: "50px 16px 16px 50px"}}>
          <div className="hidden md:flex items-center justify-center bg-blue-700 rounded-full w-20 h-20 shadow-lg" style={{marginLeft: "-37px"}}>
            <svg className="w-10 h-10 text-blue-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          </div>
          <div className="absolute w-[90%] bg-white ml-5 rounded-lg" style={{marginLeft: "-17px"}}>
      <Search placeholder="search clinics" /> 
        </div>
        </div>

        
      <Cliniclist query={query}></Cliniclist>
    </div>
   )
}


export default page;