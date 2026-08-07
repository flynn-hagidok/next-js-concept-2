

const FoodCardSkeleton = () => {
    return (
        <div className="overflow-hidden rounded-xl border bg-white shadow-sm animate-pulse">
            <div className="h-56 w-full bg-gray-200"></div>

            <div className="space-y-4 p-5">
                <div className="h-5 w-20 rounded bg-gray-200"></div>

                <div className="h-6 w-3/4 rounded bg-gray-200"></div>

                <div className="h-6 w-24 rounded bg-gray-200"></div>

                <div className="flex gap-3">
                    <div className="h-10 flex-1 rounded bg-gray-200"></div>
                    <div className="h-10 flex-1 rounded bg-gray-200"></div>
                </div>
            </div>
        </div>
    );
};

export default FoodCardSkeleton;