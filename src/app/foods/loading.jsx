import FoodCardSkeleton from "@/components/Skeletons/FoodCardSkeleton";

const Loading = () => {
    return (
        <div className="grid grid-cols-3 gap-6 my-10">
            {
                [...Array(12)].map((_, index) => <FoodCardSkeleton key={index}></FoodCardSkeleton>)
            }
        </div>
    )
};

export default Loading;