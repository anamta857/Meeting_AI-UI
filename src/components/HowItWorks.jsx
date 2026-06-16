import {
  FaVideo,
  FaMicrophone,
  FaBrain,
  FaChartLine,
} from "react-icons/fa";

function HowItWorks() {
  const steps = [
    {
      icon: <FaVideo />,
      title: "Meeting Starts",
      desc: "User joins a meeting on Zoom, Teams or Google Meet.",
    },
    {
      icon: <FaMicrophone />,
      title: "AI Captures Everything",
      desc: "Audio and screen data are recorded in real-time.",
    },
    {
      icon: <FaBrain />,
      title: "AI Processing",
      desc: "Speech is converted into text and analyzed with AI.",
    },
    {
      icon: <FaChartLine />,
      title: "Smart Output",
      desc: "Get summaries, action items and a knowledge graph instantly.",
    },
  ];

  return (
    <section
      className="py-24 px-6 md:px-10 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-slate-900">
          How It Works
        </h2>

        <p className="text-center text-slate-600 mt-4 text-lg">
          Simple 4-step automation of your meetings
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-md hover:shadow-2xl transition-all"
            >
              {/* Step Number */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 text-2xl">
                  {step.icon}
                </div>

                <span className="text-indigo-600 font-bold text-lg">
                  0{index + 1}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {step.title}
              </h3>

              <p className="text-slate-600 leading-relaxed">
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