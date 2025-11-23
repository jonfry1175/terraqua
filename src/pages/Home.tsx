import { motion } from "framer-motion";
import { ArrowRight, Leaf, ShieldCheck, Lightbulb, Users } from "lucide-react";
import { Link } from "react-router-dom";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=2574&auto=format&fit=crop")',
          }} // Shrimp farm or ocean placeholder
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
          >
            Leading Sustainable <br /> Shrimp Farming in Indonesia
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-cyan-100"
          >
            Commitment to quality and environment.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="#impact"
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 inline-flex items-center gap-2"
            >
              Discover More <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section id="impact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { value: "42", label: "Hectares Area" },
              { value: "100", label: "Ponds Target" },
              { value: "2.4M", label: "Kg Annual Harvest" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="p-6"
              >
                <h3 className="text-5xl font-bold text-blue-900 mb-2">
                  {stat.value}
                </h3>
                <p className="text-slate-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              className="md:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                About Terraqua
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Established in 2022 in Membalong, Belitung, Terraqua (PT.
                Terraqua Alam Nusantara) is dedicated to revolutionizing the
                aquaculture industry. We combine traditional wisdom with modern
                technology to produce high-quality shrimp while preserving the
                delicate balance of our marine ecosystem.
              </p>
              <Link
                to="/about"
                className="text-cyan-600 font-semibold hover:text-cyan-700 inline-flex items-center gap-1"
              >
                Read Our Story <ArrowRight size={16} />
              </Link>
            </motion.div>
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1621911862066-298361742c5c?q=80&w=2574&auto=format&fit=crop"
                alt="Terraqua Farm"
                className="rounded-lg shadow-xl w-full h-auto object-cover aspect-video"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
              Our Core Values
            </h2>
            <p className="text-slate-500 mt-4">
              The pillars that guide our operations every day.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Leaf,
                title: "Sustainable Practices",
                desc: "Eco-friendly farming methods.",
              },
              {
                icon: ShieldCheck,
                title: "Food Safety",
                desc: "Guaranteed quality and safety.",
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                desc: "Modern technology integration.",
              },
              {
                icon: Users,
                title: "Local Community",
                desc: "Empowering local farmers.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-slate-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300 border border-slate-100 text-center group"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-cyan-100 transition-colors">
                  <item.icon
                    className="text-blue-600 group-hover:text-cyan-600"
                    size={32}
                  />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Farm to Plate */}
      <section className="py-20 bg-slate-100">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Farm to Plate
            </h2>
            <p className="text-slate-600 text-lg mb-8">
              We ensure complete traceability from our ponds in Belitung
              directly to your plate. Our rigorous quality control processes
              guarantee that every shrimp is fresh, safe, and delicious.
            </p>
            <Link
              to="/what-we-do"
              className="bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300"
            >
              Learn Our Process
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Expansion Teaser */}
      <section className="py-20 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Towards 400 Ponds & <br />
              7.2 Million Kg Harvest
            </h2>
            <p className="text-cyan-200 text-xl mb-10">
              Join us in our journey of growth and sustainable expansion.
            </p>
            <Link
              to="/expansion"
              className="bg-white text-blue-900 hover:bg-cyan-50 font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View Expansion Map
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
