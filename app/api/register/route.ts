import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const response = await fetch(
            "https://staging-secure-passwords.onrender.com/auth/register",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            }
        );

        const data = await response.json();
        return NextResponse.json(data, { status: response.status });
    } catch (_error) {
        console.error("Register API error:", _error);
        return NextResponse.json(
            { message: "Registration failed" },
            { status: 500 }
        );
    }
}
