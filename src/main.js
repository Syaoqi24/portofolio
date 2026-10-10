import './style.css';

// Scroll progress bar + hide nav on scroll down
const progressBar = document.getElementById('scroll-progress');
const navEl = document.querySelector('nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = pct + '%';

  if (scrollTop > lastScroll && scrollTop > 80) {
    navEl.classList.add('nav-hidden');
  } else {
    navEl.classList.remove('nav-hidden');
  }
  lastScroll = scrollTop;
});

// Experience timeline expand/collapse
document.querySelectorAll('.exp-item').forEach(item => {
  item.addEventListener('click', () => item.classList.toggle('open'));
});

// Certificates toggle
const certsToggle = document.getElementById('certs-toggle');
const certsList = document.getElementById('certs-list');
certsToggle.addEventListener('click', () => {
  certsList.classList.toggle('open');
  certsToggle.textContent = certsList.classList.contains('open')
    ? '− Sembunyikan sertifikat'
    : '+ Lihat semua sertifikat (9)';
});

// Project filter
const projFilterBtns = document.querySelectorAll('.proj-filter-row .filter-btn');
const projCards = document.querySelectorAll('.proj-card');
projFilterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    projFilterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    let visibleCount = 0;
    projCards.forEach(card => {
      const tags = card.dataset.tags;
      const show = f === 'all' || tags.includes(f);
      card.classList.toggle('hidden', !show);
      if (show) visibleCount++;
    });
    document.getElementById('no-results').classList.toggle('hidden', visibleCount !== 0);
  });
});

// Certificate filter
const certFilterBtns = document.querySelectorAll('.cert-filter-row .filter-btn');
const certItems = document.querySelectorAll('.cert-item');
certFilterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    certFilterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.certFilter;
    certItems.forEach(item => {
      const tags = item.dataset.certTags;
      item.classList.toggle('hidden', !(f === 'all' || tags.includes(f)));
    });
  });
});

// Count-up stats on scroll into view
const statEls = document.querySelectorAll('.stat-num');
const animateStat = (el) => {
  const target = parseFloat(el.dataset.target);
  const suffix = el.dataset.suffix || '';
  const isDecimal = target % 1 !== 0;
  const duration = 1200;
  const startTime = performance.now();
  const step = (now) => {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = target * eased;
    el.textContent = (isDecimal ? current.toFixed(2) : Math.round(current)) + suffix;
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateStat(entry.target);
      statObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
statEls.forEach(el => statObserver.observe(el));

// Skill bars fill on scroll
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
        bar.style.width = bar.dataset.width;
      });
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });
document.querySelectorAll('.skill-group').forEach(el => skillObserver.observe(el));

// Copy email
const copyBtn = document.getElementById('copy-email-btn');
copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText('msyaoqi24@gmail.com').then(() => {
    const original = copyBtn.textContent;
    copyBtn.textContent = 'Copied!';
    setTimeout(() => { copyBtn.textContent = original; }, 1800);
  });
});

// Back to top
document.getElementById('back-to-top').addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
