

const ReviewCardSkeleton = () => {
    return (
        <div className="animate-pulse rounded-xl border bg-white p-6 shadow-sm">
            {/* Header */}
            <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-full bg-gray-200"></div>

                <div className="flex-1 space-y-2">
                    <div className="h-5 w-40 rounded bg-gray-200"></div>
                    <div className="h-4 w-24 rounded bg-gray-200"></div>
                </div>

                <div className="h-8 w-14 rounded-full bg-gray-200"></div>
            </div>

            {/* Review */}
            <div className="mt-6 space-y-3">
                <div className="h-4 rounded bg-gray-200"></div>
                <div className="h-4 rounded bg-gray-200"></div>
                <div className="h-4 w-5/6 rounded bg-gray-200"></div>
                <div className="h-4 w-2/3 rounded bg-gray-200"></div>
            </div>

            {/* Footer */}
            <div className="mt-6 flex items-center justify-between border-t pt-4">
                <div className="h-5 w-20 rounded bg-gray-200"></div>
                <div className="h-10 w-24 rounded bg-gray-200"></div>
            </div>
        </div>
    );
};

export default ReviewCardSkeleton;