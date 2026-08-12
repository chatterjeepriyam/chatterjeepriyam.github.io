// ── NAV SCROLL STATE ────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ── MOBILE MENU ─────────────────────────────────────────
const menuBtn = document.getElementById('menuBtn');
const navLinksEl = document.querySelector('.nav-links');
if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    navLinksEl.classList.toggle('open');
    menuBtn.textContent = navLinksEl.classList.contains('open') ? '✕' : '☰';
  });
  navLinksEl.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinksEl.classList.remove('open');
      menuBtn.textContent = '☰';
    });
  });
}

// ── SCROLL REVEAL (settle-in, staggered) ────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      e.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
        bar.style.width = bar.dataset.width + '%';
      });
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = (i % 4) * 0.08 + 's';
  revealObserver.observe(el);
});

// ── ACTIVE NAV HIGHLIGHT ────────────────────────────────
const sections = document.querySelectorAll('section[id], div[id]');
const navLinks = document.querySelectorAll('.nav-links a');
const activeObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === '#' + e.target.id) a.classList.add('active');
      });
    }
  });
}, { threshold: 0.4 });
sections.forEach(s => activeObserver.observe(s));

// ── HERO STAT COUNTERS ───────────────────────────────────
function animateCounter(el, target) {
  let start = 0;
  const duration = 1400;
  const step = (ts) => {
    if (!start) start = ts;
    const progress = Math.min((ts - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(ease * target);
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}
const statsEl = document.querySelector('.hero-stats');
if (statsEl) {
  const statsObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      statsEl.querySelectorAll('.stat-num').forEach(el => {
        const target = parseInt(el.textContent, 10);
        if (!isNaN(target)) animateCounter(el, target);
      });
      statsObserver.disconnect();
    }
  }, { threshold: 0.5 });
  statsObserver.observe(statsEl);
}

// ── EMAIL OBFUSCATION ────────────────────────────────────
(function () {
  const u = 'contact';
  const d = 'priyamchatterjee.com';
  const el = document.getElementById('idx-email-link');
  const lb = document.getElementById('idx-email-label');
  if (el && lb) {
    el.href = 'mailto:' + u + '@' + d;
    lb.textContent = u + '@' + d;
  }
})();
