import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
    try {
        const body = await req.json();
        const { email } = body;

        if (!email) {
            return new Response(JSON.stringify({ error: "Email is required" }), { status: 400 });
        }

        await prisma.doctor.update({
            where: { email },
            data: { verified: false }
        });

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}