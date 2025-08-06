
import isProtected from "@/components/ui/protected";
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

const page = async ({ params }) => {
  const date = params.date;
  const doctorId = params.slug;
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
  const times = [9, 10, 11, 2, 3, 4];
  // console.log(booked)
  return (
    <>
      {/* <div>
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
        </div> */}

      <div className="h-full w-full bg-linear-to-bl from-blue-600 to-cyan-300 overflow-hidden no-scrollbar">
        <h1 className="text-2xl text-center text-slate-50 mt-10">
          Book your preferred time slot
        </h1>
        <div className="h-1/2 w-auto relative translate-y-[40%] mx-5 flex overflow-x-scroll no-scrollbar">
          {times.map((app) => {
            if (booked.includes(app)) {
                return(
                    <div key={app} className="h-full aspect-6/7 border-1 border-blue-600 flex items-center justify-center bg-white">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="lightblue" class='size-10'><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg>
                    </div>
                )
            } else {
              return (
                <div key={app} className="h-full aspect-6/7 border-1 border-white flex items-center justify-center"
                    onClick={()=>{
                        setSelected(app)
                        console.log(selected)
                    }}
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mb-5 h-20 w-20"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"></path>
                    </svg>
                    <h1 className="text-white text-center text-xl">{app}:00</h1>
                    <p className="text-white text-center text-xl">to</p>
                    <h1 className="text-white text-center text-xl">{app}:00</h1>
                  </div>
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
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default page;
