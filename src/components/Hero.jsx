import { motion } from "framer-motion";
import {
  FaMicrophone,
  FaFileAlt,
  FaTasks,
  FaBrain,
} from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-5 md:px-10 py-16 md:py-24"
    >
      {/* Background Glow Effects */}
      <div className="absolute top-20 left-0 md:left-20 w-56 md:w-72 h-56 md:h-72 bg-indigo-200 rounded-full blur-3xl opacity-20"></div>

      <div className="absolute bottom-10 right-0 md:right-10 w-56 md:w-72 h-56 md:h-72 bg-cyan-200 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-14 items-center">

        {/* Left Side */}
        <div className="relative z-10 text-center md:text-left">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight"
          >
            Never Take
            <span className="text-indigo-600"> Meeting Notes </span>
            Again
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-6 text-base md:text-lg text-slate-600 max-w-xl mx-auto md:mx-0"
          >
            MeetingAI automatically records meetings, creates summaries,
            extracts action items, and builds a searchable knowledge graph.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <button className="bg-indigo-600 text-white px-7 py-3 rounded-xl font-medium hover:bg-indigo-700 transition shadow-lg">
              Get Started
            </button>

            <button className="border border-slate-300 text-slate-700 px-7 py-3 rounded-xl font-medium hover:bg-slate-100 transition">
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
          className="bg-white p-5 md:p-7 rounded-3xl shadow-2xl border border-slate-100"
        >
          <h3 className="font-bold text-xl mb-5 text-slate-900">
            Meeting Dashboard
          </h3>

          <div className="space-y-4">

            <div className="bg-indigo-50 p-4 rounded-2xl flex items-center gap-3">
              <FaMicrophone className="text-indigo-600 text-lg" />
              <span className="font-medium text-slate-800">
                Transcript Generated
              </span>
            </div>

            <div className="bg-cyan-50 p-4 rounded-2xl flex items-center gap-3">
              <FaFileAlt className="text-cyan-600 text-lg" />
              <span className="font-medium text-slate-800">
                AI Summary Ready
              </span>
            </div>

            <div className="bg-green-50 p-4 rounded-2xl flex items-center gap-3">
              <FaTasks className="text-green-600 text-lg" />
              <span className="font-medium text-slate-800">
                12 Action Items Found
              </span>
            </div>

            <div className="bg-purple-50 p-4 rounded-2xl flex items-center gap-3">
              <FaBrain className="text-purple-600 text-lg" />
              <span className="font-medium text-slate-800">
                Knowledge Graph Updated
              </span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;