// "use client"

const FeedbackCard = ({ feedback, onUpdate, onDelete }) => {
    const { _id, message, date } = feedback;

    return (
        <div className="rounded-xl border bg-white p-5 shadow-sm transition hover:shadow-md">
            <div className="mb-4">
                <p className="text-gray-700">{message}</p>

                <p className="mt-2 text-sm text-gray-400">
                    {date}
                </p>
            </div>

            <div className="flex gap-3">
                <button
                    className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-600"
                >
                    Update
                </button>

                <button
                    className="rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default FeedbackCard;