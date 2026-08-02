"use client";

import { motion, Variants } from "framer-motion";
import { FaSun, FaTint, FaTshirt } from "react-icons/fa";

type Tip = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const tips: Tip[] = [
  {
    title: "Stay Hydrated",
    description:
      "Drink at least 8–10 glasses of water daily to keep your skin glowing and your body cool.",
    icon: <FaTint />,
  },
  {
    title: "Sun Protection",
    description:
      "Apply SPF 50+ sunscreen at least 20 minutes before going outside to protect your skin.",
    icon: <FaSun />,
  },
  {
    title: "Wear Light Clothes",
    description:
      "Choose breathable cotton fabrics and light-colored clothing to stay fresh all day.",
    icon: <FaTshirt />,
  },
];

// 2. Variants টাইপ ডিফাইন করা হয়েছে
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// 3. Variants টাইপ ডিফাইন করা হয়েছে
const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const SummerTips = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-sky-50 via-white to-cyan-50 py-24">
      {/* Background Blur */}
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />

      <div className="container relative mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-600">
            Summer Essentials
          </span>

          <h2 className="mt-4 text-4xl font-extrabold text-slate-900">
            Summer Care Tips
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-500">
            Stay healthy, refreshed, and protected during hot summer days with
            these simple yet effective tips.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-8 md:grid-cols-3"
        >
          {tips.map((tip) => (
            <motion.div
              key={tip.title}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              whileTap={{ scale: 0.98 }}
              className="group rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-lg backdrop-blur transition-all duration-300 hover:shadow-2xl"
            >
              <motion.div
                whileHover={{
                  rotate: 10,
                  scale: 1.15,
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                }}
                className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-blue-600 to-cyan-500 text-3xl text-white shadow-lg"
              >
                {tip.icon}
              </motion.div>

              <h3 className="text-2xl font-bold text-slate-800">
                {tip.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {tip.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SummerTips;