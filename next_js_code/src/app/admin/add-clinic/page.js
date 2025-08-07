'use client'
import React from 'react'
import { createClinic } from '@/components/ui/createClinic'

function Page() {
  return (
    <div className="max-w-2xl mx-auto mt-12 p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Clinic Information</h2>
      <form action={createClinic} className="space-y-6">
        <div>
          <label htmlFor="clinic-name" className="block text-lg font-medium text-gray-700">Clinic Name</label>
          <input type="text" id="clinic-name" name="clinic-name" placeholder="Enter clinic name"
            className="mt-2 block w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg" required />
        </div>

        <div>
          <label htmlFor="address" className="block text-lg font-medium text-gray-700">Address</label>
          <input type="text" id="address" name="address" placeholder="Enter address"
            className="mt-2 block w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg" required />
        </div>

        <div>
          <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter email"
            className="mt-2 block w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg" required />
        </div>

        <div>
          <label htmlFor="phone" className="block text-lg font-medium text-gray-700">Phone Number</label>
          <input type="tel" id="phone" name="phone" placeholder="Enter phone number"
            className="mt-2 block w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg" required />
        </div>

        <div className="text-center">
          <button type="submit"
            className="w-full bg-slate-300 text-white py-3 px-6 rounded-md hover:bg-slate-600 transition duration-200 text-lg font-semibold">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Page
