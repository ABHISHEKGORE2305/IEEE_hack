import { PrismaClient } from '@prisma/client';
import Button from '../../../../components/button';

const prisma = new PrismaClient();

const Page = async({ params }) => {
    const email = params.id.replace('%40', '@');
    const user = await prisma.user.findUnique({
        where: {
            email: email
        }
    });
    return (
        <div className="bg-amber-300 h-screen flex items-center justify-center">
            <div>
                <h1>Welcome to the Doctor Appointment App</h1>
                <p>This is the user dashboard</p>
                <p>Your name is: {user?.name}</p>
                <p>Your email is: {user?.email}</p>
                <Button />
            </div>
        </div>
    );
}

export default Page;