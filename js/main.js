/* ============================================================
   main.js — Academic Portfolio
   Author: Priyam Chatterjee
   ============================================================ */

(function () {
  'use strict';

  /* ---------- Dark Mode Toggle ---------- */
  const THEME_KEY = 'portfolio-theme';

  function getStoredTheme() {
    return localStorage.getItem(THEME_KEY);
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
    updateToggleIcon(theme);
  }

  function updateToggleIcon(theme) {
    const btn = document.getElementById('dark-toggle');
    if (!btn) return;
    btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    btn.textContent = theme === 'dark' ? '☀️' : '🌙';
  }

  function initTheme() {
    const stored = getStoredTheme();
    if (stored) {
      setTheme(stored);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
  }

  /* ---------- Mobile Navigation ---------- */
  function initMobileNav() {
    const toggleBtn = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');
    if (!toggleBtn || !navLinks) return;

    toggleBtn.addEventListener('click', function () {
      const isOpen = navLinks.classList.toggle('open');
      toggleBtn.classList.toggle('open', isOpen);
      toggleBtn.setAttribute('aria-expanded', String(isOpen));
    });

    // Close nav when a link is clicked
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        toggleBtn.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
      });
    });

    // Close nav on outside click
    document.addEventListener('click', function (e) {
      if (!toggleBtn.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('open');
        toggleBtn.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---------- Active Nav Link ---------- */
  function setActiveNavLink() {
    const path = window.location.pathname;
    const page = path.split('/').pop() || 'index.html';

    document.querySelectorAll('.nav-links a').forEach(function (link) {
      const href = link.getAttribute('href');
      if (
        href === page ||
        (page === '' && href === 'index.html') ||
        (page === 'index.html' && href === 'index.html')
      ) {
        link.classList.add('active');
      }
    });
  }

  /* ---------- Scroll-reveal Animations ---------- */
  function initReveal() {
    const elements = document.querySelectorAll('.reveal');
    if (!elements.length) return;

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
      );

      elements.forEach(function (el) {
        observer.observe(el);
      });
    } else {
      // Fallback: show all immediately
      elements.forEach(function (el) {
        el.classList.add('visible');
      });
    }
  }

  /* ---------- Navbar scroll shadow ---------- */
  function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    function onScroll() {
      if (window.scrollY > 10) {
        navbar.style.boxShadow = '0 2px 16px rgba(0,0,0,0.08)';
      } else {
        navbar.style.boxShadow = 'none';
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Init ---------- */
  document.addEventListener('DOMContentLoaded', function () {
    initTheme();
    initMobileNav();
    setActiveNavLink();
    initReveal();
    initNavbarScroll();

    const darkToggleBtn = document.getElementById('dark-toggle');
    if (darkToggleBtn) {
      darkToggleBtn.addEventListener('click', toggleTheme);
    }
  });
})();
