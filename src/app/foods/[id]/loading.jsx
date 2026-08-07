import FoodDetailsSkeleton from "@/components/Skeletons/FoodDetailsSkeleton";


export default function Loading() {
    return (
        <section className="container mx-auto py-12">
            <FoodDetailsSkeleton />
        </section>
    );
};