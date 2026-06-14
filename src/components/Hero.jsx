import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-10 py-20"
    >
      {/* Background Glow Effects */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-200 rounded-full blur-3xl opacity-20"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-200 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <div className="relative z-10">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-black text-black leading-tight"
          >
            Never Take
            <span className="text-indigo-600"> Meeting Notes </span>
            Again
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-6 text-lg font-medium text-black"
          >
            MeetingAI automatically records meetings, creates summaries,
            extracts action items, and builds a searchable knowledge graph.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex gap-4"
          >
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition">
              Get Started
            </button>

            <button className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-xl hover:bg-indigo-50 transition">
              Watch Demo
            </button>
          </motion.div>

        </div>

        {/* Right Side Dashboard */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="bg-white p-6 rounded-3xl shadow-xl"
        >
          <h3 className="font-bold text-xl mb-4 text-black">
            Meeting Dashboard
          </h3>

          <div className="space-y-4">

            <div className="bg-indigo-100 p-4 rounded-xl font-medium text-black">
              🎙 Transcript Generated
            </div>

            <div className="bg-cyan-100 p-4 rounded-xl font-medium text-black">
              📝 AI Summary Ready
            </div>

            <div className="bg-green-100 p-4 rounded-xl font-medium text-black">
              ✅ 12 Action Items Found
            </div>

            <div className="bg-purple-100 p-4 rounded-xl font-medium text-black">
              🧠 Knowledge Graph Updated
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;