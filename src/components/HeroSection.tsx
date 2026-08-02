"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import products from "@/lib/summer_products.json";

type Product = {
  id?: number | string;
  name: string;
  price: number;
  brand: string;
  image: string;
};

const HeroSection = () => {
  const featuredProduct = products[0] as Product;

  return (
    <section className="relative overflow-hidden bg-linear-to-br from-sky-50 via-white to-amber-50 text-gray-900">
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-amber-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-7"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-1.5 text-sm font-semibold text-white shadow-lg shadow-black/20 sm:text-base"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
              </span>
              Summer Collection 2026
            </motion.span>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Summer is here,{" "}
              <span className="bg-linear-to-r from-sky-600 to-amber-500 bg-clip-text text-transparent">
                get ready for the beach.
              </span>
            </h1>

            <p className="max-w-lg text-lg text-gray-600 sm:text-xl">
              Check out our latest collection of summer gear, including the{" "}
              <span className="font-semibold text-gray-900">
                {featuredProduct.name}
              </span>{" "}
              for just{" "}
              <span className="font-bold text-sky-600">
                ${featuredProduct.price}
              </span>
              . Built for performance and style.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/myproducts">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="rounded-xl bg-gray-900 px-8 py-4 font-semibold text-white shadow-lg shadow-gray-900/20 transition hover:bg-gray-800"
                >
                  Shop Our Collection
                </motion.button>
              </Link>

              {/* <Link href={`/product/${featuredProduct.id ?? 1}`}>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="rounded-xl border-2 border-gray-200 bg-white px-8 py-4 font-semibold text-gray-800 transition hover:border-gray-300 hover:bg-gray-50"
                >
                  View Featured Item
                </motion.button>
              </Link> */}
            </div>
          </motion.div>

          {/* Right Image Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="relative"
          >
            {/* Floating badges */}
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute -top-3 left-4 z-20 inline-flex items-center gap-1.5 rounded-full bg-black  px-3 py-1.5 text-xs font-bold text-white shadow-lg sm:left-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
              </span>
              50% OFF
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="absolute -top-3 right-4 z-20 inline-flex items-center rounded-full bg-black px-3 py-1.5 text-xs font-bold text-white shadow-lg sm:right-6"
            >
              🔥 Hot Deal
            </motion.span>

            {/* Card */}
            <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 shadow-xl shadow-sky-100/50 sm:p-6">
              <div className="overflow-hidden rounded-xl bg-linear-to-br from-sky-50 to-amber-50">
                <Image
                  src={featuredProduct.image}
                  alt={featuredProduct.name}
                  width={500}
                  height={400}
                  className="h-auto w-full object-contain transition duration-500 hover:scale-105"
                  priority
                />
              </div>

              <div className="mt-5 flex items-center justify-between gap-3">
                <div>
                  <h2 className="text-lg font-bold text-gray-900">
                    {featuredProduct.name}
                  </h2>
                  <p className="text-sm text-gray-500">
                    Brand: {featuredProduct.brand}
                  </p>
                </div>
                <p className="rounded-lg bg-sky-50 px-3 py-1.5 text-lg font-bold text-sky-700">
                  ${featuredProduct.price}
                </p>
              </div>
            </div>

            {/* Decorative shadow card behind */}
            <div className="absolute inset-0 -z-10 translate-x-3 translate-y-3 rounded-2xl border-2 border-sky-100 bg-sky-50/50" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;