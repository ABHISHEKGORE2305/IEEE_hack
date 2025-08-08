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
                redirect('/login'); // Redirect if user or doctor not found
            }
        }
        const pass_check= await bcrypt.compare(password,user.password)

        if(!user || pass_check===false){
            redirect('/login');
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
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300">
            <div className="bg-white rounded-3xl shadow-2xl flex flex-col md:flex-row w-full max-w-5xl min-h-[600px] overflow-hidden border border-blue-100">
                {/* Image Side */}
                <div className="hidden md:flex md:w-1/2 bg-blue-200 items-center justify-center p-12">
                    <img
                        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
                        alt="Doctor and patient"
                        className="rounded-2xl shadow-xl w-full h-[420px] object-cover border-4 border-blue-100"
                        loading="eager"
                    />
                </div>
                {/* Form Side */}
                <div className="w-full md:w-1/2 flex flex-col justify-center p-12">
                    <h1 className="text-4xl font-extrabold text-blue-800 mb-8 text-center tracking-tight">Sign in to DocBook</h1>
                    <form action={login} className="flex flex-col gap-7">
                        <div>
                            <label htmlFor="email" className="block text-blue-900 font-semibold mb-2 text-lg">Email address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full px-5 py-3 border border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg transition"
                                placeholder="Enter your email"
                                autoComplete="email"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-blue-900 font-semibold mb-2 text-lg">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                required
                                className="w-full px-5 py-3 border border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg transition"
                                placeholder="Enter your password"
                                autoComplete="current-password"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 rounded-xl shadow-lg text-lg transition-all duration-200 mt-2"
                        >
                            Login
                        </button>
                    </form>
                    <p className="mt-8 text-center text-blue-700 text-base">
                        Don't have an account?{' '}
                        <a href="/signup" className="text-blue-600 font-semibold hover:underline">
                            Register here
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default page;