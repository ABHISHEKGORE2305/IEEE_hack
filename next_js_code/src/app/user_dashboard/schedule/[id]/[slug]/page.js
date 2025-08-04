
import isProtected from "@/components/ui/protected";
import { redirect } from "next/navigation";

const page = async ({params})=>{
    const doctorId = params.slug;
    const clinicId = params.id;
    const user = await isProtected();
    if (!user) {
        return redirect('/login');
    }
    return(
        <>
        <h1>Doctor Details</h1>
        <p>Doctor ID: {doctorId}</p>
        <p>Doctor Name: {user.name}</p>
        <p>Doctor Specialization: {user.specialization}</p>
        {/* <p>Doctor Phone: {user.phone}</p> */}
        <p>Doctor Email: {user.email}</p>
        <hr />
        <h1 className="mt-10">Schedule an Appointment :</h1>
        <form action={async (formData)=>{
            'use server'
            const date = formData.get('date');
            redirect(`/user_dashboard/schedule/${clinicId}/${doctorId}/${date}`)
        }}>
            <input type="date" name="date"></input>
            <input type="submit" value="confirm"></input>
        </form>
        </>
    )
}

export default page;