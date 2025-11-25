"use client";
import Image from "next/image";
import Card from "../ui/Card";
import { motion } from "framer-motion";

const avatar1Blur = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'><rect width='8' height='8' fill='%23e0e7ff'/></svg>";
const avatar2Blur = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'><rect width='8' height='8' fill='%23dbeafe'/></svg>";
const avatar3Blur = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'><rect width='8' height='8' fill='%23fce7f3'/></svg>";

export default function Testimonials() {
  const data = [
    { 
      name: "Samuel Johnson", 
      role: "Product Manager", 
      company: "TechCorp",
      quote: "This tool transformed how our team works. We're now 3x more productive!", 
      avatar: "/testimonial.jpg", 
      blur: avatar1Blur 
    },
    { 
      name: "Mike Chen", 
      role: "CEO", 
      company: "StartupXYZ",
      quote: "The best investment we made this year. Couldn't imagine working without it.", 
      avatar: "/testimonial-2.jpg", 
      blur: avatar2Blur 
    },
    { 
      name: "Emily Rodriguez", 
      role: "Designer", 
      company: "Creative Studio",
      quote: "Simple, powerful, and exactly what we needed. Highly recommend!", 
      avatar: "/testimonial-3.jpg", 
      blur: avatar3Blur 
    },
  ];

  return (
    <section id="reviews" className="py-16 bg-linear-to-b from-slate-300 to-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Animated headings */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-slate-900 mb-4 text-center"
        >
          Loved by thousands of users
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-slate-600 text-center mb-12"
        >
          See what our customers are saying
        </motion.p>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-white border-slate-200 hover:shadow-xl transition-shadow h-full">
                <div className="flex items-start gap-4 mb-4">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={56}
                    height={56}
                    className="rounded-full"
                    placeholder="blur"
                    blurDataURL={t.blur}
                  />
                  <div>
                    <h4 className="font-semibold text-slate-900">{t.name}</h4>
                    <p className="text-sm text-slate-600">
                      {t.role} at {t.company}
                    </p>
                  </div>
                </div>
                <p className="text-slate-700 leading-relaxed">"{t.quote}"</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
