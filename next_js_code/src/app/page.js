

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Chatbot from '@/components/ui/chatbot';

const Page = async () => {
  const cookieStore = await cookies();
  const session = cookieStore.get('session');
  if(!session){
    return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
    <Navbar />
      <main className="flex-1 flex flex-col items-center justify-start px-4 overflow-y-auto">
        {/* Hero Section */}
        <section className="w-full flex flex-col md:flex-row items-center justify-between gap-10 py-16 md:py-24 max-w-7xl mx-auto">
          <div className="flex-1 flex flex-col items-start md:items-start text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4 leading-tight drop-shadow">
              Your Health, <span className="text-blue-600">Your Schedule</span>
            </h2>
            <p className="text-lg md:text-xl text-blue-900 mb-8 font-medium max-w-lg">
              Book appointments with trusted doctors, manage your healthcare journey, and take control of your well-being all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-start">
              <Link href="/signup" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-full text-lg shadow transition-all duration-200">
                  Get Started
                </button>
              </Link>
              <Link href="/login" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-white border-2 border-blue-700 text-blue-700 font-semibold py-3 px-8 rounded-full text-lg hover:bg-blue-50 transition-all duration-200">
                  Log In
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
    
           {/* Floating Cards */}
      <div className="absolute top-5 left-4 bg-white/90 shadow-lg rounded-xl p-4 w-40 text-center z-20" style={{ left: '50%', top: '215px' }}>
        <h4 className="text-sm font-bold text-blue-700">24/7 Care</h4>
        <p className="text-xs text-gray-600">Always available</p>
      </div>

      <div className="absolute bottom-10 right-1 bg-white/90 shadow-lg rounded-xl p-4 w-40 text-center z-20" style={{ right: '75px', bottom: '80px' }}>
        <h4 className="text-sm font-bold text-blue-700">500+ Doctors</h4>
        <p className="text-xs text-gray-600">Trusted experts</p>
      </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-20 bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100">
  <div className="max-w-6xl mx-auto flex flex-col items-center px-4">
    
    {/* Section Heading */}
    <h3 className="text-2xl md:text-3xl font-bold text-blue-800 mb-10 text-center">
      Why Choose DocBook?
    </h3>

    {/* Cards Container */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">

      {/* Card 1 */}
      <div className="bg-white/90 rounded-2xl shadow-lg overflow-hidden flex flex-col items-center p-6 hover:shadow-xl transition-shadow duration-300">
        <img
          src="https://i.pinimg.com/736x/68/8a/3e/688a3e912070823d7d91ec0236b4d002.jpg"
          alt="Instant Booking"
          className="h-48 w-full object-cover mb-4 rounded-md"
          loading="lazy"
        />
        <h4 className="text-lg font-bold text-blue-700 mb-2 text-center">Instant Booking</h4>
        <p className="text-sm text-blue-900 text-center">
          Find and book appointments with top doctors in just a few clicks.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white/90 rounded-2xl shadow-lg overflow-hidden flex flex-col items-center p-6 hover:shadow-xl transition-shadow duration-300">
        <img
          src="https://i.pinimg.com/736x/33/9f/53/339f53c3ee75557e32b13160fced844e.jpg"
          alt="Reminders & Records"
          className="h-48 w-full object-cover mb-4 rounded-md"
          loading="lazy"
        />
        <h4 className="text-lg font-bold text-blue-700 mb-2 text-center">Reminders & Records</h4>
        <p className="text-sm text-blue-900 text-center">
          Stay on top of your health with appointment reminders and easy access to your records.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white/90 rounded-2xl shadow-lg overflow-hidden flex flex-col items-center p-6 hover:shadow-xl transition-shadow duration-300">
        <img
          src="https://i.pinimg.com/1200x/5d/22/ec/5d22ec6eb13b5f6b83aaf3fcb92e55f0.jpg"
          alt="Trusted Professionals"
          className="h-48 w-full object-cover mb-4 rounded-md"
          loading="lazy"
        />
        <h4 className="text-lg font-bold text-blue-700 mb-2 text-center">Trusted Professionals</h4>
        <p className="text-sm text-blue-900 text-center">
          Connect with verified and experienced healthcare providers.
        </p>
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
      <Chatbot/>
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