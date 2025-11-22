import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-20 min-h-screen flex flex-col">
      <div className="flex-grow flex flex-col md:flex-row">
        {/* Visual Side */}
        <div className="md:w-1/2 relative min-h-[400px] md:min-h-full">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1560359616-9848d7b09290?q=80&w=2626&auto=format&fit=crop")' }}
          >
            <div className="absolute inset-0 bg-blue-900/40"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center p-12 text-white">
            <div className="max-w-md">
              <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
              <p className="text-lg text-cyan-100 leading-relaxed">
                Interested in our sustainable shrimp farming practices or looking to partner with us? 
                We'd love to hear from you.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Info Side */}
        <div className="md:w-1/2 bg-white p-12 lg:p-24 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-blue-900 mb-8">Contact Information</h3>
            
            <div className="space-y-8">
              <div className="flex items-start group">
                <div className="bg-blue-50 p-4 rounded-full mr-6 group-hover:bg-blue-100 transition-colors">
                  <Phone className="text-blue-600" size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-semibold uppercase tracking-wider mb-1">Phone</p>
                  <p className="text-xl text-slate-800 font-medium">+62 811 2190 690</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="bg-blue-50 p-4 rounded-full mr-6 group-hover:bg-blue-100 transition-colors">
                  <Mail className="text-blue-600" size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-semibold uppercase tracking-wider mb-1">Email</p>
                  <p className="text-xl text-slate-800 font-medium">info@terraqua.com</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="bg-blue-50 p-4 rounded-full mr-6 group-hover:bg-blue-100 transition-colors">
                  <MapPin className="text-blue-600" size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-semibold uppercase tracking-wider mb-1">Location</p>
                  <p className="text-xl text-slate-800 font-medium">Membalong, Belitung Island</p>
                  <p className="text-slate-500 mt-1">Bangka Belitung Islands, Indonesia</p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-slate-100">
              <h4 className="text-lg font-bold text-blue-900 mb-4">Send us a message</h4>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Name" 
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
                <textarea 
                  placeholder="Message" 
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                ></textarea>
                <button 
                  className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 flex items-center gap-2"
                >
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
