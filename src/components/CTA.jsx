import { motion } from "framer-motion";

function CTA() {
  return (
    <section id="cta" className="py-20 px-10">
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto bg-gradient-to-r from-indigo-600 to-cyan-500 text-white text-center p-14 rounded-3xl shadow-xl"
      >

        <h2 className="text-4xl font-bold">
          Ready to Upgrade Your Meetings?
        </h2>

        <p className="mt-4 text-lg text-white/90">
          Let AI handle notes, summaries, and action items while you focus on decisions.
        </p>

        <div className="mt-8">
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold hover:scale-105 transition">
            Get Started Free
          </button>
        </div>

      </motion.div>

    </section>
  );
}

export default CTA;