import Image from "next/image";
import Card from "../ui/Card";

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
    <section id="reviews" className="py-16 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">
          Loved by thousands of users
        </h2>
        <p className="text-xl text-slate-600 text-center mb-12">
          See what our customers are saying
        </p>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((t) => (
            <Card 
              key={t.name} 
              className="bg-white border-slate-200 hover:shadow-xl transition-shadow"
            >
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
          ))}
        </div>
      </div>
    </section>
  );
}
