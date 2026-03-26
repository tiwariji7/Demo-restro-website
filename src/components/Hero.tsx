import { motion, useScroll, useTransform } from "motion/react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1.1, 1.2]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Parallax and Zoom */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1920"
          alt="Fine Dining Atmosphere"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
          loading="eager"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="flex items-center justify-center space-x-4 mb-4"
          >
            <div className="h-[1px] w-12 bg-gold/50" />
            <span className="text-[10px] uppercase tracking-[0.5em] text-gold font-medium">
              Attica Melbourne
            </span>
            <div className="h-[1px] w-12 bg-gold/50" />
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif text-white leading-[1.1] tracking-tight">
            A Journey of <br />
            <span className="italic text-gold/90">Pure Artistry</span>
          </h1>

          <p className="text-white/70 text-sm md:text-xl max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
            Experience the essence of Australian fine dining. <br className="hidden md:block" />
            A curated exploration of native ingredients, crafted with Michelin-level precision.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gold text-ink text-[11px] uppercase tracking-[0.3em] font-semibold hover:bg-white transition-all duration-500 shadow-2xl shadow-gold/20"
            >
              Reserve Your Experience
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 border border-white/20 text-white text-[11px] uppercase tracking-[0.3em] font-semibold hover:bg-white/10 transition-all duration-500"
            >
              Explore the Journey
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center space-y-4"
      >
        <span className="text-[9px] uppercase tracking-[0.4em] text-white/40">Scroll</span>
        <div className="h-12 w-[1px] bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
}
