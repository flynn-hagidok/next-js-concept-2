// import { feedback } from "../../route";
import { connect } from "@/app/lib/dbConnect";
import { ObjectId } from "mongodb";

const feedbackCollection = connect("feedbacks");

// export async function GET({ params }) {
//     const { id } = await params;

//     const singleFeedback = feedback.find(fd => fd.id == id) || {};
//     return Response.json(singleFeedback)
// };

//find or get data by id to mongodb database
export async function GET(req, { params }) {
    const { id } = await params;

    if (id.length != 24) {
        return Response.json({
            status: 400,
            message: "send correct _id"
        });
    };

    const query = {
        _id: new ObjectId(id)
    };

    const result = await feedbackCollection.findOne(query);
    return Response.json(result);
};

//delete data by id to mongodb database
export async function DELETE(req, { params }) {
    const { id } = await params;

    if (id.length != 24) {
        return Response.json({
            status: 400,
            message: "send correct _id"
        });
    };

    const query = {
        _id: new ObjectId(id)
    };

    const result = await feedbackCollection.deleteOne(query);
    return Response.json(result);
};

//patch data by id to mongodb database 
export async function PATCH(req, { params }) {
    const { id } = await params;
    const { message } = await req.json();

    if (id.length != 24) {
        return Response.json({
            status: 400,
            message: "send correct _id"
        });
    };

    if (!message || typeof message !== "string") {
        return Response.json({
            status: 400,
            message: "please send a message"
        });
    };

    const query = {
        _id: new ObjectId(id)
    };

    const newData = {
        $set: {
            message
        }
    };

    const result = await feedbackCollection.updateOne(query, newData);
    return Response.json(result);
}