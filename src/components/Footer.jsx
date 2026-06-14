function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-4 gap-8">

        {/* Logo */}
        <div>
          <h2 className="text-2xl font-bold text-indigo-400">
            MeetingAI
          </h2>

          <p className="mt-4 text-gray-400">
            AI-powered meeting assistant for smarter collaboration.
          </p>
        </div>

        {/* Product */}
        <div>
          <h3 className="font-semibold mb-4">Product</h3>

          <ul className="space-y-2 text-gray-400">
            <li>Features</li>
            <li>Pricing</li>
            <li>Integrations</li>
            <li>Updates</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>

          <ul className="space-y-2 text-gray-400">
            <li>About</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-4">Support</h3>

          <ul className="space-y-2 text-gray-400">
            <li>Help Center</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Documentation</li>
          </ul>
        </div>

      </div>

      <div className="border-t border-slate-700 mt-10 pt-6 text-center text-gray-500">
        © 2026 MeetingAI. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;