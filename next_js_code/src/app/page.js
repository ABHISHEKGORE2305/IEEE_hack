

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import Link from 'next/link';
import Navbar from '../components/Navbar';




// Appointment icon (calendar style)
export function AppointmentIcon() {
  return (
    <svg viewBox="0 0 24 24" width={26} height={26} fill="none" aria-hidden="true">
      <rect x="3" y="6" width="18" height="14" rx="4" fill="#E9F2FF" />
      <rect x="7" y="10" width="10" height="2" rx="1" fill="#1877F2" />
    </svg>
  );
}

// Clinic icon (hospital style)
export function ClinicIcon() {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} fill="none" aria-hidden="true">
      <rect x="4" y="8" width="16" height="11" rx="2.5" fill="#EFFFF7" />
      <path d="M12 11v5" stroke="#22cb8a" strokeWidth="2" strokeLinecap="round" />
      <path d="M9 13h6" stroke="#22cb8a" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}




const Page = async () => {
  const cookieStore = await cookies();
  
  const session = cookieStore.get('session');
  if(!session){
    return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-start px-4 overflow-y-auto">
        {/* Hero Section */}
       <section className="bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200  min-h-screen px-4 flex items-center w-full">
  <div className="max-w-[1240px] mx-auto flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16 w-full">
    
    {/* Left: Text & CTA */}
    <div className="flex-1 min-w-0 md:pr-2">
      <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-slate-900 leading-tight mb-5 tracking-tight">
        The Best Reliable<br className="hidden sm:inline" />
        Health Service In<br className="hidden md:inline" />
        Your Hands
      </h1>
      <p className="text-base sm:text-lg text-slate-500 max-w-md mb-8 leading-relaxed w-full block">
        Our skilled doctors have tremendous experience with a wide range of diseases to serve the needs of our patients.
      </p>
      {/* <div className=" flex gap-5 items-center">
       <svg className="w-5 h-5 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z"/></svg>

      <input type='text' placeholder='Search Clinics....' className='w-full px-4 py-2 text-black-500 border border-black-300 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200' />
        
      </div> */}
    </div>

    {/* Right: Doctor image + Floating Info */}
    <div className="flex-1 flex justify-center items-center relative">
      <div className="relative w-[280px] h-[340px] sm:w-[320px] sm:h-[380px] md:w-[360px] md:h-[420px] lg:w-[400px] lg:h-[460px]">
        <img
          src="./images/DoctorImg1.jpeg"
          alt="Doctor"
          className="w-full h-full object-cover object-top bg-transparent  shadow-lg border"
          style={{
            
          }}
        />

        {/* Floating card: Appointment */}
        <div className="absolute -left-16 top-4 flex items-center gap-2 min-w-[164px] bg-white/80 backdrop-blur-md rounded-xl shadow-lg px-3.5 py-3 ring-1 ring-slate-100 z-20">
          <span>
            <AppointmentIcon />
          </span>
          <span className="font-medium text-slate-900">Book Appointment Easily</span>
        </div>

        {/* Floating card: Clinics */}
        <div className="absolute -right-10 bottom-6 flex items-center gap-2 min-w-[108px] bg-white/90 backdrop-blur-md rounded-xl shadow-lg px-3.5 py-3 ring-1 ring-slate-100 z-20">
          <span>
            <ClinicIcon />
          </span>
          <span className="font-medium text-slate-900">10+ clinics</span>
        </div>
      </div>
    </div>

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