import { feedback } from "../../route";

export async function GET({ params }) {
    const { id } = await params;

    const singleFeedback = feedback.find(fd => fd.id == id) || {};
    return Response.json(singleFeedback)
};