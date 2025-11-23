import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-cyan-400">TERRAQUA</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              PT. Terraqua Alam Nusantara
              <br />
              Leading sustainable shrimp farming in Indonesia. Committed to
              quality, innovation, and community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/what-we-do"
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  What We Do
                </Link>
              </li>
              <li>
                <Link
                  to="/expansion"
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Expansion
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-slate-400 text-sm">
                <MapPin
                  size={18}
                  className="text-cyan-400 mt-0.5 flex-shrink-0"
                />
                <span>
                  Membalong, Belitung Island,
                  <br />
                  Indonesia
                </span>
              </li>
              <li className="flex items-center space-x-3 text-slate-400 text-sm">
                <Phone size={18} className="text-cyan-400 flex-shrink-0" />
                <span>+62 811 2190 690</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-400 text-sm">
                <Mail size={18} className="text-cyan-400 flex-shrink-0" />
                <span>info@terraqua.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} PT. Terraqua Alam Nusantara. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
