"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const heroBlur =
  "data:image/svg+xml;utf8," +
  "<svg xmlns='http://www.w3.org/2000/svg' width='10' height='7' viewBox='0 0 10 7'>" +
  "<rect width='10' height='7' fill='%235b21b6'/>" +
  "</svg>";

export default function Hero() {
  return (
    <section className="pt-24 pb-16 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-purple-300 via-cyan-300 to-blue-300 animate-gradient-wave" />
      
      {/* Content */}
      <div className="relative container mx-auto px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Text content with fade-in animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-slate-900">
            Supercharge Your Workflow
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-xl">
            Built with Next.js and Tailwind — optimized images, accessible markup,
            and great performance for modern teams.
          </p>
          <div className="mt-6 flex gap-4">
            <Link 
              href="#features" 
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors"
            >
              Get started
            </Link>
            <Link 
              href="#reviews" 
              className="inline-block px-6 py-3 border-2 border-slate-300 rounded-lg hover:border-slate-400 transition-colors"
            >
              Reviews
            </Link>
          </div>
        </motion.div>

        {/* Image with fade-in and slide animation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full lg:w-1/2"
        >
          <div className="relative w-full h-64 sm:h-80 lg:h-96">
            <Image
              src="/hero-.jpg"
              alt="Product dashboard preview"
              fill
              className="object-contain rounded-xl"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
              priority
              placeholder="blur"
              blurDataURL={heroBlur}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
