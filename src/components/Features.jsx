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
      icon: <FaMicrophone size={30} />,
      title: "AI Transcription",
      desc: "Real-time transcription with speaker identification.",
    },
    {
      icon: <FaDesktop size={30} />,
      title: "Screen Intelligence",
      desc: "Capture screens, slides and whiteboards.",
    },
    {
      icon: <FaFileAlt size={30} />,
      title: "Smart Summary",
      desc: "Generate meeting summaries automatically.",
    },
    {
      icon: <FaTasks size={30} />,
      title: "Action Items",
      desc: "Extract tasks and deadlines from meetings.",
    },
    {
      icon: <FaBrain size={30} />,
      title: "Knowledge Graph",
      desc: "Connect meetings, topics and decisions.",
    },
    {
      icon: <FaSearch size={30} />,
      title: "Semantic Search",
      desc: "Search across all past meetings instantly.",
    },
  ];

  return (
    <section id="features" className="py-20 px-10">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-slate-800">
          Powerful Features
        </h2>

        <p className="text-center text-gray-600 mt-4">
          Everything you need to make meetings smarter.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-14">

          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="text-indigo-600 mb-4">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold mb-2">
                {feature.title}
              </h3>

              <p className="text-gray-600">
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