import { cookies } from 'next/headers';
const bcrypt=require('bcrypt')
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { redirect } from 'next/navigation';

const page = () =>{
    const signup = async (formData)=>{
        "use server"
        const email = formData.get('email');
        const name = formData.get('name');
        const password = formData.get('password');
        
        //finding duplicate users by email
        const user = await prisma.user.findUnique({
            where: {email}
        }) 
        if(user){
            redirect('/error');
        }

        //logic for password hashing
        const hashed_pass= await bcrypt.hash(password,5)
        console.log(hashed_pass)

        //adding user data in db 

        await prisma.user.create({
            data: {
                name: name,
                email: email,
                password: hashed_pass
            }
        })

        const sessionToken = `${email}`;

        cookies().set('session', sessionToken, {
            httpOnly: true,
        });

        redirect('/');
    }
    return (
        <div>
        <h1>Sign Up Page</h1>
        <p>Welcome to the sign-up page. Please fill out the form to create an account.</p>
        <form action={signup}>
            <div>
                <label htmlFor="name">Name:</label>
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
            <button type="submit">Sign Up</button>
        </form>
        </div>
    );
}

export default page;