/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Leaf, 
  Cloud, 
  Compass, 
  HeartPulse, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  Menu, 
  X, 
  Mail, 
  Phone, 
  MapPin,
  ShieldCheck,
  Zap,
  Globe,
  Database,
  Users,
  BarChart3
} from 'lucide-react';
import { Pillar, MethodologyStep, Service, Industry } from './types';

const pillars: Pillar[] = [
  {
    title: "Digital Business & ESG",
    description: "Carbon optimization and green tech for the digital economy.",
    icon: "Leaf"
  },
  {
    title: "IT & Cloud Solutions",
    description: "Scalable cloud architecture, SaaS, and AI development.",
    icon: "Cloud"
  },
  {
    title: "Adventure & Eco-Tourism",
    description: "Smart, sustainable destination development.",
    icon: "Compass"
  },
  {
    title: "Wellness Tourism",
    description: "End-to-end resort facilitation and expert manpower supply.",
    icon: "HeartPulse"
  },
  {
    title: "Business Development",
    description: "Strategic lifecycle support for Micro to Macro enterprises.",
    icon: "TrendingUp"
  }
];

const methodology: MethodologyStep[] = [
  { letter: "S", title: "Situational Assessment", description: "Current state analysis and stakeholder mapping." },
  { letter: "U", title: "Understand Objectives", description: "Aligning sustainability with business and community goals." },
  { letter: "S", title: "Strategic Design", description: "Co-creating solutions using participatory approaches." },
  { letter: "T", title: "Technology Integration", description: "Leveraging AI and data for total optimization." },
  { letter: "A", title: "Action Planning", description: "Creating Detailed Project Reports (DPRs) with actionable quick wins." },
  { letter: "I", title: "Implementation Support", description: "Hands-on execution and technical assistance." },
  { letter: "N", title: "Navigate & Measure", description: "KPI tracking and continuous improvement." }
];

const services: Service[] = [
  {
    id: "digital-esg",
    title: "Digital Business & ESG Consulting",
    description: "We tailor sustainability strategies specifically for internet companies, SaaS platforms, and digital-first brands.",
    icon: "Leaf",
    items: [
      "Digital Carbon Footprint Assessment: Measurement of emissions from cloud, hosting, and products.",
      "Green Cloud Architecture Review: Technical audits of AWS, Azure, and GCP for carbon and cost reduction.",
      "ESG Strategy & Reporting: Data collection systems aligned with global frameworks (GRI, SASB).",
      "Circular Economy Design: Transforming models for e-commerce and D2C brands."
    ]
  },
  {
    id: "it-cloud",
    title: "IT, Cloud & Infrastructure Support",
    description: "We build robust, fault-tolerant digital foundations.",
    icon: "Cloud",
    items: [
      "Cloud Platform Operations: Management of AWS and Azure stacks, AD, and Virtual Networks.",
      "Infrastructure & Automation: Platform as Code with Terraform, PowerShell, and CI/CD.",
      "Custom Development & Analytics: AI-powered sustainability platforms and vendor dashboards.",
      "Systems Monitoring: Deep application monitoring utilizing tools like Datadog."
    ]
  },
  {
    id: "adventure-eco",
    title: "Adventure & Eco-Tourism",
    description: "Designing smart, sustainable, and inclusive tourism destinations for the future.",
    icon: "Compass",
    items: [
      "Master Planning & DPRs: Financial, technical, and ecological feasibility for agencies and investors.",
      "Adventure Infrastructure: Construction and safety assessments for parks and camps.",
      "Government Liaison & Compliance: Navigating regulations and conducting third-party audits."
    ]
  },
  {
    id: "wellness",
    title: "Wellness Tourism",
    description: "Software, hardware, and human capital for world-class healing centers.",
    icon: "HeartPulse",
    items: [
      "Resort Facilitation & Setup: Vastu-compliant flow, equipment installation, and eco-construction.",
      "Expert Manpower Supply: Sourcing Naturopaths, Ayurveda doctors, and specialized therapists.",
      "Treatment Curation: Designing signature programs and SOPs for clinical consistency.",
      "Wellness Technology: Booking engines, CRM systems, and digital health record management."
    ]
  },
  {
    id: "business-dev",
    title: "Strategic Business Development",
    description: "Growth strategies that decouple revenue from environmental impact.",
    icon: "TrendingUp",
    items: [
      "Scaling Operations: Efficient scaling without proportional carbon footprints.",
      "Lifecycle Support: Registration, planning, and tech integration for Micro to Macro enterprises.",
      "Digital Transformation: IoT sensors for monitoring and transitioning to digital-first models."
    ]
  }
];

const industries: Industry[] = [
  { name: "SaaS & Cloud Software", description: "Carbon tracking, ESG reporting, and green architecture.", icon: "Cloud" },
  { name: "E-commerce & D2C", description: "Supply chain optimization, last-mile delivery, and packaging audits.", icon: "Globe" },
  { name: "Tech Startups", description: "Minimum viable ESG frameworks and investor-ready due diligence.", icon: "Zap" },
  { name: "Hospitality & Real Estate", description: "Eco-resorts, wellness centers, and green building compliance.", icon: "Compass" },
  { name: "Government & Public Sector", description: "Tourism boards and forestry departments master planning.", icon: "ShieldCheck" }
];

const IconComponent = ({ name, className }: { name: string, className?: string }) => {
  switch (name) {
    case 'Leaf': return <Leaf className={className} />;
    case 'Cloud': return <Cloud className={className} />;
    case 'Compass': return <Compass className={className} />;
    case 'HeartPulse': return <HeartPulse className={className} />;
    case 'TrendingUp': return <TrendingUp className={className} />;
    case 'ShieldCheck': return <ShieldCheck className={className} />;
    case 'Zap': return <Zap className={className} />;
    case 'Globe': return <Globe className={className} />;
    case 'Database': return <Database className={className} />;
    case 'Users': return <Users className={className} />;
    case 'BarChart3': return <BarChart3 className={className} />;
    default: return <CheckCircle2 className={className} />;
  }
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-emerald-100 selection:text-emerald-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm overflow-hidden border border-slate-100 p-1.5">
              <div className="w-full h-full bg-gradient-to-br from-blue-600 via-emerald-500 to-amber-500 rounded-lg flex items-center justify-center text-white font-bold text-xs">DBS</div>
            </div>
            <div className="flex flex-col">
              <span className={`font-display font-bold text-lg tracking-tight leading-none ${scrolled ? 'text-slate-900' : 'text-slate-900'}`}>DBS Global Technology</span>
              <span className={`font-display text-[10px] uppercase tracking-[0.2em] font-semibold ${scrolled ? 'text-emerald-600' : 'text-emerald-600'}`}>& Consultancy Services</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {['About', 'Methodology', 'Services', 'Industries'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-emerald-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-emerald-700 transition-all shadow-md hover:shadow-lg"
            >
              Contact Us
            </button>
          </div>

          <button className="md:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {['About', 'Methodology', 'Services', 'Industries', 'Contact'].map((item) => (
                <button 
                  key={item} 
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-2xl font-display font-bold text-slate-900 text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 -z-10">
          <img 
            src="https://picsum.photos/seed/ai-neural-network/1920/1080?blur=1" 
            alt="AI Technology Background" 
            className="w-full h-full object-cover opacity-15"
            referrerPolicy="no-referrer"
          />
          {/* Tech Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
          
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/90 via-slate-50/50 to-slate-50" />
          
          {/* Animated Decorative Elements */}
          <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              25+ Years of Operational Excellence
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold text-slate-900 mb-6 leading-tight">
              Bridging Sustainability, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-indigo-600">Technology & Growth</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              Evidence-based consulting that delivers measurable environmental and economic impact across the digital and physical worlds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('services')}
                className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group"
              >
                Explore Services <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-all"
              >
                Our Journey
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The DBS Advantage */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-10 skew-x-12 translate-x-1/4" />
        <div className="max-w-7xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">The DBS Advantage</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We are the only consultancy practice that combines deep sustainability expertise with AI, big data, and cloud infrastructure capabilities to help businesses grow profitably while meeting their environmental commitments.
              </p>
              <div className="space-y-4">
                {[
                  "We do not just advise; we build tech-enabled solutions.",
                  "Physical infrastructure that drives measurable impact.",
                  "25+ years of cross-industry operational experience."
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-8">
                <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                  <div className="text-3xl font-bold text-emerald-600 mb-1">25+</div>
                  <div className="text-sm text-emerald-800 font-semibold">Years Experience</div>
                </div>
                <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
                  <div className="text-3xl font-bold text-indigo-600 mb-1">500+</div>
                  <div className="text-sm text-indigo-800 font-semibold">Projects Delivered</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
                  <div className="text-3xl font-bold text-amber-600 mb-1">100%</div>
                  <div className="text-sm text-amber-800 font-semibold">Impact Focused</div>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <div className="text-3xl font-bold text-slate-600 mb-1">Global</div>
                  <div className="text-sm text-slate-800 font-semibold">Reach & Network</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="section-padding bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)', backgroundSize: '60px 60px', backgroundPosition: '0 0, 30px 30px' }} />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Our Five Core Pillars</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">A unified structure bridging operational experience with advanced digital capabilities.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {pillars.map((pillar, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all text-center"
              >
                <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mx-auto mb-6">
                  <IconComponent name={pillar.icon} className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-lg mb-3 leading-tight">{pillar.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="section-padding bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/global-tech-consulting/800/800" 
                  alt="Global Technology and Sustainability" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-emerald-600 text-white p-8 rounded-3xl shadow-xl hidden md:block max-w-xs">
                <p className="italic text-lg mb-4">"Our roots go back to 1997, evolving from adventure tourism to driving digital sustainability."</p>
                <p className="font-bold">— Dev Balaji Setty, Founder</p>
              </div>
            </div>
            <div>
              <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4 block">The DBS Journey</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">25+ Years of Building Sustainable Ecosystems</h2>
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                <p>
                  Founded by Dev Balaji Setty, our roots go back to the establishment of Nature Admire in 1997. Over decades, we have evolved from pioneering adventure tourism and managing complex logistics to driving digital sustainability and cloud infrastructure.
                </p>
                <p>
                  Our legacy involves acting as technical advisors for government tourism departments, developing policy frameworks, and engaging stakeholders.
                </p>
                <p>
                  Today, we apply those same rigorous principles of conservation, logistics, and resource management to the digital economy—helping modern SaaS companies, e-commerce platforms, and traditional businesses optimize their operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology - SUSTAIN */}
      <section id="methodology" className="section-padding bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">The SUSTAIN Framework</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Our proprietary framework ensuring every project is executed flawlessly.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodology.map((step, i) => (
              <div key={i} className="group">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-6xl font-display font-black text-emerald-500/20 group-hover:text-emerald-500/40 transition-colors">{step.letter}</span>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                </div>
                <p className="text-slate-400 leading-relaxed pl-14">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Portfolio */}
      <section id="services" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Service Portfolio</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Detailed verticals tailored for the modern economy.</p>
          </div>
          
          <div className="space-y-24">
            {services.map((service, i) => (
              <div key={i} className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6">
                    <IconComponent name={service.icon} className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-display font-bold mb-4">{service.title}</h3>
                  <p className="text-lg text-slate-600 mb-8">{service.description}</p>
                  <div className="grid sm:grid-cols-1 gap-4">
                    {service.items.map((item, j) => (
                      <div key={j} className="flex gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`relative ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-video rounded-3xl overflow-hidden shadow-xl bg-slate-100">
                    <img 
                      src={`https://picsum.photos/seed/tech-${service.id}/800/600`} 
                      alt={service.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Industries */}
      <section id="industries" className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Target Industries & Clients</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Specialized solutions designed for specific sectors.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-6">
                  <IconComponent name={industry.icon} className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{industry.name}</h3>
                <p className="text-slate-500 leading-relaxed">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">Ready to Build a Sustainable Future?</h2>
              <p className="text-xl text-slate-600 mb-12 leading-relaxed">
                Connect with our specialist teams to discuss how we can help your business grow while meeting environmental commitments.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">Email Us</p>
                    <p className="text-lg font-bold text-slate-900">dbsconsultancyservices@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">Call Us</p>
                    <p className="text-lg font-bold text-slate-900">+91 8618751811 / 9845079414</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-amber-50 rounded-full flex items-center justify-center text-amber-600">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">Visit Us</p>
                    <p className="text-lg font-bold text-slate-900">Wework, 10th Floor, RMZ Latitude Commercial, Amruthahalli, Hebbal, Bengaluru - 560024, Karnataka, India.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100">
              <form 
                className="space-y-6"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const data = {
                    name: formData.get('name'),
                    email: formData.get('email'),
                    service: formData.get('service'),
                    message: formData.get('message'),
                  };

                  try {
                    const response = await fetch('/api/inquiry', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify(data),
                    });
                    
                    if (response.ok) {
                      alert('Thank you! Your inquiry has been sent to dbsconsultancyservices@gmail.com. We will get back to you soon.');
                      (e.target as HTMLFormElement).reset();
                    } else {
                      alert('Something went wrong. Please try again later.');
                    }
                  } catch (error) {
                    console.error('Error submitting form:', error);
                    alert('Failed to connect to the server.');
                  }
                }}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Full Name</label>
                    <input name="name" required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Email Address</label>
                    <input name="email" required type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all" placeholder="john@company.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">I am looking for assistance with...</label>
                  <select name="service" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-white">
                    <option>ESG, Carbon Audits & Digital Sustainability</option>
                    <option>IT Infrastructure & Cloud Services</option>
                    <option>Tourism Destination & Adventure Planning</option>
                    <option>Wellness Resort Setup & Manpower</option>
                    <option>Business Strategy & Registration</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Message</label>
                  <textarea name="message" required rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all" placeholder="Tell us about your project..."></textarea>
                </div>
                <button type="submit" className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold hover:bg-emerald-700 transition-all shadow-lg hover:shadow-xl">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-slate-800 pb-12 mb-12">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-md overflow-hidden p-2 border border-slate-100">
                <div className="w-full h-full bg-gradient-to-br from-blue-600 via-emerald-500 to-amber-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">DBS</div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-2xl tracking-tight">DBS Global Technology</span>
                <span className="font-display text-xs uppercase tracking-[0.3em] font-semibold text-emerald-500">& Consultancy Services</span>
              </div>
            </div>
            <div className="flex gap-8">
              {['About', 'Services', 'Methodology', 'Privacy Policy'].map((item) => (
                <a key={item} href="#" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">{item}</a>
              ))}
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
            <p>© 2026 DBS Global Technology & Consultancy Services. All rights reserved.</p>
            <p>Bridging Nature, Technology, and Business Growth.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
