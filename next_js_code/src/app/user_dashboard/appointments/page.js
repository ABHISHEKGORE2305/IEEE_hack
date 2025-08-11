import isProtected from "@/components/ui/protected";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const page = async () => {
  const user = await isProtected()
  const appointments = await prisma.appointment.findMany({
      where: {
          userId: user.id
      },
      include:{
        doctor: true
      }
  })
  console.log(appointments)
  return (
    <>
      <div className="h-2/3 rounded-2xl m-3 p-2 translate-y-15 bg-slate-100">
        <h1 className="text-xl font-bold text-zinc-500 mb-3">
          Your Appointments
        </h1>
        {appointments.length > 0 ? (
          appointments.map((app) => {
            console.log(app.user);
            return (
              <div
                key={app.id}
                className="h-15  bg-white flex p-2 items-center justify-between rounded-lg my-2"
              >
                <div className="h-full aspect-square rounded-full overflow-hidden">
                  <img
                    width="100%"
                    height="100%"
                    src={app.doctor.profile}
                  ></img>
                </div>
                {(app.status !== "done")?<div className="font-thin w-30">{app.doctor.name}</div>:<a href={`/profile/${app.doctor.id}`} className="font-thin w-30">{app.doctor.name}</a>}
                <div className="font-semibold">{app.date}</div>
                <div className="font-semibold">{app.time}:00</div>
                <div className="font-semibold">{app.status}</div>
                
                <div className="h-2/3 aspect-square flex items-center justify-center">
                                {app.status === "done" ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="green"
                                        className="w-7 h-7"
                                    >
                                        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1.293-6.707l7-7-1.414-1.414-5.293 5.293-2.293-2.293-1.414 1.414 3.707 3.707z" />
                                    </svg>
                                ) : app.status === "cancel" ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="red"
                                        className="w-7 h-7"
                                    >
                                        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm5-13.59L13.59 12 17 15.41 15.41 17 12 13.59 8.59 17 7 15.41 10.41 12 7 8.59 8.59 7 12 10.41 15.41 7 17 8.59z" />
                                    </svg>
                                ) : app.status==="accept"? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="blue"
                                        className="w-7 h-7"
                                    >
                                        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1.293-6.707l7-7-1.414-1.414-5.293 5.293-2.293-2.293-1.414 1.414 3.707 3.707z" />
                                    </svg>
                                ):(
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="#f59e42"
                                        className="w-7 h-7"
                                    >
                                        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm1-10V7h-2v7h6v-2h-4z" />
                                    </svg>
                                )}
                            </div>
              </div>
            );
          })
        ) : (
          <div className="h-full text-xl text-red-400">
            No Appointments yet : (
          </div>
        )}
      </div>
    </>
  );
};

export default page;
