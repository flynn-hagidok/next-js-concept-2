import Image from "next/image";
import { FaHeart, FaStar } from "react-icons/fa";

const ReviewCard = ({ review }) => {
    const {
        user,
        photo,
        rating,
        review: message,
        likes,
        date,
    } = review;

    return (
        <div className="rounded-xl border bg-white p-6 shadow-sm transition hover:shadow-lg">
            {/* Header */}
            <div className="flex items-center gap-4">
                <Image
                    src={photo}
                    alt={user}
                    width={60}
                    height={60}
                    className="rounded-full object-cover"
                />

                <div className="flex-1">
                    <h2 className="text-lg font-semibold">{user}</h2>

                    <p className="text-sm text-gray-500">
                        {new Date(date).toLocaleDateString()}
                    </p>
                </div>

                <div className="flex items-center gap-1 rounded-full bg-yellow-100 px-3 py-1 text-yellow-600">
                    <FaStar />
                    <span>{rating}</span>
                </div>
            </div>

            {/* Review */}
            <p className="mt-5 leading-7 text-gray-600">
                {message}
            </p>

            {/* Footer */}
            <div className="mt-6 flex items-center justify-between border-t pt-4">
                <div className="flex items-center gap-2 text-red-500">
                    <FaHeart />
                    <span>{likes.length} Likes</span>
                </div>

                <button className="rounded-lg border border-orange-500 px-4 py-2 text-sm font-medium text-orange-500 transition hover:bg-orange-500 hover:text-white">
                    Helpful
                </button>
            </div>
        </div>
    );
};

export default ReviewCard;