import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();
const page = ()=>{
    const signup = async (formdata)=>{
        "use server"
        const name = formdata.get('name');
        const email = formdata.get('email');
        const password = formdata.get('password');
        const specialization = formdata.get('specialization');
        const license = formdata.get('license');

        const user = await prisma.doctor.findUnique({
            where:{
                email: email
            }
        })
        if(user){
            redirect('/error');
        }
        const hashed_pass = await bcrypt.hash(password, 5);
        const newdoctor = await prisma.doctor.create({
            data: {
                name: name,
                email: email,
                password: hashed_pass,
                specialization: specialization,
                license: license
            }
        })

        const sessionToken = `${newdoctor.email}-${newdoctor.role}`;
        cookies().set('session', sessionToken, {
            httpOnly: true,
        });
        redirect('/')
    }
    return (
        <>
        <p>Welcome to the doctor sign-up page. Please fill out the form to create an account.</p>
        <form action={signup}>
            <div>
                <label htmlFor="name">Full Name:</label>
                <input type="text" id="name" name="name" required />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
            </div>
            <div>
                <label htmlFor="specialization">Specialization:</label>
                <input type="text" id="specialization" name="specialization" required />
            </div>
            <div>
                <label htmlFor="license">Medical License Number:</label>
                <input type="text" id="license" name="license" required />
            </div>
            <button type="submit">Register</button>
        </form>
        </>
    )
}

export default page;