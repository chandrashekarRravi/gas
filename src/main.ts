import './style.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <!-- Custom Cursor -->
  <div id="custom-cursor" class="fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:block">
    <div class="cursor-wrapper relative flex items-center justify-center w-6 h-6">
      <!-- The Plane -->
      <div class="cursor-plane relative z-10">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="filter drop-shadow-[0_0_8px_rgba(0,210,255,0.6)]">
          <path d="M12 2L4 21L12 17L20 21L12 2Z" fill="white" fill-opacity="0.95" />
          <path d="M12 2L12 17" stroke="#00D2FF" stroke-width="1" stroke-opacity="0.5" />
          <circle cx="12" cy="19" r="1.5" fill="#00D2FF" class="animate-pulse" />
        </svg>
      </div>
      <!-- Magnetic Bubble -->
      <div class="cursor-bubble absolute rounded-full border border-white/20 backdrop-blur-md bg-white/5 scale-0 opacity-0 transition-all duration-500 ease-out flex items-center justify-center overflow-hidden">
        <span class="cursor-text text-[10px] font-heading uppercase tracking-tighter text-white whitespace-nowrap">Explore →</span>
      </div>
    </div>
  </div>

  <nav class="nav-header">
    <div class="flex items-center gap-2">
      <a href="/">
        <img src="/logo.png" alt="Gandharva" style="height: 80px; width: auto;" />
      </a>
    </div>
    <div class="flex items-center gap-8 ml-auto">
      <div class="nav-links hidden md:flex items-center gap-6">
        <a href="/about.html">About</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#countries">Countries</a>
        <a href="#whyus">Why Us</a>
        <a href="#contact">Contact</a>
      </div>
      <div>
        <a href="#contact" class="btn-primary">Apply Now</a>
      </div>
    </div>
  </nav>

  <!-- Floating Scroll Top Button -->
  <button id="scrollTopBtn" class="fixed bottom-8 right-8 w-14 h-14 bg-[#0B1C3D] text-brand-gold rounded-full flex items-center justify-center opacity-0 pointer-events-none transition-transform z-50 hover:scale-110 shadow-xl border-2 border-brand-gold/30 hover:bg-brand-navy" onclick="document.querySelector('.snap-container').scrollTo({top: 0, behavior: 'smooth'})">
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
  </button>

  <div class="snap-container">
    <!-- Hero / About Section -->
    <section id="about" class="snap-section about-section bg-brand-navy relative overflow-hidden min-h-screen pt-28 pb-12 flex items-center">
      <!-- Background Earth Globe Effects -->
      <div class="hero-glow"></div>
      <div class="earth-arc">
        <svg class="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none" id="globe-svg">
          <defs>
            <filter id="glow-strong" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <filter id="glow-subtle" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="0.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <linearGradient id="route-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#C9A65A" stop-opacity="0.8"/>
              <stop offset="100%" stop-color="#00D2FF" stop-opacity="0.2"/>
            </linearGradient>
          </defs>

          <!-- Source Point: South India (Bengaluru) -->
          <circle cx="58.5" cy="48.5" r="0.8" fill="#C9A65A" filter="url(#glow-strong)" class="globe-source" />
          <circle cx="58.5" cy="48.5" r="3" fill="none" stroke="#C9A65A" stroke-width="0.2" class="globe-source-pulse" />

          <!-- Dynamic Routes Container -->
          <g id="globe-routes-container"></g>
        </svg>
      </div>

      <div class="mx-auto px-6 md:px-16 lg:px-24 w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 z-10 relative">
        
        <!-- Left Side: Hero Text and Stats -->
        <div class="w-full lg:w-[50%] flex flex-col justify-center about-text">
          <h1 class="text-5xl md:text-6xl xl:text-7xl font-heading mb-4 text-brand-gold leading-tight">Gandharva <br/><span class="text-brand-beige">Abroad Studies</span></h1>
          <p class="text-brand-beige/80 text-base md:text-lg leading-relaxed font-special mb-8 max-w-2xl">
            Gandharva Abroad Studies specializes in providing comprehensive support and guidance for students aspiring to pursue an MBBS degree abroad. We offer expert counseling, personalized admission assistance, and ensure a smooth transition into top international medical universities.
          </p>

          <!-- Stats -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 why-stats">
            <div>
              <div class="text-3xl md:text-4xl font-heading text-white mb-1">500+</div>
              <div class="text-brand-beige/80 text-[10px] md:text-[11px] tracking-widest uppercase font-special leading-snug">Successful<br/>Placements</div>
            </div>
            <div>
              <div class="text-3xl md:text-4xl font-heading text-white mb-1">150+</div>
              <div class="text-brand-beige/80 text-[10px] md:text-[11px] tracking-widest uppercase font-special leading-snug">Partner<br/>Universities</div>
            </div>
            <div>
              <div class="text-3xl md:text-4xl font-heading text-white mb-1">20+</div>
              <div class="text-brand-beige/80 text-[10px] md:text-[11px] tracking-widest uppercase font-special leading-snug">Countries<br/>Worldwide</div>
            </div>
            <div>
              <div class="text-3xl md:text-4xl font-heading text-white mb-1">98%</div>
              <div class="text-brand-beige/80 text-[10px] md:text-[11px] tracking-widest uppercase font-special leading-snug">Satisfied<br/>Students</div>
            </div>
          </div>
          
        </div>
      </div>

      <!-- Bottom Right Office Locations -->
      <div class="absolute bottom-16 right-12 md:right-24 flex flex-col items-end about-locations z-40">
        <div class="text-right">
          <h3 class="text-[10px] md:text-xs font-special uppercase tracking-[0.3em] text-brand-gold/50 mb-3">Our Global Presence</h3>
          <div class="flex items-center gap-8 md:gap-12">
            <a href="https://wa.me/919876543210?text=Hello%20Gandharva%20Abroad%20Studies,%20I%20would%20like%20to%20know%20more%20about%20your%20services%20in%20Shivamogga." target="_blank" class="text-brand-beige hover:text-brand-gold font-heading text-sm md:text-lg transition-all hover:-translate-y-1 whatsapp-cursor">Shivamogga</a>
            <a href="https://wa.me/919876543210?text=Hello%20Gandharva%20Abroad%20Studies,%20I%20would%20like%20to%20know%20more%20about%20your%20services%20in%20Davanagere." target="_blank" class="text-brand-beige hover:text-brand-gold font-heading text-sm md:text-lg transition-all hover:-translate-y-1 whatsapp-cursor">Davanagere</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonials" class="snap-section bg-[#050505] text-white py-24 min-h-screen flex items-center">
      <div class="max-w-[85rem] mx-auto px-6 w-full">
        <!-- Header -->
        <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 testimonial-title">
          <h2 class="text-5xl md:text-7xl font-heading leading-tight tracking-wide">
            Recommended<br/>
            <span class="font-serif italic text-white/80 text-4xl md:text-6xl normal-case">by our students</span>
          </h2>
          <p class="text-white/50 max-w-sm text-sm md:text-base leading-relaxed font-special pb-2">
            Hear from our successful placements who have seamlessly transitioned into top international medical universities with our expert guidance.
          </p>
        </div>

        <!-- Cards Marquee -->
        <div class="relative w-full overflow-hidden">
          <!-- Marquee track -->
          <div class="flex animate-marquee w-max py-4 hover:[animation-play-state:paused]">
            
            <!-- Group 1 -->
            <div class="flex gap-6 shrink-0 pr-6 h-100">
              ${[
    { name: "Sarah Jenkins", yt: "dQw4w9WgXcQ", text: "Gandharva made my MBBS application process seamless and totally stress-free." },
    { name: "David Kumar", yt: "dQw4w9WgXcQ", text: "Incredible support for visa and accommodation. Highly recommend their services!" },
    { name: "Aisha Rehman", yt: "dQw4w9WgXcQ", text: "A transparent and trustworthy agency. They helped me get into my dream university." }
  ].map(t => `
                <div data-yt="${t.yt}" class="w-[280px] md:w-[380px] shrink-0 relative rounded-xl overflow-hidden aspect-[3/4] group cursor-pointer border border-white/10 testimonial-card video-card">
                  <div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style="background-image: url('https://img.youtube.com/vi/${t.yt}/maxresdefault.jpg')"></div>
                  <div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                  
                  <!-- Play Button Overlay -->
                  <div class="absolute inset-0 flex items-center justify-center">
                    <div class="w-16 h-16 rounded-full bg-brand-gold/20 backdrop-blur-md border border-brand-gold/40 flex items-center justify-center text-brand-gold group-hover:scale-110 transition-transform shadow-2xl">
                      <svg class="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                  </div>

                  <div class="absolute inset-0 p-8 flex flex-col justify-end">
                    <p class="font-serif italic text-lg md:text-xl text-white mb-4 leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-500">"${t.text}"</p>
                    <div class="text-xs tracking-wider uppercase font-special text-brand-gold text-right">${t.name}</div>
                  </div>
                </div>
              `).join('')}
            </div>

            <!-- Group 2 (Duplicated Set for Infinite Loop) -->
            <div class="flex gap-6 shrink-0 pr-6 h-100" aria-hidden="true">
               ${[
    { name: "Sarah Jenkins", yt: "dQw4w9WgXcQ", text: "Gandharva made my MBBS application process seamless and totally stress-free." },
    { name: "David Kumar", yt: "dQw4w9WgXcQ", text: "Incredible support for visa and accommodation. Highly recommend their services!" },
    { name: "Aisha Rehman", yt: "dQw4w9WgXcQ", text: "A transparent and trustworthy agency. They helped me get into my dream university." }
  ].map(t => `
                <div data-yt="${t.yt}" class="w-[280px] md:w-[380px] shrink-0 relative rounded-xl overflow-hidden aspect-[3/4] group cursor-pointer border border-white/10 testimonial-card video-card">
                  <div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style="background-image: url('https://img.youtube.com/vi/${t.yt}/maxresdefault.jpg')"></div>
                  <div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                  
                  <!-- Play Button Overlay -->
                  <div class="absolute inset-0 flex items-center justify-center">
                    <div class="w-16 h-16 rounded-full bg-brand-gold/20 backdrop-blur-md border border-brand-gold/40 flex items-center justify-center text-brand-gold group-hover:scale-110 transition-transform shadow-2xl">
                      <svg class="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                  </div>

                  <div class="absolute inset-0 p-8 flex flex-col justify-end">
                    <p class="font-serif italic text-lg md:text-xl text-white mb-4 leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-500">"${t.text}"</p>
                    <div class="text-xs tracking-wider uppercase font-special text-brand-gold text-right">${t.name}</div>
                  </div>
                </div>
              `).join('')}
            </div>

          </div>
        </div>
      </div>
    </section>

   

    <!-- Countries Section -->
    <section id="countries" class="snap-section bg-[#0A0E17] text-white py-24 min-h-screen flex flex-col justify-center">
      <div class="max-w-[85rem] mx-auto px-6 w-full relative z-10">
        <div class="flex flex-col md:flex-row justify-between items-end mb-12 gap-8 country-title">
          <h2 class="text-5xl md:text-7xl font-heading leading-tight tracking-wide text-brand-gold">
            Study<br/>
            <span class="font-serif italic text-white/80 text-4xl md:text-6xl normal-case">Destinations</span>
          </h2>
          <p class="text-white/50 max-w-sm text-sm md:text-base leading-relaxed font-special pb-2">
            Explore our extensive network of partner universities across these beautiful countries, offering world-class medical education.
          </p>
        </div>

        <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-4 md:gap-6 country-grid justify-center">
          ${['Russia', 'Georgia', 'Uzbekistan', 'Kazakhstan', 'Belarus', 'Vietnam', 'Bosnia', 'Timor-Leste', 'Kyrgyzstan'].map((country, i) => `
            <div data-country="${country}" class="passport-card group cursor-pointer relative aspect-[3/4] min-h-[120px] rounded-md shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:scale-105 border border-brand-gold/30 flex flex-col items-center justify-between p-3 md:p-4 overflow-hidden"
                 style="background: linear-gradient(135deg, ${i % 3 === 0 ? '#4A0E17, #1A0407' : i % 3 === 1 ? '#0B291A, #020B05' : '#0A1C3A, #020710'}); box-shadow: inset 0 0 30px rgba(0,0,0,0.8), 0 10px 30px rgba(0,0,0,0.5);">
              
              <!-- Fabric texture overlay -->
              <div class="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E');"></div>
              
              <!-- Spine detailing -->
              <div class="absolute left-0 top-0 bottom-0 w-2 bg-black/40 border-r border-brand-gold/10"></div>
              
              <div class="text-brand-gold/90 uppercase tracking-[0.15em] text-[8px] md:text-[10px] font-heading text-center mt-2 z-10 w-full px-2" style="text-shadow: 0 1px 2px rgba(0,0,0,0.8);">${country}</div>
              
              <div class="w-10 h-10 md:w-14 md:h-14 rounded-full border-[1.5px] border-brand-gold/60 flex items-center justify-center bg-brand-gold/5 z-10 relative overflow-hidden">
                <!-- Inner crest detailing -->
                <div class="absolute inset-1 rounded-full border-[0.5px] border-brand-gold/30 border-dashed z-20 pointer-events-none"></div>
                <img src="/flags/${country === 'Uzbekistan' ? 'uzbekistan' : country}.png" alt="${country} flag" class="w-full h-full object-cover z-10" />
              </div>
              
              <div class="text-brand-gold/60 uppercase tracking-[0.25em] text-[6px] md:text-[7px] font-special text-center mb-1 z-10" style="text-shadow: 0 1px 2px rgba(0,0,0,0.8);">PASSPORT</div>
              
              <!-- Glare effect -->
              <div class="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-md z-20" style="transform: translateX(-100%) skewX(-15deg); animation: shimmer 3s infinite; animation-play-state: paused;"></div>
            </div>
          `).join('')}
          <style>
            .passport-card:hover .bg-gradient-to-tr { animation-play-state: running; }
            @keyframes shimmer { 100% { transform: translateX(200%) skewX(-15deg); } }
          </style>
        </div>
      </div>
    </section>

    <!-- Country Details Modal -->
    <div id="country-modal" class="fixed inset-0 z-50 hidden flex items-center justify-center p-4 sm:p-6 backdrop-blur-md bg-black/80 transition-opacity duration-300 opacity-0">
      <div class="modal-content bg-brand-navy border border-brand-gold/30 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)] w-full max-w-5xl max-h-[90vh] overflow-y-auto relative transform scale-95 opacity-0 transition-all duration-300">
        <!-- Close Button -->
        <button id="close-modal" class="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-navy transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
        <div id="modal-body" class="p-6 md:p-10"></div>
      </div>
    </div>

    <!-- Video Modal -->
    <div id="video-modal" class="fixed inset-0 z-[60] hidden flex items-center justify-center p-4 backdrop-blur-xl bg-black/90 transition-opacity duration-300 opacity-0">
      <button id="close-video" class="absolute top-8 right-8 z-10 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand-gold hover:text-brand-navy transition-all hover:scale-110">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>
      <div class="video-container w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-[0_0_100px_rgba(201,166,90,0.2)] border border-white/10 transform scale-95 opacity-0 transition-all duration-500">
        <iframe id="youtube-iframe" class="w-full h-full" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
   
 <!-- Why Us Section -->
    <section id="whyus" class="snap-section bg-[#050505] text-white py-14 min-h-screen flex flex-col justify-center">
      <div class="max-w-[85rem] mx-auto px-6 w-full relative z-10">
        <div class="flex flex-col md:flex-row justify-between items-start mb-2 gap-8 whyus-header">
          <div class="max-w-2xl">
            <h2 class="text-6xl md:text-8xl font-heading leading-none tracking-tighter text-brand-gold uppercase mb-3">
              Why<br/>Choose <span class="text-white italic font-serif normal-case tracking-normal">US?</span>
            </h2>
            <p class="text-white/80 text-xl md:text-2xl font-serif italic max-w-xl leading-relaxed">
              Focus on increasing admissions, not just visibility
            </p>
          </div>
          <div class="hidden md:block w-32 h-32 border-2 border-brand-gold/30 rounded-full flex items-center justify-center animate-spin-slow">
            <div class="text-brand-gold text-4xl">✦</div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6 whyus-grid">
          ${[
    { num: '01', title: 'Expertise in school & education marketing' },
    { num: '02', title: 'Creative content (photos, videos, posts)' },
    { num: '03', title: 'Complete digital marketing under one roof' },
    { num: '04', title: 'Strong local audience targeting' },
    { num: '05', title: 'Regular reports & transparent work' },
    { num: '06', title: 'Cost-effective solutions' },
    { num: '07', title: 'Easy communication & quick support' },
    { num: '08', title: 'Work based on real logic, not just theory' }
  ].map((item) => `
            <div class="whyus-card group relative p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] transition-all duration-500">
              <div class="flex flex-col gap-6">
                <div class="flex items-center gap-4">
                  <span class="text-brand-gold font-heading text-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500">${item.num}</span>
                  <div class="h-[1px] flex-grow bg-brand-gold/20 group-hover:bg-brand-gold/50 transition-all duration-500"></div>
                </div>
                <h3 class="text-lg md:text-xl font-heading leading-snug group-hover:text-brand-gold transition-colors duration-500">
                  ${item.title}
                </h3>
              </div>
              <!-- Decorative corner -->
              <div class="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-brand-gold/0 group-hover:border-brand-gold/40 transition-all duration-500 rounded-br-lg"></div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
    <!-- Footer Section -->
    <section id="contact" class="snap-section bg-[#e8e2d8] relative overflow-hidden min-h-screen flex items-center pt-24 pb-12 scroll-up-cursor" onclick="if(event.target.closest('a') || event.target.closest('input') || event.target.closest('button')) return; document.querySelector('.snap-container').scrollTo({top: 0, behavior: 'smooth'})">
      <!-- Watermark Background -->
      <div class="absolute inset-0 flex items-start justify-center pointer-events-none select-none z-0 overflow-hidden pt-12 md:pt-16 footer-watermark">
        <span class="text-[18vw] font-heading font-bold text-[#D9D5D0] opacity-60 tracking-tighter whitespace-nowrap leading-none inline-block">G</span>
        <span class="text-[18vw] font-heading font-bold text-[#D9D5D0] opacity-60 tracking-tighter whitespace-nowrap leading-none inline-block">a</span>
        <span class="text-[18vw] font-heading font-bold text-[#D9D5D0] opacity-60 tracking-tighter whitespace-nowrap leading-none inline-block">n</span>
        <span class="text-[18vw] font-heading font-bold text-[#D9D5D0] opacity-60 tracking-tighter whitespace-nowrap leading-none inline-block">d</span>
        <span class="text-[18vw] font-heading font-bold text-[#D9D5D0] opacity-60 tracking-tighter whitespace-nowrap leading-none inline-block">h</span>
        <span class="text-[18vw] font-heading font-bold text-[#D9D5D0] opacity-60 tracking-tighter whitespace-nowrap leading-none inline-block">a</span>
        <span class="text-[18vw] font-heading font-bold text-[#D9D5D0] opacity-60 tracking-tighter whitespace-nowrap leading-none inline-block">r</span>
        <span class="text-[18vw] font-heading font-bold text-[#D9D5D0] opacity-60 tracking-tighter whitespace-nowrap leading-none inline-block">v</span>
        <span class="text-[18vw] font-heading font-bold text-[#D9D5D0] opacity-60 tracking-tighter whitespace-nowrap leading-none inline-block">a</span>
      </div>
      
      <div class="max-w-[85rem] mx-auto px-6 w-full z-10 relative flex flex-col h-full justify-center">
        
        <div class="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-6 w-full mt-12">
          <!-- Col 1 -->
          <div class="col-span-1 md:col-span-3 flex flex-col gap-6">
            <div class="flex items-center gap-3">
              <div class="flex items-center gap-2">
                <img src="/logo.png" alt="Gandharva" style="height: 48px; width: auto; mix-blend-mode: multiply;" />
              </div>
              <span class="text-2xl font-heading font-bold text-[#0B1C3D]">Gandharva</span>
            </div>
            <p class="text-sm text-slate-500 font-special leading-relaxed max-w-[260px]">
              Strategic counseling and guidance tailored to drive admission success in top medical universities.
            </p>
          </div>

          <!-- Col 2 -->
          <div class="col-span-1 md:col-span-2 flex flex-col gap-4">
            <h4 class="font-bold text-[#0B1C3D] font-heading mb-2 text-[15px]">Company</h4>
           
            <a href="#" class="text-slate-500 hover:text-[#0B1C3D] text-sm font-special transition-colors">Achievements</a>
            <a href="#" class="text-slate-500 hover:text-[#0B1C3D] text-sm font-special transition-colors">FAQs</a>
            <a href="/brand.html" class="text-slate-500 hover:text-[#0B1C3D] text-sm font-special transition-colors">Brand</a>
            <a href="#contact" class="text-slate-500 hover:text-[#0B1C3D] text-sm font-special transition-colors">Contact</a>
          </div>

          <!-- Col 3: Socials -->
          <div class="col-span-1 md:col-span-2 flex flex-col gap-4">
            <h4 class="font-bold text-[#0B1C3D] font-heading mb-2 text-[15px]">Socials</h4>
            <a href="#" class="text-slate-500 hover:text-[#0B1C3D] text-sm font-special transition-colors flex items-center justify-between w-28 group">
              Email <span class="group-hover:translate-x-1 transition-transform text-xs">↗</span>
            </a>
            <a href="#" class="text-slate-500 hover:text-[#0B1C3D] text-sm font-special transition-colors flex items-center justify-between w-28 group">
              Instagram <span class="group-hover:translate-x-1 transition-transform text-xs">↗</span>
            </a>
            <a href="#" class="text-slate-500 hover:text-[#0B1C3D] text-sm font-special transition-colors flex items-center justify-between w-28 group">
              LinkedIn <span class="group-hover:translate-x-1 transition-transform text-xs">↗</span>
            </a>
          </div>

          <!-- Col 4 (Branches) -->
          <div class="col-span-1 md:col-span-2 flex flex-col gap-4">
            <h4 class="font-bold text-[#0B1C3D] font-heading mb-2 text-[15px]">Our Branches</h4>
            <div class="flex flex-col gap-4">
              <div>
                <p class="text-xs font-bold tracking-wider uppercase text-slate-400 mb-1">Head Office</p>
                <p class="text-sm text-slate-500 font-special leading-relaxed">Shivamogga, India</p>
              </div>
              <div>
                <p class="text-xs font-bold tracking-wider uppercase text-slate-400 mb-1">Regional Branch</p>
                <p class="text-sm text-slate-500 font-special leading-relaxed">Davanagere, India</p>
              </div>
            </div>
          </div>

          <!-- Col 5 -->
          <div class="col-span-1 md:col-span-3 flex flex-col gap-4 pl-0 md:pl-4">
            <h4 class="font-bold text-[#0B1C3D] font-heading mb-2 text-[15px]">Newsletter</h4>
            <p class="text-sm text-slate-500 font-special leading-relaxed max-w-sm">
              Stay ahead with abroad studies tips and university admission strategies that drive results.
            </p>
            <div class="relative mt-2 max-w-sm">
              <span class="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 font-special text-sm">@</span>
              <input type="email" placeholder="Enter your email..." class="w-full bg-white border border-slate-200/60 rounded-full py-3.5 pl-12 pr-12 text-sm focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] transition-all text-slate-700 shadow-sm font-special placeholder:text-slate-400">
              <button class="absolute right-1.5 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#0066FF] text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors shadow-sm">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Map Section -->
        <div class="mt-16 w-full flex flex-col md:flex-row gap-8 items-start">
          <div class="w-full md:w-1/2 flex flex-col gap-4">
            <h4 class="font-bold text-[#0B1C3D] font-heading text-2xl flex items-center gap-2">
              <span>📍</span> Our Location
            </h4>
            <p class="text-slate-500 font-special leading-relaxed text-lg">
              2nd Floor, Sree Karthik Plaza,<br/>
              Opp. Mallikarjuna Talkies,<br/>
              Durgigudi, Shivamogga, Karnataka 577201
            </p>
            <div class="flex gap-4 mt-2">
              <a href="https://maps.app.goo.gl/J9EfWhb6aTFbUzNV8" target="_blank" class="text-[#0066FF] font-bold font-heading hover:underline">Get Directions ↗</a>
            </div>
          </div>
          <div class="w-full md:w-1/2 h-[250px] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
            <iframe 
              width="100%" 
              height="100%" 
              style="border:0" 
              loading="lazy" 
              allowfullscreen 
              referrerpolicy="no-referrer-when-downgrade" 
              src="https://www.google.com/maps?q=Gandharva+abroad+studies+Shivamogga&output=embed">
            </iframe>
          </div>
        </div>

        <!-- Bottom Row -->
        <div class="flex flex-col md:flex-row justify-between items-center mt-32 pt-8 text-sm text-slate-500 font-special w-full border-t border-slate-200/50">
          <p>©2026 Gandharva All rights reserved</p>
          <div class="flex gap-8 mt-4 md:mt-0">
            <a href="#" class="hover:text-[#0B1C3D] transition-colors">Privacy Policy</a>
            <a href="#" class="hover:text-[#0B1C3D] transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </section>
  </div>
`

// GSAP Animations (On Load for Hero)
const tl = gsap.timeline();

// Premium Intro: Left side comes in from left
tl.from('.about-text > *', {
  x: -150,
  opacity: 0,
  stagger: 0.1,
  duration: 1.5,
  ease: 'power4.out',
  delay: 0.2
}, 0);

// Premium Intro: Right side comes in from right
tl.from('.about-locations', {
  x: 150,
  opacity: 0,
  duration: 1.5,
  ease: 'power4.out'
}, 0);

// Earth globe subtle scale in
tl.from('.earth-arc', {
  scale: 0.8,
  opacity: 0,
  duration: 2,
  ease: 'power3.out'
}, 0);

// Make the globe rotation much slower for a premium feel
gsap.to('.earth-arc', {
  rotation: 360,
  duration: 150, // Slower rotation
  repeat: -1,
  ease: 'linear'
});

// Setup the Globe Routes Animation with EXACT manual visual coordinates corresponding to the visible map
const routesData = [
  { name: 'Russia', cx: 40, cy: 25 },
  { name: 'Georgia', cx: 43, cy: 33 },
  { name: 'Kazakhstan', cx: 50, cy: 28 },
  { name: 'Uzbekistan', cx: 50, cy: 33 },
  { name: 'Belarus', cx: 37, cy: 26 },
  { name: 'Vietnam', cx: 70, cy: 45 },
  { name: 'Bosnia', cx: 34, cy: 34 },
  { name: 'Timor-Leste', cx: 82, cy: 58 },
  { name: 'Mauritius', cx: 46, cy: 61 },
  { name: 'Philippines', cx: 78, cy: 47 },
  { name: 'Kyrgyzstan', cx: 54, cy: 32 }
];
const sourcePt = { cx: 58.5, cy: 48.5 };
const routesContainer = document.getElementById('globe-routes-container');

if (routesContainer) {
  routesData.forEach((dest, i) => {
    // Calculate bezier control point to make it an elegant curve
    const midX = (sourcePt.cx + dest.cx) / 2;
    const midY = (sourcePt.cy + dest.cy) / 2;
    const dist = Math.sqrt(Math.pow(dest.cx - sourcePt.cx, 2) + Math.pow(dest.cy - sourcePt.cy, 2));
    const angle = Math.atan2(dest.cy - sourcePt.cy, dest.cx - sourcePt.cx);

    // Offset the curve based on distance
    const controlX = midX - Math.sin(angle) * (dist * 0.3);
    const controlY = midY + Math.cos(angle) * (dist * 0.3);
    const d = `M ${sourcePt.cx} ${sourcePt.cy} Q ${controlX} ${controlY} ${dest.cx} ${dest.cy}`;

    const routeGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');

    // Background trace (soft)
    const bgPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    bgPath.setAttribute('d', d);
    bgPath.setAttribute('fill', 'none');
    bgPath.setAttribute('stroke', 'rgba(201, 166, 90, 0.1)');
    bgPath.setAttribute('stroke-width', '0.3');

    // Active glowing route
    const activePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    activePath.setAttribute('d', d);
    activePath.setAttribute('fill', 'none');
    activePath.setAttribute('stroke', 'url(#route-gradient)');
    activePath.setAttribute('stroke-width', '0.4');
    activePath.setAttribute('filter', 'url(#glow-subtle)');
    activePath.setAttribute('class', `route-path route-${i}`);

    // Travelling particle
    const particle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    particle.setAttribute('r', '0.4');
    particle.setAttribute('fill', '#fff');
    particle.setAttribute('filter', 'url(#glow-strong)');
    particle.setAttribute('class', `route-particle route-particle-${i}`);

    // Destination marker
    const destMarker = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    destMarker.setAttribute('cx', String(dest.cx));
    destMarker.setAttribute('cy', String(dest.cy));
    destMarker.setAttribute('r', '0.6');
    destMarker.setAttribute('fill', '#00D2FF');
    destMarker.setAttribute('filter', 'url(#glow-strong)');
    destMarker.setAttribute('class', `dest-marker dest-${i}`);
    destMarker.style.opacity = '0';

    // Tooltip
    const tooltip = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    tooltip.setAttribute('x', String(dest.cx));
    tooltip.setAttribute('y', String(dest.cy - 1.5));
    tooltip.setAttribute('fill', 'rgba(255,255,255,0.8)');
    tooltip.setAttribute('font-size', '1.8');
    tooltip.setAttribute('font-family', 'Clash Display, sans-serif');
    tooltip.setAttribute('text-anchor', 'middle');
    tooltip.setAttribute('class', `dest-tooltip tooltip-${i}`);
    tooltip.textContent = dest.name;
    tooltip.style.opacity = '0';

    routeGroup.appendChild(bgPath);
    routeGroup.appendChild(activePath);
    routeGroup.appendChild(particle);
    routeGroup.appendChild(destMarker);
    routeGroup.appendChild(tooltip);
    routesContainer.appendChild(routeGroup);
  });

  // Source Pulse Animation
  gsap.to('.globe-source-pulse', {
    scale: 2,
    opacity: 0,
    duration: 2,
    repeat: -1,
    ease: 'power1.out',
    transformOrigin: 'center',
    force3D: true
  });

  gsap.to('.globe-source', {
    opacity: 0.5,
    duration: 1.5,
    yoyo: true,
    repeat: -1,
    ease: 'sine.inOut',
    force3D: true
  });

  // Cinematic Sequence Timeline
  const globeTl = gsap.timeline({ repeat: -1, delay: 1 });

  routesData.forEach((_, i) => {
    const path: any = document.querySelector(`.route-${i}`);
    const length = path.getTotalLength();

    // Setup initial state
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
    gsap.set(`.route-particle-${i}`, { opacity: 0 });

    const routeTl = gsap.timeline();

    // Draw route
    routeTl.to(path, {
      strokeDashoffset: 0,
      duration: 1.5,
      ease: 'power2.inOut'
    }, 0);

    // Animate particle along path
    routeTl.to(`.route-particle-${i}`, {
      opacity: 1,
      duration: 0.1
    }, 0);

    routeTl.to(`.route-particle-${i}`, {
      motionPath: {
        path: path,
        align: path,
        alignOrigin: [0.5, 0.5]
      },
      duration: 1.5,
      ease: 'power2.inOut'
    }, 0);

    // Hide particle at the end
    routeTl.to(`.route-particle-${i}`, {
      opacity: 0,
      duration: 0.2
    }, 1.4);

    // Destination glow & Tooltip
    routeTl.to(`.dest-${i}`, {
      opacity: 1,
      scale: 1.5,
      transformOrigin: 'center',
      duration: 0.4,
      ease: 'back.out(2)'
    }, 1.3);

    routeTl.to(`.tooltip-${i}`, {
      opacity: 1,
      y: -1,
      duration: 0.4,
      ease: 'power2.out'
    }, 1.3);

    // Fade out elements slightly but keep them visible as trace
    routeTl.to([path, `.dest-${i}`, `.tooltip-${i}`], {
      opacity: 0.3,
      duration: 1.5,
      ease: 'power2.inOut',
      delay: 1.5
    });

    globeTl.add(routeTl, i * 0.8); // Stagger sequences by 0.8s
  });
}

// 3D Fade out on scroll for Hero
const heroScrollTl = gsap.timeline({
  scrollTrigger: {
    trigger: '#about',
    scroller: '.snap-container',
    start: 'top top',
    end: 'bottom top',
    scrub: 1
  }
});

// Fade and move up everything
heroScrollTl.to(['.about-text', '.about-locations', '.earth-arc', '.hero-glow'], {
  y: -100,
  opacity: 0,
  ease: 'none'
}, 0);

// Apply the 3D tilt ONLY to the text and locations (prevents cancelling the earth's continuous rotation)
heroScrollTl.to(['.about-text', '.about-locations'], {
  scale: 0.9,
  rotationX: 10,
  transformOrigin: 'top center',
  ease: 'none'
}, 0);

// Scroll Top Button Visibility
gsap.to('#scrollTopBtn', {
  scrollTrigger: {
    trigger: '#testimonials',
    scroller: '.snap-container',
    start: 'top 80%',
    toggleActions: 'play none none reverse'
  },
  opacity: 1,
  pointerEvents: 'auto',
  duration: 0.3
});

// Setup ScrollTrigger for each section to add high 3D feel when scrolling
const sections = gsap.utils.toArray('.snap-section');

sections.forEach((section: any) => {

  // --- 3D OUTGOING SCRUB (FADE OUT ON SCROLL UP) ---
  if (section.id !== 'about') {
    gsap.to(section.children, {
      scrollTrigger: {
        trigger: section,
        scroller: '.snap-container',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      },
      y: -100,
      scale: 0.95,
      rotationX: 10,
      opacity: 0,
      transformOrigin: 'top center',
      ease: 'none'
    });
  }

  // --- PREMIUM INCOMING ANIMATIONS ---

  // Testimonials Section
  if (section.id === 'testimonials') {
    // Title from Left
    gsap.from(section.querySelector('.testimonial-title'), {
      scrollTrigger: { trigger: section, scroller: '.snap-container', start: 'top 70%', toggleActions: 'play none none reverse' },
      x: -150, opacity: 0, duration: 1.5, ease: 'power4.out'
    });
    // Cards from Right
    gsap.from(section.querySelectorAll('.testimonial-card'), {
      scrollTrigger: { trigger: section, scroller: '.snap-container', start: 'top 70%', toggleActions: 'play none none reverse' },
      x: 150, opacity: 0, stagger: 0.15, duration: 1.5, ease: 'power4.out'
    });
  }

  // Why Us Section
  if (section.id === 'whyus') {
    // Header from Left
    gsap.from(section.querySelector('.whyus-header'), {
      scrollTrigger: { trigger: section, scroller: '.snap-container', start: 'top 70%', toggleActions: 'play none none reverse' },
      x: -150, duration: 1.5, ease: 'power4.out'
    });
    // Cards from Bottom
    gsap.from(section.querySelectorAll('.whyus-card'), {
      scrollTrigger: { trigger: section, scroller: '.snap-container', start: 'top 70%', toggleActions: 'play none none reverse' },
      y: 100, stagger: 0.1, duration: 1.2, ease: 'power4.out'
    });
  }

  // Countries Section
  if (section.id === 'countries') {
    // Title from Left
    gsap.from(section.querySelector('.country-title'), {
      scrollTrigger: { trigger: section, scroller: '.snap-container', start: 'top 70%', toggleActions: 'play none none reverse' },
      x: -150, opacity: 0, duration: 1.5, ease: 'power4.out'
    });
  }

  // Videos
  if (section.id === 'videos') {
    // Title from Left
    gsap.from('.video-title', {
      scrollTrigger: { trigger: section, scroller: '.snap-container', start: 'top 70%', toggleActions: 'play none none reverse' },
      x: -150, opacity: 0, duration: 1.5, ease: 'power4.out'
    });
    // Videos from Right
    gsap.from(section.querySelectorAll('.video-carousel > div'), {
      scrollTrigger: { trigger: section, scroller: '.snap-container', start: 'top 70%', toggleActions: 'play none none reverse' },
      x: 150, opacity: 0, stagger: 0.15, duration: 1.5, ease: 'power4.out'
    });
  }

  // Footer / Contact
  if (section.id === 'contact') {
    // Animate content columns
    gsap.from(section.querySelectorAll('.grid > div, .border-t'), {
      scrollTrigger: { trigger: section, scroller: '.snap-container', start: 'top 80%', toggleActions: 'play none none reverse' },
      y: 100, opacity: 0, duration: 1.5, ease: 'power4.out', stagger: 0.1
    });

    // Premium Staggered 3D Watermark letters
    gsap.from('.footer-watermark span', {
      scrollTrigger: { trigger: section, scroller: '.snap-container', start: 'top 75%', toggleActions: 'play none none reverse' },
      y: 150,
      opacity: 0,
      rotationX: -90, // Flips in from backwards
      transformOrigin: 'bottom center',
      stagger: 0.08, // One by one
      duration: 1.5,
      ease: 'back.out(1.5)' // Gives it a subtle, premium bounce at the end
    });
  }

})

// Country Data
const countryData: Record<string, any> = {
  Georgia: {
    overview: "Georgia has become a popular destination for studying MBBS due to its European-standard medical of education, English-medium programs, and globally recognized universities. Medical universities in Georgia are approved by NMC (India), WHO, and other international bodies, offering modern infrastructure and strong clinical exposure. The country provides a safe, student-friendly environment with Indian Food and hostel facility available.",
    reasons: [
      { title: "NMC & WHO Recognized Universities", desc: "Eligible to practice in India after FMGE/NExT." },
      { title: "Affordable Tuition Fees", desc: "compared to private medical univerisities of India." },
      { title: "Medium of instruction is English", desc: "No language barrier for Indian students." },
      { title: "No Donation / Capitation Fees.", desc: "" },
      { title: "American Model of Medical Education", desc: "USMLE integrated Training." },
      { title: "Safe & Student-Friendly Country", desc: "High safety standards and welcoming culture." }
    ],
    universities: [
      { name: "Batumi Shota Rustaveli State University", founded: "1923", location: "Batumi, Georgia" },
      { name: "Caucasus's University", founded: "2004", location: "Tbilisi, Georgia" },
      { name: "Georgian American University", founded: "2001", location: "Tbilisi, Georgia" },
      { name: "Georgian Avicenna Batumi Medical University", founded: "2022", location: "Batumi, Georgia" },
      { name: "Georgian National University(SEU)", founded: "2001", location: "Tbilisi, Georgia" },
      { name: "Tbilisi State Medical University", founded: "1918", location: "Tbilisi, Georgia" }
    ]
  },
  Russia: {
    overview: "Russia is one of the most preferred destinations for pursuing MBBS abroad, offering globally recognized medical education at affordable costs. Russian medical universities are approved by NMC (India) and WHO, with a strong focus on theoretical knowledge and practical clinical training. MBBS programs are taught in English medium, supported by modern infrastructure and experienced faculty.",
    reasons: [
      { title: "Affordable Fees & Living Costs", desc: "compared to other countries." },
      { title: "NMC & WHO Recognized Universities", desc: "with high academic standards." },
      { title: "No Donation / Capitation Fee", desc: "" },
      { title: "English-Medium Education", desc: "with strong clinical exposure." },
      { title: "Effective FMGE/NExT Coaching", desc: "And student-friendly environment for Indians." }
    ],
    universities: [
      { name: "Altai State Medical University", founded: "1954", location: "Barnaul, Russia" },
      { name: "Bashkir State Medical University", founded: "1932", location: "Ufa, Russia" },
      { name: "Chechan State University", founded: "1938", location: "Grozny, Russia" },
      { name: "Crimean Federal University", founded: "2014", location: "Simferopol, Russia" },
      { name: "Ingush State University", founded: "1994", location: "Magas, Russia" },
      { name: "Kabardino Balkarian State University", founded: "1957", location: "Nalchik, Russia" },
      { name: "Kursk State Medical University", founded: "1934", location: "Kursk, Russia" },
      { name: "Mari State University", founded: "1972", location: "Yoshkar-Ola, Russia" },
      { name: "Northwestern State Medical University", founded: "1907", location: "St Petersburg, Russia" },
      { name: "Orel State Medical University", founded: "1931", location: "Oryol, Russia" },
      { name: "Orenburg State Medical University", founded: "1944", location: "Orenburg, Oblast, Russia" },
      { name: "Pskov State Medical University", founded: "2010", location: "Pskov, Russia" },
      { name: "Petrozavodsk State University", founded: "1940", location: "Petrozavodsk, Russia" },
      { name: "Syktyvkar State Medical University", founded: "1972", location: "Syktyvkar, Russia" },
      { name: "Sevastopol State Medical University", founded: "1951", location: "Sevastopol, Russia" },
      { name: "South Ural State Medical University", founded: "1944", location: "Chelyabinsk, Russia" },
      { name: "Samara State Medical University", founded: "1930", location: "Samara, Russia" },
      { name: "Yaroslavl State Medical University", founded: "1944", location: "Yaroslavl, Russia" }
    ]
  },
  Uzbekistan: {
    overview: "Uzbekistan has emerged as one more popular destination for Indian students to study MBBS at affordable fees and quality medical education abroad. universities offers English-medium MBBS programs, modern infrastructure and experienced faculty. Medical universities in Uzbekistan are recognized by NMC (India), WHO, FAIMER, and other international bodies, allowing graduates to appear for FMGE/NExT and pursue higher studies or practice in India and abroad.",
    reasons: [
      { title: "Extremely Affordable", desc: "One of the most budget-friendly destinations for medical education." },
      { title: "English Medium", desc: "Full MBBS course taught in English for international students." },
      { title: "Safe & Welcoming", desc: "A very safe country with a culture that respects international students." },
      { title: "Indian Food Availability", desc: "Most universities provide Indian mess facilities." }
    ],
    universities: [
      { name: "Andijan State Medical Institute", founded: "1955", location: "Andijan, Uzbekistan" },
      { name: "Fergana State University", founded: "1930", location: "Fergana, Uzbekistan" },
      { name: "Tashkent Medical Academy", founded: "1920", location: "Tashkent, Uzbekistan" }
    ]
  },
  Kazakhstan: {
    overview: "Kazakhstan has emerged as a popular destination for Indian students pursuing MBBS abroad due to its affordable fees, quality medical education, and universities recognized by NMC & WHO.The country follows a European education system with strong clinical exposure and well-equipped medical infrastructure. Safe and Student-Friendly Environment. Indian Food & Hostel Facilities available.",
    reasons: [
      { title: "Affordable Fees", desc: "Quality education at a fraction of the cost." },
      { title: "NMC & WHO Recognized", desc: "Universities are globally accepted." },
      { title: "European Education System", desc: "Strong emphasis on clinical and practical training." },
      { title: "Safe Environment", desc: "Safe and student-friendly atmosphere for international students." },
      { title: "Indian Food Availability", desc: "Mess facilities providing Indian cuisine." }
    ],
    universities: [
      { name: "Al-farabi Kazakh National University", founded: "1934", location: "Almaty, Kazakhstan" },
      { name: "Kazakh National Medical Academy", founded: "1931", location: "Almaty, Kazakhstan" },
      { name: "South Kazakhstan Medical Academy", founded: "1979", location: "Shymkent, Kazakhstan" }
    ]
  },
  Kyrgyzstan: {
    overview: "Kyrgyzstan as well has become a popular destination for Indian students pursuing MBBS due to its affordable fees, simple admission process, and NMC & WHO recognized universities.Kyrgyzstan follow an European/Russian curriculum with English-medium teaching, making it convenient for foreign students. The country offers a safe and student-friendly environment, with a good number of Indian students already studying there. Universities are equipped with modern laboratories, hospitals for clinical practice.",
    reasons: [
      { title: "Simple Admission Process", desc: "Hassle-free enrollment for international students." },
      { title: "Affordable Fees", desc: "One of the most budget-friendly options for MBBS." },
      { title: "English-Medium Teaching", desc: "Convenient for students from across the globe." },
      { title: "Modern Infrastructure", desc: "Equipped with latest laboratories and clinical facilities." },
      { title: "Safe & Friendly", desc: "A welcoming environment with a large Indian student community." }
    ],
    universities: [
      { name: "International School of Medicine", founded: "2003", location: "Bishkek, Kyrgyzstan" },
      { name: "Kyrgyz State Medical Academy", founded: "1939", location: "Bishkek, Kyrgyzstan" },
      { name: "Osh State Medical Academy", founded: "1939", location: "Osh, Kyrgyzstan" }
    ]
  },
  Belarus: {
    overview: "Belarus is a popular destination in Eastern Europe for pursuing MBBS due to European education system and government-supported medical universities. The country has several well-established medical universities that offer English-medium MBBS programs for international students with exhaustive practical and clinical training. provides Well-equipped labs, hospitals, and research facilities. making it affordable for Indian & Asian students.",
    reasons: [
      { title: "European Education System", desc: "High standards of academic rigor and discipline." },
      { title: "Government Supported", desc: "Universities are backed by the state, ensuring quality." },
      { title: "English Medium", desc: "Programs tailored for international students." },
      { title: "Affordable Living", desc: "Cost-effective lifestyle for students." }
    ],
    universities: [
      { name: "Belarusian State Medical University", founded: "1921", location: "Minsk, Belarus" },
      { name: "Grodno State Medical University", founded: "1958", location: "Grodno, Belarus" },
      { name: "Vitebsk State Medical University", founded: "1934", location: "Vitebsk, Belarus" }
    ]
  },
  Vietnam: {
    overview: "Vietnam is located in Southeast Asia and has emerged as a preferred destination to Indian students for pursuing MBBS. Vietnamese universities offer affordable tuition fees, English-medium instruction, and are recognized by the NMC and WHO. The country is safe and student-friendly, making it easy for Indian students to adapt. Universities provides integrated coaching on exit exams such as FMGE/NExT, USMLE, and PLAB, enabling them to pursue global medical careers.",
    reasons: [
      { title: "Affordable Tuition Fees", desc: "Low-cost medical education compared to many countries." },
      { title: "NMC & WHO Recognized", desc: "Degrees are valid globally." },
      { title: "Integrated Coaching", desc: "Prep for FMGE/NExT, USMLE, and PLAB included." },
      { title: "Safe & Friendly", desc: "Easy for international students to adapt and thrive." }
    ],
    universities: [
      { name: "Buon Ma Thout Medical University", founded: "2014", location: "Dak Lak, Vietnam" },
      { name: "Dai Nam University", founded: "2007", location: "Hanoi, Vietnam" },
      { name: "Duy Tan University", founded: "1994", location: "Da nang, Vietnam" }
    ]
  },
  Bosnia: {
    overview: "Bosnia & Herzegovina is an emerging and affordable destination for international students pursuing MBBS in European Union. The country offers quality medical education, and a European learning environment at comparatively low tuition fees. Bosnia follows European standards and offer English-medium MBBS programs, making it suitable for Indian and international students. The curriculum emphasizes both theoretical knowledge and practical clinical training as well provides integrated coaching on exit exams such as FMGE/NExT, USMLE, and PLAB.",
    reasons: [
      { title: "European Standard", desc: "Education follows the Bologna process and European norms." },
      { title: "Low Tuition Fees", desc: "Comparatively affordable medical programs." },
      { title: "English-Medium Programs", desc: "No language barrier for international students." },
      { title: "Integrated Exam Prep", desc: "Dedicated coaching for global licensing exams." }
    ],
    universities: [
      { name: "University of East Sarajevo", founded: "1992", location: "East Sarajevo, Bosnia" }
    ]
  },
  'Timor-Leste': {
    overview: "Timor-Leste, also known as East Timor, is a Southeast Asian country located between Indonesia and Australia. It is an emerging destination for medical education, especially for students seeking affordable MBBS options with international exposure. Medical programs are mainly offered in collaboration with international universities. The MBBS/MD curriculum generally follows global standards with a focus on community medicine and primary healthcare.",
    reasons: [
      { title: "International Exposure", desc: "Collaborations with global medical institutions." },
      { title: "Affordable Options", desc: "Budget-friendly medical degrees." },
      { title: "Community Health Focus", desc: "Curriculum emphasizing primary healthcare." },
      { title: "Global Standards", desc: "Education follows international medical norms." }
    ],
    universities: [
      { name: "Timor Leste Medical University", founded: "2021", location: "Dili, Timor Leste" },
      { name: "University of Peace-Unpaz", founded: "2004", location: "Dili, Timor Leste" }
    ]
  }
};

// Modal Logic
const modal = document.getElementById('country-modal');
const modalContent = modal?.querySelector('.modal-content');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.getElementById('close-modal');

document.querySelectorAll('.passport-card').forEach(card => {
  card.addEventListener('click', (e) => {
    const countryName = (e.currentTarget as HTMLElement).dataset.country;
    if (!countryName || !modal || !modalBody || !modalContent) return;

    const data = countryData[countryName];
    if (data) {
      modalBody.innerHTML = `
        <div class="flex flex-col md:flex-row gap-8 mb-10 mt-4">
          <div class="md:w-1/3 flex flex-col items-center justify-center bg-[#0A1C3A]/50 rounded-xl p-6 border border-brand-gold/20 relative overflow-hidden">
            <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1)_0,transparent_70%)]"></div>
            <img src="/flags/${countryName === 'Uzbekistan' ? 'uzbekistan' : countryName}.png" alt="${countryName} Flag" class="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border-[3px] border-brand-gold/50 shadow-[0_0_30px_rgba(212,175,55,0.2)] mb-6 z-10 relative">
            <h3 class="text-3xl font-heading text-brand-gold text-center z-10 relative tracking-wide uppercase">${countryName}</h3>
          </div>
          <div class="md:w-2/3 flex flex-col justify-center">
            <h4 class="text-3xl font-serif italic text-white/90 mb-5">A Brief Overview of ${countryName}</h4>
            <p class="text-white/70 font-special leading-relaxed text-sm md:text-base text-justify">
              ${data.overview}
            </p>
          </div>
        </div>

        <div class="mb-10">
          <h4 class="text-2xl font-serif italic text-brand-gold mb-6 flex items-center gap-3">
            <span class="w-8 h-[1px] bg-brand-gold/50 block"></span>
            Reasons to Study in ${countryName}
            <span class="flex-1 h-[1px] bg-brand-gold/20 block"></span>
          </h4>
          <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/80 font-special text-sm">
            ${data.reasons.map((r: any) => `
              <li class="flex items-start gap-3 bg-white/5 p-4 rounded-lg border border-white/5 hover:border-brand-gold/30 transition-colors">
                <span class="text-brand-gold mt-1 text-lg">✦</span> 
                <div><strong class="text-brand-gold/90 font-heading tracking-wide">${r.title}</strong>${r.desc ? ` <span class="text-white/60 block mt-1">${r.desc}</span>` : ''}</div>
              </li>
            `).join('')}
          </ul>
        </div>

        <div>
          <h4 class="text-2xl font-serif italic text-brand-gold mb-6 flex items-center gap-3">
            <span class="w-8 h-[1px] bg-brand-gold/50 block"></span>
            Top Universities
            <span class="flex-1 h-[1px] bg-brand-gold/20 block"></span>
          </h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            ${data.universities.map((u: any) => `
              <div class="bg-black/40 border border-white/10 rounded-xl p-5 hover:border-brand-gold/50 transition-all hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.5)] group relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <h5 class="font-heading text-lg text-white mb-3 relative z-10">${u.name}</h5>
                <p class="text-brand-gold/80 text-xs font-special mb-1 relative z-10 flex items-center gap-2"><span class="w-1 h-1 rounded-full bg-brand-gold"></span> Founded in: ${u.founded}</p>
                <p class="text-white/50 text-xs font-special relative z-10 flex items-center gap-2"><span class="w-1 h-1 rounded-full bg-white/50"></span> Located: ${u.location}</p>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    } else {
      modalBody.innerHTML = `
        <div class="flex flex-col items-center justify-center py-20 text-center">
          <img src="/flags/${countryName === 'Uzbekistan' ? 'uzbekistan' : countryName}.png" alt="${countryName} Flag" class="w-24 h-24 object-cover rounded-full border-2 border-brand-gold/50 opacity-50 mb-6 grayscale">
          <h3 class="text-2xl font-heading text-brand-gold mb-4 uppercase tracking-wider">${countryName}</h3>
          <p class="text-white/50 font-special text-lg italic">Detailed information coming soon.</p>
        </div>
      `;
    }

    // Show modal
    modal.classList.remove('hidden');
    // Trigger reflow
    void modal.offsetWidth;
    modal.classList.remove('opacity-0');
    modalContent.classList.remove('scale-95', 'opacity-0');
  });
});

const closeModal = () => {
  if (!modal || !modalContent) return;
  modal.classList.add('opacity-0');
  modalContent.classList.add('scale-95', 'opacity-0');
  setTimeout(() => {
    modal.classList.add('hidden');
  }, 300);
};

closeBtn?.addEventListener('click', closeModal);
modal?.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

// Video Modal Logic
const videoModal = document.getElementById('video-modal');
const videoContainer = videoModal?.querySelector('.video-container');
const ytIframe = document.getElementById('youtube-iframe') as HTMLIFrameElement;
const closeVideoBtn = document.getElementById('close-video');

document.querySelectorAll('.video-card').forEach(card => {
  card.addEventListener('click', () => {
    const ytId = (card as HTMLElement).dataset.yt;
    if (!ytId || !videoModal || !videoContainer || !ytIframe) return;

    ytIframe.src = `https://www.youtube.com/embed/${ytId}?autoplay=1`;

    videoModal.classList.remove('hidden');
    void videoModal.offsetWidth;
    videoModal.classList.add('opacity-100');
    videoContainer.classList.add('scale-100', 'opacity-100');
  });
});

const closeVideoModal = () => {
  if (!videoModal || !videoContainer || !ytIframe) return;
  videoModal.classList.remove('opacity-100');
  videoContainer.classList.remove('scale-100', 'opacity-100');
  setTimeout(() => {
    videoModal.classList.add('hidden');
    ytIframe.src = '';
  }, 300);
};

closeVideoBtn?.addEventListener('click', closeVideoModal);
videoModal?.addEventListener('click', (e) => {
  if (e.target === videoModal) closeVideoModal();
});

// Premium Cursor Logic
const cursor = document.getElementById('custom-cursor');
const cursorWrapper = cursor?.querySelector('.cursor-wrapper');
const cursorPlane = cursor?.querySelector('.cursor-plane');

if (cursor && cursorWrapper && cursorPlane) {
  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;
  let velX = 0, velY = 0;
  let lastX = 0, lastY = 0;
  let angle = 0;
  let isMagnetic = false;
  let magneticTarget: { x: number, y: number } | null = null;

  const setX = gsap.quickSetter(cursor, "x", "px");
  const setY = gsap.quickSetter(cursor, "y", "px");
  const setRotate = gsap.quickSetter(cursorPlane, "rotate", "deg");
  const setSkewX = gsap.quickSetter(cursorPlane, "skewX", "deg");
  const setScaleY = gsap.quickSetter(cursorPlane, "scaleY");

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }, { passive: true });

  const updateCursor = () => {
    const targetX = isMagnetic && magneticTarget ? magneticTarget.x : mouseX;
    const targetY = isMagnetic && magneticTarget ? magneticTarget.y : mouseY;

    const dx = targetX - cursorX;
    const dy = targetY - cursorY;

    cursorX += dx * (isMagnetic ? 0.2 : 0.1);
    cursorY += dy * (isMagnetic ? 0.2 : 0.1);

    velX = cursorX - lastX;
    velY = cursorY - lastY;

    setX(cursorX - 12);
    setY(cursorY - 12);

    if (Math.abs(velX) > 0.05 || Math.abs(velY) > 0.05) {
      const targetAngle = Math.atan2(velY, velX) * (180 / Math.PI) + 90;
      let angleDiff = targetAngle - angle;
      if (angleDiff > 180) angleDiff -= 360;
      if (angleDiff < -180) angleDiff += 360;
      angle += angleDiff * 0.12;
      setRotate(angle);

      const speed = Math.sqrt(velX * velX + velY * velY);
      setSkewX(velX > 0 ? -Math.min(speed * 1.2, 15) : Math.min(speed * 1.2, 15));
      setScaleY(1 + Math.min(speed * 0.008, 0.15));
    }

    lastX = cursorX;
    lastY = cursorY;
  };

  gsap.ticker.add(updateCursor);

  document.addEventListener('mouseover', (e) => {
    const target = e.target as HTMLElement;
    const passportCard = target.closest('.passport-card');
    const actionBtn = target.closest('a, button, .video-card, .whatsapp-cursor');
    const earthGlobe = target.closest('.earth-arc');

    if (passportCard) {
      cursor.classList.add('cursor-active');
      isMagnetic = true;
      const rect = passportCard.getBoundingClientRect();
      magneticTarget = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
      gsap.to('.cursor-text', { opacity: 1, duration: 0.3, y: 0, overwrite: true });
    }

    if (actionBtn) {
      cursor.classList.add('cursor-hover');
      gsap.to(cursorPlane, { scale: 1.3, duration: 0.3, ease: "power2.out", overwrite: true });
    }

    if (earthGlobe) {
      cursor.classList.add('cursor-globe');
    }
  }, { passive: true });

  document.addEventListener('mouseout', (e) => {
    const target = e.target as HTMLElement;
    if (target.closest('.passport-card')) {
      cursor.classList.remove('cursor-active');
      isMagnetic = false;
      magneticTarget = null;
      gsap.to('.cursor-text', { opacity: 0, duration: 0.3, y: 10, overwrite: true });
    }
    if (target.closest('a, button, .video-card, .whatsapp-cursor')) {
      cursor.classList.remove('cursor-hover');
      gsap.to(cursorPlane, { scale: 1, duration: 0.3, ease: "power2.out", overwrite: true });
    }
    if (target.closest('.earth-arc')) {
      cursor.classList.remove('cursor-globe');
    }
  }, { passive: true });

  document.addEventListener('mouseleave', () => gsap.to(cursor, { opacity: 0, duration: 0.4, overwrite: true }));
  document.addEventListener('mouseenter', () => gsap.to(cursor, { opacity: 1, duration: 0.4, overwrite: true }));
}

// Performance Optimizations
ScrollTrigger.config({ limitCallbacks: true, ignoreMobileResize: true });
window.addEventListener('load', () => ScrollTrigger.refresh());
