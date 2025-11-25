import Link from "next/link";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t bg-white mt-16">
      <div className="container mx-auto px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-slate-600">
          © {new Date().getFullYear()} Gr8 Solutions. All rights reserved.
        </div>
        
        <nav className="flex gap-6 text-sm text-slate-600">
          <Link href="/privacy" className="hover:text-slate-900 transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-slate-900 transition-colors">Terms</Link>
          <Link href="/contact" className="hover:text-slate-900 transition-colors">Contact</Link>
        </nav>

        <div className="flex gap-4 text-xl text-slate-600">
          <a href="#" className="hover:text-slate-900 transition-colors">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-slate-900 transition-colors">
            <FaLinkedin />
          </a>
          <a href="#" className="hover:text-slate-900 transition-colors">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}
