

const FoodDetailsSkeleton = () => {
    return (
        <div className="mx-auto max-w-5xl animate-pulse overflow-hidden rounded-2xl border bg-white shadow p-10">
            <div className="grid md:grid-cols-2">
                <div className="h-80 bg-gray-200"></div>

                <div className="space-y-5 p-8">
                    <div className="h-6 w-24 rounded bg-gray-200"></div>

                    <div className="h-10 w-3/4 rounded bg-gray-200"></div>

                    <div className="h-8 w-32 rounded bg-gray-200"></div>

                    <div className="space-y-3">
                        <div className="h-4 rounded bg-gray-200"></div>
                        <div className="h-4 rounded bg-gray-200"></div>
                        <div className="h-4 w-5/6 rounded bg-gray-200"></div>
                        <div className="h-4 w-4/6 rounded bg-gray-200"></div>
                    </div>

                    <div className="flex gap-4 pt-4">
                        <div className="h-12 w-36 rounded bg-gray-200"></div>
                        <div className="h-12 w-36 rounded bg-gray-200"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetailsSkeleton;