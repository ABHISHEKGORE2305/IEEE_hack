'use client'

import logout from "@/app/logout/route"
import { redirect } from "next/navigation"

export default function Button() {
    return (
        <button 
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors duration-200"
        onClick={logout}
        >Logout</button>
    )
}