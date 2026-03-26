import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function MenuPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const menuItems = [
    {
      name: "Forest Floor",
      description: "Wild mushrooms, pine needle essence, moss-infused broth.",
      category: "First Act",
    },
    {
      name: "Ocean Memory",
      description: "Scallop, sea urchin, kelp foam, saline textures.",
      category: "Second Act",
    },
    {
      name: "Fire & Smoke",
      description: "Charred wagyu, black garlic, ash-infused jus.",
      category: "Third Act",
    },
    {
      name: "The Final Ember",
      description: "Smoked chocolate, burnt honey, charcoal meringue.",
      category: "Epilogue",
    },
  ];

  return (
    <section id="menu" className="py-24 md:py-48 bg-ink relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          {/* Left Side: Title and Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2 }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.5em] text-gold font-medium">
                Curated Selection
              </span>
              <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
                A Glimpse into <br />
                <span className="italic text-gold/90">The Unknown</span>
              </h2>
            </div>
            <p className="text-white/40 text-base md:text-lg font-light leading-relaxed tracking-wide max-w-md">
              Our menu is a living organism, evolving with the seasons and the chef's inspiration. We maintain a sense of mystery, revealing only the essence of what awaits.
            </p>
            <div className="aspect-video overflow-hidden rounded-sm relative group">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1200"
                alt="Artistic Dish"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </motion.div>

          {/* Right Side: Menu Items */}
          <div ref={ref} className="space-y-16 pt-12">
            {menuItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.4 + i * 0.2 }}
                className="group relative pb-8 border-b border-white/5"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-2">
                    <span className="text-[9px] uppercase tracking-[0.4em] text-gold/50 font-medium">
                      {item.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-serif text-white group-hover:text-gold transition-colors duration-500">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-white/40 text-sm font-light leading-relaxed tracking-wide max-w-xs md:text-right">
                    {item.description}
                  </p>
                </div>
                {/* Hover Line Animation */}
                <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-gold transition-all duration-700 group-hover:w-full" />
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 1.2 }}
              className="pt-8"
            >
              <button className="px-10 py-4 border border-gold/30 text-gold text-[11px] uppercase tracking-[0.3em] font-semibold hover:bg-gold hover:text-ink transition-all duration-500">
                View Seasonal Menu
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
