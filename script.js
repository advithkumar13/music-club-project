// ===== Harmony Music Club — shared scripts =====

// Mobile nav toggle
function toggleNav() {
  const links = document.getElementById('navLinks');
  if (links) links.classList.toggle('open');
}

// Handle mockup form submissions (no backend — shows a friendly confirmation)
document.addEventListener('DOMContentLoaded', function () {
  const forms = document.querySelectorAll('form[data-mock]');
  forms.forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const success = form.querySelector('.form-success');
      if (success) {
        success.style.display = 'block';
        success.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      form.reset();
    });
  });

  // Highlight current page in nav
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    const href = a.getAttribute('href');
    if (href === path) a.classList.add('active');
  });
});
