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
        const clinicId = formdata.get('clinic')

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
                license: license,
                clinicId
            }
        })

        const sessionToken = `${newdoctor.email}-${newdoctor.role}`;
        cookies().set('session', sessionToken, {
            httpOnly: true,
        });
        redirect('/doctor_dashboard');
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300">
            <div className="bg-white my-1 rounded-3xl shadow-2xl flex flex-col md:flex-row w-full max-w-4xl min-h-[520px] overflow-hidden border border-blue-100">
                {/* Image Side */}
                <div className="hidden md:flex md:w-200 bg-blue-200 items-center justify-center p-8">
                    <img
                        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
                        alt="Doctor and patient"
                        className="rounded-2xl shadow-xl w-full h-[320px] object-cover border-4 border-blue-100"
                        loading="eager"
                    />
                </div>
                {/* Form Side */}
                <div className="w-full md:w-200 flex flex-col justify-center p-8">
                    <h1 className="text-3xl font-extrabold text-blue-800 mb-6 text-center tracking-tight">Doctor Registration</h1>
                    <form action={signup} className="flex flex-col gap-5">
                        <div>
                            <label htmlFor="name" className="block text-blue-900 font-semibold mb-2 text-base">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full px-4 py-2 border border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-base transition"
                                placeholder="Enter your full name"
                                autoComplete="name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-blue-900 font-semibold mb-2 text-base">Email address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full px-4 py-2 border border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-base transition"
                                placeholder="Enter your email"
                                autoComplete="email"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-blue-900 font-semibold mb-2 text-base">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                required
                                className="w-full px-4 py-2 border border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-base transition"
                                placeholder="Enter your password"
                                autoComplete="new-password"
                            />
                        </div>
                        <div>
                            <label htmlFor="specialization" className="block text-blue-900 font-semibold mb-2 text-base">Specialization</label>
                            <input
                                type="text"
                                id="specialization"
                                name="specialization"
                                required
                                className="w-full px-4 py-2 border border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-base transition"
                                placeholder="e.g. Cardiologist, Dermatologist"
                                autoComplete="off"
                            />
                        </div>
                        <div>
                            <label htmlFor="license" className="block text-blue-900 font-semibold mb-2 text-base">Medical License Number</label>
                            <input
                                type="text"
                                id="license"
                                name="license"
                                required
                                className="w-full px-4 py-2 border border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-base transition"
                                placeholder="Enter your license number"
                                autoComplete="off"
                            />
                        </div>
                        <div>
                            <label htmlFor="clinic" className="block text-blue-900 font-semibold mb-2 text-base">Your Clinic ID</label>
                            <input
                                type="text"
                                id="clinicId"
                                name="clinic"
                                required
                                className="w-full px-4 py-2 border border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-base transition"
                                placeholder="Enter your Clinic's registration ID"
                                autoComplete="off"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-2.5 rounded-xl shadow-lg text-base transition-all duration-200 mt-1"
                        >
                            Register
                        </button>
                    </form>
                    <p className="mt-6 text-center text-blue-700 text-sm">
                        Already have an account?{' '}
                        <a href="/login" className="text-blue-600 font-semibold hover:underline">
                            Login here
                        </a>
                    </p>
                    <p className="mt-1 text-center text-blue-700 text-sm">
                        Not a doctor?{' '}
                        <a href="/signup" className="text-blue-600 font-semibold hover:underline">
                            Register as a user
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default page;