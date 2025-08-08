"use client"
import React from 'react'
import { useRouter } from 'next/navigation';

function page() {
  const [password, setPassword] = React.useState('');
  const router = useRouter();

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === '1234') {
      router.push('admin/home');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Admin Login</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="font-medium text-gray-700">
            Password:
            <input
              type="password"
              value={password}
              onChange={handleChange}
              className="mt-2 w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter admin password"
            />
          </label>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default page
