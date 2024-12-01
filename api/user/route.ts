import { NextResponse } from "next/server"


export function GET(){
    return NextResponse.json({
        essage :"hi there"
    })
}