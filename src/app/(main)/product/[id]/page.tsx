import products from "@/lib/summer_products.json";
import Image from "next/image";
import { AiOutlineStock } from "react-icons/ai";
import { BiSolidCategory } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { SiBrandfolder } from "react-icons/si";
import { notFound } from "next/navigation";

type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  rating: number;
  category: string;
  stock: number;
  brand: string;
};

type ProductDetailsPageProps = {
  params: Promise<{ id: string }>;
};

const ProductDetailsPage = async ({
  params,
}: ProductDetailsPageProps) => {
  const { id } = await params;

  const product = (products as Product[]).find(
    (item) => item.id === parseInt(id)
  );

  if (!product) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">
        <div className="grid gap-10 p-8 md:grid-cols-2">
          {/* Product Image */}
          <div className="flex items-center justify-center rounded-2xl bg-gray-100 p-8">
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
              className="h-87.5 w-full object-contain transition duration-300 hover:scale-105"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold">
                {product.name}
              </h1>

              <span className="flex items-center gap-1 rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700">
                <FaStar className="text-yellow-500" />
                {product.rating}
              </span>
            </div>

            <p className="leading-7 text-gray-600">
              {product.description}
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                <BiSolidCategory className="mr-2 inline" />
                {product.category}
              </span>

              <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
                <SiBrandfolder className="mr-2 inline" />
                {product.brand}
              </span>

              <span
                className={`rounded-full px-4 py-2 text-sm font-semibold ${
                  product.stock > 0
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                <AiOutlineStock className="mr-2 inline" />
                {product.stock > 0
                  ? `${product.stock} In Stock`
                  : "Out of Stock"}
              </span>
            </div>

            <div className="flex items-center justify-between border-t pt-6">
              <p className="text-4xl font-bold text-green-600">
                ${product.price.toFixed(2)}
              </p>

              <div className="text-right">
                <p className="text-sm text-gray-500">
                  Customer Rating
                </p>

                <div className="flex items-center justify-end gap-2 font-semibold">
                  <FaStar className="text-yellow-500" />
                  {product.rating} / 5
                </div>
              </div>
            </div>

            <button className="btn btn-neutral btn-lg mt-4 rounded-xl">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;