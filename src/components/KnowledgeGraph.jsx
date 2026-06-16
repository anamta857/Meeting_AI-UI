import { motion } from "framer-motion";
import {
  FaUsers,
  FaComments,
  FaLightbulb,
  FaProjectDiagram,
} from "react-icons/fa";

function KnowledgeGraph() {
  const items = [
    {
      icon: <FaComments />,
      title: "Meetings",
    },
    {
      icon: <FaUsers />,
      title: "People",
    },
    {
      icon: <FaLightbulb />,
      title: "Decisions",
    },
    {
      icon: <FaProjectDiagram />,
      title: "Topics",
    },
  ];

  return (
    <section className="py-20 px-5 md:px-10 bg-slate-50">
      <div className="max-w-7xl mx-auto">

        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900">
            AI Knowledge Graph
          </h2>

          <p className="text-slate-600 mt-4 text-base md:text-lg">
            MeetingAI connects conversations into an intelligent network
            of people, meetings, topics and decisions.
          </p>
        </div>

        <div className="mt-16 flex flex-col items-center">

          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="w-36 h-36 md:w-48 md:h-48 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-bold shadow-2xl"
          >
            MeetingAI
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-10 w-full">

            {items.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-5 rounded-2xl shadow-lg flex flex-col items-center gap-3"
              >
                <div className="text-indigo-600 text-2xl">
                  {item.icon}
                </div>

                <span className="font-semibold text-slate-800">
                  {item.title}
                </span>
              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default KnowledgeGraph;