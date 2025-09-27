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
   document.getElementById("subscribeForm").addEventListener("submit", (e) => {
     e.preventDefault();
     const email = document.getElementById("emailInput").value.trim();
     if (email) {
       alert(`Thank you for subscribing with email: ${email}`);
       document.getElementById("emailInput").value = ""; // Clear the input
     } else {
       alert("Please enter a valid email address.");
     }
   });

  //  brand and select
   document.addEventListener("DOMContentLoaded", () => {
     const brandMenuButton = document.getElementById("brand-menu-button");
     const brandMenu = brandMenuButton.nextElementSibling;
     const colorMenuButton = document.getElementById("color-menu-button");
     const colorMenu = colorMenuButton.nextElementSibling;
     const priceMenuButton = document.getElementById("price-menu-button");
     const priceMenu = priceMenuButton.nextElementSibling;
     const sortMenuButton = document.getElementById("sort-menu-button");
     const sortMenu = sortMenuButton.nextElementSibling;

     function toggleMenu(menu, button) {
       menu.classList.toggle("hidden");
       const expanded = button.getAttribute("aria-expanded") === "true";
       button.setAttribute("aria-expanded", !expanded);
     }

     brandMenuButton.addEventListener("click", (e) => {
       toggleMenu(brandMenu, brandMenuButton);
       e.stopPropagation();
     });
     colorMenuButton.addEventListener("click", (e) => {
       toggleMenu(colorMenu, colorMenuButton);
       e.stopPropagation();
     });
     priceMenuButton.addEventListener("click", (e) => {
       toggleMenu(priceMenu, priceMenuButton);
       e.stopPropagation();
     });

     sortMenuButton.addEventListener("click", (e) => {
       toggleMenu(sortMenu, sortMenuButton);
       e.stopPropagation();
     });
     document.addEventListener("click", (event) => {
       if (
         !brandMenuButton.contains(event.target) &&
         !brandMenu.contains(event.target)
       ) {
         brandMenu.classList.add("hidden");
         brandMenuButton.setAttribute("aria-expanded", false);
       }
       if (
         !colorMenuButton.contains(event.target) &&
         !colorMenu.contains(event.target)
       ) {
         colorMenu.classList.add("hidden");
         colorMenuButton.setAttribute("aria-expanded", false);
       }
       if (
         !priceMenuButton.contains(event.target) &&
         !priceMenu.contains(event.target)
       ) {
         priceMenu.classList.add("hidden");
         priceMenuButton.setAttribute("aria-expanded", false);
       }

       if (
         !sortMenuButton.contains(event.target) &&
         !sortMenu.contains(event.target)
       ) {
         sortMenu.classList.add("hidden");
         sortMenuButton.setAttribute("aria-expanded", false);
       }
     });
   });

  