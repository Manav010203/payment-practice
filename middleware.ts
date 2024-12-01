import { NextRequest, NextResponse } from "next/server";

let count=0;
export function  middleware(req :NextRequest){
    count++;
    const res =count;
    console.log("the number is",res)
    return NextResponse.next()
}

export const config ={
    matcher:'./api/:path*',
}