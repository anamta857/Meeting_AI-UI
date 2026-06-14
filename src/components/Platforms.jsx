import { useState } from "react";

function Platforms() {
  const [activeTab, setActiveTab] = useState("desktop");

  return (
    <section id="platform" className="py-20 px-10">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-slate-800">
          Works Everywhere
        </h2>

        <p className="text-center text-gray-600 mt-4">
          Use MeetingAI on Desktop, Browser, and Mobile
        </p>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mt-10">
          <button
            onClick={() => setActiveTab("desktop")}
            className={`px-5 py-2 rounded-lg ${
              activeTab === "desktop"
                ? "bg-indigo-600 text-white"
                : "bg-white border"
            }`}
          >
            Desktop
          </button>

          <button
            onClick={() => setActiveTab("browser")}
            className={`px-5 py-2 rounded-lg ${
              activeTab === "browser"
                ? "bg-indigo-600 text-white"
                : "bg-white border"
            }`}
          >
            Browser
          </button>

          <button
            onClick={() => setActiveTab("mobile")}
            className={`px-5 py-2 rounded-lg ${
              activeTab === "mobile"
                ? "bg-indigo-600 text-white"
                : "bg-white border"
            }`}
          >
            Mobile
          </button>
        </div>

        {/* Content Box */}
        <div className="mt-12 bg-white shadow-xl rounded-3xl p-10 text-center">

          {activeTab === "desktop" && (
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Desktop App
              </h3>
              <p className="text-gray-600">
                Full meeting recording, system audio capture, and AI analysis.
              </p>
            </div>
          )}

          {activeTab === "browser" && (
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Browser Extension
              </h3>
              <p className="text-gray-600">
                Works with Google Meet, Zoom, Teams directly in browser.
              </p>
            </div>
          )}

          {activeTab === "mobile" && (
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Mobile App
              </h3>
              <p className="text-gray-600">
                Access summaries, tasks, and search meetings on the go.
              </p>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}

export default Platforms;