import isProtected from "@/components/ui/protected"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const page = async ()=>{
    const user = await isProtected()
    const appointments = await prisma.appointment.findMany({
        where: {
            userId: user.id
        }
    })
    console.log(appointments)
    return (
        <>
        <h1>Your Appointmenst:</h1>
            {
                appointments.map(opp => {
                    return <div key={opp.id}>{opp.date}     ====    {opp.time}pm      {opp.status}</div>
                })
            }
        </>
    )
}

export default page;