/* ============================================================
   STOCKIA — main.js  (UI interactions)
   Mismo comportamiento que el main.js de Qullqa, adaptado a las
   páginas y secciones propias de StockIA.
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Active navbar link (multi-página) ── */
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar-links a').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  /* ── Pricing toggle (mensual / anual) ── */
  const toggle = document.getElementById('billingToggle');
  if (toggle) {
    const prices = {
      monthly: { p1: '0', p2: '39', p3: '79' },
      annual:  { p1: '0', p2: '27', p3: '55' }
    };
    toggle.addEventListener('change', () => {
      const mode = toggle.checked ? 'annual' : 'monthly';
      const curr = prices[mode];
      const p1El = document.getElementById('price-p1');
      const p2El = document.getElementById('price-p2');
      const p3El = document.getElementById('price-p3');
      if (p1El) p1El.textContent = curr.p1;
      if (p2El) p2El.textContent = curr.p2;
      if (p3El) p3El.textContent = curr.p3;
    });
  }

  /* ── FAQ accordion ── */
  document.querySelectorAll('.faq-q').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.closest('.faq-item');
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });

  /* ── Portfolio tabs ── */
  document.querySelectorAll('.port-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.port-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });

  /* ── Contact form submit (demo estático, sin backend aún) ── */
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('[type="submit"]');
      const original = btn.textContent;
      btn.textContent = '✓ Enviado';
      btn.style.background = 'var(--success)';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = original;
        btn.style.background = '';
        btn.disabled = false;
        form.reset();
      }, 3000);
    });
  }

  /* ── Scroll reveal (simple fade-up) ── */
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.feat-card, .feat-full-card, .price-card, .seg-card, .team-card, .port-item, .how-step, .integration-card, .diff-card').forEach(el => {
      el.classList.add('reveal');
      observer.observe(el);
    });
  }
});