const getFoods = async () => {
    const res = await fetch(' https://taxi-kitchen-api.vercel.app/api/v1/foods/random');
    const data = await res.json();
    return data.foods || [];
};

const Foods = async () => {

    const foods = await getFoods();

    return (
        <div className="">
            <h2>Total {foods.length} Foods Found</h2>
        </div>
    )
};

export default Foods;