import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <footer
      id="contact"
      className="bg-slate-900 text-white pt-16 md:pt-20 pb-8 px-5 md:px-10"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Logo */}
        <div>
          <h2 className="text-3xl font-extrabold text-indigo-400">
            MeetingAI
          </h2>

          <p className="mt-4 text-slate-400 leading-relaxed">
            AI-powered meeting assistant for smarter collaboration,
            summaries, action items and knowledge management.
          </p>

          <div className="flex gap-4 mt-6 text-xl">
            <FaGithub className="cursor-pointer hover:text-indigo-400 transition" />
            <FaLinkedin className="cursor-pointer hover:text-indigo-400 transition" />
            <FaTwitter className="cursor-pointer hover:text-indigo-400 transition" />
          </div>
        </div>

        {/* Product */}
        <div>
          <h3 className="font-semibold text-lg mb-5">
            Product
          </h3>

          <ul className="space-y-3 text-slate-400">
            <li className="hover:text-white cursor-pointer">Features</li>
            <li className="hover:text-white cursor-pointer">Pricing</li>
            <li className="hover:text-white cursor-pointer">Integrations</li>
            <li className="hover:text-white cursor-pointer">Updates</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-lg mb-5">
            Company
          </h3>

          <ul className="space-y-3 text-slate-400">
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold text-lg mb-5">
            Support
          </h3>

          <ul className="space-y-3 text-slate-400">
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms of Service</li>
            <li className="hover:text-white cursor-pointer">Documentation</li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm md:text-base text-slate-500">
        © 2026 MeetingAI. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;