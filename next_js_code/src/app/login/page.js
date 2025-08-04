import { cookies } from 'next/headers';
import { PrismaClient } from '@prisma/client';
const bcrypt=require('bcrypt')
const prisma = new PrismaClient();
import { redirect } from 'next/navigation';

const page = ()=>{
    const login = async (formData)=>{
        "use server"
        const email = formData.get('email');
        const password = formData.get('password');

        
        let user = await prisma.user.findUnique({
            where: {email: email}
        });
        if(!user){
            user = await prisma.doctor.findUnique({
                where: {email: email}
            })
            if(!user){
                redirect('/error'); // Redirect if user or doctor not found
            }
        }
        const pass_check= await bcrypt.compare(password,user.password)

        if(!user || pass_check===false){
            redirect('/error');
        }

        const sessionToken = `${user.email}-${user.role}`;

        const cookkieStore = await cookies();

        cookkieStore.set('session', sessionToken, {
            httpOnly: true,
        });

        if(user.role == 'user'){
            redirect('/user_dashboard');
        } else if(user.role == 'doctor'){
            redirect('/doctor_dashboard');
        }
    }
    return (
        <div>
            <h1>Login Page</h1>
            <form action={login}>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />

                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <a href="/signup">Register here</a></p>
        </div>
    );
}

export default page;