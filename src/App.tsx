import React, { useState, useEffect, useCallback, useRef } from 'react';
import { 
  Recycle, 
  Truck, 
  Scale, 
  Wallet, 
  ChevronRight, 
  Menu, 
  X, 
  Phone, 
  MapPin, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram,
  FileText,
  Monitor,
  HardHat,
  Trash2,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-emerald-600 p-2 rounded-lg">
            <Recycle className="text-white w-6 h-6" />
          </div>
          <span className={`text-2xl font-bold font-display ${isScrolled ? 'text-emerald-800' : 'text-emerald-900'}`}>
            kabadion<span className="text-emerald-600">Call</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['Home', 'Services', 'Price List', 'How it Works', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-slate-600 hover:text-emerald-600 font-medium transition-colors"
            >
              {item}
            </a>
          ))}
          <button className="bg-emerald-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200">
            Book Pickup
          </button>
        </div>

        <button 
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {['Home', 'Services', 'Price List', 'How it Works', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block text-slate-600 font-medium text-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="w-full bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold">
                Book Pickup
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-emerald-50 rounded-l-[100px] hidden lg:block" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Eco-Friendly Scrap Solutions
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
              Turn Your <span className="text-emerald-600">Scrap</span> Into <span className="text-emerald-600">Cash</span> Instantly
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
              Join thousands of households and businesses in making the world greener. 
              Schedule a doorstep pickup, get accurate weighing, and receive instant payment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-emerald-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-200 flex items-center justify-center gap-2 group">
                Schedule Pickup <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                Check Price List
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://picsum.photos/seed/user${i}/100/100`} 
                    className="w-10 h-10 rounded-full border-2 border-white"
                    alt="User"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <p className="text-sm text-slate-500">
                <span className="font-bold text-slate-900">10k+</span> Happy Customers in your city
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=1000" 
                alt="Recycling" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[200px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-emerald-100 p-2 rounded-lg">
                  <Recycle className="text-emerald-600 w-5 h-5" />
                </div>
                <span className="font-bold text-slate-900">500 Tons</span>
              </div>
              <p className="text-xs text-slate-500">Recycled this month alone</p>
            </div>
            <div className="absolute -top-6 -right-6 z-20 bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map(i => <span key={i}>★</span>)}
                </div>
                <span className="font-bold text-slate-900">4.9/5</span>
              </div>
              <p className="text-xs text-slate-500">Average service rating</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Doorstep Pickup",
      desc: "We come to your home or office at your preferred time. No more carrying heavy scrap."
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: "Accurate Weighing",
      desc: "Our digital scales are calibrated regularly to ensure you get the exact value for your scrap."
    },
    {
      icon: <Wallet className="w-8 h-8" />,
      title: "Instant Payment",
      desc: "Get paid instantly via Cash, UPI, or Bank Transfer as soon as the weighing is done."
    },
    {
      icon: <Recycle className="w-8 h-8" />,
      title: "Eco-Friendly",
      desc: "We ensure all collected scrap is processed responsibly and sent to authorized recyclers."
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-emerald-600 font-bold tracking-wider uppercase text-sm mb-3">Our Services</h2>
          <p className="text-4xl font-bold text-slate-900 mb-6">Why Choose kabadionCall?</p>
          <p className="text-slate-600">We provide a seamless and transparent way to dispose of your scrap while ensuring maximum value and environmental responsibility.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50 transition-all group"
            >
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center text-emerald-600 shadow-sm mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{s.title}</h3>
              <p className="text-slate-600 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ScrapCategories = () => {
  const categories = [
    { icon: <FileText />, name: "Paper", price: "₹15/kg", items: "Newspaper, Books, Cardboard" },
    { icon: <Monitor />, name: "E-Waste", price: "₹45/kg", items: "Laptops, Mobiles, CPUs" },
    { icon: <HardHat />, name: "Metal", price: "₹35/kg", items: "Iron, Aluminum, Copper" },
    { icon: <Trash2 />, name: "Plastic", price: "₹12/kg", items: "Bottles, Containers, PVC" },
  ];

  return (
    <section id="price-list" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-emerald-600 font-bold tracking-wider uppercase text-sm mb-3">Scrap Rates</h2>
            <p className="text-4xl font-bold text-slate-900">Current Market Prices</p>
          </div>
          <button className="text-emerald-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
            View Full Price List <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="text-emerald-600 mb-6 bg-emerald-50 w-12 h-12 rounded-xl flex items-center justify-center">
                {React.cloneElement(cat.icon as React.ReactElement, { className: "w-6 h-6" })}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">{cat.name}</h3>
              <p className="text-sm text-slate-500 mb-4">{cat.items}</p>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-slate-400 text-sm">Starting from</span>
                <span className="text-emerald-600 font-bold text-lg">{cat.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BookingForm = () => {
  return (
    <section id="booking" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-emerald-900 rounded-[40px] p-8 lg:p-16 relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-800 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-800 rounded-full translate-y-1/2 -translate-x-1/2 opacity-50 blur-3xl" />
          
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">Ready to clear your space?</h2>
              <div className="space-y-6">
                {[
                  "Select your scrap items",
                  "Choose a convenient date & time",
                  "Get instant confirmation",
                  "Professional pickup & payment"
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-4 text-emerald-100">
                    <div className="w-8 h-8 rounded-full bg-emerald-700 flex items-center justify-center text-white font-bold text-sm">
                      {i + 1}
                    </div>
                    <span className="text-lg">{step}</span>
                  </div>
                ))}
              </div>
              <div className="mt-12 p-6 bg-emerald-800/50 rounded-2xl border border-emerald-700/50">
                <p className="text-emerald-200 italic">"The best scrap service I've ever used. Professional, on time, and paid exactly what was promised!"</p>
                <p className="text-white font-bold mt-4">— Rahul Sharma, Delhi</p>
              </div>
            </div>

            <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-2xl">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Phone Number</label>
                    <input type="tel" placeholder="+91 98765 43210" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Pickup Address</label>
                  <textarea rows={3} placeholder="House No, Street, Area, City" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all resize-none" />
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Scrap Type</label>
                    <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all appearance-none">
                      <option>Mix Scrap</option>
                      <option>Paper Only</option>
                      <option>E-Waste</option>
                      <option>Metal Only</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Estimated Weight</label>
                    <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all appearance-none">
                      <option>Less than 20kg</option>
                      <option>20kg - 50kg</option>
                      <option>50kg - 100kg</option>
                      <option>More than 100kg</option>
                    </select>
                  </div>
                </div>
                <button className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100">
                  Schedule My Pickup
                </button>
                <p className="text-center text-slate-400 text-sm italic">No hidden charges. Free doorstep pickup.</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-emerald-600 p-2 rounded-lg">
                <Recycle className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold font-display text-white">
                kabadion<span className="text-emerald-500">Call</span>
              </span>
            </div>
            <p className="leading-relaxed">
              Making recycling easy and rewarding for everyone. We bridge the gap between waste and its second life.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['About Us', 'Services', 'Price List', 'How it Works', 'FAQs'].map(item => (
                <li key={item}>
                  <a href="#" className="hover:text-emerald-500 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Our Services</h4>
            <ul className="space-y-4">
              {['Household Pickup', 'Corporate Tie-ups', 'E-Waste Disposal', 'Vehicle Scrap', 'Industrial Waste'].map(item => (
                <li key={item}>
                  <a href="#" className="hover:text-emerald-500 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>123 Green Avenue, Eco Park, New Delhi - 110001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>+91 1800-123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>support@kabadioncall.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© 2026 kabadionCall. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <ScrapCategories />
      
      {/* Impact Stats */}
      <section className="py-16 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { label: "Trees Saved", val: "15,000+" },
              { label: "CO2 Reduced", val: "2.5k Tons" },
              { label: "Water Saved", val: "1.2M Liters" },
              { label: "Happy Users", val: "50k+" }
            ].map((stat, i) => (
              <div key={i} className="text-white">
                <div className="text-3xl lg:text-4xl font-bold mb-2">{stat.val}</div>
                <div className="text-emerald-100 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BookingForm />
      
      {/* How it Works Section */}
      <section id="how-it-works" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-emerald-600 font-bold tracking-wider uppercase text-sm mb-3">Process</h2>
            <p className="text-4xl font-bold text-slate-900">How It Works</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-emerald-100 -translate-y-1/2 z-0" />
            {[
              { title: "Book a Pickup", desc: "Use our website or app to schedule a convenient time." },
              { title: "We Pick Up", desc: "Our executive arrives, weighs the scrap using digital scales." },
              { title: "Get Paid", desc: "Receive instant payment and a digital receipt for your contribution." }
            ].map((step, i) => (
              <div key={i} className="relative z-10 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6 border-4 border-white shadow-lg">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                <p className="text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Floating WhatsApp Button */}
      <a 
        href="#" 
        className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 active:scale-95"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}
