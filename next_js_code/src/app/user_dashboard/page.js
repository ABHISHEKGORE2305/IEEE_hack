
import React from 'react';
import DownloadFiles from '../../components/ui/download-files';
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
            <DownloadFiles />
            </div>
            <div className='flex h-[45%]'>
                <div className='h-full w-full bg-slate-100 mt-4 p-4 rounded-lg overflow-y-scroll no-scrollbar'>
                    <h2 className="text-2xl font-semibold mb-4">Your pending Appointments</h2>
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
                            <div className="h-2/3 aspect-square flex items-center justify-center">
                                {app.status === "done" ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="green"
                                        className="w-7 h-7"
                                    >
                                        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1.293-6.707l7-7-1.414-1.414-5.293 5.293-2.293-2.293-1.414 1.414 3.707 3.707z" />
                                    </svg>
                                ) : app.status === "cancel" ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="red"
                                        className="w-7 h-7"
                                    >
                                        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm5-13.59L13.59 12 17 15.41 15.41 17 12 13.59 8.59 17 7 15.41 10.41 12 7 8.59 8.59 7 12 10.41 15.41 7 17 8.59z" />
                                    </svg>
                                ) : app.status==="accept"? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="blue"
                                        className="w-7 h-7"
                                    >
                                        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1.293-6.707l7-7-1.414-1.414-5.293 5.293-2.293-2.293-1.414 1.414 3.707 3.707z" />
                                    </svg>
                                ):(
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="#f59e42"
                                        className="w-7 h-7"
                                    >
                                        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm1-10V7h-2v7h6v-2h-4z" />
                                    </svg>
                                )}
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