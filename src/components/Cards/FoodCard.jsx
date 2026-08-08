import Image from "next/image";
import Link from "next/link";
import Add2Cart from "../Buttons/Add2Cart";

const FoodCard = ({ food }) => {
    const { id, title, category, foodImg, price } = food;

    return (
        <div className="overflow-hidden rounded-xl border bg-white shadow-sm transition duration-300 hover:shadow-lg">
            <div className="relative h-56 w-full">
                <Image
                    src={foodImg}
                    alt={title}
                    fill
                    className="object-cover p-4 rounded-2xl"
                />
            </div>

            <div className="space-y-3 p-5">
                <div>
                    <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-600">
                        {category}
                    </span>
                </div>

                <h2 className="line-clamp-2 text-black text-xl font-bold">
                    {title}
                </h2>

                <p className="text-2xl font-bold text-orange-500">
                    ${price}
                </p>

                <div className="flex gap-3">
                    <Add2Cart food={food}></Add2Cart>

                    <Link
                        href={`/foods/${id}`}
                        className="flex-1 rounded-lg border border-orange-500 px-4 py-2 text-center font-medium text-orange-500 transition hover:bg-orange-500 hover:text-white"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;