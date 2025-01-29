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
            const mainImage = document.getElementById('main-product-image');
            mainImage.src = product.image;
            mainImage.alt = product.name;

             // Product Name
          document.getElementById('product-name').textContent = product.name;
          document.getElementById('product-description').textContent = product.description;
          document.getElementById('product-price').innerHTML = `<sup class="text-base">$</sup>${product.price}<sup class="text-sm">.00</sup>`;
          document.getElementById('product-offer-price').innerHTML = ` or <span class="font-bold text-black">$${product.discountPrice}</span> /month`;

          // Product Rating
             const ratingContainer = document.getElementById('product-rating');
            
            ratingContainer.innerHTML =  getStarRating(product.rating);
            document.getElementById('product-rating-count').textContent = `(${product.ratingCount})`;

            // Thumbnails
           const thumbnailsContainer = document.getElementById('thumbnails-container');
             thumbnailsContainer.innerHTML = "";
          product.images.forEach(imageSrc => {
           const thumbnail = document.createElement('img');
           thumbnail.src = imageSrc;
           thumbnail.classList.add('w-20', 'h-20', 'rounded', 'cursor-pointer', 'border', 'border-gray-200');
           thumbnail.addEventListener('click', () => {
           mainImage.src = imageSrc
            })
           thumbnailsContainer.appendChild(thumbnail);
          });
          // Color Options
          const colorOptionsContainer = document.getElementById('color-options');
            colorOptionsContainer.innerHTML = '';
            product.colors.forEach(color => {
             const colorButton = document.createElement('button');
              colorButton.classList.add('w-6', 'h-6', 'rounded-full', 'cursor-pointer', 'border', 'border-gray-300');
             colorButton.style.backgroundColor = color;
             colorOptionsContainer.appendChild(colorButton);
            });

        // Size Options
        const sizeOptionsContainer = document.getElementById('size-options');
            sizeOptionsContainer.innerHTML = '';
            product.sizes.forEach(size => {
                const sizeButton = document.createElement('button');
                sizeButton.classList.add('px-3', 'py-1', 'rounded-full', 'bg-[#F0F2F5]', 'text-sm', 'text-[#475367]', );
                sizeButton.textContent = size;
                 sizeOptionsContainer.appendChild(sizeButton);
           });

              document.getElementById('qty-left').textContent = product.qtyLeft;
             // Product Reviews
    const reviewContainer = document.querySelector("#review");
        reviewContainer.innerHTML = "";
     product.reviews.forEach((review) => {
     const reviewElement = document.createElement("div");
          reviewElement.classList.add("review-card");
        
        let ratingStars = "";
        for (let i = 0; i < 5; i++) {
            if (i < review.rating) {
            ratingStars += '<i class="fa-solid fa-star text-yellow-500"></i>';
          } else {
            ratingStars += '<i class="fa-regular fa-star text-gray-400"></i>';
        }
      }

          reviewElement.innerHTML = `
             <div class="p-4 bg-white rounded-md border border-[#F0F2F5]">
                    <div class="flex items-center space-x-2">
                      ${ratingStars}
                    </div>
                    <p class="text-gray-600 mt-2 text-sm">${review.text}</p>
                    <div class="mt-2 flex items-center space-x-4">
                       <p class="text-[#4B5563] font-semibold text-xs ">${review.author}</p>
                      <span class="text-gray-500 text-xs">Online Shopper</span>
                  
                    </div>
                     <div class="mt-2 flex items-center space-x-4">
                           <button class="text-sm text-[#0EA5E9]">Reply</button>
                        <div class="flex items-center space-x-1">
                             <img src="/assets/icons/love.svg" alt="thumbs" />
                             <span class="text-gray-700 font-medium">${review.likes}</span>
                         </div>
                          <div class="flex items-center space-x-1">
                           <img src="/assets/icons/dislike.svg" alt="thumbs" />
                            <span class="text-gray-700 font-medium">${review.dislikes}</span>
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
        const qtyValueElement = document.getElementById('qty-value');
        const qtyLeftElement = document.getElementById("qty-left").textContent;
        
  document.getElementById("increase-qty").addEventListener("click", () => {
    if (currentQuantity < singleProductData.qtyLeft) {
      currentQuantity++;
      qtyValueElement.textContent = currentQuantity;
    }
  });
            document.getElementById('decrease-qty').addEventListener('click', () => {
                if(currentQuantity>1){
                     currentQuantity--;
                     qtyValueElement.textContent = currentQuantity;
                }

           });

    });
