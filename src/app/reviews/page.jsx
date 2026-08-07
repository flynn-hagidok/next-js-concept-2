'use client'
import ReviewsCard from "@/components/Cards/ReviewsCard";
import { useEffect, useState } from "react";

const Reviews = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(' https://taxi-kitchen-api.vercel.app/api/v1/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data.reviews);
            })
    }, []);

    return (
        <div>
            <h2>Reviews</h2>
            <div>
                {
                    reviews.map(review => <ReviewsCard key={review.id} review={review}></ReviewsCard>)
                }
            </div>
        </div>
    )
};

export default Reviews;