import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const experiences = [
    {
      title: "The Earth's Bounty",
      description: "A 12-course exploration of native flora and forgotten roots.",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800",
      price: "$285",
    },
    {
      title: "Ocean Memory",
      description: "A deep dive into the saline depths of the Pacific coast.",
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&q=80&w=800",
      price: "$315",
    },
    {
      title: "Fire & Smoke",
      description: "The primal essence of wood-fire cooking and charred textures.",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800",
      price: "$295",
    },
  ];

  return (
    <section id="experience" className="py-24 md:py-48 bg-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center space-y-8 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="space-y-4"
          >
            <span className="text-[10px] uppercase tracking-[0.5em] text-gold font-medium">
              Signature Journeys
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
              A 3-Hour Immersive <br />
              <span className="italic text-gold/90">Culinary Odyssey</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-white/40 text-sm md:text-lg max-w-2xl mx-auto font-light leading-relaxed tracking-wide"
          >
            Designed to surprise, inspire, and delight. Each journey is a curated sequence of moments, textures, and memories.
          </motion.p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 + i * 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-8">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-white text-[10px] uppercase tracking-[0.4em] border border-white/50 px-6 py-2">
                    View Details
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-serif text-white group-hover:text-gold transition-colors">
                    {exp.title}
                  </h3>
                  <span className="text-gold text-sm font-medium">{exp.price}</span>
                </div>
                <p className="text-white/40 text-sm font-light leading-relaxed tracking-wide">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
