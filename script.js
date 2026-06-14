// ── CURSOR (magnetic + lerp) ──
const ring = document.getElementById('cur-ring');
const dot  = document.getElementById('cur-dot');
let mx=0,my=0, rx=0,ry=0;
document.addEventListener('mousemove', e => { mx=e.clientX; my=e.clientY; });
(function lerp() {
  rx += (mx-rx)*0.14; ry += (my-ry)*0.14;
  ring.style.left = rx+'px'; ring.style.top = ry+'px';
  dot.style.left  = mx+'px'; dot.style.top  = my+'px';
  requestAnimationFrame(lerp);
})();
document.querySelectorAll('a,button,.dish,.nav-cta').forEach(el => {
  el.addEventListener('mouseenter', () => ring.classList.add('expand'));
  el.addEventListener('mouseleave', () => ring.classList.remove('expand'));
});
document.querySelectorAll('h1,h2').forEach(el => {
  el.addEventListener('mouseenter', () => ring.classList.add('text-mode'));
  el.addEventListener('mouseleave', () => ring.classList.remove('text-mode'));
});
 
// ── NAV SCROLL ──
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 80);
});
 
// ── PARALLAX HERO ──
const heroBg = document.getElementById('hero-bg');
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  heroBg.style.transform = `translateY(${y*0.35}px)`;
}, { passive: true });
 
// ── SCROLL REVEALS ──
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
 
// ── FORM SUBMIT ──
document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault();
  const btn = e.target.querySelector('.form-submit');
  btn.textContent = 'Request Received ✦';
  btn.style.background = '#2a7a4f';
  btn.style.color = '#fff';
  setTimeout(() => {
    btn.textContent = 'Request Table';
    btn.style.background = '';
    btn.style.color = '';
  }, 3500);
});
