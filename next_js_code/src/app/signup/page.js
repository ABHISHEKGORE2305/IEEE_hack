import { cookies } from 'next/headers';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { redirect } from 'next/navigation';

const page = () =>{
    const signup = async (formData)=>{
        "use server"
        const email = formData.get('email');
        const name = formData.get('name');
        const password = formData.get('password');

        const user = await prisma.user.findUnique({
            where: {email}
        }) 
        if(user){
            redirect('/error');
        }
        await prisma.user.create({
            data: {
                name: name,
                email: email,
                password: password
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