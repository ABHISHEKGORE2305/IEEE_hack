
import React from 'react';
import CalendarClient from '../../components/ui/calender';
import Button from '../../components/ui/button';
import isProtected from '../../components/ui/protected';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()


const Page = async() => {
    const user = await isProtected();
    const appointments = await prisma.appointment.findMany({
        where: {
            userId: user.id,
            status: "pending"
        },
        include:{
            doctor: true
        }
    })
    return (
        <div className='h-full w-full py-4 px-6 bg-gray-200 '>
            <h1 className="text-3xl font-bold text-blue-500">Welcome, {user?.name || 'User'}</h1>
            <Button></Button>
            <hr className='border-slate-400 mt-4'></hr>
            <div className='flex h-[45%] mb-4'>
            <div className='h-full aspect-1/1 bg-slate-100 mt-4 p-6 rounded-lg'>
                <div className='flex justify-center h-[60%]'>
                <div className='h-full aspect-1/1 bg-amber-300 rounded-full'>
                    <img src={user.profile} alt="User Avatar" className='h-full w-full rounded-full object-cover' />
                </div>
                </div>
                <h1 className='text-3xl mt-4 text-center font-thin'>{user.name}</h1>
                <p className='text-center text-blue-400 mt-4'>{user.email}</p>
            </div>
            <div className='h-full aspect-4/3 bg-slate-100 mt-4 ml-4 p-4 rounded-lg'>
                <h1 className='text-2xl font-semibold mb-10'>General Information</h1>
                <div className='mt-2 border-b-1 border-zinc-400 pb-2 flex'>
                    <div className='w-1/2'>Date of Birth</div><div className='w-1/2 '>{user.dob?.toLocaleTimeString()}</div>
                </div>
                <div className='mt-2 border-b-1 border-zinc-400 pb-2 flex'>
                    <div className='w-1/2'>Address</div><div className='w-1/2 '>{user.address}</div>
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
                    {appointments.length>0? appointments.map(app => {
                            console.log(app.user)
                            return(
                                <div key={app.id} className='h-15  bg-white flex p-2 items-center justify-between rounded-lg my-2'>
                            <div className='h-full aspect-square rounded-full overflow-hidden'>
                                <img width='100%' height='100%' src={app.doctor.profile}></img>
                            </div>
                            <div className='font-thin w-30'>
                                {app.doctor.name}
                            </div>
                            <div className='font-semibold'>
                                {app.date}
                            </div>
                            <div className='font-semibold'>
                                {app.time}:00 
                            </div>
                            <div className='h-2/3 aspect-square'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM13 12V7H11V14H17V12H13Z"></path></svg>
                            </div>
                        </div>
                            )
                        }):
                            <div className='h-full text-xl text-red-400'>No Appointments yet : (</div>
                        }
                </div>
            </div>
        </div>
    );
}

export default Page;