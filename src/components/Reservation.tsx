import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Calendar, Users, Clock, CheckCircle2 } from "lucide-react";
import { cn } from "@/src/lib/utils";

export default function Reservation() {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [guests, setGuests] = useState("2");
  const [time, setTime] = useState("19:00");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset after 3 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 2000);
  };

  return (
    <section id="reservations" className="py-24 md:py-48 bg-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.5em] text-gold font-medium">
                Reservations
              </span>
              <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
                Secure Your <br />
                <span className="italic text-gold/90">Experience</span>
              </h2>
            </div>
            <p className="text-white/40 text-base md:text-lg font-light leading-relaxed tracking-wide max-w-md">
              Due to our intimate setting and commitment to precision, we recommend booking at least 4 weeks in advance. For parties larger than 6, please contact our concierge directly.
            </p>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-white/60">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <Clock size={18} className="text-gold" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">Dinner Service</p>
                  <p className="text-sm font-medium">Tuesday – Saturday, 18:00 – 23:00</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-white/60">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <Users size={18} className="text-gold" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">Capacity</p>
                  <p className="text-sm font-medium">Intimate seating for up to 24 guests</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-ink p-8 md:p-12 rounded-sm border border-white/5 shadow-2xl relative overflow-hidden">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-8"
                  >
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-medium ml-1">
                          Date
                        </label>
                        <div className="relative">
                          <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            className="w-full bg-charcoal border border-white/10 px-4 py-4 text-white focus:border-gold outline-none transition-all duration-300"
                            dateFormat="MMMM d, yyyy"
                            minDate={new Date()}
                          />
                          <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 pointer-events-none" size={18} />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-medium ml-1">
                            Guests
                          </label>
                          <select
                            value={guests}
                            onChange={(e) => setGuests(e.target.value)}
                            className="w-full bg-charcoal border border-white/10 px-4 py-4 text-white focus:border-gold outline-none transition-all duration-300 appearance-none"
                          >
                            {[1, 2, 3, 4, 5, 6].map((n) => (
                              <option key={n} value={n}>{n} Guests</option>
                            ))}
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-medium ml-1">
                            Time
                          </label>
                          <select
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            className="w-full bg-charcoal border border-white/10 px-4 py-4 text-white focus:border-gold outline-none transition-all duration-300 appearance-none"
                          >
                            {["18:00", "18:30", "19:00", "19:30", "20:00", "20:30"].map((t) => (
                              <option key={t} value={t}>{t}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    <button
                      disabled={isSubmitting}
                      className={cn(
                        "w-full py-5 bg-gold text-ink text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-white transition-all duration-500 flex items-center justify-center space-x-4",
                        isSubmitting && "opacity-70 cursor-not-allowed"
                      )}
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-ink border-t-transparent rounded-full"
                        />
                      ) : (
                        "Reserve Your Experience"
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 flex flex-col items-center text-center space-y-6"
                  >
                    <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center border border-gold/20">
                      <CheckCircle2 size={40} className="text-gold" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-serif text-white">Reservation Requested</h3>
                      <p className="text-white/40 text-sm font-light leading-relaxed">
                        Thank you. Our concierge will contact you within 24 hours to confirm your experience.
                      </p>
                    </div>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="text-gold text-[10px] uppercase tracking-[0.3em] hover:text-white transition-colors"
                    >
                      Make Another Request
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {/* Decorative Element */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-t border-l border-gold/20 -z-10" />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b border-r border-gold/20 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
