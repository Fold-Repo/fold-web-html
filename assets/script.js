document.getElementById('menuButton').addEventListener('click', () => {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menuIcon');
  
    if (mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.remove('hidden');
      menuIcon.innerHTML = `<path d="M18 6L6 18M6 6l12 12"></path>`;
    } else {
      mobileMenu.classList.add('hidden');
      menuIcon.innerHTML = `<path d="M4 6h16M4 12h16M4 18h16"></path>`;
    }
  });
  