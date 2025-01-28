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

//DEMO  1 SCRIPTS
const products = [
  {
    name: "Deal 1",
    description:
      "Details about Deal 1 go here. You have the option to now select and buy.",
    imageUrl: "../../assets/images/product-image.svg",
    link: "#",
  },
  {
    name: "Deal 2",
    description:
      "Details about Deal 2 go here. You have the option to now select and buy.",
    imageUrl: "../../assets/images/product-image21.svg",
    link: "#",
  },
  {
    name: "Deal 3",
    description:
      "Details about Deal 3 go here. You have the option to now select and buy.",
    imageUrl: "../../assets/images/product-image23.svg",
    link: "#",
  },
  {
    name: "Deal 4",
    description:
      "Details about Deal 4 go here. You have the option to now select and buy.",
    imageUrl: "../../assets/images/product-image23.svg",
    link: "#",
  },
];

// Function to render products
function renderProducts(products) {
  const productGrid = document.querySelector(".trending-products"); // Select the grid container

  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("group", "relative");

    productElement.innerHTML = `
  <div class="relative">
    <img 
      src="${product.imageUrl}" 
      alt="${product.name}" 
      class="aspect-[4/3] w-full rounded-lg bg-gray-100 object-cover">
    <div 
      class="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100" 
      aria-hidden="true">
      <div 
        class="w-full rounded-md bg-white/75 px-4 py-2 text-center text-sm font-medium text-gray-900 backdrop-blur backdrop-filter">
        View Product
      </div>
    </div>
  </div>
  <div class="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900">
    <h3 class="text-[#111827]">
      <a href="${product.link}">
        <span aria-hidden="true" class="absolute inset-0"></span>
        ${product.name}
      </a>
    </h3>
  </div>
  <p class="mt-1 text-sm text-[#111827]">${product.description}</p>
`;

    productGrid.appendChild(productElement);
  });
}

// Call the render function
document.addEventListener("DOMContentLoaded", () => {
  renderProducts(products);
});

//Section 2
// Example product data
const productsList = [
  {
    name: "Name Of Product Goes Here.",
    description: "Premium leather shoes perfect for formal occasions.",
    imageUrl: "../../assets/images/product-listing1.svg",
    price: "N100,000.00",
    colors: ["#0EA5E9", "#6D7F44", "#862244", "#DCF05E"],
  },
  {
    name: "Name Of Product Goes Here.",
    description: "Elegant wallet made from high-quality leather.",
    imageUrl: "../../assets/images/product-listing2.svg",
    price: "N100,000.00",
    colors: ["#0EA5E9", "#6D7F44", "#862244", "#DCF05E"],
  },
  {
    name: "Name Of Product Goes Here.",
    description: "Classic wristwatch with leather straps.",
    imageUrl: "../../assets/images/product-listing4.svg",
    price: "N100,000.00",
    colors: ["#0EA5E9", "#6D7F44", "#862244", "#DCF05E"],
  },
  {
    name: "Name Of Product Goes Here.",
    description: "Classic wristwatch with leather straps.",
    imageUrl: "../../assets/images/product-listing5.svg",
    price: "N100,000.00",
    colors: ["#0EA5E9", "#6D7F44", "#862244", "#DCF05E"],
  },
  {
    name: "Name Of Product Goes Here.",
    description: "Classic wristwatch with leather straps.",
    imageUrl: "../../assets/images/product-listing6.svg",
    price: "N100,000.00",
    colors: ["#0EA5E9", "#6D7F44", "#862244", "#DCF05E"],
  },
  {
    name: "Name Of Product Goes Here.",
    description: "Classic wristwatch with leather straps.",
    imageUrl: "../../assets/images/product-listing7.svg",
    price: "N100,000.00",
    colors: ["#0EA5E9", "#6D7F44", "#862244", "#DCF05E"],
  },
];

// Render products dynamically
function renderProductsList(productsList) {
  const productContainer = document.querySelector("#product-list");
  productContainer.innerHTML = ""; // Clear existing products

  productsList.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("group", "block");

    productElement.innerHTML = `
  <a href="#" class="group block">
    <img
      src="${product.imageUrl}"
      alt="${product.name}"
      class="h-[350px] w-full object-cover sm:h-[450px]"
    />
    <div class="mt-1.5">
      <div class="mt-3 flex justify-between text-sm">
        <h3 class="text-gray-900 text-lg font-semibold">
          ${product.name}
        </h3>
      <button class="flex items-center justify-center font-semibold text-sm text-white bg-[#0EA5E9] px-3 py-1 rounded-full transition-colors duration-200">Buy Now
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_67_10470" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="34" height="34">
        <rect y="16.9707" width="24" height="24" transform="rotate(-45 0 16.9707)" fill="#D9D9D9"/>
        </mask>
        <g mask="url(#mask0_67_10470)">
        <path d="M19.7989 19.7991V14.1423H14.1421L14.1421 16.1222L16.4048 16.1222L13.435 19.092L14.8492 20.5062L17.819 17.5364L17.819 19.7991H19.7989ZM24.0416 24.0418C23.0634 25.0199 21.9586 25.7536 20.727 26.2426C19.4955 26.7317 18.2433 26.9763 16.9705 26.9763C15.6977 26.9763 14.4455 26.7317 13.214 26.2426C11.9825 25.7536 10.8776 25.0199 9.89944 24.0418C8.92127 23.0636 8.18765 21.9588 7.69857 20.7272C7.20948 19.4957 6.96494 18.2435 6.96494 16.9707C6.96494 15.6979 7.20948 14.4457 7.69857 13.2142C8.18765 11.9827 8.92127 10.8778 9.89944 9.89964C10.8776 8.92147 11.9825 8.18785 13.214 7.69877C14.4455 7.20968 15.6977 6.96514 16.9705 6.96514C18.2433 6.96514 19.4955 7.20968 20.727 7.69877C21.9586 8.18785 23.0634 8.92147 24.0416 9.89964C25.0197 10.8778 25.7534 11.9827 26.2424 13.2142C26.7315 14.4457 26.9761 15.6979 26.9761 16.9707C26.9761 18.2435 26.7315 19.4957 26.2424 20.7272C25.7534 21.9588 25.0197 23.0636 24.0416 24.0418Z" fill="white"/>
        </g>
        </svg>
        </button>
      </div>
      <p class="text-gray-900">${product.price}</p>
      <div class="mt-2 flex gap-1">
        <div class="flex flex-wrap justify-center gap-1">
          ${product.colors
            .map(
              (color) => `
            <label
              class="block size-4 cursor-pointer rounded-full"
              style="background-color: ${color}; width: 16px; height: 16px"
            ></label>`
            )
            .join("")}
        </div>
      </div>
    </div>
  </a>
`;

    productContainer.appendChild(productElement);
  });
}

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

// Initial render
document.addEventListener("DOMContentLoaded", () =>
  renderProductsList(productsList)
);

// Example blog data
const blogs = [
  {
    title: "Latest Blog Post 1",
    description:
      "Details about the product in question goes here. You have the option to now select and buy. Details about the product in question goes here..",
    imageUrl: "../../assets/images/blog.svg",
    readMoreContent:
      " Additional details about the product in question. You can explore further to learn more about the product and its features.",
  },
  {
    title: "Latest Blog Post 2",
    description:
      "Details about the product in question goes here. You have the option to now select and buy. Details about the product in question goes here.",
    imageUrl: "../../assets/images/blog.svg",
    readMoreContent:
      " Additional details about the product in question. You can explore further to learn more about the product and its features.",
  },
  {
    title: "Latest Blog Post 3",
    description:
      "Details about the product in question goes here. You have the option to now select and buy. Details about the product in question goes here.",
    imageUrl: "../../assets/images/blog.svg",
    readMoreContent:
      " Additional details about the product in question. You can explore further to learn more about the product and its features.",
  },
];

// Function to render blogs
function renderBlogs() {
  const blogContainer = document.querySelector("#blog-list");
  blogContainer.innerHTML = ""; // Clear any existing content

  blogs.forEach((blog, index) => {
    const blogElement = document.createElement("div");
    blogElement.classList.add("blog-card");

    blogElement.innerHTML = `
  <div class="rounded-lg overflow-hidden rounded-xl border-[0.5px] border-gray-200">
   <div class="p-3">
       <img
      src="${blog.imageUrl}"
      alt="${blog.title}"
      class="w-full h-64 object-cover rounded-lg"
    />
    </div>
    <div class="p-4">
      <h3 class="font-semibold text-lg text-[#111827]">${blog.title}</h3>
      <p id="description-${index}" class="text-[#4B5563] text-sm">
        ${blog.description}
        <span id="read-more-${index}" class="hidden">${blog.readMoreContent}</span>
      </p>
      <button
        id="toggle-btn-${index}"
        class="text-[#0EA5E9] hover:underline mt-2 inline"
        onclick="toggleReadMore(${index})"
      >
        Read more
      </button>
    </div>
  </div>
`;

    blogContainer.appendChild(blogElement);
  });
}

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

// Initial rendering of blogs
document.addEventListener("DOMContentLoaded", () => renderBlogs());

// // Example data for Featured Products and Best Bought Products
const categories = {
  "Featured Products": [
    {
      title: "DName of Deal goes here.",
      description:
        "Details about the product in question goes here. You have the option to now select and buy.",
      imageUrl: "../../assets/images/best-products.svg",
      readMoreContent:
        " Additional details about the product in question. You can explore further to learn more about the product and its features.",
      // price: "$299",
    },
    {
      title: "Name of Deal goes here.",
      description:
        "Details about the product in question goes here. You have the option to now select and buy.",
      imageUrl: "../../assets/images/best-products.svg",
      readMoreContent:
        " Additional details about the product in question. You can explore further to learn more about the product and its features.",
      // price: "$199",
    },
  ],
  "Best Bought Products": [
    {
      title: "Name of Deal goes here.",
      description:
        "Details about the product in question goes here. You have the option to now select and buy.",
      imageUrl: "../../assets/images/best-products.svg",
      readMoreContent:
        " Additional details about the product in question. You can explore further to learn more about the product and its features.",
      // price: "$399",
    },
    {
      title: "Name of Deal goes here.",
      description:
        "Details about the product in question goes here. You have the option to now select and buy.",
      imageUrl: "../../assets/images/best-products.svg",
      readMoreContent:
        " Additional details about the product in question. You can explore further to learn more about the product and its features.",
      // price: "$99",
    },
  ],
};

// Render categories
function renderCategories() {
  const container = document.querySelector("#categories");

  // Create a flex container for separation of Featured and Best Bought Products
  const flexContainer = document.createElement("div");
  flexContainer.classList.add("grid", "grid-cols-1", "lg:grid-cols-2", "gap-6");

  // Iterate over categories and render
  Object.keys(categories).forEach((category) => {
    // Create category column
    const column = document.createElement("div");
    column.classList.add("mb-8");

    column.innerHTML = `
  <div class="p-4 border-[0.5px] border-gray-200 rounded-lg">
    <h2 class="text-lg font-semibold text-gray-900">${category}</h2>
    <p class="text-gray-500 mb-4">
      Details about the product in question goes here. You have the option to now select and buy.
    </p>
    <div class="mt-4 grid grid-cols-1 gap-4">
      <!-- Products will be rendered here -->
    </div>
  </div>
`;

    const productContainer = column.querySelector(".grid");

    // Render products
    categories[category].forEach((product, index) => {
      const productElement = document.createElement("div");
      productElement.classList.add(
        "rounded-lg",
        "overflow-hidden",
        "border-[0.5px]",
        "border-gray-100",
        "bg-[#FAFAFA]",
        "p-2"
      );

      productElement.innerHTML = `
    <div class="p-4 rounded-lg">
      <img
        src="${product.imageUrl}"
        alt="${product.title}"
        class="w-full h-60 object-cover rounded-lg"
      />
    </div>
    <div class="flex justify-between items-center px-2">
      <div class="p-4">
        <h3 class="font-semibold text-[#111827]">${product.title}</h3>
        <p id="description-${category}-${index}" class="text-[#4B5563] text-sm max-w-sm">
          ${product.description}
          <span id="read-more-${category}-${index}" class="hidden">${product.readMoreContent}</span>
        </p>
      </div>
<button class="flex items-center justify-center font-semibold text-sm text-white bg-[#0EA5E9] px-3 py-1 rounded-full transition-colors duration-200">Buy Now
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_67_10470" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="34" height="34">
        <rect y="16.9707" width="24" height="24" transform="rotate(-45 0 16.9707)" fill="#D9D9D9"/>
        </mask>
        <g mask="url(#mask0_67_10470)">
        <path d="M19.7989 19.7991V14.1423H14.1421L14.1421 16.1222L16.4048 16.1222L13.435 19.092L14.8492 20.5062L17.819 17.5364L17.819 19.7991H19.7989ZM24.0416 24.0418C23.0634 25.0199 21.9586 25.7536 20.727 26.2426C19.4955 26.7317 18.2433 26.9763 16.9705 26.9763C15.6977 26.9763 14.4455 26.7317 13.214 26.2426C11.9825 25.7536 10.8776 25.0199 9.89944 24.0418C8.92127 23.0636 8.18765 21.9588 7.69857 20.7272C7.20948 19.4957 6.96494 18.2435 6.96494 16.9707C6.96494 15.6979 7.20948 14.4457 7.69857 13.2142C8.18765 11.9827 8.92127 10.8778 9.89944 9.89964C10.8776 8.92147 11.9825 8.18785 13.214 7.69877C14.4455 7.20968 15.6977 6.96514 16.9705 6.96514C18.2433 6.96514 19.4955 7.20968 20.727 7.69877C21.9586 8.18785 23.0634 8.92147 24.0416 9.89964C25.0197 10.8778 25.7534 11.9827 26.2424 13.2142C26.7315 14.4457 26.9761 15.6979 26.9761 16.9707C26.9761 18.2435 26.7315 19.4957 26.2424 20.7272C25.7534 21.9588 25.0197 23.0636 24.0416 24.0418Z" fill="white"/>
        </g>
        </svg>
        </button>
    </div>
  `;

      productContainer.appendChild(productElement);
    });

    flexContainer.appendChild(column);
  });

  container.appendChild(flexContainer);
}

// Toggle "Read More/Less"
function toggleReadMore(category, index) {
  const description = document.querySelector(
    `#description-${category}-${index}`
  );
  const readMore = document.querySelector(`#read-more-${category}-${index}`);
  const toggleBtn = document.querySelector(`#toggle-btn-${category}-${index}`);

  if (readMore.classList.contains("hidden")) {
    readMore.classList.remove("hidden");
    toggleBtn.textContent = "Read less";
  } else {
    readMore.classList.add("hidden");
    toggleBtn.textContent = "Read more";
  }
}

// Render on page load
document.addEventListener("DOMContentLoaded", () => renderCategories());

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
