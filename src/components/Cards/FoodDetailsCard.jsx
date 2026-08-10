import { Poppins } from "next/font/google";
import Image from "next/image";

const popins = Poppins({
    weight: ["400", "600"],
    subsets: ["latin"]
});

const FoodDetailsCard = ({ food }) => {
    const {
        title,
        foodImg,
        category,
        price,
        instructions,
        area,
        youtube,
    } = food;

    return (
        <div className={`${popins.className} mx-auto max-w-5xl overflow-hidden rounded-2xl border bg-white shadow-lg p-10`}>
            <div className="grid md:grid-cols-2">
                <div className="relative h-80 md:h-full">
                    <Image
                        src={foodImg}
                        alt={title}
                        fill
                        className="object-cover p-4 rounded-full"
                    />
                </div>

                <div className="space-y-5 p-8">
                    <span className="inline-block rounded-full bg-orange-100 px-4 py-1 text-sm font-semibold text-orange-600">
                        {category}
                    </span>

                    <h1 className="text-4xl text-black font-bold">{title}</h1>

                    <p className="text-3xl font-bold text-orange-500">
                        ${price}
                    </p>

                    {area && (
                        <p className="text-black">
                            <span className="text-black font-semibold">Cuisine:</span> {area}
                        </p>
                    )}

                    {instructions && (
                        <div>
                            <h3 className="mb-2 text-lg font-semibold">
                                Instructions
                            </h3>

                            <p className="leading-7 text-gray-600">
                                {instructions}
                            </p>
                        </div>
                    )}

                    <div className="flex flex-wrap gap-4 pt-4">
                        <button className="rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600">
                            Add to Cart
                        </button>

                        {youtube && (
                            <a
                                href={youtube}
                                target="_blank"
                                className="rounded-lg border border-orange-500 px-6 py-3 font-semibold text-orange-500 transition hover:bg-orange-500 hover:text-white"
                            >
                                Watch Recipe
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetailsCard;