import { feedback } from "../route";

export async function GET() {
    return Response.json(feedback)
};

export async function POST(req) {

    const { message } = await req.json();

    if (!message || typeof message !== "string") {
        return Response.json({
            status: 400,
            message: "please give correct message"
        })
    };

    const newFeedback = { message, id: feedback.length + 1 }
    feedback.push(newFeedback);

    return Response.json({
        acknowledge: true,
        insertedId: newFeedback.id
    })
};