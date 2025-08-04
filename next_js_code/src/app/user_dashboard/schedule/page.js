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
   return(
    <>
    <h1>Schedule your appoinments here</h1>
    <ol>
      {clinic.map((clinic) => {
         return (
            <li key={clinic.id}>
               <Link href={`/user_dashboard/schedule/${clinic.id}`}>{clinic.name}</Link>
               <p>Address: {clinic.address}</p>
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
            </li>
         );
      })}
    </ol>
    </>
   )
}

export default page;