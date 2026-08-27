const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav nav');
menuBtn?.addEventListener('click', () => {
  const open = nav.style.display === 'flex';
  nav.style.display = open ? 'none' : 'flex';
  nav.style.position = 'absolute';
  nav.style.top = '70px';
  nav.style.left = '0';
  nav.style.right = '0';
  nav.style.padding = '20px 6vw';
  nav.style.background = '#050505';
  nav.style.flexDirection = 'column';
});
document.getElementById('year').textContent = new Date().getFullYear();
