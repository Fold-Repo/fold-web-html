// //DEMO  1 SCRIPTS

// example data
const productData = [
  {
    name: "Court Heels",
    description: "Red Stilettos",
    rating: 5, // You can represent rating as a number (e.g., 1-5)
    price: 95.0,
    image: "/assets//images/flow1/product1.svg",
  },
  {
    name: "Court Heels",
    description: "Red Stilettos",
    rating: 5,
    price: 95.0,
    image: "/assets//images/flow1/product2.svg",
  },
  {
    name: "Court Heels",
    description: "Red Stilettos",
    rating: 5,
    price: 95.0,
    image: "/assets//images/flow1/product3.svg",
  },
  {
    name: "Court Heels",
    description: "Red Stilettos",
    rating: 5,
    price: 95.0,
    image: "/assets//images/flow1/product4.svg",
  },
  {
    name: "Court Heels",
    description: "Red Stilettos",
    rating: 5,
    price: 95.0,
    image: "/assets//images/flow1/product5.svg",
  },
  {
    name: "Court Heels",
    description: "Red Stilettos",
    rating: 5,
    price: 95.0,
    image: "/assets//images/flow1/product6.svg",
  },
  {
    name: "Court Heels",
    description: "Red Stilettos",
    rating: 5,
    price: 95.0,
    image: "/assets//images/flow1/product7.svg",
  },
  {
    name: "Court Heels",
    description: "Red Stilettos",
    rating: 5,
    price: 95.0,
    image: "/assets//images/flow1/product8.svg",
  },
  {
    name: "Court Heels",
    description: "Red Stilettos",
    rating: 5,
    price: 95.0,
    image: "/assets//images/flow1/product9.svg",
  },
];

// Initial render

function getStarRating(rating) {
  let stars = "";
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars += ` <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.34588 1.30005C6.87759 0.45467 8.12225 0.454671 8.65396 1.30005L9.93988 3.34455C10.127 3.64199 10.4242 3.85544 10.7681 3.93941L13.1325 4.51658C14.1101 4.75523 14.4947 5.92539 13.8457 6.68652L12.2761 8.52726C12.0478 8.79506 11.9342 9.14043 11.9597 9.48976L12.1351 11.891C12.2076 12.8838 11.2006 13.607 10.2678 13.2321L8.01181 12.3252C7.6836 12.1933 7.31624 12.1933 6.98803 12.3252L4.73204 13.2321C3.7992 13.6071 2.79226 12.8838 2.86476 11.891L3.04009 9.48976C3.0656 9.14043 2.95208 8.79506 2.72373 8.52726L1.15411 6.68652C0.505091 5.92539 0.88971 4.75523 1.86735 4.51658L4.23171 3.93941C4.57568 3.85544 4.87288 3.64199 5.05996 3.34455L6.34588 1.30005Z" fill="#F56630"/>
</svg>`;
    } else {
      stars += `<svg class="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 1.5l2.52 5.1 5.67.83-4.1 3.99.97 5.65-5.06-2.66-5.06 2.66.97-5.65-4.1-3.99 5.67-.83L10 1.5z"/>
                </svg>`;
    }
  }
  return stars;
}

document.addEventListener("DOMContentLoaded", function () {
  function renderProducts(productData) {
    const productGrid = document.querySelector("#product-list");

    if (!productGrid) {
      console.error("Product list container not found!");
      return;
    }

    productGrid.innerHTML = ""; // Clear existing content

    productData.forEach((product) => {
      const productElement = document.createElement("div");
      productElement.classList.add("group", "relative", "overflow-hidden");

      productElement.innerHTML = `
  <a href="/demo1/singleProduct.html" class="group block py-3 overflow-hidden">
    <img
      src="${product.image}"
      alt="${product.name}"
       class="w-full h-48 object-cover"
    />
    <div class="mt-1.5">
    <div class="flex justify-between ">
          <h3 class="text-gray-800 font-semibold text-lg"> ${product.name}</h3>
          <h3 class="text-gray-800 mr-8 font-bold text-lg">
            <sup class="text-[12px]">$</sup>${
              product.price
            }<sup class="text-sm">.00</sup>
          </h3>
        </div>
         <p class="text-[#1D2739] text-sm">${product.description}</p>
         <div class="flex flex-col space-y-2 ">
          <div>
            <div class="flex items-center mt-1">
              
 ${getStarRating(product.rating)}
              <span class="text-sm text-[#1D2739] ml-2">(91)</span>
            </div>
          </div>
          <button class="inline-flex space-x-1 items-center w-40  border-2 border-[#D0D5DD] text-[#475367] font-semibold px-4 py-2 rounded-full hover:bg-gray-200 transition">
           <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.08333 0.833008C1.6231 0.833008 1.25 1.2061 1.25 1.66634C1.25 2.12658 1.6231 2.49967 2.08333 2.49967C2.69035 2.49967 3.22066 2.94074 3.32984 3.56135L3.90141 6.81025L3.90192 6.81312L4.26813 8.85974C4.49716 10.1398 4.68006 11.162 4.9113 11.974C5.14977 12.8114 5.45884 13.5004 5.98376 14.0827C6.3443 14.4827 6.76614 14.825 7.23364 15.0982C7.91088 15.494 8.65747 15.6683 9.54511 15.7517C10.4099 15.833 11.4817 15.833 12.8319 15.833H13.2424C13.8429 15.833 14.338 15.833 14.7459 15.8033C15.1708 15.7724 15.5575 15.7065 15.9327 15.5466C16.4799 15.3133 16.9591 14.9466 17.3221 14.4787C17.5727 14.1556 17.7291 13.7994 17.8574 13.4015C17.9798 13.0218 18.0915 12.5538 18.2256 11.9915L18.2425 11.9206C18.4465 11.0659 18.6131 10.3676 18.6937 9.79739C18.7767 9.21068 18.7858 8.65884 18.5969 8.12693C18.3313 7.37918 17.8086 6.74966 17.1246 6.33955C16.6428 6.05065 16.098 5.93761 15.4935 5.88468C14.9033 5.83299 14.1638 5.833 13.2512 5.83301H5.42175L4.9713 3.27257C4.72412 1.86754 3.51195 0.833008 2.08333 0.833008ZM13.2122 7.49967C14.173 7.49967 14.8393 7.50043 15.3481 7.54499C15.851 7.58903 16.1024 7.66994 16.2676 7.76897C16.628 7.98507 16.8934 8.31044 17.0264 8.68476C17.0843 8.84795 17.1108 9.08806 17.0435 9.56392C16.9751 10.0474 16.8276 10.6693 16.6118 11.574C16.4684 12.1749 16.3713 12.5795 16.2711 12.8901C16.1746 13.1895 16.0921 13.3451 16.0052 13.4571C15.8193 13.6968 15.57 13.8894 15.2791 14.0134C15.139 14.0731 14.955 14.1171 14.6249 14.1411C14.2847 14.1658 13.8504 14.1663 13.2122 14.1663H12.874C11.4724 14.1663 10.4788 14.1655 9.70108 14.0924C8.93732 14.0206 8.45978 13.8844 8.0746 13.6593C7.75362 13.4717 7.46605 13.2378 7.22168 12.9668C6.93152 12.6449 6.71522 12.2233 6.51424 11.5175C6.30866 10.7956 6.13956 9.85618 5.90092 8.52249L5.7179 7.49967H13.2122Z" fill="#475367"/>
<path d="M8.75 17.2913C8.75 17.8666 8.28363 18.333 7.70833 18.333C7.13304 18.333 6.66667 17.8666 6.66667 17.2913C6.66667 16.716 7.13304 16.2497 7.70833 16.2497C8.28363 16.2497 8.75 16.716 8.75 17.2913Z" fill="#475367"/>
<path d="M15.2083 18.333C15.7836 18.333 16.25 17.8666 16.25 17.2913C16.25 16.716 15.7836 16.2497 15.2083 16.2497C14.633 16.2497 14.1667 16.716 14.1667 17.2913C14.1667 17.8666 14.633 18.333 15.2083 18.333Z" fill="#475367"/>
</svg>


            <span>Add to Cart</span>
          </button>
    </div>
  </a>
`;

      productGrid.appendChild(productElement);
    });
  }

  // accordion
  const accordionItems = document.querySelectorAll(".accordion-item");

  function openAccordion(item) {
    const content = item.querySelector(".accordion-content");
    const closeIcon = item.querySelector(".accordion-button .close");
    const openIcon = item.querySelector(".accordion-button .open");

    content.classList.remove("hidden");
    closeIcon.classList.remove("hidden");
    openIcon.classList.add("hidden");
  }

  function closeAccordion(item) {
    const content = item.querySelector(".accordion-content");
    const closeIcon = item.querySelector(".accordion-button .close");
    const openIcon = item.querySelector(".accordion-button .open");

    content.classList.add("hidden");
    closeIcon.classList.add("hidden");
    openIcon.classList.remove("hidden");
  }

  function toggleAccordion(item) {
    if (item.querySelector(".accordion-content").classList.contains("hidden")) {
      accordionItems.forEach((otherItem) => {
        if (otherItem !== item) {
          closeAccordion(otherItem);
        }
      });
      openAccordion(item);
    } else {
      closeAccordion(item);
    }
  }
  accordionItems.forEach((item, index) => {
    const header = item.querySelector(".accordion-header");
    header.addEventListener("click", () => toggleAccordion(item));
    if (index === 0) {
      openAccordion(item); // Open the first item on page load
    }
  });

  renderProducts(productData);
});

// Search functionality
function handleSearch(event) {
  const searchTerm = event.target.value.toLowerCase();
  const filteredProducts = productsList.filter((product) =>
    product.name.toLowerCase().includes(searchTerm)
  );
  renderProducts(filteredProducts);
}

// Event listener for search not working properly
// document.querySelector("#search-input").addEventListener("input", handleSearch);

// single product
const singleProductData = {
  name: "Nike Blazer Low '77 Vintage",
  description:
    "Praised by the streets for its classic simplicity and comfort, the Nike Blazer Low '77 Vintage returns with its low-profile style and heritage b-ball looks.",
  rating: 4,
  ratingCount: 121,
  price: 190.2,
  qtyLeft: 12,
  discountPrice: 129.99,
  image: "/assets/images/flow1/productdetails.svg",
  images: [
    "/assets/images/flow1/productDeS1.svg",
    "/assets/images/flow1/productDeS2.svg",
    "/assets/images/flow1/productDeS3.svg",
    "/assets/images/flow1/productDeS4.svg",
  ],
  colors: ["#FFFFFF", "#B00074", "#475367", "#FBE2B7", "#FBE2B7"],
  sizes: ["37", "38", "39", "41", "42", "43", "44"],
  reviews: [
    {
      author: "Eugene ADAVORE",
      text: "Details about the product in question goes here. You have the option to now select and buy. Details about the product in question goes here. You have the option to now select and buy.Details about the product in question goes here. You have the option to now select and buy.",
      rating: 4,
      likes: 123,
      dislikes: 0,
    },
    {
      author: "Eugene ADAVORE",
      text: "Details about the product in question goes here. You have the option to now select and buy. Details about the product in question goes here. You have the option to now select and buy.Details about the product in question goes here. You have the option to now select and buy.",
      rating: 4,
      likes: 123,
      dislikes: 0,
    },
  ],
  similarProducts: [
    {
      name: "Court Heels",
      description: "Red Stilettos",
      rating: 5, // You can represent rating as a number (e.g., 1-5)
      price: 95.0,
      image: "/assets//images/flow1/product1.svg",
    },
    {
      name: "Court Heels",
      description: "Red Stilettos",
      rating: 5,
      price: 95.0,
      image: "/assets//images/flow1/product2.svg",
    },
    {
      name: "Court Heels",
      description: "Red Stilettos",
      rating: 5,
      price: 95.0,
      image: "/assets//images/flow1/product3.svg",
    },
  ],
};

document.addEventListener("DOMContentLoaded", function () {
  const product = singleProductData;

  // Function to render product details
  function renderProductDetails(product) {
    // Main Image
    const mainImage = document.getElementById("main-product-image");
    mainImage.src = product.image;
    mainImage.alt = product.name;

    // Product Name
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-description").textContent =
      product.description;
    document.getElementById("product-price").innerHTML = `$${product.price}`;
    document.getElementById(
      "product-offer-price"
    ).innerHTML = ` or <span class="font-bold text-black">$${product.discountPrice}</span> /month`;

    // Product Rating
    const ratingContainer = document.getElementById("product-rating");

    ratingContainer.innerHTML = getStarRating(product.rating);
    document.getElementById(
      "product-rating-count"
    ).textContent = `(${product.ratingCount})`;

    // Thumbnails
    const thumbnailsContainer = document.getElementById("thumbnails-container");
    thumbnailsContainer.innerHTML = "";
    product.images.forEach((imageSrc) => {
      const thumbnail = document.createElement("img");
      thumbnail.src = imageSrc;
      thumbnail.classList.add(
        "w-28",
        "h-28",
        "rounded",
        "cursor-pointer",
        "border",
        "border-gray-200"
      );
      thumbnail.addEventListener("click", () => {
        mainImage.src = imageSrc;
      });
      thumbnailsContainer.appendChild(thumbnail);
    });
    // Color Options
    const colorOptionsContainer = document.getElementById("color-options");
    colorOptionsContainer.innerHTML = "";
    product.colors.forEach((color) => {
      const colorButton = document.createElement("button");
      colorButton.classList.add(
        "w-10",
        "h-10",
        "rounded-full",
        "cursor-pointer",
        "border",
        "border-gray-300"
      );
      colorButton.style.backgroundColor = color;
      colorOptionsContainer.appendChild(colorButton);
    });

    // Size Options
    const sizeOptionsContainer = document.getElementById("size-options");
    sizeOptionsContainer.innerHTML = "";
    product.sizes.forEach((size) => {
      const sizeButton = document.createElement("button");
      sizeButton.classList.add(
        "px-3",
        "py-1",
        "rounded-full",
        "bg-[#F0F2F5]",
        "text-sm",
        "text-[#475367]"
      );
      sizeButton.textContent = size;
      sizeOptionsContainer.appendChild(sizeButton);
    });

    // document.getElementById('qty-left').textContent = product.qtyLeft;
    // Product Reviews
    const reviewContainer = document.querySelector("#review");
    reviewContainer.innerHTML = "";
    product.reviews.forEach((review) => {
      const reviewElement = document.createElement("div");
      reviewElement.classList.add("review-card");

      reviewElement.innerHTML = `
             <div class="p-4 bg-[#FCFCFC] rounded-md border border-[#F0F2F5]">
                    <div class="flex items-center space-x-2">
                      ${getStarRating(review.rating)}
                    </div>
                    <p class="text-gray-600 mt-2 text-sm">${review.text}</p>
                    <div class="mt-2 flex items-center space-x-4">
                       <p class="text-[#4B5563] font-semibold text-base ">${
                         review.author
                       }</p>
                      <p class="text-[#4B5563] text-xs">Online Shopper</p>
                  
                    </div>
                     <div class="mt-2 flex items-center space-x-4">
                           <button class="text-base text-[#0EA5E9]">Reply</button>
                        <div class="flex items-center space-x-1">
                             <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_111_2063" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="25">
<rect y="0.5" width="24" height="24" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_111_2063)">
<path d="M18 21.5H7V8.5L14 1.5L15.25 2.75C15.3667 2.86667 15.4625 3.025 15.5375 3.225C15.6125 3.425 15.65 3.61667 15.65 3.8V4.15L14.55 8.5H21C21.5333 8.5 22 8.7 22.4 9.1C22.8 9.5 23 9.96667 23 10.5V12.5C23 12.6167 22.9833 12.7417 22.95 12.875C22.9167 13.0083 22.8833 13.1333 22.85 13.25L19.85 20.3C19.7 20.6333 19.45 20.9167 19.1 21.15C18.75 21.3833 18.3833 21.5 18 21.5ZM9 19.5H18L21 12.5V10.5H12L13.35 5L9 9.35V19.5ZM7 8.5V10.5H4V19.5H7V21.5H2V8.5H7Z" fill="#4B5563"/>
</g>
</svg>

                             <span class="text-gray-700 font-medium">${
                               review.likes
                             }</span>
                         </div>
                          <div class="flex items-center space-x-1">
                           <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_111_2103" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="25">
<rect x="24" y="24.5" width="24" height="24" transform="rotate(180 24 24.5)" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_111_2103)">
<path d="M6 3.5H17V16.5L10 23.5L8.75 22.25C8.63333 22.1333 8.5375 21.975 8.4625 21.775C8.3875 21.575 8.35 21.3833 8.35 21.2V20.85L9.45 16.5H3C2.46667 16.5 2 16.3 1.6 15.9C1.2 15.5 1 15.0333 1 14.5V12.5C1 12.3833 1.01667 12.2583 1.05 12.125C1.08333 11.9917 1.11667 11.8667 1.15 11.75L4.15 4.7C4.3 4.36666 4.55 4.08333 4.9 3.85C5.25 3.61667 5.61667 3.5 6 3.5ZM15 5.5H6L3 12.5V14.5H12L10.65 20L15 15.65V5.5ZM17 16.5V14.5H20V5.5H17V3.5H22V16.5H17Z" fill="#4B5563"/>
</g>
</svg>

                            <span class="text-gray-700 font-medium">${
                              review.dislikes
                            }</span>
                          </div>
                      </div>
                </div>
         `;

      reviewContainer.appendChild(reviewElement);
    });
  }
  renderProductDetails(product);

  function renderProductsList(products) {
    const productContainer = document.querySelector("#product-list");
    productContainer.innerHTML = "";

    products.forEach((product) => {
      const productElement = document.createElement("div");
      productElement.classList.add("group", "block");
      let ratingStars = "";
      for (let i = 0; i < 5; i++) {
        if (i < product.rating) {
          ratingStars += `<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.34588 1.30005C6.87759 0.45467 8.12225 0.454671 8.65396 1.30005L9.93988 3.34455C10.127 3.64199 10.4242 3.85544 10.7681 3.93941L13.1325 4.51658C14.1101 4.75523 14.4947 5.92539 13.8457 6.68652L12.2761 8.52726C12.0478 8.79506 11.9342 9.14043 11.9597 9.48976L12.1351 11.891C12.2076 12.8838 11.2006 13.607 10.2678 13.2321L8.01181 12.3252C7.6836 12.1933 7.31624 12.1933 6.98803 12.3252L4.73204 13.2321C3.7992 13.6071 2.79226 12.8838 2.86476 11.891L3.04009 9.48976C3.0656 9.14043 2.95208 8.79506 2.72373 8.52726L1.15411 6.68652C0.505091 5.92539 0.88971 4.75523 1.86735 4.51658L4.23171 3.93941C4.57568 3.85544 4.87288 3.64199 5.05996 3.34455L6.34588 1.30005Z" fill="#F56630"/>
</svg>`;
        } else {
          ratingStars += ` <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.34588 1.30005C6.87759 0.45467 8.12225 0.454671 8.65396 1.30005L9.93988 3.34455C10.127 3.64199 10.4242 3.85544 10.7681 3.93941L13.1325 4.51658C14.1101 4.75523 14.4947 5.92539 13.8457 6.68652L12.2761 8.52726C12.0478 8.79506 11.9342 9.14043 11.9597 9.48976L12.1351 11.891C12.2076 12.8838 11.2006 13.607 10.2678 13.2321L8.01181 12.3252C7.6836 12.1933 7.31624 12.1933 6.98803 12.3252L4.73204 13.2321C3.7992 13.6071 2.79226 12.8838 2.86476 11.891L3.04009 9.48976C3.0656 9.14043 2.95208 8.79506 2.72373 8.52726L1.15411 6.68652C0.505091 5.92539 0.88971 4.75523 1.86735 4.51658L4.23171 3.93941C4.57568 3.85544 4.87288 3.64199 5.05996 3.34455L6.34588 1.30005Z" fill="gray"/>
</svg>`;
        }
      }
      productElement.innerHTML = `
   <a href="#" class="group block">
       <img
       src="${product.image}"
       alt="${product.name}"
       class="w-full h-48 object-cover"
      />
    <div class="mt-1.5">
    <div class="flex space-x-28">
       <h3 class="text-gray-800 font-semibold text-lg"> ${product.name}</h3>
        <h3 class="text-gray-800 font-bold text-lg">
          <sup class="text-[12px]">$</sup>${
            product.price
          }<sup class="text-sm">.00</sup>
        </h3>
       </div>
       <p class="text-[#1D2739] text-sm">${product.description}</p>
       <div class="flex flex-col space-y-2 ">
          <div>
            <div class="flex items-center mt-1">
               ${getStarRating(product.rating)}
            <span class="text-sm text-[#1D2739] ml-2">(91)</span>
            </div>
          </div>
        <button class="inline-flex space-x-1 items-center w-40  border-2 border-[#D0D5DD] text-[#475367] font-semibold px-4 py-2 rounded-full hover:bg-gray-200 transition">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.08333 0.833008C1.6231 0.833008 1.25 1.2061 1.25 1.66634C1.25 2.12658 1.6231 2.49967 2.08333 2.49967C2.69035 2.49967 3.22066 2.94074 3.32984 3.56135L3.90141 6.81025L3.90192 6.81312L4.26813 8.85974C4.49716 10.1398 4.68006 11.162 4.9113 11.974C5.14977 12.8114 5.45884 13.5004 5.98376 14.0827C6.3443 14.4827 6.76614 14.825 7.23364 15.0982C7.91088 15.494 8.65747 15.6683 9.54511 15.7517C10.4099 15.833 11.4817 15.833 12.8319 15.833H13.2424C13.8429 15.833 14.338 15.833 14.7459 15.8033C15.1708 15.7724 15.5575 15.7065 15.9327 15.5466C16.4799 15.3133 16.9591 14.9466 17.3221 14.4787C17.5727 14.1556 17.7291 13.7994 17.8574 13.4015C17.9798 13.0218 18.0915 12.5538 18.2256 11.9915L18.2425 11.9206C18.4465 11.0659 18.6131 10.3676 18.6937 9.79739C18.7767 9.21068 18.7858 8.65884 18.5969 8.12693C18.3313 7.37918 17.8086 6.74966 17.1246 6.33955C16.6428 6.05065 16.098 5.93761 15.4935 5.88468C14.9033 5.83299 14.1638 5.833 13.2512 5.83301H5.42175L4.9713 3.27257C4.72412 1.86754 3.51195 0.833008 2.08333 0.833008ZM13.2122 7.49967C14.173 7.49967 14.8393 7.50043 15.3481 7.54499C15.851 7.58903 16.1024 7.66994 16.2676 7.76897C16.628 7.98507 16.8934 8.31044 17.0264 8.68476C17.0843 8.84795 17.1108 9.08806 17.0435 9.56392C16.9751 10.0474 16.8276 10.6693 16.6118 11.574C16.4684 12.1749 16.3713 12.5795 16.2711 12.8901C16.1746 13.1895 16.0921 13.3451 16.0052 13.4571C15.8193 13.6968 15.57 13.8894 15.2791 14.0134C15.139 14.0731 14.955 14.1171 14.6249 14.1411C14.2847 14.1658 13.8504 14.1663 13.2122 14.1663H12.874C11.4724 14.1663 10.4788 14.1655 9.70108 14.0924C8.93732 14.0206 8.45978 13.8844 8.0746 13.6593C7.75362 13.4717 7.46605 13.2378 7.22168 12.9668C6.93152 12.6449 6.71522 12.2233 6.51424 11.5175C6.30866 10.7956 6.13956 9.85618 5.90092 8.52249L5.7179 7.49967H13.2122Z" fill="#475367"/>
<path d="M8.75 17.2913C8.75 17.8666 8.28363 18.333 7.70833 18.333C7.13304 18.333 6.66667 17.8666 6.66667 17.2913C6.66667 16.716 7.13304 16.2497 7.70833 16.2497C8.28363 16.2497 8.75 16.716 8.75 17.2913Z" fill="#475367"/>
<path d="M15.2083 18.333C15.7836 18.333 16.25 17.8666 16.25 17.2913C16.25 16.716 15.7836 16.2497 15.2083 16.2497C14.633 16.2497 14.1667 16.716 14.1667 17.2913C14.1667 17.8666 14.633 18.333 15.2083 18.333Z" fill="#475367"/>
</svg>

                <span>Add to Cart</span>
              </button>
        </div>
       </div>
    </a>
  `;
      productContainer.appendChild(productElement);
    });
  }

  // Initial render
  renderProductDetails(singleProductData);
  renderProductsList(singleProductData.similarProducts);

  // Function to handle quantity
  let currentQuantity = 1;
  const qtyValueElement = document.getElementById("qty-value");
  const qtyLeftElement = document.getElementById("qty-left").textContent;

  document.getElementById("increase-qty").addEventListener("click", () => {
    if (currentQuantity < singleProductData.qtyLeft) {
      currentQuantity++;
      qtyValueElement.textContent = currentQuantity;
    }
  });
  document.getElementById("decrease-qty").addEventListener("click", () => {
    if (currentQuantity > 1) {
      currentQuantity--;
      qtyValueElement.textContent = currentQuantity;
    }
  });
});

// Cart section

const cartData = {
  items: [
    {
      name: "Luka 2 Basketball Shoes",
      description: "Details about the product in question goes here.",
      color: "Black",
      size: "41",
      price: 15.0,
      quantity: 1,
      image: "/assets//images/flow1/product1.svg",
    },
    {
      name: "Nike Air Max 97 SE",
      description: "Details about the product in question goes here.",
      color: "White & Pink",
      size: "39",
      price: 15.0,
      quantity: 1,
      image: "/assets//images/flow1/product2.svg",
    },
    {
      name: "Luka 2 Basketball Shoes",
      description: "Details about the product in question goes here.",
      color: "Black",
      size: "41",
      price: 15.0,
      quantity: 1,
      image: "/assets//images/flow1/product3.svg",
    },
    {
      name: "Nike Air Max 97 SE",
      description: "Details about the product in question goes here.",
      color: "White & Pink",
      size: "39",
      price: 15.0,
      quantity: 1,
      image: "/assets//images/flow1/product4.svg",
    },
  ],
};

document.addEventListener("DOMContentLoaded", () => {
  const cartItems = cartData.items;

  function calculateSubtotal() {
    let subtotal = 0;
    cartItems.forEach((item) => {
      subtotal += item.price * item.quantity;
    });
    return subtotal.toFixed(2);
  }

  function updateCartDisplay() {
    const cartItemsContainer = document.getElementById("cart-items-container");
    const subtotalElement = document.getElementById("cart-subtotal");
    cartItemsContainer.innerHTML = "";

    cartItems.forEach((item, index) => {
      const itemElement = document.createElement("div");
      itemElement.classList.add("rounded-lg", "bg-[#FCFCFC]");

      itemElement.innerHTML = `
                    <div class="flex flex-col md:flex-row md:items-center w-full p-4 md:space-x-2">
                        <img src="${item.image}" alt="${
        item.name
      }" class="md:w-32 md:h-32 rounded-md object-cover" />
             <div class='w-full  space-y-2'>
             <div class='flex flex-wrap justify-between'>
             <h3 class="text-gray-700 font-medium">${item.name}</h3>
             <h4 class="font-bold text-gray-900">$${item.price.toFixed(2)}</h4>
             </div>
             <p class="text-[#475367] text-sm">Color: ${item.color} </p>
                             <p class="text-[#475367] text-sm">Size: ${
                               item.size
                             }</p>
                             
                             <div class="flex items-center justify-between w-full  space-x-4">
                             
                                  <div class="flex items-center bg-[#F9FAFB] rounded-full py-3 px-4">
                                     <button data-index="${index}" class="decrease-qty bg-transparent  rounded-md px-2 py-1"><svg width="12" height="3" viewBox="0 0 12 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.25 0.875C0.904822 0.875 0.625 1.15482 0.625 1.5C0.625 1.84518 0.904822 2.125 1.25 2.125H11.25C11.5952 2.125 11.875 1.84518 11.875 1.5C11.875 1.15482 11.5952 0.875 11.25 0.875H1.25Z" fill="#667185"/>
</svg>
</button>
                                    <span class="mx-2 text-[#F56630]">${
                                      item.quantity
                                    }</span>
                                    <button data-index="${index}" class="increase-qty bg-transparent  rounded-md px-2 py-1"><svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.875 1.5C6.875 1.15482 6.59518 0.875 6.25 0.875C5.90482 0.875 5.625 1.15482 5.625 1.5V5.875H1.25C0.904822 5.875 0.625 6.15482 0.625 6.5C0.625 6.84518 0.904822 7.125 1.25 7.125H5.625V11.5C5.625 11.8452 5.90482 12.125 6.25 12.125C6.59518 12.125 6.875 11.8452 6.875 11.5V7.125H11.25C11.5952 7.125 11.875 6.84518 11.875 6.5C11.875 6.15482 11.5952 5.875 11.25 5.875H6.875V1.5Z" fill="#F56630"/>
</svg>
</button>
                                 </div>
                                  <button class="text-gray-400  hover:text-red-500">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32-.02c-1.172.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>
    
                              </button>
                             </div>
                               </div>
                               
                         </div>
                           
                        `;
      cartItemsContainer.appendChild(itemElement);
    });

    // Update subtotal
    subtotalElement.textContent = `$${calculateSubtotal()}`;

    const increaseQtyButtons = document.querySelectorAll(".increase-qty");
    increaseQtyButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const index = parseInt(button.getAttribute("data-index"));
        cartItems[index].quantity++;
        updateCartDisplay();
      });
    });

    const decreaseQtyButtons = document.querySelectorAll(".decrease-qty");
    decreaseQtyButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const index = parseInt(button.getAttribute("data-index"));
        if (cartItems[index].quantity > 1) {
          cartItems[index].quantity--;
          updateCartDisplay();
        }
      });
    });
  }

  updateCartDisplay();
});

//  delivery section

document.addEventListener("DOMContentLoaded", function () {
  const paymentMethods = document.querySelectorAll(".payment-method");
  const cardSection = document.getElementById("card-payment-section");

  // radio button
  const radioButtons = document.querySelectorAll(
    'input[name="payment-method"]'
  );
  const indicators = document.querySelectorAll(".radio-indicator");

  function updateIndicator(selectedRadioButton) {
    indicators.forEach((indicator) => {
      indicator.classList.add("hidden");
    });

    const correspondingIndicator =
      selectedRadioButton.nextElementSibling.querySelector(".radio-indicator");
    correspondingIndicator.classList.remove("hidden");
  }

  radioButtons.forEach((radio) => {
    radio.addEventListener("change", function () {
      updateIndicator(this);
    });
  });
  // Initialize the correct indicator on page load
  const checkedRadio = document.querySelector(
    'input[name="payment-method"]:checked'
  );
  if (checkedRadio) {
    updateIndicator(checkedRadio);
  }

  // Toggle Payment Method Visibility
  paymentMethods.forEach((input) => {
    input.addEventListener("change", function () {
      cardSection.style.display = this.value === "card" ? "block" : "none";
    });
  });

  // Update total dynamically based on tax and subtotal
  const subtotal = parseFloat(
    document.getElementById("subtotal").textContent.replace("$", "")
  );
  const tax = parseFloat(
    document.getElementById("tax").textContent.replace("$", "")
  );
  const shipping = parseFloat(
    document.getElementById("shipping").textContent.replace("$", "")
  );

  const totalAmount = subtotal + tax + shipping;
  document.getElementById("total-amount").textContent = `$${totalAmount.toFixed(
    2
  )}`;

  // Update button text dynamically
  document.getElementById(
    "pay-button"
  ).textContent = `Pay $${totalAmount.toFixed(2)}`;
});

// blog section
document.addEventListener("DOMContentLoaded", function () {
  // Image data arrays for carousel and blog previews
  const carouselImages = [
    {
      url: "/assets/images/flow1/carouselImage1.svg",
      title: "A Latest Article that was Publish on the Blog",
      description:
        "A short description about image and article, details or synopsis stories, short learning or something.",
    },
    {
      url: "/assets/images/flow1/blogImage1.svg",
      title: "A Latest Article that was Publish on the Blog",
      description:
        "A short description about image and article, details or synopsis stories, short learning or something.",
    },
    {
      url: "/assets/images/flow1/blogImage2.svg",
      title: "A Latest Article that was Publish on the Blog",
      description:
        "A short description about image and article, details or synopsis stories, short learning or something.",
    },
  ];

  const blogPreviews = [
    {
      url: "/assets/images/flow1/blogImage1.svg",
      title: "Name of Deal goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque incidunt quibusdam, earum est.",
    },
    {
      url: "/assets/images/flow1/blogImage2.svg",
      title: "Name of Deal goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque incidunt quibusdam, earum est.",
    },
    {
      url: "/assets/images/flow1/blogImage3.svg",
      title: "Name of Deal goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque incidunt quibusdam, earum est.",
    },
    {
      url: "/assets/images/flow1/blogImage4.svg",
      title: "Name of Deal goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque incidunt quibusdam, earum est.",
    },
    {
      url: "/assets/images/flow1/blogImage5.svg",
      title: "Name of Deal goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque incidunt quibusdam, earum est.",
    },
    {
      url: "/assets/images/flow1/blogImage6.svg",
      title: "Name of Deal goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque incidunt quibusdam, earum est.",
    },
  ];

  // Inject carousel images
  const carouselWrapper = document.querySelector(".carousel-wrapper");
  carouselImages.forEach((image) => {
    const slide = document.createElement("div");
    slide.classList.add("carousel-slide", "min-w-full", "relative");

    const img = document.createElement("img");
    img.src = image.url;
    img.alt = "Carousel Image";
    img.classList.add("w-full", "h-full");
    img.style.objectFit = "cover";
    img.style.height = "805px";

    const textWrapper = document.createElement("div");
    textWrapper.classList.add(
      "absolute",
      "bottom-4",
      "left-4",
      "p-4",
      "text-white"
    );

    const title = document.createElement("h2");
    title.classList.add("text-xl", "font-bold");
    title.textContent = image.title;

    const description = document.createElement("p");
    description.classList.add("text-sm");
    description.textContent = image.description;

    textWrapper.appendChild(title);
    textWrapper.appendChild(description);
    slide.appendChild(img);
    slide.appendChild(textWrapper);

    carouselWrapper.appendChild(slide);
  });

  // Inject blog preview images and descriptions
  const blogPreviewContainer = document.getElementById(
    "blog-preview-container"
  );
  blogPreviews.forEach((preview) => {
    const previewDiv = document.createElement("div");
    previewDiv.classList.add("rounded-lg", "overflow-hidden");

    const img = document.createElement("img");
    img.src = preview.url;
    img.alt = "Blog Preview";
    img.classList.add("w-full", "h-[400px]", "object-cover", "rounded-lg");

    const contentDiv = document.createElement("div");
    contentDiv.classList.add("py-4");

    const title = document.createElement("h3");
    title.classList.add("font-medium", "mb-2", "text-[20px]");
    title.textContent = preview.title;

    const description = document.createElement("p");
    description.classList.add("text-[#4B5563]", "text-base", "truncate");
    description.textContent = preview.description;

    const readMoreLink = document.createElement("a");
    readMoreLink.classList.add("text-[#0EA5E9]", "underline", "block", "mt-2");
    readMoreLink.href = "./blog-detail.html";
    readMoreLink.textContent = "Read more";

    contentDiv.appendChild(title);
    contentDiv.appendChild(description);
    contentDiv.appendChild(readMoreLink);
    previewDiv.appendChild(img);
    previewDiv.appendChild(contentDiv);
    blogPreviewContainer.appendChild(previewDiv);
  });

  // Carousel functionality with indicators
  const carouselWrapperElement = document.querySelector(".carousel-wrapper");
  const carouselIndicatorsContainer = document.getElementById(
    "carousel-indicators"
  );
  const slides = document.querySelectorAll(".carousel-slide");

  let currentIndex = 0;
  let autoSlideInterval;

  function createIndicators() {
    slides.forEach((_, index) => {
      const indicator = document.createElement("button");
      indicator.classList.add(
        "w-3",
        "h-3",
        "rounded-full",
        "bg-gray-300",
        "cursor-pointer",
        "indicator"
      );
      indicator.setAttribute("data-index", index);

      // Add click event listener to the indicator
      indicator.addEventListener("click", function () {
        currentIndex = parseInt(this.getAttribute("data-index"));
        updateCarousel();
        resetAutoSlide();
      });
      carouselIndicatorsContainer.appendChild(indicator);
    });
  }
  createIndicators();
  function updateCarousel() {
    carouselWrapperElement.style.transform = `translateX(-${
      currentIndex * 100
    }%)`;
    updateIndicators();
  }
  function updateIndicators() {
    const indicators = document.querySelectorAll(".indicator");
    indicators.forEach((indicator, index) => {
      if (index === currentIndex) {
        indicator.classList.remove("bg-gray-300");
        indicator.classList.add("bg-gray-800");
      } else {
        indicator.classList.add("bg-gray-300");
        indicator.classList.remove("bg-gray-800");
      }
    });
  }
  function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateCarousel();
    }, 5000); // Change slide every 5 seconds
  }
  function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
  }
  startAutoSlide();
  updateIndicators();
});

// Data for Other Stories
document.addEventListener("DOMContentLoaded", function () {
  // Ensure the target container exists
  const blogDetailsContainer = document.querySelector(
    "#blog-details-container"
  );

  if (!blogDetailsContainer) {
    console.error("Error: #blog-details-container not found in the DOM.");
    return;
  }

  // Data for Other Stories
  const otherStories = [
    {
      imgSrc: "/assets/images/flow1/otherImg1.svg",
      alt: "Other Story 1",
      title: "Name of Deal goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque incidunt quibusdam, earum est.",
    },
    {
      imgSrc: "/assets/images/flow1/otherImg2.svg",
      alt: "Other Story 2",
      title: "Name of Deal goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque incidunt quibusdam, earum est.",
    },
    {
      imgSrc: "/assets/images/flow1/otherImg3.svg",
      alt: "Other Story 3",
      title: "Name of Deal goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque incidunt quibusdam, earum est.",
    },
    {
      imgSrc: "/assets/images/flow1/otherImg4.svg",
      alt: "Other Story 4",
      title: "Name of Deal goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque incidunt quibusdam, earum est.",
    },
  ];

  // Create the "Other Stories" section
  const otherStoriesSection = document.createElement("section");
  otherStoriesSection.classList.add("mb-8");

  // Add heading
  const heading = document.createElement("h2");
  heading.classList.add("text-xl", "font-bold", "mb-4", "pt-4");
  heading.textContent = "Other Stories";

  // Add description
  const descriptionWrapper = document.createElement("div");
  descriptionWrapper.classList.add("lg:w-4/5", "mb-10");

  const descriptionText = document.createElement("p");
  descriptionText.classList.add("text-[#4B5563]", "text-base");
  descriptionText.textContent =
    "Details about the product in question goes here. You have the option to now select and buy. Details about the product in question goes here. You have the option to now select and buy.Details about the product in question goes here. You have the option to now select and buy.";

  descriptionWrapper.appendChild(descriptionText);

  // Create grid container
  const gridContainer = document.createElement("div");
  gridContainer.classList.add(
    "grid",
    "md:grid-cols-2",
    "lg:grid-cols-4",
    "gap-12"
  );

  // Loop through each story and create items
  otherStories.forEach((story) => {
    const storyCard = document.createElement("div");
    storyCard.classList.add(
      "rounded-lg",

      "overflow-hidden"
    );

    const storyImage = document.createElement("img");
    storyImage.src = story.imgSrc;
    storyImage.alt = story.alt;
    storyImage.classList.add("w-full", "h-32", "object-cover");

    const storyContent = document.createElement("div");
    storyContent.classList.add("py-4");

    const storyTitle = document.createElement("h3");
    storyTitle.classList.add("font-bold", "mb-2");
    storyTitle.textContent = story.title;

    const storyDescription = document.createElement("p");
    storyDescription.classList.add("text-[#4B5563]", "text-base");
    storyDescription.textContent = story.description;

    // Append elements together
    storyContent.appendChild(storyTitle);
    storyContent.appendChild(storyDescription);
    storyCard.appendChild(storyImage);
    storyCard.appendChild(storyContent);
    gridContainer.appendChild(storyCard);
  });

  // Append everything to the section
  otherStoriesSection.appendChild(heading);
  otherStoriesSection.appendChild(descriptionWrapper);
  otherStoriesSection.appendChild(gridContainer);

  // Append the section to the blog details container
  blogDetailsContainer.appendChild(otherStoriesSection);
});

// about section
document.addEventListener("DOMContentLoaded", function () {
  const teamContainer = document.getElementById("team-container");

  const teamMembers = [
    {
      name: "Patrick Omokhigo",
      role: "Head of Marketing and Sales",
      img: "/assets/images/team-member1.svg",
    },
    {
      name: "Patrick Omokhigo",
      role: "Head of Marketing and Sales",
      img: "/assets/images/team-member2.svg",
    },
    {
      name: "Patrick Omokhigo",
      role: "Head of Marketing and Sales",
      img: "/assets/images/team-member3.svg",
    },
    {
      name: "Patrick Omokhigo",
      role: "Head of Marketing and Sales",
      img: "/assets/images/team-member4.svg",
    },
    {
      name: "Patrick Omokhigo",
      role: "Head of Marketing and Sales",
      img: "/assets/images/team-member2.svg",
    },
    {
      name: "Patrick Omokhigo",
      role: "Head of Marketing and Sales",
      img: "/assets/images/team-member1.svg",
    },
  ];

  teamMembers.forEach((member) => {
    const teamCard = document.createElement("div");
    teamCard.classList.add(
      "rounded-lg",
      "overflow-hidden",
      "text-start",
      "py-4"
    );

    const img = document.createElement("img");
    img.src = member.img;
    img.alt = member.name;
    img.classList.add("w-full", "rounded-lg");

    const name = document.createElement("h3");
    name.classList.add("font-bold", "mt-2");
    name.textContent = member.name;

    const role = document.createElement("p");
    role.classList.add("text-gray-600", "text-sm");
    role.textContent = member.role;

    teamCard.appendChild(img);
    teamCard.appendChild(name);
    teamCard.appendChild(role);

    teamContainer.appendChild(teamCard);
  });
});
