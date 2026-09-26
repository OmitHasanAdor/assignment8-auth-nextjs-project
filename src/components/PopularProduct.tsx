"use client";

import products from "@/lib/summer_products.json";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaStar } from "react-icons/fa";
import { motion, Variants } from "framer-motion";

type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  rating: number;
};

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const PopularProduct = () => {
  const popularProducts = (products as Product[]).filter(
    (item) => item.id <= 3
  );

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <span className="inline-flex rounded-full bg-sky-100 px-4 py-1.5 text-sm font-semibold text-sky-700">
          Best Sellers
        </span>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Popular Products
        </h2>
        <p className="mt-3 text-slate-500">
          Discover our most loved summer essentials.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {popularProducts.map((item) => (
          <motion.div
            key={item.id}
            variants={cardVariants}
            whileHover={{ y: -8 }}
            className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
          >
            <div className="overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                width={500}
                height={350}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="space-y-4 p-5">
              <div className="flex items-start justify-between gap-3">
                <h2 className="line-clamp-1 text-xl font-bold text-slate-900">
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
                <p className="text-2xl font-bold text-sky-600">
                  ${item.price.toFixed(2)}
                </p>
              </div>

              <Link href={`/product/${item.id}`}>
                <button className="btn btn-neutral w-full rounded-xl">
                  View Details
                  <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-12 flex justify-center"
      >
        <Link href="/myproducts">
          <button className="btn btn-outline btn-neutral rounded-xl px-8">
            View All Products
          </button>
        </Link>
      </motion.div>
    </section>
  );
};

export default PopularProduct;