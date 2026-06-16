import { motion } from "framer-motion";

function Pricing() {
  return (
    <section
      id="pricing"
      className="py-20 md:py-24 px-5 md:px-10 bg-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-extrabold text-center text-slate-900"
        >
          Simple Pricing
        </motion.h2>

        <p className="text-center text-slate-600 mt-4 text-base md:text-lg">
          Choose the plan that fits your workflow
        </p>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Starter */}
          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white p-8 rounded-3xl border border-slate-200 shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Starter
            </h3>

            <p className="text-4xl font-extrabold text-indigo-600">
              $0
            </p>

            <p className="text-slate-500 mt-2">
              Perfect for individuals
            </p>

            <ul className="mt-6 space-y-3 text-slate-600">
              <li>✔ Basic transcription</li>
              <li>✔ 5 meetings/month</li>
              <li>✔ AI summary</li>
            </ul>

            <button className="mt-8 w-full bg-indigo-600 text-white py-3 rounded-xl font-medium hover:bg-indigo-700 transition">
              Get Started
            </button>
          </motion.div>

          {/* Pro */}
          <motion.div
            whileHover={{ y: -8 }}
            className="bg-indigo-600 text-white p-8 rounded-3xl shadow-2xl md:scale-105"
          >
            <div className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm mb-4">
              Most Popular
            </div>

            <h3 className="text-xl font-bold mb-4">
              Pro
            </h3>

            <p className="text-4xl font-extrabold">
              $19
            </p>

            <p className="text-indigo-100 mt-2">
              Best for professionals
            </p>

            <ul className="mt-6 space-y-3">
              <li>✔ Unlimited meetings</li>
              <li>✔ Advanced AI summary</li>
              <li>✔ Action items</li>
              <li>✔ Knowledge Graph</li>
            </ul>

            <button className="mt-8 w-full bg-white text-indigo-600 py-3 rounded-xl font-semibold hover:bg-slate-100 transition">
              Start Pro
            </button>
          </motion.div>

          {/* Enterprise */}
          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white p-8 rounded-3xl border border-slate-200 shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Enterprise
            </h3>

            <p className="text-4xl font-extrabold text-indigo-600">
              $49
            </p>

            <p className="text-slate-500 mt-2">
              For growing teams
            </p>

            <ul className="mt-6 space-y-3 text-slate-600">
              <li>✔ Team management</li>
              <li>✔ API access</li>
              <li>✔ Priority support</li>
              <li>✔ Custom integrations</li>
            </ul>

            <button className="mt-8 w-full bg-indigo-600 text-white py-3 rounded-xl font-medium hover:bg-indigo-700 transition">
              Contact Sales
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Pricing;