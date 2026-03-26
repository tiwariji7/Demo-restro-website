import { motion } from "motion/react";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ink pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand Column */}
          <div className="space-y-8">
            <h2 className="text-3xl font-serif tracking-[0.2em] text-white uppercase">ATTICA</h2>
            <p className="text-white/40 text-sm font-light leading-relaxed tracking-wide max-w-xs">
              Attica is a sanctuary for the senses, where the raw beauty of nature meets the precision of Michelin-level craftsmanship.
            </p>
            <div className="flex space-x-6 text-white/30">
              <Instagram size={20} className="hover:text-gold transition-colors duration-300 cursor-pointer" />
              <Facebook size={20} className="hover:text-gold transition-colors duration-300 cursor-pointer" />
              <Twitter size={20} className="hover:text-gold transition-colors duration-300 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h3 className="text-[11px] uppercase tracking-[0.4em] text-gold font-bold">Quick Links</h3>
            <ul className="space-y-4">
              {["The Philosophy", "Experience", "Menu", "Gallery", "Reservations"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-white/40 text-sm hover:text-white transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-[11px] uppercase tracking-[0.4em] text-gold font-bold">Contact</h3>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4 text-white/40">
                <MapPin size={18} className="text-gold mt-1" />
                <span className="text-sm leading-relaxed">
                  742 Evergreen Terrace, <br />
                  Melbourne, VIC 3000, Australia
                </span>
              </li>
              <li className="flex items-center space-x-4 text-white/40">
                <Phone size={18} className="text-gold" />
                <span className="text-sm">+61 3 9876 5432</span>
              </li>
              <li className="flex items-center space-x-4 text-white/40">
                <Mail size={18} className="text-gold" />
                <span className="text-sm">concierge@aura-dining.com</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="space-y-8">
            <h3 className="text-[11px] uppercase tracking-[0.4em] text-gold font-bold">Hours</h3>
            <ul className="space-y-4 text-white/40 text-sm">
              <li className="flex justify-between">
                <span>Tuesday – Thursday</span>
                <span>18:00 – 22:30</span>
              </li>
              <li className="flex justify-between">
                <span>Friday – Saturday</span>
                <span>18:00 – 23:30</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday – Monday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-white/20 text-[10px] uppercase tracking-[0.2em]">
            © 2026 ATTICA MELBOURNE. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center space-x-2 text-white/20 text-[10px] uppercase tracking-[0.2em]">
            <span>Designed & Developed by</span>
            <span className="text-gold/50 font-bold hover:text-gold transition-colors duration-300 cursor-pointer">Nexus Digital</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
