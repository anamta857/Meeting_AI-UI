import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

function Testimonials() {
  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      text: "MeetingAI saves me hours every week. The summaries are insanely accurate.",
    },
    {
      name: "David Lee",
      role: "Startup Founder",
      text: "Best tool for meetings. Action items are extracted perfectly.",
    },
    {
      name: "Ayesha Khan",
      role: "Team Lead",
      text: "We completely stopped taking manual notes after using MeetingAI.",
    },
  ];

  return (
    <section className="py-20 md:py-24 px-5 md:px-10 bg-slate-50">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-extrabold text-center text-slate-900"
        >
          What Users Say
        </motion.h2>

        <p className="text-center text-slate-600 mt-4 text-base md:text-lg">
          Loved by teams worldwide
        </p>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">

          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-md hover:shadow-2xl"
            >
              {/* Stars */}
              <div className="flex gap-1 text-yellow-400 mb-5">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              {/* Review */}
              <p className="text-slate-600 leading-relaxed">
                "{r.text}"
              </p>

              {/* User */}
              <div className="mt-6 flex items-center gap-4">

                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center font-bold text-indigo-600">
                  {r.name.charAt(0)}
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900">
                    {r.name}
                  </h4>

                  <span className="text-sm text-slate-500">
                    {r.role}
                  </span>
                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;