import { url } from "inspector";
import { redirect } from "next/dist/server/api-utils";
import { NextResponse } from "next/server";

function GET(request: Request) {
    return NextResponse.redirect("/")
}