import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function Story() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="philosophy" className="py-24 md:py-48 bg-ink relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative group"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&q=80&w=1200"
                alt="Chef at Work"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 border border-gold/20 -z-10 hidden md:block" />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.5em] text-gold font-medium">
                The Philosophy
              </span>
              <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
                Crafting Art from <br />
                <span className="italic text-gold/90">Nature's Canvas</span>
              </h2>
            </div>

            <p className="text-white/60 text-base md:text-lg font-light leading-relaxed tracking-wide">
              Attica is more than a restaurant; it is a sanctuary for the senses. Inspired by the raw beauty of the Australian landscape and the precision of Michelin-level craftsmanship, we believe that dining should be an emotional journey.
            </p>

            <p className="text-white/60 text-base md:text-lg font-light leading-relaxed tracking-wide">
              Our chef, Julian Thorne, treats every ingredient as a story waiting to be told. From the deep forests to the rugged coastlines, we forage and source only the most exceptional native ingredients, transforming them into edible art.
            </p>

            <div className="pt-6">
              <motion.button
                whileHover={{ x: 10 }}
                className="flex items-center space-x-4 text-gold text-[11px] uppercase tracking-[0.3em] font-semibold group"
              >
                <span>Read Our Story</span>
                <div className="h-[1px] w-12 bg-gold transition-all duration-500 group-hover:w-20" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
