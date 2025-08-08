

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import Link from 'next/link';

const Page = async () => {
  const cookieStore = await cookies();
  const session = cookieStore.get('session');
  if(!session){
    return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
      <header className="w-full px-8 py-5 flex justify-between items-center bg-white/90 shadow-md sticky top-0 z-30">
        <div className="flex items-center gap-2">
          <svg className="h-8 w-8 text-blue-700" fill="none" viewBox="0 0 32 32">
            <circle cx="16" cy="16" r="16" fill="#2563eb" />
            <path d="M16 8v16M8 16h16" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
          <span className="text-2xl font-extrabold text-blue-700 tracking-tight">DocBook</span>
        </div>
        <nav className="flex gap-6">
          <Link href="/login" className="text-blue-700 font-medium hover:text-blue-900 transition">Login</Link>
          <Link href="/signup" className="text-blue-700 font-medium hover:text-blue-900 transition">Register</Link>
          <Link href="/doctor_signup" className="text-blue-700 font-medium hover:text-blue-900 transition">For Doctors</Link>
        </nav>
      </header>
      <main className="flex-1 flex flex-col items-center justify-start px-4 overflow-y-auto">
        {/* Hero Section */}
        <section className="w-full flex flex-col md:flex-row items-center justify-between gap-10 py-16 md:py-24 max-w-7xl mx-auto">
          <div className="flex-1 flex flex-col items-start md:items-start text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4 leading-tight drop-shadow">
              Your Health, <span className="text-blue-600">Your Schedule</span>
            </h2>
            <p className="text-lg md:text-xl text-blue-900 mb-8 font-medium max-w-lg">
              Book appointments with trusted doctors, manage your healthcare journey, and take control of your well-being—all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-start">
              <Link href="/signup" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-lg text-lg shadow transition-all duration-200">
                  Get Started
                </button>
              </Link>
              <Link href="/login" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-white border-2 border-blue-700 text-blue-700 font-semibold py-3 px-8 rounded-lg text-lg hover:bg-blue-50 transition-all duration-200">
                  Login
                </button>
              </Link>
            </div>
          </div>
        
          <div className="w-1/2 flex-1 flex items-center justify-center">
            <img
              src="/doctor-removebg.png"
              alt="Doctor and patient"
              className=" w-full object-cover"

              loading="eager"
            />
          </div>
        </section>
        {/* Features Section */}
        <section className="w-full py-12 md:py-20 bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100">
          <div className="max-w-6xl mx-auto flex flex-col items-center">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-800 mb-10 text-center">Why Choose DocBook?</h3>
            <div className="flex flex-col md:flex-row gap-10 w-full justify-center">
              <div className="bg-white/90 rounded-2xl shadow-lg p-8 flex flex-col items-center max-w-xs w-full">
                <img
                  src="https://images.unsplash.com/photo-1519494080410-f9aa8f52f1e1?auto=format&fit=crop&w=400&q=80"
                  alt="Instant Booking"
                  className="h-24 w-24 rounded-full object-cover mb-4 border-2 border-blue-200"
                  loading="lazy"
                />
                <h4 className="text-lg font-bold text-blue-700 mb-1">Instant Booking</h4>
                <p className="text-sm text-blue-900 text-center">Find and book appointments with top doctors in just a few clicks.</p>
              </div>
              <div className="bg-white/90 rounded-2xl shadow-lg p-8 flex flex-col items-center max-w-xs w-full">
                <img
                  src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
                  alt="Reminders & Records"
                  className="h-24 w-24 rounded-full object-cover mb-4 border-2 border-blue-200"
                  loading="lazy"
                />
                <h4 className="text-lg font-bold text-blue-700 mb-1">Reminders & Records</h4>
                <p className="text-sm text-blue-900 text-center">Stay on top of your health with appointment reminders and easy access to your records.</p>
              </div>
              <div className="bg-white/90 rounded-2xl shadow-lg p-8 flex flex-col items-center max-w-xs w-full">
                <img
                  src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=400&q=80"
                  alt="Trusted Professionals"
                  className="h-24 w-24 rounded-full object-cover mb-4 border-2 border-blue-200"
                  loading="lazy"
                />
                <h4 className="text-lg font-bold text-blue-700 mb-1">Trusted Professionals</h4>
                <p className="text-sm text-blue-900 text-center">Connect with verified and experienced healthcare providers.</p>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-20 flex flex-col items-center bg-white/80">
          <h3 className="text-2xl md:text-3xl font-bold text-blue-800 mb-10 text-center">What Our Users Say</h3>
          <div className="flex flex-col md:flex-row gap-8 max-w-5xl w-full justify-center">
            <div className="bg-blue-50 rounded-2xl shadow p-6 flex flex-col items-center max-w-sm w-full">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="User testimonial"
                className="h-16 w-16 rounded-full object-cover mb-3 border-2 border-blue-200"
                loading="lazy"
              />
              <p className="text-blue-900 text-base mb-2 text-center">“Booking an appointment was so easy and quick. The reminders helped me never miss a visit!”</p>
              <span className="text-blue-700 font-semibold">Priya S.</span>
            </div>
            <div className="bg-blue-50 rounded-2xl shadow p-6 flex flex-col items-center max-w-sm w-full">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="User testimonial"
                className="h-16 w-16 rounded-full object-cover mb-3 border-2 border-blue-200"
                loading="lazy"
              />
              <p className="text-blue-900 text-base mb-2 text-center">“I found a great doctor near me and could manage all my appointments online. Highly recommend DocBook!”</p>
              <span className="text-blue-700 font-semibold">Rahul K.</span>
            </div>
            <div className="bg-blue-50 rounded-2xl shadow p-6 flex flex-col items-center max-w-sm w-full">
              <img
                src="https://randomuser.me/api/portraits/women/65.jpg"
                alt="User testimonial"
                className="h-16 w-16 rounded-full object-cover mb-3 border-2 border-blue-200"
                loading="lazy"
              />
              <p className="text-blue-900 text-base mb-2 text-center">“The platform is so professional and easy to use. I feel confident about my healthcare now.”</p>
              <span className="text-blue-700 font-semibold">Anjali M.</span>
            </div>
          </div>
        </section>
        {/* Call to Action Section */}
        <section className="w-full py-16 flex flex-col items-center bg-gradient-to-r from-blue-200 via-blue-100 to-blue-200">
          <h3 className="text-3xl font-bold text-blue-800 mb-6 text-center">Ready to take charge of your health?</h3>
          <Link href="/signup">
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-4 px-12 rounded-xl text-xl shadow-lg transition-all duration-200">
              Join DocBook Now
            </button>
          </Link>
        </section>
      </main>
      <footer className="w-full py-4 px-4 bg-white/90 text-center text-blue-600 text-sm mt-auto shadow-inner">
        &copy; {new Date().getFullYear()} <span className="font-semibold">DocBook</span>. All rights reserved.
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