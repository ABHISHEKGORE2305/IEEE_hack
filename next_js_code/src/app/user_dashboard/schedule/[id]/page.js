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
        <>
        <h1>Schedule your appointments at {clinic.name}</h1>
        <p>Address: {clinic.address}</p>
        <p>Phone: {clinic.phone}</p>
        <ol>
            {doctors.map((doctor)=>{
                return (
                    <li key={doctor.id}>
                        <Link href={`/user_dashboard/schedule/${clinicId}/${doctor.id}`}>{doctor.name}</Link>
                        <p>Specialization: {doctor.specialization}</p>
                    </li>
                )
            })}
        </ol>
        </>
    )
}


export default page;