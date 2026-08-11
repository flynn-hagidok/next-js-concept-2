import { connect } from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";
// import { feedback } from "../route";

const feedbackCollection = connect("feedbacks");

// export async function GET() {
//     return Response.json(feedback)
// };

// export async function POST(req) {

//     const { message } = await req.json();

//     if (!message || typeof message !== "string") {
//         return Response.json({
//             status: 400,
//             message: "please give correct message"
//         })
//     };

//     const newFeedback = { message, id: feedback.length + 1 }
//     feedback.push(newFeedback);

//     return Response.json({
//         acknowledge: true,
//         insertedId: newFeedback.id
//     })
// };


// get to mongodb databe
export async function GET() {
    const result = await feedbackCollection.find().toArray();
    return Response.json(result);
}


// post to mongodb database
export async function POST(req) {
    const { message } = await req.json();

    if (!message || typeof message !== "string") {
        return Response.json({
            status: 400,
            message: "please send a message"
        });
    };

    const newFeedback = { message, date: new Date().toLocaleString() };
    const result = await feedbackCollection.insertOne(newFeedback);
    revalidatePath("/feedback");

    return Response.json(result);
}