import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Testimonials from "@/components/landing/Testimonials";
import Footer from "@/components/landing/Footer";
export default function Home() {
  return (
    <main className="text-gray-900">
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
    </main>
  );
}
