import { connect } from "@/lib/dbConnect";
import AddFeedbackForm from "@/components/Forms/AddFeedbackForm";
import { postFeedback } from "@/action/server/feedback";

const AddFeedback = () => {

    // const postFeedback = async ({ message }) => {
    //     "use server"
    //     const result = await connect("feedbacks").insertOne({
    //         message,
    //         date: new Date().toLocaleString()
    //     });

    //     return {
    //         // ...result,
    //         insertedId: result.insertedId.toString(),
    //     };
    // };

    return (
        <div>
            <h2 className="text-2xl font-bold text-center">Add Feedback</h2>

            <div className="text-center">
                <AddFeedbackForm postFeedback={postFeedback}></AddFeedbackForm>
            </div>
        </div>
    )
};

export default AddFeedback;