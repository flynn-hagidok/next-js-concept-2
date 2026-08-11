"use server"

import { connect } from "@/lib/dbConnect";

export const postFeedback = async ({ message }) => {

    const result = await connect("feedbacks").insertOne({
        message,
        date: new Date().toLocaleString()
    });

    return {
        // ...result,
        insertedId: result.insertedId.toString(),
    };
};

export const getFeedback = async () => {
    const feedbacks = await connect("feedbacks").find().toArray();
    return feedbacks;
};