import Link from "next/link";
import Button from '../../components/ui/button';

export default function UserDashboardLayout({ children }) {
    const componentName = children.type?.name || "UnknownComponent";
    console.log(`Rendering component: ${componentName}`);
    return (
        <div className="h-screen w-screen overflow-hidden flex rounded-2xl">
            <div className="h-full w-1/6 bg-blue-500 p-4 space-y-4 font-extrabold">
            <div>
                <h1 className="text-white text-3xl text-center">CLINIK</h1>
                <hr className="border-slate-100"></hr>
                <ul className="text-white text-lg">
                    <li className="hover:bg-blue-600 p-2 rounded font-thin"><Link href='/doctor_dashboard'>Dashboard</Link></li>
                    
                    <li className="hover:bg-blue-600 p-2 rounded"><Link href='/doctor_dashboard/appointments'>Appointments</Link></li>
                    <li className="hover:bg-blue-600 p-2 rounded"><Link href='/doctor_dashboard/profile'>Profile</Link></li>
                    <li className="hover:bg-blue-600 p-2 rounded"><Link href='/settings'>Settings</Link></li>
                </ul>
                <hr className="border-slate-100 mt-4"></hr>
            </div>
                
                <div className="hover:bg-blue-600 p-2 rounded translate-y-[400%]"><Button  /></div>
            
            </div>
            <div className="h-full w-5/6">
                {children}
            </div>
        </div>
    );
}