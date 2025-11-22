import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Target, Heart, Shield, Zap } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=2670&auto=format&fit=crop")' }}
        >
          <div className="absolute inset-0 bg-blue-900/60"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            About Terraqua
          </motion.h1>
          <p className="text-xl text-cyan-100">Cultivating the future of sustainable aquaculture.</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">Our Story</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Founded in 2022, Terraqua began with a vision to transform the shrimp farming landscape in Indonesia. 
              Located in the pristine waters of Membalong, Belitung, we recognized the immense potential of the region 
              for high-quality aquaculture.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              From our humble beginnings, we have grown into a leader in sustainable practices, 
              driven by a passion for excellence and a deep respect for the environment. 
              Our journey is one of continuous innovation and commitment to our community.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Detail */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900">Our Mission</h2>
            <p className="text-slate-500 mt-4">Driven by four core pillars of excellence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { 
                icon: Heart, 
                title: "Sustainability", 
                desc: "We prioritize eco-friendly farming methods that protect marine biodiversity and ensure long-term environmental health." 
              },
              { 
                icon: Shield, 
                title: "Safety", 
                desc: "Food safety is paramount. We adhere to strict protocols to ensure our products are free from harmful chemicals and safe for consumption." 
              },
              { 
                icon: Zap, 
                title: "Innovation", 
                desc: "Leveraging cutting-edge technology to optimize production, reduce waste, and improve the quality of our harvest." 
              },
              { 
                icon: Target, 
                title: "Community", 
                desc: "We believe in growing together. We empower local farmers through training, fair partnerships, and community development programs." 
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-6 p-6 bg-white rounded-xl shadow-sm border border-slate-100"
              >
                <div className="bg-blue-50 p-4 rounded-lg shrink-0">
                  <item.icon className="text-blue-600" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Location</h2>
              <p className="text-slate-600 text-lg mb-6">
                Strategically located in Membalong, Belitung Island. The region offers pristine water quality 
                and ideal climate conditions for shrimp farming, allowing us to produce premium quality harvest year-round.
              </p>
              <div className="flex items-center text-blue-700 font-semibold">
                <MapPin className="mr-2" /> Bangka Belitung Islands, Indonesia
              </div>
            </div>
            <div className="md:w-1/2 bg-slate-200 rounded-xl h-80 flex items-center justify-center overflow-hidden relative">
               {/* Placeholder for Map */}
               <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2650&auto=format&fit=crop" 
                alt="Map Location Placeholder" 
                className="absolute inset-0 w-full h-full object-cover opacity-80"
               />
               <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                 <span className="bg-white/90 px-6 py-3 rounded-full font-bold text-blue-900 shadow-lg">
                   Membalong, Belitung
                 </span>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
