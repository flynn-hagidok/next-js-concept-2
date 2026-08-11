import AddFeedbackForm from "@/components/Forms/AddFeedbackForm";

const AddFeedback = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-center">Add Feedback</h2>

            <div className="text-center">
                <AddFeedbackForm></AddFeedbackForm>
            </div>
        </div>
    )
};

export default AddFeedback;