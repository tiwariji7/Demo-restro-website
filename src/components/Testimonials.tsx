import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Star } from "lucide-react";

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const testimonials = [
    {
      quote: "AURA is not just a meal; it's a profound exploration of what it means to be alive. The attention to detail is staggering.",
      author: "The Gastronomic Review",
      role: "Michelin Critic",
    },
    {
      quote: "Julian Thorne has created something truly unique. The way he integrates native ingredients is nothing short of revolutionary.",
      author: "Elena Vance",
      role: "Food & Wine Editor",
    },
    {
      quote: "The most immersive dining experience I've had in a decade. Every course is a masterpiece of texture and flavor.",
      author: "Marcus Sterling",
      role: "Private Collector",
    },
  ];

  return (
    <section className="py-24 md:py-48 bg-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center space-y-8 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="space-y-4"
          >
            <span className="text-[10px] uppercase tracking-[0.5em] text-gold font-medium">
              Recognition
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
              Voices of <br />
              <span className="italic text-gold/90">The Elite</span>
            </h2>
          </motion.div>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 + i * 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8 p-10 bg-ink/30 border border-white/5 rounded-sm relative group"
            >
              <div className="flex space-x-1 text-gold/50">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={12} fill="currentColor" />
                ))}
              </div>
              <p className="text-white/70 text-lg font-serif italic leading-relaxed">
                "{t.quote}"
              </p>
              <div className="space-y-1">
                <p className="text-white text-[11px] uppercase tracking-[0.3em] font-bold">
                  {t.author}
                </p>
                <p className="text-gold text-[9px] uppercase tracking-[0.2em]">
                  {t.role}
                </p>
              </div>
              {/* Decorative Element */}
              <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-gold/10 group-hover:border-gold/30 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Awards Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-32 pt-16 border-t border-white/5 flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700"
        >
          <div className="text-center space-y-2">
            <p className="text-2xl font-serif text-white">World's 50 Best</p>
            <p className="text-[9px] uppercase tracking-[0.3em] text-gold">Top 10 Restaurant</p>
          </div>
          <div className="text-center space-y-2">
            <p className="text-2xl font-serif text-white">Michelin Guide</p>
            <p className="text-[9px] uppercase tracking-[0.3em] text-gold">Three Star Rating</p>
          </div>
          <div className="text-center space-y-2">
            <p className="text-2xl font-serif text-white">James Beard</p>
            <p className="text-[9px] uppercase tracking-[0.3em] text-gold">Outstanding Chef</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
