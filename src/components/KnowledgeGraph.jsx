import { motion } from "framer-motion";

function KnowledgeGraph() {
  return (
    <section className="py-24 px-10">
      <div className="max-w-7xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-4xl font-bold text-slate-800">
          AI Knowledge Graph
        </h2>

        <p className="text-gray-600 mt-4">
          MeetingAI connects conversations into an intelligent network of knowledge.
        </p>

        {/* Graph Area */}
        <div className="relative mt-20 flex justify-center items-center">

          {/* Center Node */}
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="w-44 h-44 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold shadow-2xl z-10"
          >
            MeetingAI
          </motion.div>

          {/* Node 1 */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-0 left-1/4 bg-white px-4 py-2 rounded-full shadow-md"
          >
            Meetings
          </motion.div>

          {/* Node 2 */}
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 3.5, repeat: Infinity }}
            className="absolute bottom-0 left-1/3 bg-white px-4 py-2 rounded-full shadow-md"
          >
            People
          </motion.div>

          {/* Node 3 */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4.5, repeat: Infinity }}
            className="absolute top-10 right-1/4 bg-white px-4 py-2 rounded-full shadow-md"
          >
            Decisions
          </motion.div>

          {/* Node 4 */}
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute bottom-10 right-1/3 bg-white px-4 py-2 rounded-full shadow-md"
          >
            Topics
          </motion.div>

          {/* Soft glow effect */}
          <div className="absolute w-80 h-80 bg-indigo-200 rounded-full blur-3xl opacity-30"></div>

        </div>

      </div>
    </section>
  );
}

export default KnowledgeGraph;