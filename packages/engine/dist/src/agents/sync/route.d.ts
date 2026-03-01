export declare const runtime = "nodejs";
export declare const dynamic = "force-dynamic";
export declare const revalidate = 0;
import { NextResponse } from "next/server";
export declare function POST(): Promise<NextResponse<{
    ok: boolean;
    agents: number;
}> | NextResponse<{
    ok: boolean;
    stage: string;
    error: any;
}>>;
