import { motion } from "framer-motion";
import {
  FaMicrophone,
  FaFileAlt,
  FaTasks,
  FaBrain,
  FaSearch,
  FaDesktop,
} from "react-icons/fa";

function Features() {
  const features = [
    {
      icon: <FaMicrophone size={32} />,
      title: "AI Transcription",
      desc: "Real-time transcription with speaker identification.",
    },
    {
      icon: <FaDesktop size={32} />,
      title: "Screen Intelligence",
      desc: "Capture screens, slides and whiteboards.",
    },
    {
      icon: <FaFileAlt size={32} />,
      title: "Smart Summary",
      desc: "Generate meeting summaries automatically.",
    },
    {
      icon: <FaTasks size={32} />,
      title: "Action Items",
      desc: "Extract tasks and deadlines from meetings.",
    },
    {
      icon: <FaBrain size={32} />,
      title: "Knowledge Graph",
      desc: "Connect meetings, topics and decisions.",
    },
    {
      icon: <FaSearch size={32} />,
      title: "Semantic Search",
      desc: "Search across all past meetings instantly.",
    },
  ];

  return (
    <section
      id="features"
      className="py-24 px-6 md:px-10 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            Powerful Features
          </h2>

          <p className="text-slate-600 mt-4 text-lg">
            Everything you need to make meetings smarter.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-md hover:shadow-2xl transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-5">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Features;