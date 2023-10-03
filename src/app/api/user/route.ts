
import { NextRequest, NextResponse } from "next/server";
import redisDB from '@/config/redis'


export async function GET(Request: NextRequest) {
    let res = await redisDB.get('NN')
    return new Response(res)
}