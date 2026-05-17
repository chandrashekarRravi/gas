import './style.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

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

    <!-- Scroll Pinned Container -->
    <div class="scroll-tabs-container max-w-7xl mx-auto w-full mb-32 px-4 md:px-8 mt-24" id="mission">
      
      <!-- Header Section -->
      <div class="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12 mb-16 opacity-0 translate-y-10 about-fade-in">
        <h2 class="text-5xl md:text-7xl font-heading text-white leading-[1.1] max-w-2xl tracking-wide">
          We Are Here<br/>For A Simple Reason!
        </h2>
        <p class="text-brand-beige/70 font-special text-sm md:text-base leading-relaxed max-w-md md:mt-4">
          To provide trusted guidance, transparent admission services, and complete support from counselling to enrollment in reputed government universities Abroad.
        </p>
      </div>

      <!-- Tabs Section -->
      <div class="flex flex-col lg:flex-row gap-16 relative">
      
      <!-- Tabs Sidebar -->
      <div class="hidden lg:flex w-full lg:w-1/3 flex-col gap-4 sticky top-32 h-fit">
        <!-- Tab 1 -->
        <button class="tab-btn active relative w-full text-left px-6 py-5 rounded-xl bg-brand-gold text-[#0a0a0a] font-bold font-heading text-xl flex items-center gap-5" data-target="tab-mission">
          <span class="tab-num w-8 h-8 rounded-full bg-[#0a0a0a] text-brand-gold flex items-center justify-center text-sm">1</span>
          Our Mission
          <div class="tab-pointer absolute -right-[14px] top-1/2 -translate-y-1/2 w-0 h-0 border-y-[24px] border-y-transparent border-l-[15px] border-l-brand-gold block"></div>
        </button>
        
        <!-- Tab 2 -->
        <button class="tab-btn relative w-full text-left px-6 py-5 rounded-xl bg-white/5 text-white/60 font-bold font-heading text-xl flex items-center gap-5" data-target="tab-vision">
          <span class="tab-num w-8 h-8 rounded-full bg-white/10 text-white/60 flex items-center justify-center text-sm">2</span>
          Our Vision
          <div class="tab-pointer absolute -right-[14px] top-1/2 -translate-y-1/2 w-0 h-0 border-y-[24px] border-y-transparent border-l-[15px] border-l-brand-gold hidden"></div>
        </button>

        <!-- Tab 3 -->
        <button class="tab-btn relative w-full text-left px-6 py-5 rounded-xl bg-white/5 text-white/60 font-bold font-heading text-xl flex items-center gap-5" data-target="tab-faq">
          <span class="tab-num w-8 h-8 rounded-full bg-white/10 text-white/60 flex items-center justify-center text-sm">3</span>
          FAQ
          <div class="tab-pointer absolute -right-[14px] top-1/2 -translate-y-1/2 w-0 h-0 border-y-[24px] border-y-transparent border-l-[15px] border-l-brand-gold hidden"></div>
        </button>
      </div>

      <!-- Tab Content Area -->
      <div class="w-full lg:w-2/3 flex flex-col gap-32">
        
        <!-- Content 1: Mission -->
        <div id="tab-mission" class="tab-content w-full">
          <h3 class="text-3xl md:text-5xl font-heading text-white leading-tight mb-6">Guiding students at every step of their study abroad journey.</h3>
          <p class="text-brand-beige/80 font-special text-base md:text-lg leading-relaxed mb-8">
            Our mission is to guide students at every step of their study abroad journey from counselling to admission while also providing pre-arrival support with honesty, care, and professionalism. We focus on offering reliable information, affordable solutions, and continuous support to help students study confidently and succeed globally.
          </p>
          <div class="w-full h-48 md:h-64 rounded-3xl overflow-hidden bg-brand-muted/30">
            <img src="/images/mission.jpg" alt="Mission" class="w-full h-full object-cover" onerror="this.style.display='none'">
          </div>
        </div>

        <!-- Content 2: Vision -->
        <div id="tab-vision" class="tab-content w-full">
          <h3 class="text-3xl md:text-5xl font-heading text-white leading-tight mb-6">Building a generation of skilled professionals for a stronger India.</h3>
          <p class="text-brand-beige/80 font-special text-base md:text-lg leading-relaxed mb-8">
            To be a trusted bridge between students and global education opportunities. We envision a generation of skilled professionals who learn from the best universities worldwide and contribute to building a stronger, educated India.
          </p>
          <div class="w-full h-48 md:h-64 rounded-3xl overflow-hidden bg-brand-muted/30">
            <img src="/images/vision.jpg" alt="Vision" class="w-full h-full object-cover" onerror="this.style.display='none'">
          </div>
        </div>

        <!-- Content 3: FAQ -->
        <div id="tab-faq" class="tab-content w-full">
          <h3 class="text-3xl md:text-5xl font-heading text-white leading-tight mb-6">Frequently Asked Questions.</h3>
          <div class="space-y-6 text-brand-beige/80 font-special mt-8">
            
            <div class="border-b border-white/10 pb-4">
              <h4 class="text-xl text-brand-gold font-heading mb-2">How do I start the application process?</h4>
              <p class="text-sm md:text-base leading-relaxed text-white/70">Simply contact our counselors. We will evaluate your profile and suggest the best universities tailored to your career goals.</p>
            </div>
            
            <div class="border-b border-white/10 pb-4">
              <h4 class="text-xl text-brand-gold font-heading mb-2">Do you provide visa assistance?</h4>
              <p class="text-sm md:text-base leading-relaxed text-white/70">Yes, we provide end-to-end support including documentation, interview preparation, and visa filing.</p>
            </div>

            <div class="border-b border-white/10 pb-4">
              <h4 class="text-xl text-brand-gold font-heading mb-2">Is there post-arrival support?</h4>
              <p class="text-sm md:text-base leading-relaxed text-white/70">Absolutely. We help with accommodation, university registration, and local orientation once you arrive at your destination.</p>
            </div>

          </div>
        </div>

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
  </div>
  
  <!-- Footer Section -->
  <section id="contact" class="bg-[#0B1B3D] relative overflow-hidden flex items-center pt-24 pb-12 mt-auto scroll-up-cursor" onclick="if(event.target.closest('a') || event.target.closest('input') || event.target.closest('button')) return; window.scrollTo({top: 0, behavior: 'smooth'})">
    <!-- Watermark Background -->
    <div class="absolute inset-0 flex items-start justify-center pointer-events-none select-none z-0 overflow-hidden pt-12 md:pt-16 footer-watermark">
      <span class="text-[18vw] font-heading font-bold text-brand-beige/5 tracking-tighter whitespace-nowrap leading-none inline-block">G</span>
      <span class="text-[18vw] font-heading font-bold text-brand-beige/5 tracking-tighter whitespace-nowrap leading-none inline-block">a</span>
      <span class="text-[18vw] font-heading font-bold text-brand-beige/5 tracking-tighter whitespace-nowrap leading-none inline-block">n</span>
      <span class="text-[18vw] font-heading font-bold text-brand-beige/5 tracking-tighter whitespace-nowrap leading-none inline-block">d</span>
      <span class="text-[18vw] font-heading font-bold text-brand-beige/5 tracking-tighter whitespace-nowrap leading-none inline-block">h</span>
      <span class="text-[18vw] font-heading font-bold text-brand-beige/5 tracking-tighter whitespace-nowrap leading-none inline-block">a</span>
      <span class="text-[18vw] font-heading font-bold text-brand-beige/5 tracking-tighter whitespace-nowrap leading-none inline-block">r</span>
      <span class="text-[18vw] font-heading font-bold text-brand-beige/5 tracking-tighter whitespace-nowrap leading-none inline-block">v</span>
      <span class="text-[18vw] font-heading font-bold text-brand-beige/5 tracking-tighter whitespace-nowrap leading-none inline-block">a</span>
    </div>
    
    <div class="max-w-[85rem] mx-auto px-6 w-full z-10 relative flex flex-col h-full justify-center">
      
      <div class="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-6 w-full mt-12">
        <!-- Col 1 -->
        <div class="col-span-1 md:col-span-3 flex flex-col gap-6">
          <div class="flex items-center gap-3">
            <div class="flex items-center gap-2">
              <img src="/logo.png" alt="Gandharva" style="height: 48px; width: auto;" />
            </div>
            <span class="text-2xl font-heading font-bold text-brand-gold">Gandharva</span>
          </div>
          <p class="text-sm text-brand-beige/70 font-special leading-relaxed max-w-[260px]">
            Strategic counseling and guidance tailored to drive admission success in top medical universities.
          </p>
        </div>

        <!-- Col 2 -->
        <div class="col-span-1 md:col-span-2 flex flex-col gap-4">
          <h4 class="font-bold text-brand-gold font-heading mb-2 text-[15px]">Company</h4>
          <a href="#" class="text-brand-beige/70 hover:text-brand-gold text-sm font-special transition-colors">Achievements</a>
          <a href="#" class="text-brand-beige/70 hover:text-brand-gold text-sm font-special transition-colors">FAQs</a>
          <a href="/brand.html" class="text-brand-beige/70 hover:text-brand-gold text-sm font-special transition-colors">Brand</a>
          <a href="#contact" class="text-brand-beige/70 hover:text-brand-gold text-sm font-special transition-colors">Contact</a>
        </div>

        <!-- Col 3: Socials -->
        <div class="col-span-1 md:col-span-2 flex flex-col gap-4">
          <h4 class="font-bold text-brand-gold font-heading mb-2 text-[15px]">Socials</h4>
          <a href="#" class="text-brand-beige/70 hover:text-brand-gold text-sm font-special transition-colors flex items-center justify-between w-28 group">
            Email <span class="group-hover:translate-x-1 transition-transform text-xs text-brand-gold">↗</span>
          </a>
          <a href="#" class="text-brand-beige/70 hover:text-brand-gold text-sm font-special transition-colors flex items-center justify-between w-28 group">
            Instagram <span class="group-hover:translate-x-1 transition-transform text-xs text-brand-gold">↗</span>
          </a>
          <a href="#" class="text-brand-beige/70 hover:text-brand-gold text-sm font-special transition-colors flex items-center justify-between w-28 group">
            LinkedIn <span class="group-hover:translate-x-1 transition-transform text-xs text-brand-gold">↗</span>
          </a>
        </div>

        <!-- Col 4 (Branches) -->
        <div class="col-span-1 md:col-span-2 flex flex-col gap-4">
          <h4 class="font-bold text-brand-gold font-heading mb-2 text-[15px]">Our Branches</h4>
          <div class="flex flex-col gap-4">
            <div>
              <p class="text-xs font-bold tracking-wider uppercase text-brand-gold mb-1">Head Office</p>
              <p class="text-sm text-brand-beige/70 font-special leading-relaxed">Shivamogga, India</p>
            </div>
            <div>
              <p class="text-xs font-bold tracking-wider uppercase text-brand-gold mb-1">Regional Branch</p>
              <p class="text-sm text-brand-beige/70 font-special leading-relaxed">Davanagere, India</p>
            </div>
          </div>
        </div>

        <!-- Col 5 -->
        <div class="col-span-1 md:col-span-3 flex flex-col gap-4 pl-0 md:pl-4">
          <h4 class="font-bold text-brand-gold font-heading mb-2 text-[15px]">Newsletter</h4>
          <p class="text-sm text-brand-beige/70 font-special leading-relaxed max-w-sm">
            Stay ahead with abroad studies tips and university admission strategies that drive results.
          </p>
          <div class="relative mt-2 max-w-sm">
            <span class="absolute left-5 top-1/2 -translate-y-1/2 text-brand-gold font-special text-sm">@</span>
            <input type="email" placeholder="Enter your email..." class="w-full bg-[#0B1B3D] border border-brand-gold/30 rounded-full py-3.5 pl-12 pr-12 text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all text-brand-beige shadow-sm font-special placeholder:text-brand-beige/50">
            <button class="absolute right-1.5 top-1/2 -translate-y-1/2 w-10 h-10 bg-brand-gold text-[#0B1B3D] rounded-full flex items-center justify-center hover:bg-[#b09045] transition-colors shadow-sm">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Map Section -->
      <div class="mt-16 w-full flex flex-col md:flex-row gap-8 items-stretch">
        
        <!-- Shivamogga Map -->
        <div class="w-full md:w-1/2 flex flex-col gap-6 bg-[#0B1B3D] p-6 rounded-3xl border border-brand-gold/20 shadow-lg">
          <div class="flex flex-col gap-2">
            <h4 class="font-bold text-brand-beige font-heading text-2xl flex items-center gap-2">
              <span class="text-brand-gold">📍</span> Shivamogga Office
            </h4>
            <p class="text-brand-beige/70 font-special leading-relaxed text-sm">
              2nd Floor, Sree Karthik Plaza,<br/>
              Opp. Mallikarjuna Talkies,<br/>
              Durgigudi, Shivamogga, Karnataka 577201
            </p>
            <a href="https://maps.app.goo.gl/J9EfWhb6aTFbUzNV8" target="_blank" class="text-brand-gold font-bold font-heading hover:text-brand-beige transition-colors w-fit text-sm mt-1">Get Directions ↗</a>
          </div>
          <div class="w-full h-[200px] rounded-2xl overflow-hidden shadow-inner border border-brand-gold/10">
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

        <!-- Davanagere Map -->
        <div class="w-full md:w-1/2 flex flex-col gap-6 bg-[#0B1B3D] p-6 rounded-3xl border border-brand-gold/20 shadow-lg">
          <div class="flex flex-col gap-2">
            <h4 class="font-bold text-brand-beige font-heading text-2xl flex items-center gap-2">
              <span class="text-brand-gold">📍</span> Davanagere Office
            </h4>
            <p class="text-brand-beige/70 font-special leading-relaxed text-sm">
              Gandharva Abroad Studies,<br/>
              Davanagere, Karnataka
            </p>
            <a href="https://maps.google.com/?q=Davanagere+Karnataka" target="_blank" class="text-brand-gold font-bold font-heading hover:text-brand-beige transition-colors w-fit text-sm mt-1">Get Directions ↗</a>
          </div>
          <div class="w-full h-[200px] rounded-2xl overflow-hidden shadow-inner border border-brand-gold/10">
            <iframe 
              width="100%" 
              height="100%" 
              style="border:0" 
              loading="lazy" 
              allowfullscreen 
              referrerpolicy="no-referrer-when-downgrade" 
              src="https://www.google.com/maps?q=Davanagere+Karnataka&output=embed">
            </iframe>
          </div>
        </div>

      </div>

      <!-- Bottom Row -->
      <div class="flex flex-col md:flex-row justify-between items-center mt-20 pt-8 text-sm text-slate-500 font-special w-full border-t border-brand-gold/20">
        <p>©2026 Gandharva All rights reserved</p>
        <div class="flex gap-8 mt-4 md:mt-0">
          <a href="#" class="hover:text-brand-navy transition-colors">Privacy Policy</a>
          <a href="#" class="hover:text-brand-navy transition-colors">Terms of Service</a>
        </div>
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

// Scroll-spy Logic for Tabs
let mm = gsap.matchMedia();

mm.add("(min-width: 1024px)", () => {

  const activateTab = (targetId: string) => {
    // Reset all tabs
    document.querySelectorAll('.tab-btn').forEach(b => {
      // Deactivate styles
      gsap.to(b, { backgroundColor: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.6)', duration: 0.3 });

      const num = b.querySelector('.tab-num');
      if (num) gsap.to(num, { backgroundColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)', duration: 0.3 });

      const ptr = b.querySelector('.tab-pointer');
      if (ptr) gsap.to(ptr, { autoAlpha: 0, duration: 0.3 });
    });

    // Activate the targeted tab
    const activeBtn = document.querySelector(`.tab-btn[data-target="${targetId}"]`);
    if (activeBtn) {
      gsap.to(activeBtn, { backgroundColor: '#C9A65A', color: '#0a0a0a', duration: 0.3 });

      const activeNum = activeBtn.querySelector('.tab-num');
      if (activeNum) gsap.to(activeNum, { backgroundColor: '#0a0a0a', color: '#C9A65A', duration: 0.3 });

      const activePtr = activeBtn.querySelector('.tab-pointer');
      if (activePtr) {
        gsap.set(activePtr, { display: 'block' });
        gsap.to(activePtr, { autoAlpha: 1, duration: 0.3 });
      }
    }
  };

  // Create ScrollTriggers for each content block
  const sections = ['tab-mission', 'tab-vision', 'tab-faq'];

  sections.forEach((id) => {
    ScrollTrigger.create({
      trigger: `#${id}`,
      start: 'top 40%',
      end: 'bottom 40%',
      onEnter: () => activateTab(id),
      onEnterBack: () => activateTab(id),
    });
  });

  // Init first tab styling immediately
  activateTab('tab-mission');
});

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
    const magElement = target.closest('.stat-item, .collage-section > div');
    const actionBtn = target.closest('a, button, .tab-btn');

    if (magElement) {
      cursor.classList.add('cursor-active');
      isMagnetic = true;
      const rect = magElement.getBoundingClientRect();
      magneticTarget = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
    }

    if (actionBtn) {
      cursor.classList.add('cursor-hover');
      gsap.to(cursorPlane, { scale: 1.3, duration: 0.3, overwrite: true });
    }
  }, { passive: true });

  document.addEventListener('mouseout', (e) => {
    const target = e.target as HTMLElement;
    if (target.closest('.stat-item, .collage-section > div')) {
      cursor.classList.remove('cursor-active');
      isMagnetic = false;
      magneticTarget = null;
    }
    if (target.closest('a, button, .tab-btn')) {
      cursor.classList.remove('cursor-hover');
      gsap.to(cursorPlane, { scale: 1, duration: 0.3, overwrite: true });
    }
  }, { passive: true });

  document.addEventListener('mouseleave', () => gsap.to(cursor, { opacity: 0, duration: 0.4, overwrite: true }));
  document.addEventListener('mouseenter', () => gsap.to(cursor, { opacity: 1, duration: 0.4, overwrite: true }));
}

ScrollTrigger.config({ limitCallbacks: true, ignoreMobileResize: true });
window.addEventListener('load', () => ScrollTrigger.refresh());
