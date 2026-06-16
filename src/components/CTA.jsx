import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

function CTA() {
  return (
    <section className="py-20 md:py-24 px-5 md:px-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 text-white text-center p-8 md:p-20 rounded-[32px] shadow-2xl relative overflow-hidden"
      >
        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Ready to Upgrade Your Meetings?
          </h2>

          <p className="mt-5 text-base md:text-xl text-white/90 max-w-2xl mx-auto">
            Let AI handle notes, summaries, action items and knowledge graphs
            while your team focuses on making better decisions.
          </p>

          <div className="mt-8 md:mt-10">
            <button className="inline-flex items-center gap-3 bg-white text-indigo-600 px-6 md:px-8 py-3 md:py-4 rounded-2xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg">
              Get Started Free
              <FaArrowRight />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default CTA;