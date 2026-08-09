import FoodCard from "@/components/Cards/FoodCard";
import CartItems from "./cartItems";
import FoodSearch from "@/components/Search/FoodSearch";

export const metadata = {
  title: "All Foods",
  description: "Best Resturant in Bangladesh",
};

const getFoods = async (search) => {
    const res = await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`);
    const data = await res.json();
    await new Promise((resolve) => setTimeout(resolve, 3000))
    return data.foods || [];
};

const Foods = async ({ searchParams }) => {

    const { search = "" } = await searchParams;
    const foods = await getFoods(search);

    return (
        <div className="">
            <h2>Total {foods.length} Foods Found</h2>

            <div className="mt-6 px-4">
                <FoodSearch></FoodSearch>
            </div>

            <div className="flex gap-10 my-10">
                <div className="grid grid-cols-3 gap-6">
                    {
                        foods.map(food => <FoodCard key={food.id} food={food}></FoodCard>)
                    }
                </div>
                <div className="border-2 w-md p-4">
                    <CartItems></CartItems>
                </div>
            </div>
        </div>
    )
};

export default Foods;