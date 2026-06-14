import { motion } from "framer-motion";

function Dashboard() {
  return (
    <section className="py-20 px-10">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-slate-800"
        >
          AI Dashboard Preview
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center text-gray-600 mt-4"
        >
          Everything your AI captures in one place
        </motion.p>

        <div className="mt-14 grid md:grid-cols-3 gap-6">

          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-2xl shadow-md"
          >
            <h3 className="text-xl font-semibold mb-3">
              Recent Meetings
            </h3>
            <p className="text-gray-600">
              Product discussion, Sprint planning, Client call
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 rounded-2xl shadow-md"
          >
            <h3 className="text-xl font-semibold mb-3">
              AI Summary
            </h3>
            <p className="text-gray-600">
              Key decisions, highlights and discussion points auto-generated
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white p-6 rounded-2xl shadow-md"
          >
            <h3 className="text-xl font-semibold mb-3">
              Action Items
            </h3>
            <p className="text-gray-600">
              12 tasks assigned automatically from meetings
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Dashboard;