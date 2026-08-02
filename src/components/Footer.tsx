"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaEnvelope,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";
import { FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";

const socialLinks = [
  {
    icon: <FaFacebook />,
    href: "#",
  },
  {
    icon: <FaSquareInstagram />,
    href: "#",
  },
  {
    icon: <FaSquareXTwitter />,
    href: "#",
  },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-linear-to-b from-slate-950 via-black to-slate-950 text-white">
      {/* Glow */}
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="container relative mx-auto px-6 py-20">
        <div className="grid gap-14 lg:grid-cols-3">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4">
              <Image
                src="/logo.jpg"
                alt="Logo"
                width={60}
                height={60}
                className="rounded-full border-2 border-cyan-500 shadow-xl"
              />

              <h2 className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-4xl font-extrabold text-transparent">
                SunCart
              </h2>
            </div>

            <p className="mt-6 max-w-md leading-8 text-slate-400">
              Elevating your summer adventures with premium products.
              Discover stylish, eco-friendly, and high-quality essentials
              designed for your everyday comfort.
            </p>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            viewport={{ once: true }}
            className="lg:mx-auto"
          >
            <h3 className="mb-6 text-2xl font-bold">
              Follow Us
            </h3>

            <div className="flex gap-4">
              {socialLinks.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  whileHover={{
                    scale: 1.15,
                    y: -5,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-700 bg-slate-900 text-2xl transition hover:border-cyan-400 hover:text-cyan-400"
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 text-2xl font-bold">
              Contact
            </h3>

            <div className="space-y-5 text-slate-400">

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-cyan-400" />
                <span>info@suncart.com</span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhone className="text-cyan-400" />
                <span>+8801987654321</span>
              </div>

              <div className="flex items-center gap-3">
                <FaLocationDot className="text-cyan-400" />
                <span>Kamrangir Char, Dhaka</span>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Divider */}

        <div className="my-10 h-px bg-slate-800" />

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-5 text-sm text-slate-500 md:flex-row">

          <p>
            © 2026 SunCart. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-6">

            <Link href="#" className="hover:text-cyan-400">
              Privacy Policy
            </Link>

            <Link href="#" className="hover:text-cyan-400">
              Cookies
            </Link>

            <Link href="#" className="hover:text-cyan-400">
              Terms of Service
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;