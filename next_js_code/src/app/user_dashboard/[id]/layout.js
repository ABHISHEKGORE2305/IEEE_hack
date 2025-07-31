import Button from "../../../../components/button";

export default function UserDashboardLayout({ children }) {
    const componentName = children.type?.name || "UnknownComponent";
    console.log(`Rendering component: ${componentName}`);
    return (
        <div className="h-screen w-screen overflow-hidden flex">
            <div className="h-full w-1/6 bg-blue-500 p-4 space-y-4 font-extrabold">
                <h1 className="text-white text-3xl text-center">CLINIK</h1>
                <hr className="border-slate-100"></hr>
                <ul className="text-white text-lg">
                    <li className="hover:bg-blue-600 p-2 rounded"><a href='/'>Schedule</a></li>
                    <li className="hover:bg-blue-600 p-2 rounded"><a href='/appointment'>Appointments</a></li>
                    <li className="hover:bg-blue-600 p-2 rounded"><a href='/profile'>Profile</a></li>
                    <li className="hover:bg-blue-600 p-2 rounded"><a href='/settings'>Settings</a></li>
                </ul>
                <hr className="border-slate-100 mt-4"></hr>
            </div>
            <div className="h-full w-5/6">
                {children}
            </div>
        </div>
    );
}