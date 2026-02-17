import { useState, useEffect } from 'react';

export function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Hospital', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Doctors', href: '#doctors' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    { icon: '🏥', title: 'General Medicine', desc: 'Comprehensive primary healthcare services' },
    { icon: '🚑', title: 'Emergency Care', desc: '24/7 emergency and trauma services' },
    { icon: '🔬', title: 'Surgery', desc: 'Advanced surgical procedures' },
    { icon: '👶', title: 'Maternity Care', desc: 'Complete maternal and newborn care' },
    { icon: '🧒', title: 'Pediatrics', desc: 'Specialized child healthcare' },
    { icon: '📊', title: 'Diagnostics', desc: 'State-of-the-art diagnostic facilities' },
    { icon: '🏥', title: 'ICU / Trauma', desc: 'Critical care and intensive support' },
    { icon: '💊', title: 'Pharmacy', desc: '24/7 in-house pharmacy services' },
  ];

  const doctors = [
    { name: 'Dr. Rajesh Kumar', spec: 'Cardiologist', qual: 'MD, DM Cardiology', exp: '15+ years' },
    { name: 'Dr. Priya Sharma', spec: 'Gynecologist', qual: 'MD, DGO', exp: '12+ years' },
    { name: 'Dr. Amit Patel', spec: 'Orthopedic Surgeon', qual: 'MS Orthopedics', exp: '18+ years' },
    { name: 'Dr. Sunita Reddy', spec: 'Pediatrician', qual: 'MD Pediatrics', exp: '10+ years' },
  ];

  const facilities = [
    { title: 'Modern Operation Theaters', desc: 'Fully equipped with latest technology' },
    { title: 'Advanced Diagnostics', desc: 'CT Scan, MRI, X-Ray, Lab services' },
    { title: 'Clean Wards & Rooms', desc: 'Hygienic and comfortable patient rooms' },
    { title: '24×7 Emergency', desc: 'Round-the-clock emergency services' },
    { title: 'Ambulance Service', desc: 'Quick response emergency transport' },
    { title: 'ICU & NICU', desc: 'Intensive care for adults and newborns' },
  ];

  const galleryImages = [
    { src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop', alt: 'Hospital Building' },
    { src: 'https://images.unsplash.com/photo-1516574187841-69301976e495?w=400&h=300&fit=crop', alt: 'Reception Area' },
    { src: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=400&h=300&fit=crop', alt: 'Patient Ward' },
    { src: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=400&h=300&fit=crop', alt: 'Operation Theatre' },
    { src: 'https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=400&h=300&fit=crop', alt: 'Medical Staff' },
    { src: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=400&h=300&fit=crop', alt: 'Hospital Corridor' },
  ];

  const whyChooseUs = [
    'Experienced & Qualified Doctors',
    'Affordable Treatment Costs',
    'Modern Medical Equipment',
    'Patient-First Approach',
    'Clean & Safe Environment',
    '24/7 Support Services',
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'}`}>
        {/* Top accent bar with SMPPS orange color */}
        <div className="h-1 w-full" style={{ backgroundColor: '#ec6526' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl shadow-lg" style={{ backgroundColor: '#ec6526' }}>
                <svg className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v20M2 12h20" strokeLinecap="round" />
                  <rect x="4" y="4" width="16" height="16" rx="2" />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">SMPPS Hospital</h1>
                <p className="text-xs" style={{ color: '#ec6526' }}>Trusted Care, Advanced Treatment</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-sm font-medium text-slate-600 hover:text-[#ec6526] transition-colors">
                  {link.name}
                </a>
              ))}
              <a href="#contact" className="px-5 py-2.5 text-white text-sm font-semibold rounded-lg transition-colors hover:opacity-90" style={{ backgroundColor: '#ec6526' }}>
                Book Appointment
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 text-slate-600">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="block py-3 text-slate-600 hover:text-[#ec6526]">
                  {link.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20">
        <div className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center px-4 py-2 rounded-full" style={{ backgroundColor: '#ec652620' }}>
                  <span className="text-sm font-medium" style={{ color: '#ec6526' }}>🏥 Welcome to SMPPS Hospital</span>
                </div>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 leading-tight">
                  Quality Healthcare with <span style={{ color: '#ec6526' }}>Compassion</span>
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed">
                  A multi-specialty hospital providing quality healthcare with compassion. We are committed to delivering exceptional medical care with state-of-the-art facilities.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#contact" className="px-8 py-4 text-white font-semibold rounded-xl transition-all shadow-lg" style={{ backgroundColor: '#ec6526', boxShadow: '0 10px 25px -5px rgba(236, 101, 38, 0.4)' }}>
                    Book Appointment
                  </a>
                  <a href="tel:+919876543210" className="px-8 py-4 font-semibold rounded-xl border-2 transition-all hover:border-[#ec6526]" style={{ color: '#ec6526', borderColor: '#fec8a8' }}>
                    📞 Call Now
                  </a>
                </div>
                <div className="flex items-center space-x-6 pt-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">📍</span>
                    <span className="text-slate-600">Main Road, City Center</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">🚑</span>
                    <span className="text-red-600 font-semibold">Emergency: 108</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop" alt="Hospital Building" className="w-full h-auto object-cover" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                      <span className="text-2xl">✅</span>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-slate-900">25+</p>
                      <p className="text-slate-500">Years of Excellence</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&h=700&fit=crop" alt="About Hospital" className="w-full h-auto object-cover" />
              </div>
            </div>
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full" style={{ backgroundColor: '#ec652620' }}>
                <span className="text-sm font-medium" style={{ color: '#ec6526' }}>About Us</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Providing Quality Healthcare Since 1998</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Founded with the vision to provide affordable and quality healthcare to everyone, CarePlus Hospital has been serving the community for over 25 years. Our commitment to excellence and patient care has made us a trusted name in healthcare.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg flex-shrink-0" style={{ backgroundColor: '#ec652620' }}>
                    <span className="text-xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Our Vision</h3>
                    <p className="text-slate-600">To be the leading healthcare provider known for excellence and compassion.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 flex-shrink-0">
                    <span className="text-xl">💡</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Our Mission</h3>
                    <p className="text-slate-600">Delivering world-class healthcare services with integrity and empathy.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 flex-shrink-0">
                    <span className="text-xl">❤️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Our Values</h3>
                    <p className="text-slate-600">Care, Trust, Excellence, and Service to humanity.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full shadow-sm mb-4" style={{ backgroundColor: '#ec652620' }}>
              <span className="text-sm font-medium" style={{ color: '#ec6526' }}>Our Leadership</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Message from Our Founder</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="p-8">
                  <div className="rounded-2xl overflow-hidden mb-6 border-4" style={{ borderColor: '#ec652630' }}>
                    <img src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop" alt="Founder" className="w-full h-auto object-cover" />
                  </div>
                </div>
                <div className="p-8 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">Dr. Ramesh Gupta</h3>
                    <p className="font-semibold" style={{ color: '#ec6526' }}>Founder & Chairman</p>
                  </div>
                  <blockquote className="text-lg text-slate-600 italic leading-relaxed">
                    "Our goal is to ensure every patient is treated with dignity and care. We believe that healthcare is not just a service, but a responsibility towards society. Every life matters, and we are committed to saving lives with compassion and excellence."
                  </blockquote>
                  <div className="flex items-center space-x-4 pt-4">
                    <img src="https://images.unsplash.com/photo-1551076805-e1869033e561?w=60&h=60&fit=crop" alt="Signature" className="h-12 opacity-60" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full mb-4" style={{ backgroundColor: '#ec652620' }}>
              <span className="text-sm font-medium" style={{ color: '#ec6526' }}>Our Services</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Comprehensive Healthcare Services</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">We offer a wide range of medical services to meet all your healthcare needs under one roof.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="group p-6 bg-white rounded-2xl border-2 hover:shadow-xl transition-all duration-300" style={{ borderColor: '#fec8a8' }}>
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full shadow-sm mb-4" style={{ backgroundColor: '#ec652620' }}>
              <span className="text-sm font-medium" style={{ color: '#ec6526' }}>Our Team</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Meet Our Expert Doctors</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Our team of experienced specialists is dedicated to providing the best medical care.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.map((doctor, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-square flex items-center justify-center" style={{ backgroundColor: '#ec652615' }}>
                  <span className="text-6xl">👨‍⚕️</span>
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="text-lg font-bold text-slate-900">{doctor.name}</h3>
                  <p className="font-medium" style={{ color: '#ec6526' }}>{doctor.spec}</p>
                  <p className="text-slate-500 text-sm">{doctor.qual}</p>
                  <p className="text-slate-400 text-sm">{doctor.exp} experience</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full mb-4" style={{ backgroundColor: '#ec652620' }}>
              <span className="text-sm font-medium" style={{ color: '#ec6526' }}>Our Facilities</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">World-Class Infrastructure</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">State-of-the-art facilities designed for patient comfort and advanced medical care.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 rounded-2xl" style={{ backgroundColor: '#ec652610' }}>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl flex-shrink-0" style={{ backgroundColor: '#ec6526' }}>
                  <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">{facility.title}</h3>
                  <p className="text-slate-600 text-sm">{facility.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #ec6526 0%, #f59e0b 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose CarePlus Hospital?</h2>
                <p className="text-blue-100 text-lg">We are committed to providing the best healthcare experience for you and your family.</p>
              </div>
              <div className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                      <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1516574187841-69301976e495?w=600&h=500&fit=crop" alt="Why Choose Us" className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-4">
              <span className="text-blue-700 text-sm font-medium">Gallery</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Our Hospital Gallery</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Take a virtual tour of our facilities and see what makes us special.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img src={image.src} alt={image.alt} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-sm mb-4">
              <span className="text-blue-700 text-sm font-medium">Contact Us</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Get In Touch</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">We're here to help you. Reach out to us for appointments, queries, or emergencies.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 flex-shrink-0">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Our Address</h3>
                    <p className="text-slate-600">123 Healthcare Street, Main Road<br />City Center, State - 123456</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 flex-shrink-0">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Phone Numbers</h3>
                    <p className="text-slate-600">Main: +91 98765 43210<br />Emergency: 108 / +91 98765 00000</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 flex-shrink-0">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                    <p className="text-slate-600">info@careplushospital.com<br />appointments@careplushospital.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 flex-shrink-0">
                    <span className="text-2xl">⏰</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">OPD Timing</h3>
                    <p className="text-slate-600">Monday - Saturday: 9:00 AM - 8:00 PM<br />Sunday: 10:00 AM - 2:00 PM<br />Emergency: 24/7</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0!2d77.0!3d28.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzAwLjAiTiA3N8KwMTInMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890" 
                width="100%" 
                height="450" 
                style={{border: 0}} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500">
                  <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v20M2 12h20" strokeLinecap="round" />
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg">CarePlus Hospital</h3>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Trusted Care, Advanced Treatment. Providing quality healthcare with compassion since 1998.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About Hospital</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#doctors" className="hover:text-white transition-colors">Doctors</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2 text-slate-400">
                <li>General Medicine</li>
                <li>Emergency Care</li>
                <li>Surgery</li>
                <li>Maternity Care</li>
                <li>Pediatrics</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>📍 123 Healthcare Street</li>
                <li>📞 +91 98765 43210</li>
                <li>📧 info@careplushospital.com</li>
                <li>🚑 Emergency: 108</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center">
            <p className="text-slate-400 text-sm">© 2024 CarePlus Hospital. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
