function HowItWorks() {
  const steps = [
    {
      title: "Meeting Starts",
      desc: "User joins a meeting on Zoom, Teams or Google Meet.",
    },
    {
      title: "AI Captures Everything",
      desc: "Audio + screen data is recorded in real-time.",
    },
    {
      title: "AI Processing",
      desc: "System converts speech to text and understands context.",
    },
    {
      title: "Smart Output",
      desc: "You get summary, tasks, and knowledge graph instantly.",
    },
  ];

  return (
    <section className="py-20 px-10">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-slate-800">
          How It Works
        </h2>

        <p className="text-center text-gray-600 mt-4">
          Simple 4-step automation of your meetings
        </p>

        <div className="grid md:grid-cols-4 gap-6 mt-14">

          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="text-indigo-600 font-bold text-xl mb-2">
                0{index + 1}
              </div>

              <h3 className="text-lg font-semibold mb-2">
                {step.title}
              </h3>

              <p className="text-gray-600 text-sm">
                {step.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default HowItWorks;