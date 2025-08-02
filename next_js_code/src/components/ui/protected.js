import { PrismaClient } from "@prisma/client";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

export default async function isProtected() {
    const cookieStore = await cookies();
    const session = cookieStore.get("session");
    
    if (!session) {
        redirect("/login");
    }

    const email = session.value.split("-")[0];
    const user = await prisma.user.findUnique({
        where: {
            email: email,
        },
    });

    if (!user) {
        redirect("/login");
    }
    return user;
}


