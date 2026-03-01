export declare const runtime = "nodejs";
import { NextResponse } from "next/server";
export declare function POST(req: Request): Promise<NextResponse<{
    to: string[];
    results: {
        id: string;
        name: string;
        reply: any;
    }[];
}> | NextResponse<{
    error: any;
}>>;
