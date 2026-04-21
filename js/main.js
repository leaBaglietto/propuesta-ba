/* ============================================================
   MATER.IA Landing Page — Main JavaScript
   Joy Group Agency · 2026
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  // ---- NAVBAR SCROLL BEHAVIOR ----
  initNavbar();

  // ---- MOBILE MENU ----
  initMobileMenu();

  // ---- SCROLL ANIMATIONS (IntersectionObserver) ----
  initScrollAnimations();

  // ---- COUNTER ANIMATION ----
  initCounters();

  // ---- PARTICLES ----
  initParticles();

  // ---- PARALLAX ----
  initParallax();

  // ---- FORM VALIDATION ----
  initForm();
});


/* ============================================================
   NAVBAR — Transparent → Solid on scroll
   ============================================================ */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const scrollThreshold = 60;

  function updateNavbar() {
    if (window.scrollY > scrollThreshold) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', updateNavbar, { passive: true });
  updateNavbar();
}


/* ============================================================
   MOBILE MENU
   ============================================================ */
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close menu on link click
  const mobileLinks = mobileMenu.querySelectorAll('[data-mobile-link]');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}


/* ============================================================
   SCROLL ANIMATIONS — Bidirectional fade in/out
   ============================================================ */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach(el => observer.observe(el));
}


/* ============================================================
   COUNTER ANIMATION — Stats count up from 0
   ============================================================ */
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5
  });

  counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element) {
  const target = parseInt(element.getAttribute('data-count'), 10);
  const duration = 1500; // ms
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(eased * target);

    element.textContent = current + '%';

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}


/* ============================================================
   PARALLAX — Subtle background movement on desktop
   ============================================================ */
function initParallax() {
  // Only on desktop (no touch)
  if (window.matchMedia('(hover: none)').matches) return;

  const parallaxElements = document.querySelectorAll('.parallax-bg');
  if (!parallaxElements.length) return;

  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateParallax(parallaxElements);
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

function updateParallax(elements) {
  const scrollY = window.scrollY;

  elements.forEach(el => {
    const section = el.closest('.section');
    if (!section) return;

    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    // Only apply parallax when section is in view
    if (scrollY + window.innerHeight > sectionTop && scrollY < sectionTop + sectionHeight) {
      const offset = (scrollY - sectionTop) * 0.08; // subtle movement
      el.style.transform = `translateY(${offset}px) scale(1.05)`;
    }
  });
}


/* ============================================================
   FORM VALIDATION & SUBMISSION
   ============================================================ */
function initForm() {
  const form = document.getElementById('contactForm');
  const successEl = document.getElementById('formSuccess');
  if (!form || !successEl) return;

  // Real-time validation on blur
  const fields = form.querySelectorAll('input, select, textarea');
  fields.forEach(field => {
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
      const group = field.closest('.form-group');
      if (group && group.classList.contains('error')) {
        validateField(field);
      }
    });
  });

  // Form submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;
    fields.forEach(field => {
      if (!validateField(field)) {
        isValid = false;
      }
    });

    if (isValid) {
      // Simulate successful submission
      form.style.display = 'none';
      successEl.classList.add('visible');

      // Scroll to success message
      successEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
}

function validateField(field) {
  const group = field.closest('.form-group');
  if (!group) return true;

  let isValid = true;

  if (field.hasAttribute('required')) {
    if (field.type === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      isValid = emailRegex.test(field.value.trim());
    } else if (field.tagName === 'SELECT') {
      isValid = field.value !== '';
    } else {
      isValid = field.value.trim().length > 0;
    }
  }

  if (isValid) {
    group.classList.remove('error');
  } else {
    group.classList.add('error');
  }

  return isValid;
}


/* ============================================================
   SMOOTH SCROLL — For anchor links (navbar, CTAs)
   ============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      e.preventDefault();
      const navbarHeight = document.getElementById('navbar')?.offsetHeight || 72;
      const targetPosition = targetElement.offsetTop - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

/* ============================================================
   PARTICLES ANIMATION — Multi-section support
   ============================================================ */
function initParticles() {
  const canvases = document.querySelectorAll('.particles-canvas');
  if (!canvases.length) return;

  canvases.forEach(canvas => {
    const ctx = canvas.getContext('2d');
    const section = canvas.closest('.section');
    if (!section) return;

    let particles = [];
    const particleCount = window.innerWidth > 768 ? 40 : 20;
    
    let mouse = {
      x: null,
      y: null,
      radius: 120
    };

    function resize() {
      canvas.width = section.offsetWidth;
      canvas.height = section.offsetHeight;
    }
    
    window.addEventListener('resize', resize);
    resize();

    section.addEventListener('mousemove', function(event) {
      const rect = section.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    });

    section.addEventListener('mouseleave', function() {
      mouse.x = null;
      mouse.y = null;
    });

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.vx = (Math.random() - 0.5) * 1;
        this.vy = (Math.random() - 0.5) * 1;
      }
      
      draw() {
        ctx.fillStyle = 'rgba(0, 200, 212, 0.4)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
      
      update() {
        this.x += this.vx;
        this.y += this.vy;
        
        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;

        if (mouse.x != null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouse.radius) {
            let force = (mouse.radius - distance) / mouse.radius;
            let forceX = dx / distance;
            let forceY = dy / distance;
            this.x += forceX * force * 1.5;
            this.y += forceY * force * 1.5;
          }
        }
      }
    }

    function connect() {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          let dx = particles[a].x - particles[b].x;
          let dy = particles[a].y - particles[b].y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.strokeStyle = `rgba(0, 200, 212, ${0.15 * (1 - distance/100)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
      
      if (mouse.x != null) {
        for (let a = 0; a < particles.length; a++) {
          let dx = particles[a].x - mouse.x;
          let dy = particles[a].y - mouse.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouse.radius) {
            ctx.strokeStyle = `rgba(0, 200, 212, ${0.3 * (1 - distance/mouse.radius)})`; 
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }
    }

    function init() {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    let isVisible = false;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        isVisible = entry.isIntersecting;
      });
    });
    observer.observe(section);

    function animate() {
      requestAnimationFrame(animate);
      if (!isVisible) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      connect();
    }

    init();
    animate();
  });
}
