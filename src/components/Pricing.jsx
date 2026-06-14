import { motion } from "framer-motion";

function Pricing() {
  return (
    <section id="pricing" className="py-20 px-10">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-slate-800"
        >
          Simple Pricing
        </motion.h2>

        <p className="text-center text-gray-600 mt-4">
          Choose the plan that fits your workflow
        </p>

        {/* Cards */}
        <div className="mt-14 grid md:grid-cols-3 gap-8">

          {/* Basic */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 rounded-2xl shadow-md"
          >
            <h3 className="text-xl font-semibold mb-4">Starter</h3>
            <p className="text-3xl font-bold text-indigo-600">$0</p>

            <ul className="mt-4 space-y-2 text-gray-600">
              <li>✔ Basic transcription</li>
              <li>✔ 5 meetings/month</li>
              <li>✔ AI summary</li>
            </ul>

            <button className="mt-6 w-full bg-indigo-600 text-white py-2 rounded-xl">
              Get Started
            </button>
          </motion.div>

          {/* Pro */}
          <motion.div
            whileHover={{ scale: 1.08 }}
            className="bg-indigo-600 text-white p-8 rounded-2xl shadow-xl"
          >
            <h3 className="text-xl font-semibold mb-4">Pro</h3>
            <p className="text-3xl font-bold">$19</p>

            <ul className="mt-4 space-y-2">
              <li>✔ Unlimited meetings</li>
              <li>✔ Advanced AI summary</li>
              <li>✔ Action items</li>
            </ul>

            <button className="mt-6 w-full bg-white text-indigo-600 py-2 rounded-xl">
              Start Pro
            </button>
          </motion.div>

          {/* Enterprise */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 rounded-2xl shadow-md"
          >
            <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
            <p className="text-3xl font-bold text-indigo-600">$49</p>

            <ul className="mt-4 space-y-2 text-gray-600">
              <li>✔ Team management</li>
              <li>✔ API access</li>
              <li>✔ Priority support</li>
            </ul>

            <button className="mt-6 w-full bg-indigo-600 text-white py-2 rounded-xl">
              Contact Sales
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Pricing;