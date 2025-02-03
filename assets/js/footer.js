 // Toggle Mobile Menu
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

  // Subscribe Form
  document.getElementById('subscribeForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('emailInput').value.trim();
    if (email) {
      alert(`Thank you for subscribing with email: ${email}`);
      document.getElementById('emailInput').value = ''; // Clear the input
    } else {
      alert('Please enter a valid email address.');
    }
  });