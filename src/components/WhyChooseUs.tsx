"use client";

import { motion, Variants } from "framer-motion";
import {
  FaShippingFast,
  FaShieldAlt,
  FaLeaf,
  FaHeadset,
} from "react-icons/fa";

type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const features: Feature[] = [
  {
    title: "Fast Delivery",
    description:
      "Get your summer essentials delivered within 2–3 days, anywhere in the country.",
    icon: <FaShippingFast />,
  },
  {
    title: "Quality Guaranteed",
    description:
      "Every product is carefully selected and tested to ensure premium quality and durability.",
    icon: <FaShieldAlt />,
  },
  {
    title: "Eco-Friendly",
    description:
      "We prioritize sustainable materials and eco-conscious packaging for a greener planet.",
    icon: <FaLeaf />,
  },
  {
    title: "24/7 Support",
    description:
      "Our friendly support team is always ready to help you with any questions or issues.",
    icon: <FaHeadset />,
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 36,
    scale: 0.96,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      {/* soft background blobs */}
      <div className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-sky-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-amber-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <span className="inline-flex rounded-full bg-sky-100 px-4 py-1.5 text-sm font-semibold text-sky-700">
            Why SunCart
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Why Choose Us
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-500 sm:text-lg">
            We make summer shopping simple, reliable, and enjoyable — here&apos;s
            what sets us apart.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-xl"
            >
              <motion.div
                whileHover={{ rotate: 8, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 280 }}
                className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-sky-500 to-cyan-400 text-2xl text-white shadow-lg shadow-sky-200"
              >
                {feature.icon}
              </motion.div>

              <h3 className="text-lg font-bold text-slate-800">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-500">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;