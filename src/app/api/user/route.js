import { prisma } from "../../lib/prisma";
import { NextResponse } from "next/server";


export async function GET (){
    const users = await prisma.user.findMany();
    return NextResponse.json(users)
}


export async function POST(req) {

    const body = await req.json();

    const User = await prisma.user.create({
        data:body
    })

    console.log(User);

    return NextResponse.json(User)

    
}