import { PrismaClient } from "@prisma/client";
import isdoctor from "@/components/ui/isdoctor";
import { redirect } from "next/navigation";
import CalendarClient from "@/components/ui/calender";
import Button from "@/components/ui/button";
import StatusButton from "./statusButton";

const prisma = new PrismaClient();

const Page = async () => {
  const doctor = await isdoctor();
  const appointments = await prisma.appointment.findMany({
    where: {
      doctorId: doctor.id,
    },
    include: {
      user: true,
    },
  });
  const patients = appointments.filter((app) => app.status == "done");
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0"); // Months are 0-indexed
  const day = today.getDate().toString().padStart(2, "0");

  const customFormat = `${year}-${month}-${day}`;
  const todayo = appointments.filter((app) => app.date == customFormat);

  if (!doctor) {
    redirect("/login");
  }
  if (doctor.verified) {
    return (
      <div className="h-full w-full py-4 px-6">
        <div className="overflow-y-scroll basis-190 no-scrollbar">
          <div className="bg-white rounded-2xl m-3 h-35 translate-y-15 p-6">
            <h1 className="text-3xl font-bold">
              Good Morning,{" "}
              <span className="text-amber-400">Dr. {doctor.name}</span>
            </h1>
            <p className="text-bold text-zinc-500 text-xl mt-2">
              Have a nice day at work !!!
            </p>
          </div>
          <div className="bg-slate-100  h-50 rounded-2xl m-3 p-1 translate-y-15  ">
            
            <div className="flex">
              <div className="bg-white w-xl h-45 rounded-2xl p-2 m-3 shadow ">
                <div className="h-1/2 w-full flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-full aspect-square"
                    fill="lightblue"
                  >
                    <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12H15C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12H7Z"></path>
                  </svg>
                </div>
                <h1 className="text-2xl font-bold text-center">
                  {patients.length}
                </h1>
                <h1 className="text-center font-thin">Total patients</h1>
              </div>
              <div className="bg-white w-xl h-45 rounded-2xl p-2 m-3 shadow">
                <div className="h-1/2 w-full flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="lightblue"
                  >
                    <path d="M7 1V3H3C2.44772 3 2 3.44772 2 4V20C2 20.5523 2.44772 21 3 21H10.7546C9.65672 19.6304 9 17.8919 9 16C9 11.5817 12.5817 8 17 8C18.8919 8 20.6304 8.65672 22 9.75463V4C22 3.44772 21.5523 3 21 3H17V1H15V3H9V1H7ZM23 16C23 19.3137 20.3137 22 17 22C13.6863 22 11 19.3137 11 16C11 12.6863 13.6863 10 17 10C20.3137 10 23 12.6863 23 16ZM16 12V16.4142L18.2929 18.7071L19.7071 17.2929L18 15.5858V12H16Z"></path>
                  </svg>
                </div>
                <h1 className="text-2xl font-bold text-center">
                  {appointments.length}
                </h1>
                <h1 className="text-center font-thin">Appointments</h1>
              </div>
              <div className="bg-white w-xl h-45 rounded-2xl p-2 m-3 shadow">
                <div className="h-1/2 w-full flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="lightblue"
                  >
                    <path d="M12.0049 13.0028C13.6617 13.0028 15.0049 14.346 15.0049 16.0028C15.0049 16.8519 14.6521 17.6187 14.0851 18.1645L12.175 20.0024L15.0049 20.0028V22.0028H9.00488L9.00398 20.2784L12.6983 16.7234C12.8874 16.5411 13.0049 16.2857 13.0049 16.0028C13.0049 15.4505 12.5572 15.0028 12.0049 15.0028C11.4526 15.0028 11.0049 15.4505 11.0049 16.0028H9.00488C9.00488 14.346 10.348 13.0028 12.0049 13.0028ZM18.0049 13.0028V17.0028H20.0049V13.0028H22.0049V22.0028H20.0049V19.0028H16.0049V13.0028H18.0049ZM4.00488 12.0028C4.00488 14.5294 5.17612 16.7824 7.00527 18.2485L7.0049 20.665C4.01588 18.9359 2.00488 15.7042 2.00488 12.0028H4.00488ZM12.0049 2.00281C17.1902 2.00281 21.4537 5.94943 21.9555 11.0027L19.943 11.0029C19.4509 7.05652 16.0845 4.00281 12.0049 4.00281C9.2551 4.00281 6.82935 5.39014 5.3894 7.50305L8.00488 7.50281V9.50281H2.00488V3.50281H4.00488L4.00477 6.00198C5.82922 3.57356 8.73362 2.00281 12.0049 2.00281Z"></path>
                  </svg>
                </div>
                <h1 className="text-2xl font-bold text-center">
                  {todayo.length}
                </h1>
                <h1 className="text-center font-thin">Today</h1>
              </div>
              <div className="bg-white w-xl h-45 rounded-2xl p-2 m-3 shadow">
                <div className="h-1/2 w-full flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="lightblue"
                  >
                    <path d="M12 14V22H4C4 17.5817 7.58172 14 12 14ZM18 21.5L15.0611 23.0451L15.6224 19.7725L13.2447 17.4549L16.5305 16.9775L18 14L19.4695 16.9775L22.7553 17.4549L20.3776 19.7725L20.9389 23.0451L18 21.5ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13Z"></path>
                  </svg>
                </div>
                <h1 className="text-2xl font-bold text-center">{doctor.finalrating}</h1>
                <h1 className="text-center font-thin">Rating</h1>
              </div>
            </div>
          </div>
          <div className="h-2/3 rounded-2xl m-3 p-2 translate-y-15 bg-slate-100">
            <h1 className="text-xl font-bold text-zinc-500 mb-3">
              Your upcoming Appointments
            </h1>
            {todayo.length > 0 ? (
              appointments.map((app) => {
                console.log(app.user);
                return (
                  <div
                    key={app.id}
                    className="h-15  bg-white flex p-2 items-center justify-between rounded-lg my-2"
                  >
                    <div className="h-full aspect-square rounded-full overflow-hidden flex justify-center items-center">
                      <img
                        width="100%"
                        height="100%"
                        src={app.user.profile}
                      ></img>
                    </div>
                    <div className="font-thin w-30">{app.user.name}</div>
                    <div className="font-semibold">{app.date}</div>
                    <div className="font-semibold">{app.time}:00</div>

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
              <div className="h-full text-xl text-amber-400">
                No Appointments today enjoy!
              </div>
            )}
          </div>
        </div>
        <div className="bg-white basis-75 rounded-xl m-3 p-2  ">
         
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-red-500">
        <h1>Verification Pending</h1>
        <p>Your account is not yet verified .</p>
        <Button></Button>
      </div>
    );
  }
};

export default Page;
