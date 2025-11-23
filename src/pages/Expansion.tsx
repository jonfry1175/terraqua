import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Map, TrendingUp, Calendar, Maximize } from "lucide-react";

const Expansion = () => {
  const [activeTab, setActiveTab] = useState("zone1");

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1533658878328-225227d99303?q=80&w=2574&auto=format&fit=crop")',
          }}
        >
          <div className="absolute inset-0 bg-blue-900/80"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Growth & Expansion
          </motion.h1>
          <p className="text-xl text-cyan-100">
            Building the future of aquaculture infrastructure.
          </p>
        </div>
      </section>

      {/* Interactive Tabs Section */}
      <section className="py-20 bg-slate-50 min-h-screen">
        <div className="container mx-auto px-6">
          {/* Tabs Header */}
          <div className="flex justify-center mb-12">
            <div className="bg-white p-1 rounded-full shadow-md inline-flex">
              <button
                onClick={() => setActiveTab("zone1")}
                className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeTab === "zone1"
                    ? "bg-blue-900 text-white shadow-sm"
                    : "text-slate-500 hover:text-blue-900"
                }`}
              >
                Zone 1: Padang Kandis
              </button>
              <button
                onClick={() => setActiveTab("zone2")}
                className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeTab === "zone2"
                    ? "bg-blue-900 text-white shadow-sm"
                    : "text-slate-500 hover:text-blue-900"
                }`}
              >
                Zone 2: Membalong Future
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="max-w-6xl mx-auto">
            <AnimatePresence mode="wait">
              {activeTab === "zone1" ? (
                <motion.div
                  key="zone1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden"
                >
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/2 p-10 flex flex-col justify-center">
                      <h2 className="text-3xl font-bold text-blue-900 mb-2">
                        Padang Kandis
                      </h2>
                      <p className="text-cyan-600 font-semibold mb-8">
                        Current Operations & Immediate Expansion
                      </p>

                      <div className="space-y-6">
                        <div className="flex items-start">
                          <div className="bg-blue-100 p-3 rounded-lg mr-4 text-blue-600">
                            <Map size={24} />
                          </div>
                          <div>
                            <h4 className="font-bold text-slate-800">
                              Current Status
                            </h4>
                            <p className="text-slate-600">
                              17 Operational Ponds
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="bg-blue-100 p-3 rounded-lg mr-4 text-blue-600">
                            <TrendingUp size={24} />
                          </div>
                          <div>
                            <h4 className="font-bold text-slate-800">
                              Expansion Target
                            </h4>
                            <p className="text-slate-600">100 Ponds Total</p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="bg-blue-100 p-3 rounded-lg mr-4 text-blue-600">
                            <Calendar size={24} />
                          </div>
                          <div>
                            <h4 className="font-bold text-slate-800">
                              Completion Date
                            </h4>
                            <p className="text-slate-600">March 2025</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="lg:w-1/2 bg-slate-200 min-h-[400px] relative">
                      <img
                        src="https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?q=80&w=2670&auto=format&fit=crop"
                        alt="Construction Progress"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                        <p className="text-white font-medium">
                          Construction Progress - Phase 1
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="zone2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden"
                >
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/2 p-10 flex flex-col justify-center">
                      <h2 className="text-3xl font-bold text-blue-900 mb-2">
                        Membalong Future
                      </h2>
                      <p className="text-cyan-600 font-semibold mb-8">
                        Future Mega Project
                      </p>

                      <div className="space-y-6">
                        <div className="flex items-start">
                          <div className="bg-cyan-100 p-3 rounded-lg mr-4 text-cyan-600">
                            <Maximize size={24} />
                          </div>
                          <div>
                            <h4 className="font-bold text-slate-800">
                              New Area
                            </h4>
                            <p className="text-slate-600">
                              200 Hectares Development
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="bg-cyan-100 p-3 rounded-lg mr-4 text-cyan-600">
                            <TrendingUp size={24} />
                          </div>
                          <div>
                            <h4 className="font-bold text-slate-800">
                              Total Capacity
                            </h4>
                            <p className="text-slate-600">400 Ponds</p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="bg-cyan-100 p-3 rounded-lg mr-4 text-cyan-600">
                            <TrendingUp size={24} />
                          </div>
                          <div>
                            <h4 className="font-bold text-slate-800">
                              Target Harvest
                            </h4>
                            <p className="text-slate-600">
                              7,200,000 kg / Year
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="lg:w-1/2 bg-slate-800 min-h-[400px] relative flex items-center justify-center">
                      {/* Placeholder for Site Plan */}
                      <div className="text-center p-8">
                        <div className="border-2 border-dashed border-slate-600 rounded-lg p-12 mb-4 inline-block">
                          <Map className="text-slate-500 w-16 h-16" />
                        </div>
                        <p className="text-slate-400 font-mono text-sm">
                          MASTER SITE PLAN RENDERING
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Expansion;
