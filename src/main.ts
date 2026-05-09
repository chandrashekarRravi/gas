import './style.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <nav class="nav-header">
    <div class="flex items-center gap-2">
      <img src="/FAAA22.png" alt="Gandharva" style="height: 80px; width: auto; mix-blend-mode: multiply;" />
    </div>
    <div class="flex items-center gap-8 ml-auto">
      <div class="nav-links hidden md:flex items-center gap-6">
        <a href="#about">About</a>
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

        <!-- Right Side: Locations <div class="w-full lg:w-[45%] flex flex-col mt-8 lg:mt-0 about-locations">
          <div class="flex items-center gap-3 mb-4 md:mb-6">
            <svg class="w-6 h-6 md:w-7 md:h-7 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            <div>
              <h3 class="text-xl md:text-2xl font-heading text-brand-gold">Locations of Offices</h3>
              <p class="text-brand-beige/70 text-xs md:text-sm font-special">We are present globally to assist you in every step.</p>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-3 md:gap-4 about-cards">
            <a href="https://wa.me/919876543210?text=Hello%20Gandharva%20Abroad%20Studies,%20I%20would%20like%20to%20know%20more%20about%20your%20services%20in%20Shivamogga." target="_blank" class="glass-panel p-4 md:p-5 rounded-xl md:rounded-2xl h-24 md:h-32 flex flex-col justify-end transition-all group hover:bg-brand-muted/60 hover:scale-105 backdrop-blur-md whatsapp-cursor">
              <h4 class="text-lg md:text-xl font-heading text-brand-beige group-hover:text-brand-gold transition-colors">Shivamogga</h4>
              <div class="h-1 w-6 md:w-8 bg-brand-gold mt-2 transition-all group-hover:w-10"></div>
            </a>
            <a href="https://wa.me/919876543210?text=Hello%20Gandharva%20Abroad%20Studies,%20I%20would%20like%20to%20know%20more%20about%20your%20services%20in%20Mysore." target="_blank" class="glass-panel p-4 md:p-5 rounded-xl md:rounded-2xl h-24 md:h-32 flex flex-col justify-end transition-all group hover:bg-brand-muted/60 hover:scale-105 backdrop-blur-md whatsapp-cursor">
              <h4 class="text-lg md:text-xl font-heading text-brand-beige group-hover:text-brand-gold transition-colors">Mysore</h4>
              <div class="h-1 w-6 md:w-8 bg-brand-gold mt-2 transition-all group-hover:w-10"></div>
            </a>
            <a href="https://wa.me/919876543210?text=Hello%20Gandharva%20Abroad%20Studies,%20I%20would%20like%20to%20know%20more%20about%20your%20services%20in%20Davanagere." target="_blank" class="glass-panel p-4 md:p-5 rounded-xl md:rounded-2xl h-24 md:h-32 flex flex-col justify-end transition-all group hover:bg-brand-muted/60 hover:scale-105 backdrop-blur-md whatsapp-cursor">
              <h4 class="text-lg md:text-xl font-heading text-brand-beige group-hover:text-brand-gold transition-colors">Davanagere</h4>
              <div class="h-1 w-6 md:w-8 bg-brand-gold mt-2 transition-all group-hover:w-10"></div>
            </a>
          </div>
        </div> -->
        

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

        <!-- Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div class="relative rounded-xl overflow-hidden aspect-[3/4] group cursor-pointer border border-white/10 testimonial-card">
            <div class="absolute inset-0 bg-[url('/images/test.jpg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            <div class="absolute inset-0 p-8 flex flex-col justify-end">
              <p class="font-serif italic text-2xl md:text-3xl text-white mb-6 leading-snug">"Gandharva made my MBBS application process seamless and totally stress-free."</p>
              <div class="text-xs tracking-wider uppercase font-special text-white/60">Sarah Jenkins</div>
            </div>
          </div>

          <div class="relative rounded-xl overflow-hidden aspect-[3/4] group cursor-pointer border border-white/10 testimonial-card">
            <div class="absolute inset-0 bg-[url('/images/test.jpg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            <div class="absolute inset-0 p-8 flex flex-col justify-end">
              <p class="font-serif italic text-2xl md:text-3xl text-white mb-6 leading-snug">"Incredible support for visa and accommodation. Highly recommend their services!"</p>
              <div class="text-xs tracking-wider uppercase font-special text-white/60">David Kumar</div>
            </div>
          </div>

          <div class="relative rounded-xl overflow-hidden aspect-[3/4] group cursor-pointer border border-white/10 testimonial-card">
            <div class="absolute inset-0 bg-[url('/images/test.jpg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            <div class="absolute inset-0 p-8 flex flex-col justify-end">
              <p class="font-serif italic text-2xl md:text-3xl text-white mb-6 leading-snug">"A transparent and trustworthy agency. They helped me get into my dream university."</p>
              <div class="text-xs tracking-wider uppercase font-special text-white/60">Aisha Rehman</div>
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
          ${['Russia', 'Georgia', 'Kazakhstan', 'Uzbekistan', 'Belarus', 'Vietnam', 'Bosnia', 'Timor-Leste', 'Mauritius', 'Philippines', 'Kyrgyzstan'].map((country, i) => `
            <div class="passport-card group cursor-pointer relative aspect-[3/4] min-h-[120px] rounded-md shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:scale-105 border border-brand-gold/30 flex flex-col items-center justify-between p-3 md:p-4 overflow-hidden"
                 style="background: linear-gradient(135deg, ${i % 3 === 0 ? '#4A0E17, #1A0407' : i % 3 === 1 ? '#0B291A, #020B05' : '#0A1C3A, #020710'}); box-shadow: inset 0 0 30px rgba(0,0,0,0.8), 0 10px 30px rgba(0,0,0,0.5);">
              
              <!-- Fabric texture overlay -->
              <div class="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E');"></div>
              
              <!-- Spine detailing -->
              <div class="absolute left-0 top-0 bottom-0 w-2 bg-black/40 border-r border-brand-gold/10"></div>
              
              <div class="text-brand-gold/90 uppercase tracking-[0.15em] text-[8px] md:text-[10px] font-heading text-center mt-2 z-10 w-full px-2" style="text-shadow: 0 1px 2px rgba(0,0,0,0.8);">${country}</div>
              
              <div class="w-10 h-10 md:w-14 md:h-14 rounded-full border-[1.5px] border-brand-gold/60 flex items-center justify-center bg-brand-gold/5 z-10 relative">
                <!-- Inner crest detailing -->
                <div class="absolute inset-1 rounded-full border-[0.5px] border-brand-gold/30 border-dashed"></div>
                <svg class="w-5 h-5 md:w-7 md:h-7 text-brand-gold/80" fill="currentColor" viewBox="0 0 24 24" style="filter: drop-shadow(0 1px 2px rgba(0,0,0,0.5));"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
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

    <!-- Videos Section -->
    <section id="videos" class="snap-section bg-brand-navy">
      <div class="max-w-7xl mx-auto px-6 w-full">
        <h2 class="text-4xl md:text-5xl font-heading mb-16 text-center video-title text-brand-gold">Campus Tours</h2>
        <div class="flex gap-6 overflow-hidden video-carousel">
           <div class="min-w-[60vw] md:min-w-[40vw] h-[40vh] glass-panel rounded-3xl flex items-center justify-center cursor-pointer hover:scale-105 transition-transform bg-brand-muted/30">
              <div class="w-16 h-16 rounded-full bg-brand-gold/20 flex items-center justify-center backdrop-blur-md text-brand-gold text-xl pl-1">▶</div>
           </div>
           <div class="min-w-[60vw] md:min-w-[40vw] h-[40vh] glass-panel rounded-3xl flex items-center justify-center cursor-pointer hover:scale-105 transition-transform bg-brand-muted/30">
              <div class="w-16 h-16 rounded-full bg-brand-gold/20 flex items-center justify-center backdrop-blur-md text-brand-gold text-xl pl-1">▶</div>
           </div>
           <div class="min-w-[60vw] md:min-w-[40vw] h-[40vh] glass-panel rounded-3xl flex items-center justify-center cursor-pointer hover:scale-105 transition-transform bg-brand-muted/30">
              <div class="w-16 h-16 rounded-full bg-brand-gold/20 flex items-center justify-center backdrop-blur-md text-brand-gold text-xl pl-1">▶</div>
           </div>
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
        
        <div class="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 w-full mt-12">
          <!-- Col 1 -->
          <div class="col-span-1 md:col-span-4 flex flex-col gap-6">
            <div class="flex items-center gap-3">
              <div class="flex items-center gap-2">
                <img src="/FAAA22.png" alt="Gandharva" style="height: 48px; width: auto; mix-blend-mode: multiply;" />
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
            <a href="#" class="text-slate-500 hover:text-[#0B1C3D] text-sm font-special transition-colors">Brand</a>
            <a href="#" class="text-slate-500 hover:text-[#0B1C3D] text-sm font-special transition-colors">Contact</a>
          </div>

          <!-- Col 3 -->
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

          <!-- Col 4 -->
          <div class="col-span-1 md:col-span-4 flex flex-col gap-4 pl-0 md:pl-8">
            <h4 class="font-bold text-[#0B1C3D] font-heading mb-2 text-[15px]">Newsletter</h4>
            <p class="text-sm text-slate-500 font-special leading-relaxed max-w-sm">
              Stay ahead with abroad studies tips and university admission strategies that drive results.
            </p>
            <div class="relative mt-2 max-w-sm">
              <span class="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 font-special text-sm">@</span>
              <input type="email" placeholder="Enter your email..." class="w-full bg-white border border-slate-200/60 rounded-full py-3.5 pl-12 pr-16 text-sm focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] transition-all text-slate-700 shadow-sm font-special placeholder:text-slate-400">
              <button class="absolute right-1.5 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#0066FF] text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors shadow-sm">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </div>
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
    transformOrigin: 'center'
  });

  gsap.to('.globe-source', {
    opacity: 0.5,
    duration: 1.5,
    yoyo: true,
    repeat: -1,
    ease: 'sine.inOut'
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
