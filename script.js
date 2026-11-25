const filters = document.querySelectorAll('[data-filter]');
const menuCards = document.querySelectorAll('.menu-card');
filters.forEach((filter) => filter.addEventListener('click', () => {
  filters.forEach((button) => button.classList.remove('active'));
  filter.classList.add('active');
  const category = filter.dataset.filter;
  menuCards.forEach((card) => card.hidden = category !== 'all' && card.dataset.category !== category);
}));
document.querySelectorAll('.story-card').forEach((card) => card.addEventListener('click', () => card.classList.toggle('flipped')));
document.querySelectorAll('.reaction').forEach((button) => button.addEventListener('click', () => { if (!button.classList.contains('liked')) button.querySelector('b').textContent = Number(button.querySelector('b').textContent) + 1; button.classList.toggle('liked'); button.firstChild.textContent = button.classList.contains('liked') ? '♥ ' : '♡ '; }));
const navigationToggle = document.querySelector('.nav-toggle');
const navigation = document.querySelector('nav');
navigationToggle.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  navigationToggle.setAttribute('aria-expanded', String(isOpen));
});
