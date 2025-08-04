import isProtected from "@/components/ui/protected";
import { PrismaClient } from "@prisma/client"
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

const page = async ({params})=>{
    const date = params.date
    const doctorId = params.slug
    const userId = await isProtected();
    const appointments = await prisma.appointment.findMany({
        where: {
            doctorId,
            date
        }
    })
    const booked = [];
    appointments.map((opp)=>{
        booked.push(parseInt(opp.time))
    })
    const times = [9,10,11,2,3,4,]
    console.log(booked)
    return(
        <>
        <div>
        <h1>Time Availability</h1>
        {times.map((el)=>{
            if(booked.includes(el)){
                console.log("booked")
                return (<h1 key={el} className="text-red-500">{el}</h1>)
            } else {
                console.log("Available")
                return (
                    <div key={el}>
                <h1 className="text-green-500">{el}</h1>
                <form action={async()=>{
                    "use server"
                    await prisma.appointment.create({
                        data:{
                            userId: userId.id,
                            doctorId,
                            date,
                            time: el.toString()
                        }
                    })
                    redirect('/user_dashboard')
                }}>
                    <input type="submit" value="book"/>
                </form>
                </div>
            )
            }
        })}
        </div>
        </>
    )
}

export default page;