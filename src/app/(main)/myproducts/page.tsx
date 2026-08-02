import products from "@/lib/summer_products.json";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaStar } from "react-icons/fa";

type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  rating: number;
};

const ProductPage = () => {
  const allProducts = products as Product[];

  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {allProducts.map((item) => (
          <div
            key={item.id}
            className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                width={500}
                height={350}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="space-y-4 p-5">
              <div className="flex items-start justify-between gap-3">
                <h2 className="line-clamp-1 text-xl font-bold">
                  {item.name}
                </h2>

                <span className="flex items-center gap-1 rounded-full bg-yellow-100 px-2 py-1 text-sm font-semibold text-yellow-700">
                  <FaStar className="text-yellow-500" />
                  {item.rating}
                </span>
              </div>

              <p className="line-clamp-2 text-sm leading-6 text-gray-600">
                {item.description}
              </p>

              <div className="flex items-center justify-between">
                <p className="text-2xl font-bold text-green-600">
                  ${item.price.toFixed(2)}
                </p>

                <span className="text-sm text-gray-500">
                  ⭐ {item.rating}/5
                </span>
              </div>

              <Link href={`/product/${item.id}`}>
                <button className="btn btn-neutral w-full rounded-xl">
                  View Details
                  <FaArrowRight />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductPage;