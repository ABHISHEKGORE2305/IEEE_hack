import isProtected from "@/components/ui/protected";
import {PrismaClient} from '@prisma/client';
import Link from "next/link";

// const prisma = new PrismaClient();

// const page = async ({params}) => {
//     const yser = await isProtected();
//     if (!yser) {
//         return redirect('/login');
//     }
    // const clinicId = params.id;
    // const clinic = await prisma.clinic.findUnique({
    //     where: {
    //         id : clinicId
    //     }
    // })
    // if (!clinic) {
    //     return redirect('/error');
    // }
    // const doctors = await prisma.doctor.findMany({
    //     where: {
    //         clinicId: clinicId
    //     }
    // })

const clinic=
    {
        name:"apollo",
        address:"hill way",
        phone:"111111111",
        id:"3444343"
    }


const doctors=[
    {
        id:123233,
        name:"ramuu",
        specialization:"cardiologist"
    },
    {
        id:123233,
        name:"ramuu",
        specialization:"cardiologist"
    },
    {
        id:123233,
        name:"ramuu",
        specialization:"cardiologist"
    },
    {
        id:123233,
        name:"ramuu",
        specialization:"cardiologist"
    },
    {
        id:123233,
        name:"ramuu",
        specialization:"cardiologist"
    },
    {
        id:123233,
        name:"ramuu",
        specialization:"cardiologist"
    },
    {
        id:123233,
        name:"ramuu",
        specialization:"cardiologist"
    },
    {
        id:123233,
        name:"ramuu",
        specialization:"cardiologist"
    },
    {
        id:123233,
        name:"ramuu",
        specialization:"cardiologist"
    },
    {
        id:123233,
        name:"ramuu",
        specialization:"cardiologist"
    },
    {
        id:123233,
        name:"ramuu",
        specialization:"cardiologist"
    },
    {
        id:123233,
        name:"ramuu",
        specialization:"cardiologist"
    },
]

const clinicId=12345
const page=()=>{
    return(
        <div className="bg-blue-200 grid grid-cols-4 h-full overflow-y-scroll ">
        <div className="bg-amber-200 rounded-2xl p-2 m-2 col-span-4">
            <div>
                <h1>Schedule your appointments at {clinic.name}</h1>
            </div>
            <div>
                <p>Address: {clinic.address}</p>
            </div>
            <div>
                <p>Phone: {clinic.phone}</p>
            </div>

        </div>
        
            <ol className="col-span-4 m-2 p-1" >
            <div className="bg-red-300 rounded-2xl flex flex-wrap justify-center  ">
            {doctors.map((doctor)=>{
                return (
                    
                        <div key={doctor.id} className="bg-blue-300 w-70 rounded-2xl p-2 m-2 h-80 ">
                            <div className="bg-green-200 w-14 h-6 text-center -translate-x-2 translate-y-2 rounded-tr-2xl rounded-br-2xl">*4.5</div>
                    
                            <div className="justify-items-center">
                                <div className="rounded-full bg-pink-300 w-40 h-40 m-1 mt-0 ">
                                    
                                </div>
                                <li key={doctor.id}>
                                
                                <div className="text-center bg-green-300 p-1 m-">
                                    <Link href={`/user_dashboard/schedule/${clinicId}/${doctor.id}`}>{doctor.name}</Link>
                                </div>
                                <div>
                                    <div className="text-xs m-1 p-1 text-center font-thin">
                                        Specialization
                                    </div>
                                    
                                    <div className="bg-blue-200 text-blue-500 text-center text-2xl rounded-2xl m-1  px-4 py-0.5">
                                        {doctor.specialization}
                                    </div>
                                </div>
                                
                                </li>
                            </div>
                        </div>                                  
                
                )
            })}
            </div>
        </ol>
       
        </div>
    )
}


export default page;