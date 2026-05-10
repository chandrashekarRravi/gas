import './style.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <nav class="nav-header">
    <div class="flex items-center gap-2">
      <a href="/">
        <img src="/FAAA22.png" alt="Gandharva" style="height: 80px; width: auto; mix-blend-mode: multiply;" />
      </a>
    </div>
    <div class="flex items-center gap-8 ml-auto">
      <div class="nav-links hidden md:flex items-center gap-6">
        <a href="/about.html" class="text-brand-gold">About</a>
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
    
    <!-- Hero Text Section -->
    <div class="mb-16 opacity-0 translate-y-10 about-fade-in flex flex-col items-center text-center mt-8">
      <h1 class="text-6xl md:text-7xl lg:text-8xl font-heading text-brand-gold mb-8 tracking-wide">About Us</h1>
      <p class="text-lg md:text-xl text-brand-beige/80 leading-relaxed font-special max-w-3xl">
        Gandharva Abroad Studies is dedicated to helping aspiring students achieve their dream of studying medical course overseas. We provide trusted guidance, transparent admission services, and complete support from counselling to enrollment in reputed government universities Abroad. Our aim is to make quality international education accessible and affordable for every deserving student.
      </p>
      
      <!-- Button matching the inspiration -->
      <a href="#mission" class="mt-12 bg-brand-gold text-[#0B1C3D] hover:bg-[#d4b46a] px-8 py-3.5 rounded-2xl font-heading font-bold text-lg transition-transform hover:scale-105 shadow-[0_0_20px_rgba(201,166,90,0.3)] tracking-wide">
        See Our Mission
      </a>
    </div>

    <!-- Image Collage Section -->
    <div class="relative w-full h-[450px] md:h-[650px] mb-32 opacity-0 translate-y-10 about-fade-in max-w-[1400px] mx-auto collage-section">
      
      <!-- Central Large Image -->
      <div class="collage-center absolute left-[50%] bottom-0 -translate-x-1/2 w-[75%] md:w-[55%] h-[80%] rounded-t-[40px] md:rounded-t-[60px] overflow-hidden z-10 shadow-[0_-20px_40px_rgba(0,0,0,0.4)] border-t border-x border-brand-gold/10 bg-brand-muted/30 group backdrop-blur-md">
        <img src="/images/about-main.jpg" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" onerror="this.style.display='none'" />
        <div class="absolute inset-0 flex items-center justify-center -z-10">
           <svg class="w-16 h-16 text-brand-gold/20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
        </div>
      </div>

      <!-- Left Tall Image -->
      <div class="collage-left absolute left-[2%] md:left-[10%] top-[5%] md:top-[10%] w-[35%] md:w-[22%] h-[60%] rounded-[30px] overflow-hidden z-20 shadow-2xl border border-brand-gold/10 bg-brand-muted/40 group backdrop-blur-md">
        <img src="/images/about-left.jpg" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" onerror="this.style.display='none'" />
        <div class="absolute inset-0 flex items-center justify-center -z-10">
           <svg class="w-12 h-12 text-brand-gold/20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
        </div>
      </div>

      <!-- Bottom Left Square Image -->
      <div class="collage-bl absolute left-[0%] md:left-[5%] bottom-[5%] md:bottom-[10%] w-[25%] md:w-[12%] aspect-square rounded-[24px] overflow-hidden z-30 shadow-xl border border-brand-gold/10 bg-brand-muted/50 group backdrop-blur-md">
        <img src="/images/about-bl.jpg" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" onerror="this.style.display='none'" />
        <div class="absolute inset-0 flex items-center justify-center -z-10">
           <svg class="w-8 h-8 text-brand-gold/20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
        </div>
      </div>

      <!-- Right Landscape Image -->
      <div class="collage-right absolute right-[2%] md:right-[8%] top-[20%] md:top-[25%] w-[40%] md:w-[26%] h-[30%] md:h-[28%] rounded-[30px] overflow-hidden z-20 shadow-2xl border border-brand-gold/10 bg-brand-muted/40 group backdrop-blur-md">
        <img src="/images/about-right.jpg" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" onerror="this.style.display='none'" />
        <div class="absolute inset-0 flex items-center justify-center -z-10">
           <svg class="w-10 h-10 text-brand-gold/20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
        </div>
      </div>

      <!-- Bottom Right Small Element -->
      <div class="collage-br absolute right-[5%] md:right-[15%] bottom-[0%] md:bottom-[0%] w-[20%] md:w-[14%] h-[20%] rounded-t-[30px] overflow-hidden z-0 border-t border-x border-brand-gold/10 bg-brand-muted/50 group backdrop-blur-md">
        <img src="/images/about-br.jpg" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" onerror="this.style.display='none'" />
        <div class="absolute inset-0 flex items-center justify-center -z-10">
           <svg class="w-6 h-6 text-brand-gold/20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
        </div>
      </div>
      
    </div>

    <!-- Stats Section -->
    <div class="w-full mt-16 mb-32 stat-section">
      <div class="flex flex-col md:flex-row items-stretch justify-between w-full">
        
        <!-- Stat 1 -->
        <div class="flex-1 relative w-full group overflow-hidden border-b border-white/10 md:border-b-0 md:border-l border-white/10 transition-colors duration-500 hover:border-brand-gold/50 hover:bg-white/[0.02]">
          <div class="stat-item flex flex-col items-start justify-center px-6 md:px-8 lg:px-12 py-16 md:py-24 w-full h-full">
            <div class="flex items-start mb-1">
              <span class="text-[5rem] md:text-[6rem] lg:text-[7rem] font-serif text-white leading-[0.8] tracking-tighter">500</span>
              <span class="text-3xl md:text-5xl font-serif text-white leading-none mt-1 md:mt-2 ml-1">+</span>
            </div>
            <p class="text-white/80 font-special font-semibold text-sm md:text-[15px] tracking-wide mt-6">Successful Placements</p>
          </div>
        </div>

        <!-- Stat 2 -->
        <div class="flex-1 relative w-full group overflow-hidden border-b border-white/10 md:border-b-0 md:border-l border-white/10 transition-colors duration-500 hover:border-brand-gold/50 hover:bg-white/[0.02]">
          <div class="stat-item flex flex-col items-start justify-center px-6 md:px-8 lg:px-12 py-16 md:py-24 w-full h-full">
            <div class="flex items-start mb-1">
              <span class="text-[5rem] md:text-[6rem] lg:text-[7rem] font-serif text-white leading-[0.8] tracking-tighter">150</span>
              <span class="text-3xl md:text-5xl font-serif text-white leading-none mt-1 md:mt-2 ml-1">+</span>
            </div>
            <p class="text-white/80 font-special font-semibold text-sm md:text-[15px] tracking-wide mt-6">Partner Universities</p>
          </div>
        </div>

        <!-- Stat 3 -->
        <div class="flex-1 relative w-full group overflow-hidden border-b border-white/10 md:border-b-0 md:border-l border-white/10 transition-colors duration-500 hover:border-brand-gold/50 hover:bg-white/[0.02]">
          <div class="stat-item flex flex-col items-start justify-center px-6 md:px-8 lg:px-12 py-16 md:py-24 w-full h-full">
            <div class="flex items-start mb-1">
              <span class="text-[5rem] md:text-[6rem] lg:text-[7rem] font-serif text-white leading-[0.8] tracking-tighter">98</span>
              <span class="text-3xl md:text-5xl font-serif text-white leading-none mt-1 md:mt-2 ml-1">%</span>
            </div>
            <p class="text-white/80 font-special font-semibold text-sm md:text-[15px] tracking-wide mt-6">Satisfied Students</p>
          </div>
        </div>

        <!-- Stat 4 -->
        <div class="flex-1 relative w-full group overflow-hidden md:border-l md:border-r border-white/10 transition-colors duration-500 hover:border-brand-gold/50 hover:bg-white/[0.02]">
          <div class="stat-item flex flex-col items-start justify-center px-6 md:px-8 lg:px-12 py-16 md:py-24 w-full h-full">
            <div class="flex items-start mb-1">
              <span class="text-[5rem] md:text-[6rem] lg:text-[7rem] font-serif text-white leading-[0.8] tracking-tighter">20</span>
              <span class="text-3xl md:text-5xl font-serif text-white leading-none mt-1 md:mt-2 ml-1">+</span>
            </div>
            <p class="text-white/80 font-special font-semibold text-sm md:text-[15px] tracking-wide mt-6">Countries Worldwide</p>
          </div>
        </div>

      </div>
    </div>

    <div class="grid md:grid-cols-2 gap-16 mb-24" id="mission">
      <div class="glass-panel p-10 rounded-3xl border border-brand-gold/20 bg-brand-muted/20 opacity-0 translate-y-10 about-fade-in">
        <h2 class="text-3xl font-heading text-brand-gold mb-6">OUR MISSION</h2>
        <p class="text-brand-beige/80 text-lg leading-relaxed font-special italic">
          "To be a trusted bridge between students and global education opportunities. We envision a generation of skilled professionals who learn from the best universities worldwide and contribute to building a stronger, educated India."
        </p>
      </div>

      <div class="glass-panel p-10 rounded-3xl border border-brand-gold/20 bg-brand-muted/20 opacity-0 translate-y-10 about-fade-in">
        <h2 class="text-3xl font-heading text-brand-gold mb-6">OUR VISION</h2>
        <p class="text-brand-beige/80 text-lg leading-relaxed font-special italic">
          "Our mission is to guide students at every step of their study abroad journey from counselling to admission while also providing pre-arrival support with honesty, care, and professionalism. We focus on offering reliable information, affordable solutions, and continuous support to help students study confidently and succeed globally."
        </p>
      </div>
    </div>

    <div class="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 max-w-6xl mx-auto opacity-0 translate-y-10 about-fade-in relative z-10 mt-16 mb-24">
      
      <!-- Image Side with custom shape (Comma / Quote Mark shape) -->
      <div class="w-64 h-[340px] md:w-[320px] md:h-[420px] relative flex-shrink-0 z-20 group">
        <!-- Offset decorative shadow shape -->
        <div class="absolute -bottom-4 -left-4 w-full h-full bg-brand-gold/20" style="border-radius: 160px 160px 160px 20px;"></div>
        
        <div class="absolute inset-0 bg-brand-gold shadow-2xl transition-transform duration-500 group-hover:-translate-y-2" style="border-radius: 160px 160px 160px 20px;">
          
          <img src="/images/ceo.jpg" alt="Gopal Krishna" 
               class="absolute inset-0 w-full h-full object-cover z-10"
               style="border-radius: 160px 160px 160px 20px;"
               onerror="this.style.display='none'" />
               
          <!-- Fallback icon -->
          <div class="absolute inset-0 flex items-center justify-center z-0">
            <svg class="w-24 h-24 text-black/10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
          </div>
        </div>
      </div>

      <!-- Quote Card Side -->
      <div class="flex-1 flex flex-col justify-center relative w-full max-w-2xl mt-8 md:mt-0">
        
        <!-- Floating opening quote -->
        <div class="text-brand-gold text-7xl md:text-8xl font-serif leading-none h-10 md:-ml-4">“</div>
        
        <!-- The actual text box -->
        <div class="bg-brand-muted/10 backdrop-blur-sm p-8 md:p-10 rounded-[30px] border border-brand-gold/10 relative z-10 shadow-xl">
          <div class="space-y-6 text-brand-beige/90 text-lg md:text-xl leading-relaxed font-special font-medium italic">
            <p>
              At Gandharva Abroad Consultancy, we understand that sending your child abroad is more than a decision. It is a journey filled with hope and trust. Guided by our belief, "From Dream to Departure, Learning Beyond Borders," we stand by your family at every step, not just as consultants but as partners in your child's future.
            </p>
            <p>
              With care, clarity, and experience, we help transform your child's aspirations into a smooth and meaningful journey. Your child's dream matters to you, and to us.
            </p>
            <p>
              Thank you to our incredible team, loyal clients, and supportive community we are just getting started.
            </p>
          </div>
        </div>

        <!-- Floating closing quote -->
        <div class="text-right text-brand-gold text-7xl md:text-8xl font-serif leading-none h-10 -mt-6 mr-8 md:mr-12 relative z-20">”</div>

        <!-- Author Name -->
        <div class="mt-8 pt-4 ml-4 md:ml-8">
          <h3 class="text-3xl font-heading text-brand-gold tracking-wide">— Gopal Krishna</h3>
          <p class="text-brand-beige/60 font-special text-sm tracking-widest uppercase mt-2 ml-10">CEO</p>
        </div>
      </div>
    </div>

  </div>

  <section class="bg-[#e8e2d8] py-12 w-full mt-auto">
    <div class="max-w-[85rem] mx-auto px-6 w-full flex flex-col md:flex-row justify-between items-center text-sm text-[#0B1C3D] font-special">
      <p>©2026 Gandharva All rights reserved</p>
      <div class="flex gap-8 mt-4 md:mt-0">
        <a href="#" class="hover:text-brand-gold transition-colors">Privacy Policy</a>
        <a href="#" class="hover:text-brand-gold transition-colors">Terms of Service</a>
      </div>
    </div>
  </section>
`

gsap.to('.about-fade-in', {
  y: 0,
  opacity: 1,
  duration: 1.2,
  stagger: 0.2,
  ease: 'power3.out',
  delay: 0.2
})

const burstTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.collage-section',
    start: 'top 85%',
    end: 'top 20%',
    scrub: 1.5,
  }
})

burstTl.from('.collage-left', { x: '15vw', y: '10vh', rotation: 15, scale: 0.8, opacity: 0 }, 0)
       .from('.collage-right', { x: '-15vw', y: '10vh', rotation: -15, scale: 0.8, opacity: 0 }, 0)
       .from('.collage-bl', { x: '20vw', y: '-15vh', rotation: 25, scale: 0.6, opacity: 0 }, 0)
       .from('.collage-br', { x: '-20vw', y: '-15vh', rotation: -25, scale: 0.6, opacity: 0 }, 0)
       .from('.collage-center', { scale: 0.85, y: '5vh', opacity: 0 }, 0)

const statTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.stat-section',
    start: 'top 85%',
    end: 'top 30%',
    scrub: 1.5,
  }
})

statTl.from('.stat-item', {
  y: 250,
  opacity: 0,
  stagger: 0.3,
  duration: 1.5,
  ease: 'power3.out'
})
