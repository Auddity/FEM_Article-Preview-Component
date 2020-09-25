const socialOpen = document.getElementById('main-link');
const socialRemove = document.getElementById('alt-link');
const links = document.getElementById('social-menu');

socialOpen.addEventListener('click', () => {
  links.classList.toggle('show');
  socialRemove.classList.toggle('hide');
});

socialRemove.addEventListener('click', () => {
  links.classList.toggle('show');
  socialRemove.classList.toggle('hide');
});