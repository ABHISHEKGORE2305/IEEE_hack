import { PrismaClient } from '@prisma/client';
import { redirect } from 'next/dist/server/api-utils';
import { cookies } from 'next/headers';
import Button from '../../components/button';
import Link from 'next/link';

const prisma = new PrismaClient();

const Page = async () => {
  const cookieStore = await cookies();
  const session = cookieStore.get('session');
  if(!session){
    return (
      <div className="bg-red-300 h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">You are not logged in. Please log in to view this page.</h1>
        <Link href='/login'>Login</Link>
      </div>
    );
  }
  const user = await prisma.user.findUnique({
    where: { email: session.value }
  })

  return (
    <div className="bg-amber-300 h-screen flex items-center justify-center">
      <div>
        <h1>Doctor appointment app.</h1>
        <p>Welcome, {user?.name}!</p>
        <p>Your email is: {user?.email}</p>
        <p>Your role is: {user?.role}</p>
        <Button />
      </div>
    </div>
  );
};

export default Page;