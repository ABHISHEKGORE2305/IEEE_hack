'use client'

import logout from "@/app/logout/route"
import { redirect } from "next/navigation"

export default function Button() {
    return (
        <button 
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={logout}
        >Logout</button>
    )
}