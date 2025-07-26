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

        
        const user = await prisma.user.findUnique({
            where: {email: email}
        });
        
        //bcrypt comparing

        const pass_check= await bcrypt.compare(password,user.password)

        if(!user || pass_check===false){
            redirect('/error');
        }

        const sessionToken = `${email}`;

        cookies().set('session', sessionToken, {
            httpOnly: true,
        });

        redirect('/');
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
        </div>
    );
}

export default page;