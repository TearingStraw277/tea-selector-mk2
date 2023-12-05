import Tea from "../../(model)/Tea";
import { NextResponse } from "next/server";

export async function POST(req){
    try {
        const body = await req.json();
        const teaData = body.formData;
        await Tea.create(teaData);

        return NextResponse.json({message: "Tea added"}, {status: 201});

    } catch (error) {
        return NextResponse.json({message: "Error", error}, {status: 500});
    }
}



//export async function