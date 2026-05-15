import './style.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <nav class="nav-header">
    <div class="flex items-center gap-2">
      <a href="/">
        <img src="/logo.png" alt="Gandharva" style="height: 80px; width: auto;" />
      </a>
    </div>
    <div class="flex items-center gap-8 ml-auto">
      <div class="nav-links hidden md:flex items-center gap-6">
        <a href="/about.html">About</a>
        <a href="/#testimonials">Testimonials</a>
        <a href="/#countries">Countries</a>
        <a href="/#whyus">Why Us</a>
        <a href="/#contact">Contact</a>
      </div>
      <div>
        <a href="/#contact" class="btn-primary">Apply Now</a>
      </div>
    </div>
  </nav>

  <div class="pt-32 pb-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto text-white min-h-screen">
    
    <!-- Hero Section -->
    <div class="mb-24 opacity-0 translate-y-10 brand-fade-in text-center">
      <h1 class="text-6xl md:text-8xl font-heading text-brand-gold mb-6 tracking-tight uppercase">Our <span class="italic font-serif normal-case">Brand</span> Identity</h1>
      <p class="text-xl md:text-2xl text-brand-beige/80 leading-relaxed font-special max-w-3xl mx-auto">
        More than just a consultancy, Gandharva is a promise of quality, trust, and global excellence in medical education.
      </p>
    </div>

    <!-- Core Values Section -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
      <div class="brand-card p-10 rounded-[40px] bg-white/[0.03] border border-white/10 hover:border-brand-gold/30 transition-all duration-500 opacity-0 translate-y-10 brand-fade-in group">
        <div class="w-16 h-16 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-8 group-hover:scale-110 transition-transform">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
        </div>
        <h3 class="text-2xl font-heading text-brand-gold mb-4 uppercase">Trust</h3>
        <p class="text-brand-beige/70 font-special leading-relaxed">We build lasting relationships through transparency and honesty in every admission process.</p>
      </div>

      <div class="brand-card p-10 rounded-[40px] bg-white/[0.03] border border-white/10 hover:border-brand-gold/30 transition-all duration-500 opacity-0 translate-y-10 brand-fade-in group">
        <div class="w-16 h-16 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-8 group-hover:scale-110 transition-transform">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
        </div>
        <h3 class="text-2xl font-heading text-brand-gold mb-4 uppercase">Excellence</h3>
        <p class="text-brand-beige/70 font-special leading-relaxed">Dedicated to providing only the best medical universities and guidance for our students.</p>
      </div>

      <div class="brand-card p-10 rounded-[40px] bg-white/[0.03] border border-white/10 hover:border-brand-gold/30 transition-all duration-500 opacity-0 translate-y-10 brand-fade-in group">
        <div class="w-16 h-16 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-8 group-hover:scale-110 transition-transform">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
        </div>
        <h3 class="text-2xl font-heading text-brand-gold mb-4 uppercase">Compassion</h3>
        <p class="text-brand-beige/70 font-special leading-relaxed">Every student's dream is treated with the care and attention it deserves.</p>
      </div>
    </div>

    <!-- Visual Identity -->
    <div class="mb-32 opacity-0 translate-y-10 brand-fade-in">
       <div class="flex flex-col md:flex-row items-center gap-16">
          <div class="w-full md:w-1/2">
            <h2 class="text-4xl md:text-5xl font-heading text-white mb-8 tracking-wide">Our <span class="text-brand-gold uppercase">Visual Identity</span></h2>
            <div class="space-y-8">
              <div class="flex items-start gap-6">
                <div class="w-12 h-12 rounded-full bg-brand-gold flex-shrink-0"></div>
                <div>
                  <h4 class="text-xl font-heading text-brand-gold mb-2">Brand Gold (#C9A65A)</h4>
                  <p class="text-brand-beige/60 font-special">Symbolizing excellence, prestige, and the bright future of our students.</p>
                </div>
              </div>
              <div class="flex items-start gap-6">
                <div class="w-12 h-12 rounded-full bg-[#0B1C3D] border border-white/10 flex-shrink-0"></div>
                <div>
                  <h4 class="text-xl font-heading text-white mb-2">Midnight Navy (#0B1C3D)</h4>
                  <p class="text-brand-beige/60 font-special">Representing stability, wisdom, and professional integrity.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2 p-12 rounded-[50px] bg-white/[0.02] border border-white/10 flex items-center justify-center">
            <img src="/logo.png" alt="Gandharva Logo" class="max-w-[200px] h-auto" />
          </div>
       </div>
    </div>

    <!-- Brand Promise -->
    <div class="text-center py-24 rounded-[60px] bg-brand-gold text-[#0B1C3D] opacity-0 translate-y-10 brand-fade-in">
       <h2 class="text-4xl md:text-6xl font-heading mb-8 uppercase tracking-tighter">"From Dream to Departure,<br/>Learning Beyond Borders"</h2>
       <p class="text-lg md:text-xl font-special font-bold opacity-80">— The Gandharva Promise</p>
    </div>

  </div>

  <!-- Footer Section -->
  <section id="contact" class="bg-[#e8e2d8] relative overflow-hidden flex items-center pt-24 pb-12 mt-auto scroll-up-cursor" onclick="if(event.target.closest('a') || event.target.closest('input') || event.target.closest('button')) return; window.scrollTo({top: 0, behavior: 'smooth'})">
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
          <a href="#" class="text-slate-500 hover:text-[#0B1C3D] text-sm font-special transition-colors">Contact</a>
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
`

gsap.to('.brand-fade-in', {
  y: 0,
  opacity: 1,
  duration: 1.2,
  stagger: 0.2,
  ease: 'power3.out',
  delay: 0.2
})

// Footer Animation
gsap.from('#contact .grid > div, #contact .border-t', {
  scrollTrigger: { trigger: '#contact', start: 'top 80%', toggleActions: 'play none none reverse' },
  y: 100, opacity: 0, duration: 1.5, ease: 'power4.out', stagger: 0.1
});

gsap.from('#contact .footer-watermark span', {
  scrollTrigger: { trigger: '#contact', start: 'top 75%', toggleActions: 'play none none reverse' },
  y: 150,
  opacity: 0,
  rotationX: -90,
  transformOrigin: 'bottom center',
  stagger: 0.08,
  duration: 1.5,
  ease: 'back.out(1.5)'
});
