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
          Your upcoming Appointments
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
                <div className="font-thin w-30">{app.doctor.name}</div>
                <div className="font-semibold">{app.date}</div>
                <div className="font-semibold">{app.time}:00</div>
                <div className="h-2/3 aspect-square">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="red"
                  >
                    <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM13 12V7H11V14H17V12H13Z"></path>
                  </svg>
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
