// Scroll suave entre seções (tolerante a alvos inexistentes)
document.querySelectorAll('header nav a').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault(); // só previne se existir destino
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // se não existir, deixar o comportamento padrão (ou tratar de outra forma)
  });
});

// Validação simples de formulário
const form = document.getElementById('form');
const msg = document.getElementById('form-msg');

if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const email = form.querySelector('input[type="email"]').value.trim();
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      msg.style.color = 'lightgreen';
      msg.textContent = '✅ Obrigado! Você foi cadastrado com sucesso.';
      form.reset();
    } else {
      msg.style.color = 'yellow';
      msg.textContent = '⚠️ Por favor, digite um e-mail válido.';
    }
  });
}

// Animação dos cards ao rolar a página
const cards = document.querySelectorAll('.feature-card');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  cards.forEach(card => observer.observe(card));
} else {
  cards.forEach(card => card.classList.add('show'));
}
