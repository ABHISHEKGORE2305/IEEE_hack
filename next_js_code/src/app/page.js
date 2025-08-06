

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import Link from 'next/link';

const Page = async () => {
  const cookieStore = await cookies();
  const session = cookieStore.get('session');
  if(!session){
    return (
    <div className="min-h-screen flex flex-col bg-blue-100">
      <header className="w-full px-4 py-3 flex justify-between items-center bg-white/80 shadow">
        <h1 className="text-xl font-bold text-blue-700">DocBook</h1>
        <nav className="flex gap-4">
          <Link href="/login" className="text-blue-700 hover:underline">Login</Link>
          <Link href="/signup" className="text-blue-700 hover:underline">Register</Link>
          <Link href="/doctor_signup" className="text-blue-700 hover:underline">For Doctors</Link>
        </nav>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <h2 className="text-2xl font-bold text-blue-800 mb-3 text-center">
          Book Appointments with Trusted Doctors
        </h2>
        <p className="text-base text-gray-700 mb-5 text-center max-w-md">
          Your health, your schedule. Find the right doctor, book appointments instantly, and manage your healthcare journey with ease.
        </p>
        <div className="flex gap-3">
          <Link href="/register">
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-5 rounded text-base transition">
              Get Started
            </button>
          </Link>
          <Link href="/login">
            <button className="bg-white border border-blue-700 text-blue-700 font-semibold py-2 px-5 rounded text-base hover:bg-blue-50 transition">
              Login
            </button>
          </Link>
        </div>
      </main>
      <footer className="w-full py-3 px-4 bg-white/80 text-center text-gray-500 text-xs mt-auto">
        &copy; {new Date().getFullYear()} DocBook. All rights reserved.
      </footer>
    </div>
    );
  }
  const [email, role] = session.value.split('-');
  if(role == 'doctor'){
    redirect(`/doctor_dashboard`);
  } else if(role == 'user'){
    redirect(`/user_dashboard`);
  } else {
    return (
      <div className="bg-red-300 h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Invalid session. Please log in again.</h1>
        <Link href='/login'>Login</Link>
      </div>
    );
  }

  // return (
  //   <div className="bg-amber-300 h-screen flex items-center justify-center">
  //     <div>
  //       <h1>Doctor appointment app.</h1>
  //       <p>Welcome, {user?.name}!</p>
  //       <p>Your email is: {user?.email}</p>
  //       <p>Your role is: {user?.role}</p>
  //       <Button />
  //     </div>
  //   </div>
  // );
};

export default Page;