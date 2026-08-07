import ReviewCardSkeleton from '@/components/Skeletons/ReviewCardSkeleton';
import React from 'react';

const ReviewLoading = () => {
    return (
        <div className="grid grid-cols-3 gap-6 my-10">
            {
                [...Array(6)].map((_, index) => <ReviewCardSkeleton key={index}></ReviewCardSkeleton>)
            }
        </div>
    );
};

export default ReviewLoading;