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
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handleChange}
          />
        </label>
      </form>
    </div>
  );
}

export default page
