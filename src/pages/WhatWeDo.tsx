import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const WhatWeDo = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1559304822-9eb2813c9844?q=80&w=2574&auto=format&fit=crop")',
          }}
        >
          <div className="absolute inset-0 bg-blue-900/70"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Farm & Sell
          </motion.h1>
          <p className="text-xl text-cyan-100">
            Excellence in every step of the process.
          </p>
        </div>
      </section>

      {/* We Farm */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1516918656725-e9a58b15618c?q=80&w=2670&auto=format&fit=crop"
                alt="Sustainable Farming"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </motion.div>
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-6">We Farm</h2>
              <p className="text-slate-600 text-lg mb-6">
                Our farming practices are rooted in sustainability and
                innovation. We utilize chemical-free cultivation methods to
                ensure the health of our shrimp and the environment.
              </p>
              <ul className="space-y-4">
                {[
                  "Chemical-free cultivation methods",
                  "Modern water quality monitoring",
                  "Probiotic-based disease management",
                  "Low-density stocking for better health",
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-slate-700">
                    <CheckCircle
                      className="text-cyan-500 mr-3 shrink-0"
                      size={20}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* We Sell */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?q=80&w=2574&auto=format&fit=crop"
                alt="Premium Shrimp Product"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </motion.div>
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-6">We Sell</h2>
              <p className="text-slate-600 text-lg mb-6">
                We deliver premium quality shrimp directly from our ponds to the
                global market. Our commitment to traceability ensures that our
                customers know exactly where their food comes from.
              </p>
              <ul className="space-y-4">
                {[
                  "Premium Quality Vannamei Shrimp",
                  "Full Traceability (Pond to Plate)",
                  "Strict Cold Chain Management",
                  "Global Export Standards",
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-slate-700">
                    <CheckCircle
                      className="text-cyan-500 mr-3 shrink-0"
                      size={20}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Logistics Partner */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-slate-400 mb-12 uppercase tracking-widest">
            Trusted Logistics Partner
          </h2>
          <div className="flex justify-center items-center grayscale hover:grayscale-0 transition-all duration-500 opacity-70 hover:opacity-100">
            {/* Maersk Logo Placeholder */}
            <div className="flex items-center gap-4">
              <div className="bg-blue-400 w-16 h-16 flex items-center justify-center text-white font-bold text-2xl rounded">
                *
              </div>
              <span className="text-4xl font-black text-blue-900 tracking-tighter">
                MAERSK
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;
