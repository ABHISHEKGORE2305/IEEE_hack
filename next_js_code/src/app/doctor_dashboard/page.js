import { PrismaClient } from '@prisma/client';
import Button from '../../components/ui/button';
import isdoctor from '@/components/ui/isdoctor';
import { redirect } from 'next/navigation';

const Page = async() => {
    const doctor = await isdoctor()
    if(!doctor){
        redirect('/login')
    }
    if(doctor.verified){
        return (
            <div>
                <h1>Doctor Dashboard</h1>
                <p>Welcome back, {doctor.name}!</p>
                <p>Your specialization: {doctor.specialization}</p>
                <Button />
            </div>
        );
    } else {
        return (
            <div className='flex flex-col items-center justify-center h-screen text-red-500'>
                <h1>Verification Pending</h1>
                <p>Your account is not yet verified .</p>
                <Button></Button>
            </div>
        );
    }
}

export default Page;