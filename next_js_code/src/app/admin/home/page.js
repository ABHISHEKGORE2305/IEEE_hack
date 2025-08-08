import React from 'react'
function page() {
  return (

    <div className="rounded-2xl min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-blue-100 flex flex-col items-center py-12 px-4">
      <div className="w-full max-w-7xl">
        <h1 className="text-4xl font-extrabold text-blue-900 mb-2 text-center tracking-tight drop-shadow-sm">
          Admin Dashboard
        </h1>
        <p className="text-lg text-blue-700 mb-10 text-center">
          Overview of platform statistics
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
          {/* Patients Card */}
          <div className="w-full bg-white rounded-3xl shadow-xl border-t-4 border-blue-500 p-8 flex flex-col items-center transition-transform hover:-translate-y-1 hover:shadow-2xl">
            <div className="bg-blue-100 rounded-full p-4 mb-4">
              <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-2.13a4 4 0 10-8 0 4 4 0 008 0zm6 2.13A4 4 0 0015 18v2h-3" />
              </svg>
            </div>
            <span className="text-5xl font-bold text-blue-700 mb-2">
              120
            </span>
            <span className="text-lg font-medium text-gray-600 tracking-wide">Patients</span>
          </div>
          {/* Doctors Card */}
          <div className="w-full bg-white rounded-3xl shadow-xl border-t-4 border-green-500 p-8 flex flex-col items-center transition-transform hover:-translate-y-1 hover:shadow-2xl">
            <div className="bg-green-100 rounded-full p-4 mb-4">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 7v-6m0 0l-9-5m9 5l9-5" />
              </svg>
            </div>
            <span className="text-5xl font-bold text-green-700 mb-2">
              35
            </span>
            <span className="text-lg font-medium text-gray-600 tracking-wide">Doctors</span>
          </div>
          {/* Clinics Card */}
          <div className="w-full bg-white rounded-3xl shadow-xl border-t-4 border-purple-500 p-8 flex flex-col items-center transition-transform hover:-translate-y-1 hover:shadow-2xl">
            <div className="bg-purple-100 rounded-full p-4 mb-4">
              <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 21V7a2 2 0 012-2h14a2 2 0 012 2v14M16 3v4M8 3v4m-4 4h16" />
              </svg>
            </div>
            <span className="text-5xl font-bold text-purple-700 mb-2">
              8
            </span>
            <span className="text-lg font-medium text-gray-600 tracking-wide">Clinics</span>
          </div>
          {/* Successful Appointments Card */}
          <div className="w-full bg-white rounded-3xl shadow-xl border-t-4 border-yellow-500 p-8 flex flex-col items-center transition-transform hover:-translate-y-1 hover:shadow-2xl">
            <div className="bg-yellow-100 rounded-full p-4 mb-4">
              <svg className="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-5xl font-bold text-yellow-700 mb-2">
              210
            </span>
            <span className="text-lg font-medium text-gray-600 tracking-wide">Successful Appointments</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
