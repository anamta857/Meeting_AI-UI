import { useState } from "react";
import { FaDesktop, FaChrome, FaMobileAlt } from "react-icons/fa";

function Platforms() {
  const [activeTab, setActiveTab] = useState("desktop");

  return (
    <section
      id="platform"
      className="py-20 md:py-24 px-5 md:px-10 bg-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-center text-slate-900">
          Works Everywhere
        </h2>

        <p className="text-center text-slate-600 mt-4 text-base md:text-lg">
          Use MeetingAI on Desktop, Browser, and Mobile
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">

          <button
            onClick={() => setActiveTab("desktop")}
            className={`px-6 py-3 rounded-xl font-medium transition ${
              activeTab === "desktop"
                ? "bg-indigo-600 text-white shadow-lg"
                : "bg-white border border-slate-200 text-slate-700"
            }`}
          >
            Desktop
          </button>

          <button
            onClick={() => setActiveTab("browser")}
            className={`px-6 py-3 rounded-xl font-medium transition ${
              activeTab === "browser"
                ? "bg-indigo-600 text-white shadow-lg"
                : "bg-white border border-slate-200 text-slate-700"
            }`}
          >
            Browser
          </button>

          <button
            onClick={() => setActiveTab("mobile")}
            className={`px-6 py-3 rounded-xl font-medium transition ${
              activeTab === "mobile"
                ? "bg-indigo-600 text-white shadow-lg"
                : "bg-white border border-slate-200 text-slate-700"
            }`}
          >
            Mobile
          </button>

        </div>

        {/* Content Box */}
        <div className="mt-12 bg-white border border-slate-200 shadow-2xl rounded-3xl p-6 md:p-10 text-center">

          {activeTab === "desktop" && (
            <div>
              <div className="flex justify-center mb-5">
                <FaDesktop className="text-5xl md:text-6xl text-indigo-600" />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Desktop App
              </h3>

              <p className="text-slate-600 text-base md:text-lg">
                Full meeting recording, system audio capture,
                and AI-powered meeting analysis.
              </p>
            </div>
          )}

          {activeTab === "browser" && (
            <div>
              <div className="flex justify-center mb-5">
                <FaChrome className="text-5xl md:text-6xl text-indigo-600" />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Browser Extension
              </h3>

              <p className="text-slate-600 text-base md:text-lg">
                Works seamlessly with Google Meet, Zoom,
                and Microsoft Teams directly in your browser.
              </p>
            </div>
          )}

          {activeTab === "mobile" && (
            <div>
              <div className="flex justify-center mb-5">
                <FaMobileAlt className="text-5xl md:text-6xl text-indigo-600" />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Mobile App
              </h3>

              <p className="text-slate-600 text-base md:text-lg">
                Access summaries, action items, and meeting
                insights anywhere, anytime.
              </p>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}

export default Platforms;