import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

export async function POST(req) {
    try {
        const body = await req.json();
        const { rating, doctorid } = body;

        if (!rating && !doctorid) {
            return new Response(JSON.stringify({ error: "Email is required" }), { status: 400 });
        }

        const doctor = await prisma.doctor.findUnique({
            where:{
                id:doctorid
            }
        })

        await prisma.doctor.update({
            where: { id:doctorid },
            data: { 
                rating: (doctor.rating+rating)/2
            }
        });

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}