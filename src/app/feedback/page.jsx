import FeedbackCard from "@/components/Cards/FeedbackCard";
import AddFeedback from "./add/page";
import Link from "next/link";
// import { connect } from "../../lib/dbConnect";
import { getFeedback } from "@/action/server/feedback";

export const dynamic = "force-dynamic";

// const getFeedback = async () => {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API}/api/feedback`, {
//         // cache: "force-cache",
//         next: { revalidate: 60 }
//     });
//     const data = await res.json();
//     return data;
// }

const FeedbackPage = async () => {

    const feedbacks = await getFeedback();
    // const feedbacks = await connect("feedbacks").find().toArray();

    return (
        <div>
            <div>
                <h2>This is my Feedback: {feedbacks.length}</h2>
            </div>

            <div className="mt-10">
                <Link href={"/feedback/add"} className="bg-blue-400 px-4 py-3 rounded font-semibold text-black">Add Feedback</Link>
            </div>

            <div className="grid grid-cols-2 gap-4 my-10">
                {
                    feedbacks.map(fb => <FeedbackCard key={fb._id} feedback={fb}></FeedbackCard>)
                }
            </div>
        </div>
    )
};

export default FeedbackPage;