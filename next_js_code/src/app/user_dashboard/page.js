
import React from 'react';
import CalendarClient from '../../components/ui/calender';
import Button from '../../components/ui/button';
import isProtected from '../../components/ui/protected';

const Page = async() => {
    const user = await isProtected();
    return (
        <div className='h-full w-full py-4 px-6 bg-gray-200 '>
            <h1 className="text-3xl font-bold text-blue-500">Welcome, {user?.name || 'User'}</h1>
            <Button></Button>
            <hr className='border-slate-400 mt-4'></hr>
            <div className='flex h-[45%] mb-4'>
            <div className='h-full aspect-1/1 bg-slate-100 mt-4 p-6 rounded-lg'>
                <div className='flex justify-center h-[60%]'>
                <div className='h-full aspect-1/1 bg-amber-300 rounded-full'>
                    <img src='https://www.meme-arsenal.com/memes/fecffb98f5b0bef1f95ce5f08249e587.jpg' alt="User Avatar" className='h-full w-full rounded-full object-cover' />
                </div>
                </div>
                <h1 className='text-3xl mt-4 text-center font-thin'>{user.name}</h1>
                <p className='text-center text-blue-400 mt-4'>{user.email}</p>
            </div>
            <div className='h-full aspect-4/3 bg-slate-100 mt-4 ml-4 p-4 rounded-lg'>
                <h1 className='text-2xl font-semibold mb-10'>General Information</h1>
                <div className='mt-2 border-b-1 border-zinc-400 pb-2 flex'>
                    <div className='w-1/2'>Date of Birth</div><div className='w-1/2 '>12-09-2025</div>
                </div>
                <div className='mt-2 border-b-1 border-zinc-400 pb-2 flex'>
                    <div className='w-1/2'>Address</div><div className='w-1/2 '>Boys Hostel ,PICT pune</div>
                </div>
                <div className='mt-2 border-b-1 border-zinc-400 pb-2 flex'>
                    <div className='w-1/2'>Date of Registration</div><div className='w-1/2 '>{user.createdAt.toLocaleDateString()}</div>
                </div>
            </div>
            <div>
                <CalendarClient/>
            </div>
            </div>
            <div className='flex h-[45%]'>
                <div className='h-full w-full bg-slate-100 mt-4 p-4 rounded-lg overflow-y-scroll no-scrollbar'>
                    <h2 className="text-2xl font-semibold mb-4">Your Appointments</h2>
                    
                    <p>No appointments scheduled.</p>
                </div>
            </div>
        </div>
    );
}

export default Page;