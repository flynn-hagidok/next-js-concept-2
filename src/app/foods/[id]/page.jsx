import FoodDetailsCard from "@/components/Cards/FoodDetailsCard";
import { redirect } from "next/navigation";

export async function generateMetadata({ params }) {
    const { id } = await params;
    const res = await fetch(
        `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`
    );

    const { details = {} } = await res.json();
    return {
        title: details.title
    };
};

const getFoods = async (id) => {
    const res = await fetch(
        `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`
    );

    const data = await res.json();

    return data.details || {};
};

const FoodDetails = async ({ params }) => {
    const { id } = await params;

    const foodDetails = await getFoods(id);

    if (!foodDetails.title) {
        return (
            // <div className="text-center font-bold text-2xl">Page not found</div>
            redirect("/foods")
        )
    }
    return (
        <section className="container mx-auto py-12">
            <FoodDetailsCard food={foodDetails} />
        </section>
    );
};

export default FoodDetails;