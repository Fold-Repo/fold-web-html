document.getElementById("menuButton").addEventListener("click", () => {
  const mobileMenu = document.getElementById("mobileMenu");
  const menuIcon = document.getElementById("menuIcon");

  if (mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.remove("hidden");
    menuIcon.innerHTML = `<path d="M18 6L6 18M6 6l12 12"></path>`;
  } else {
    mobileMenu.classList.add("hidden");
    menuIcon.innerHTML = `<path d="M4 6h16M4 12h16M4 18h16"></path>`;
  }
});

// Search functionality
function handleSearch(event) {
  const searchTerm = event.target.value.toLowerCase();
  const filteredProducts = productsList.filter((product) =>
    product.name.toLowerCase().includes(searchTerm)
  );
  renderProductsList(filteredProducts);
}

// Event listener for search
document.querySelector("#search-input").addEventListener("input", handleSearch);


// Function to toggle "Read More" and "Read Less"
function toggleReadMore(index) {
  const description = document.querySelector(`#description-${index}`);
  const readMore = document.querySelector(`#read-more-${index}`);
  const toggleBtn = document.querySelector(`#toggle-btn-${index}`);

  if (readMore.classList.contains("hidden")) {
    readMore.classList.remove("hidden");
    toggleBtn.textContent = "Read less";
  } else {
    readMore.classList.add("hidden");
    toggleBtn.textContent = "Read more";
  }
}

//DEMO 2 SCRIPTS

// Toggle Mobile Menu
document.getElementById("menuButton").addEventListener("click", () => {
  const mobileMenu = document.getElementById("mobileMenu");
  const menuIcon = document.getElementById("menuIcon");

  if (mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.remove("hidden");
    menuIcon.innerHTML = `<path d="M18 6L6 18M6 6l12 12"></path>`;
  } else {
    mobileMenu.classList.add("hidden");
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
