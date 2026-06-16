import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-5 md:px-10 py-4">

        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-extrabold text-indigo-600">
          MeetingAI
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-slate-700 font-medium">
          <li>
            <a href="#home" className="hover:text-indigo-600 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#features" className="hover:text-indigo-600 transition">
              Features
            </a>
          </li>

          <li>
            <a href="#platform" className="hover:text-indigo-600 transition">
              Platform
            </a>
          </li>

          <li>
            <a href="#pricing" className="hover:text-indigo-600 transition">
              Pricing
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-indigo-600 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Desktop Button */}
        <button className="hidden md:block bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-indigo-700 transition shadow-md">
          Get Started
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-slate-800"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-lg">
          <ul className="flex flex-col items-center py-6 gap-5 text-slate-700 font-medium">

            <li>
              <a
                href="#home"
                onClick={() => setMenuOpen(false)}
                className="hover:text-indigo-600 transition"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#features"
                onClick={() => setMenuOpen(false)}
                className="hover:text-indigo-600 transition"
              >
                Features
              </a>
            </li>

            <li>
              <a
                href="#platform"
                onClick={() => setMenuOpen(false)}
                className="hover:text-indigo-600 transition"
              >
                Platform
              </a>
            </li>

            <li>
              <a
                href="#pricing"
                onClick={() => setMenuOpen(false)}
                className="hover:text-indigo-600 transition"
              >
                Pricing
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="hover:text-indigo-600 transition"
              >
                Contact
              </a>
            </li>

            <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-indigo-700 transition">
              Get Started
            </button>

          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;