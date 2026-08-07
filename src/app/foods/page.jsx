import FoodCard from "@/components/Cards/FoodCard";

const getFoods = async () => {
    const res = await fetch(' https://taxi-kitchen-api.vercel.app/api/v1/foods/random');
    const data = await res.json();
    await new Promise((resolve) => setTimeout(resolve, 3000))
    return data.foods || [];
};

const Foods = async () => {

    const foods = await getFoods();

    return (
        <div className="">
            <h2>Total {foods.length} Foods Found</h2>

            <div className="grid grid-cols-3 gap-6 my-10">
                {
                    foods.map(food => <FoodCard key={food.id} food={food}></FoodCard>)
                }
            </div>
        </div>
    )
};

export default Foods;