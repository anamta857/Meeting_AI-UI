import { motion } from "framer-motion";

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
    <section id="testimonials" className="py-20 px-10">
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-slate-800"
        >
          What Users Say
        </motion.h2>

        <p className="text-center text-gray-600 mt-4">
          Loved by teams worldwide
        </p>

        <div className="mt-14 grid md:grid-cols-3 gap-8">

          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-2xl shadow-md"
            >
              <p className="text-gray-600">"{r.text}"</p>

              <div className="mt-6">
                <h4 className="font-semibold">{r.name}</h4>
                <span className="text-sm text-gray-500">{r.role}</span>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;