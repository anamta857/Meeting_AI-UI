import Footer from "./components/Footer";
import CTA from "./components/CTA";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Platforms from "./components/Platforms";
import HowItWorks from "./components/HowItWorks";
import KnowledgeGraph from "./components/KnowledgeGraph";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 pt-24">
      <Navbar />

      <Hero />

      <Features />

      <Platforms />

      <HowItWorks />

      <KnowledgeGraph />

      <Dashboard />

      <Pricing />

      <Testimonials />

      <CTA />
      <Footer />
    </div>
  );
}

export default App;