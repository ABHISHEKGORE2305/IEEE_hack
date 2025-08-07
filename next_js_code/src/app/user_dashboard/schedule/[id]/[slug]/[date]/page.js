
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
      <div className="min-h-screen w-full bg-gradient-to-br from-blue-600 to-cyan-300 flex flex-col items-center py-12 px-2">
        <h1 className="text-3xl font-bold text-white mb-2 mt-6 drop-shadow-lg">
          Book Your Preferred Time Slot
        </h1>
        <p className="text-blue-100 text-lg mb-10">
          Select an available time slot below to confirm your appointment.
        </p>
        {/* Make the card container scrollable if content overflows */}
        <div className="w-full max-w-4xl flex flex-wrap justify-center gap-8 pb-8 overflow-y-auto max-h-[70vh] no-scrollbar">
          {times.map((app) => {
            const isBooked = booked.includes(app);
            return (
              <div
                key={app}
                className={`flex flex-col items-center justify-between rounded-2xl shadow-lg transition-all duration-200
                  ${isBooked
                    ? "bg-blue-100 border-2 border-blue-300 opacity-60 cursor-not-allowed"
                    : "bg-gradient-to-b from-blue-500 to-blue-400 border-2 border-blue-700 hover:scale-105 hover:shadow-2xl"
                  }
                  w-48 h-64 p-6 m-2`}
              >
                <div className="flex flex-col items-center mb-4">
                  {isBooked ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#60a5fa" className="w-16 h-16 mb-2">
                      <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-16 h-16 mb-2"
                      viewBox="0 0 24 24"
                      fill="#fff"
                    >
                      <path d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"></path>
                    </svg>
                  )}
                  <h2 className={`text-2xl font-bold ${isBooked ? "text-blue-400" : "text-white"} mb-1`}>
                    {app}:00
                  </h2>
                  <span className={`text-base ${isBooked ? "text-blue-300" : "text-blue-100"}`}>to</span>
                  <h2 className={`text-2xl font-bold ${isBooked ? "text-blue-400" : "text-white"} mt-1`}>
                    {app + 1}:00
                  </h2>
                </div>
                {isBooked ? (
                  <div className="w-full text-center mt-2">
                    <span className="inline-block bg-blue-200 text-blue-600 font-semibold rounded-lg px-4 py-2 text-sm shadow">
                      Booked
                    </span>
                  </div>
                ) : (
                  <form
                    className="w-full flex flex-col items-center"
                    action={async () => {
                      "use server";
                      await prisma.appointment.create({
                        data: {
                          userId: userId.id,
                          doctorId,
                          date,
                          time: app.toString(),
                        },
                      });
                      redirect("/user_dashboard");
                    }}
                  >
                    <button
                      type="submit"
                      className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-4 py-2 transition"
                    >
                      Book
                    </button>
                  </form>
                )}
              </div>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <p className="text-blue-100 text-base">
            <span className="font-semibold">Note:</span> Booked slots are shown in light blue and cannot be selected.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
