import { PrismaClient } from '@prisma/client';
import Button from '../../../../components/button';

const prisma = new PrismaClient();

const Page = async({ params }) => {
    const email = await params.id.replace('%40', '@');
    const doctor = await prisma.doctor.findUnique({
        where: {
            email: email
        }
    });
    
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
            </div>
        );
    }
}

export default Page;