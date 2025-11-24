import Card from "../ui/Card";
import { FaRocket, FaUsers, FaChartLine, FaShieldAlt } from "react-icons/fa";

export default function Features() {
  const features = [
    { 
      title: "Lightning Fast", 
      desc: "Built for speed with optimized performance that keeps your team moving.",
      icon: <FaRocket />
    },
    { 
      title: "Team Collaboration", 
      desc: "Work together seamlessly with real-time updates and shared workspaces.",
      icon: <FaUsers />
    },
    { 
      title: "Advanced Analytics", 
      desc: "Track progress with detailed insights and beautiful visualizations.",
      icon: <FaChartLine />
    },
    { 
      title: "Enterprise Security", 
      desc: "Bank-level encryption keeps your data safe and compliant.",
      icon: <FaShieldAlt />
    },
  ];

  return (
    <section id="features" className="py-16 bg-gray-300">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">
          Everything you need to succeed
        </h2>
        <p className="text-xl text-slate-600 text-center mb-12">
          Powerful features designed for modern teams
        </p>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <Card 
              key={f.title} 
              icon={f.icon}
              title={f.title}
              content={f.desc}
              className="bg-blue-400 border-blue-200 hover:border-blue-700 hover:shadow-lg transition-all"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
