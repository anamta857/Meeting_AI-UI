import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaFileAlt,
  FaTasks,
} from "react-icons/fa";

function Dashboard() {
  return (
    <section className="py-20 md:py-24 px-5 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-extrabold text-center text-slate-900"
        >
          AI Dashboard Preview
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center text-slate-600 mt-4 text-base md:text-lg"
        >
          Everything your AI captures in one place
        </motion.p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-md hover:shadow-2xl"
          >
            <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-5">
              <FaCalendarAlt className="text-indigo-600 text-2xl" />
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Recent Meetings
            </h3>

            <p className="text-slate-600">
              Product discussion, Sprint planning,
              Client call and weekly reviews.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-md hover:shadow-2xl"
          >
            <div className="w-14 h-14 bg-cyan-50 rounded-2xl flex items-center justify-center mb-5">
              <FaFileAlt className="text-cyan-600 text-2xl" />
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-3">
              AI Summary
            </h3>

            <p className="text-slate-600">
              Key decisions, discussion highlights
              and meeting outcomes generated automatically.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-md hover:shadow-2xl"
          >
            <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-5">
              <FaTasks className="text-green-600 text-2xl" />
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Action Items
            </h3>

            <p className="text-slate-600">
              12 tasks assigned automatically
              with deadlines and ownership tracking.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Dashboard;