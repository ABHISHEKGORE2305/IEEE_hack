import isProtected from "@/components/ui/protected";
import {PrismaClient} from '@prisma/client';
import Link from "next/link";
// const prisma = new PrismaClient();

// const page = async () => {
   // const user = await isProtected();
   if (false) {
       return redirect('/login');
   }
   // const clinic = await prisma.clinic.findMany()
   const clinic=[
      {
         id:"222233",
         name:"dbfhdfk",
         address:"weewwwee"
      },
      {
         id:"222233",
         name:"dbfhdfk",
         address:"weewwwee"
      },
      {
         id:"222233",
         name:"dbfhdfk",
         address:"weewwwee"
      },
      {
         id:"222233",
         name:"dbfhdfk",
         address:"weewwwee"
      },
      {
         id:"222233",
         name:"dbfhdfk",
         address:"weewwwee"
      },
      {
         id:"222233",
         name:"dbfhdfk",
         address:"weewwwee"
      },
      {
         id:"222233",
         name:"dbfhdfk",
         address:"weewwwee"
      },
   ]

   const page =()=>{
   return(
    <div className="bg-blue-200 rounded-2xl w-3xl p-2 m-2 translate-y-10 translate-x-4 ">
    <div className="bg-amber-600 rounded-2xl w-2xl p-2 m-2">
      <h1>Select Clinic for appoinment here</h1>
    </div>
    
    <ol>
      {clinic.map((clinic) => {
         return (
            <div key={clinic.id} className="bg-amber-300 rounded-2xl w-2xl p-2 m-2 ">
               <li className="flex rounded-2xl w-2xl  bg-blue-400">

               <div>
                  <Link className="bg-green-300 px-2 mx-2 rounded-2xl" href={`/user_dashboard/schedule/${clinic.id}`}>{clinic.name}</Link>
               </div>

               <div className="bg-green-400 px-2 mx-2 rounded-2xl">
                  <p>Address: {clinic.address}</p>
               </div>
               </li>
            </div>
         );
      })}
    </ol>
    </div>
   )
}

export default page;
{/* <p>Phone: {clinic.phone}</p>
<form action={async (formData) => {
"use server";
const appointment = await prisma.appointment.create({
   data: {
      userId: user.id,
      clinicId: clinic.id,
      date: formData.get('date'),
      time: formData.get('time'),
   },
});
redirect('/user_dashboard/schedule');
}}>
<label htmlFor="date">Date:</label>
<input type="date" id="date" name="date" required />
<label htmlFor="time">Time:</label>
<input type="time" id="time" name="time" required />
<button type="submit">Book Appointment</button>
</form> */}