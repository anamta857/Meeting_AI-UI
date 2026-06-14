function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md border-b">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-10 py-5">

        <h1 className="text-2xl font-bold text-indigo-600">
          MeetingAI
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">

          <li>
            <a href="#home" className="hover:text-indigo-600">
              Home
            </a>
          </li>

          <li>
            <a href="#features" className="hover:text-indigo-600">
              Features
            </a>
          </li>

          <li>
            <a href="#platform" className="hover:text-indigo-600">
              Platform
            </a>
          </li>

          <li>
            <a href="#pricing" className="hover:text-indigo-600">
              Pricing
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-indigo-600">
              Contact
            </a>
          </li>

        </ul>

        {/* Desktop Button */}
        <button className="hidden md:block bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition">
          Get Started
        </button>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-3xl cursor-pointer">
          ☰
        </div>

      </div>

    </nav>
  );
}

export default Navbar;