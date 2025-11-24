import Image from "next/image";
import Link from "next/link";

const heroBlur =
  "data:image/svg+xml;utf8," +
  "<svg xmlns='http://www.w3.org/2000/svg' width='10' height='7' viewBox='0 0 10 7'>" +
  "<rect width='10' height='7' fill='%235b21b6'/>" +
  "</svg>";

export default function Hero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2">
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
        </div>

        <div className="w-full lg:w-1/2">
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
        </div>
      </div>
    </section>
  );
}
