import isProtected from "@/components/ui/protected";

import { redirect } from "next/navigation";

const page = async ({ params }) => {
  const doctorId = params.slug;
  const clinicId = params.id;
  const user = await isProtected();
  if (!user) {
    return redirect("/login");
  }
  return (
    <div className="bg-green-100 rounded-2xl m-2 p-2 grid-cols-3 flex h-full">
      <div className="bg-blue-300 m-2 p-2 rounded-2xl w-75 col-span-1 justify-items-center ">
        <div className="bg-amber-200 rounded-4xl h-50 w-50 p-1 m-2 mt-4 "></div>
        <div className="bg-teal-300 p-1 m-1 text-center rounded-2xl translate-y-7 ">
          <p className="text-2xl font-semibold">{user.name} dark</p>
        </div>
        <div className="bg-blue-200 translate-y-25 font-light">
          <div className="bg-teal-300 p-1 m-1  rounded-2xl  ">
            <h1>Doctor Details</h1>
          </div>
          <div className="bg-teal-300 p-1 m-1  rounded-2xl  ">
            <p>Doctor ID: {doctorId}</p>
          </div>
          <div className="bg-teal-300 p-1 m-1  rounded-2xl  ">
            <p>Doctor Specialization: {user.specialization}</p>
          </div>
          {/* <p>Doctor Phone: {user.phone}</p> */}
          <div className="bg-teal-300 p-1 m-1  rounded-2xl   ">
            <p className="flex items-center gap-2">
              <div className="translate-y-0.5">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              </div>
              <div>
                {user.email}
              </div>
            </p>
          </div>
        </div>
      </div>
      <div className="flex-none">
        <div className="bg-amber-200 w-80 h-60 m-2 p-2 rounded-2xl"></div>
        <div className="bg-pink-50 w-80 h-60  m-2 p-2 rounded-2xl"></div>
      </div>

      <div className="bg-amber-200 m-2 p-2 rounded-2xl w-75">
        <h1 className="mt-10">Schedule an Appointment :</h1>
        <form
          action={async (formData) => {
            "use server";
            const date = formData.get("date");
            redirect(
              `/user_dashboard/schedule/${clinicId}/${doctorId}/${date}`
            );
          }}
        >
          <input type="date" name="date"></input>
          <input type="submit" value="confirm"></input>
        </form>
      </div>
    </div>
  );
};

export default page;
