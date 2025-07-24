'use server'
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function logout() {
    const cookieStore = await cookies();
    cookieStore.delete('session');

    // Redirect to the home page after logout
    redirect('/');
}