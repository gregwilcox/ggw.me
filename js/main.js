// Kept in an external file (not inline) so the Content-Security-Policy
// can use script-src 'self' without 'unsafe-inline'.

// Mobile nav toggle
const navLinks = document.querySelector('.nav-links');
document.querySelector('.nav-toggle').addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Nav scroll effect
const nav = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

// Fade in on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Smooth scroll for in-page links ("#" alone scrolls back to the top)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        const target = href === '#' ? document.body : document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        navLinks.classList.remove('open');
    });
});
