import products from "@/lib/summer_products.json";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  rating: number;
};

const PopularProduct = () => {
  const popularProducts = (products as Product[]).filter(
    (item) => item.id <= 3
  );

  return (
    <div>
      <h2 className="mb-4 text-center text-4xl font-bold">Popular Products</h2>

      <div className="mx-auto grid max-w-[95%] grid-cols-1 gap-4 p-4 md:max-w-[85%] md:grid-cols-2 lg:grid-cols-3">
        {popularProducts.map((item) => (
          <div
            key={item.id}
            className="flex flex-col space-y-5 rounded-md p-5 shadow-md"
          >
            <h2 className="line-clamp-1 text-2xl font-bold">{item.name}</h2>
            <p className="text-gray-600">{item.description}</p>

            <div className="grow">
              <Image
                src={item.image}
                alt={item.name}
                width={300}
                height={200}
                className="h-60 w-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-between text-start sm:flex-row">
              <p className="mt-auto text-xl font-bold">
                $ {item.price.toFixed(2)}
              </p>
              <p className="flex items-center gap-2">
                <FaStar />
                Ratings : {item.rating} out of 5
              </p>
            </div>

            <Link href={`/product/${item.id}`}>
              <button className="btn btn-neutral btn-outline w-full">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProduct;