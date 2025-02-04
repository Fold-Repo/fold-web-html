// //DEMO  1 SCRIPTS

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



// Event listener for search not working properly
// document.querySelector("#search-input").addEventListener("input", handleSearch);
    

 document.addEventListener("DOMContentLoaded", function () {
   const tabButtons = document.querySelectorAll(".tab-button");
   const tabContents = document.querySelectorAll(".tab-content");

   tabButtons.forEach((button) => {
     button.addEventListener("click", () => {
       const targetTab = button.getAttribute("data-tab");

       // Remove active styles from all buttons
       tabButtons.forEach((btn) => {
         btn.classList.remove("text-gray-700", "border-[#0EA5E9]");
         btn.classList.add("text-gray-500", "border-transparent");
       });

       // Hide all tab content
       tabContents.forEach((content) => content.classList.add("hidden"));

       // Activate clicked tab
       button.classList.add("text-gray-700", "border-[#0EA5E9]");
       button.classList.remove("text-gray-500", "border-transparent");

       // Show the corresponding tab content
       document.getElementById(targetTab).classList.remove("hidden");
     });
   });
 });
// Cart section

document.addEventListener("DOMContentLoaded", () => {
  function calculateSubtotal() {
    let subtotal = 0;
    document.querySelectorAll(".cart-item").forEach((item) => {
      const price = parseFloat(
        item.querySelector(".item-price").textContent.replace("$", "")
      );
      const quantity = parseInt(
        item.querySelector(".item-quantity").textContent
      );
      subtotal += price * quantity;
    });
    return subtotal.toFixed(2);
  }

  function updateCartDisplay() {
    const subtotalElement = document.getElementById("cart-subtotal");
    if (subtotalElement) {
      subtotalElement.textContent = `$${calculateSubtotal()}`;
    }

    document.querySelectorAll(".increase-qty").forEach((button) => {
      button.addEventListener("click", () => {
        const itemContainer = button.closest(".cart-item");
        const quantityElement = itemContainer.querySelector(".item-quantity");
        let quantity = parseInt(quantityElement.textContent);
        quantity++;
        quantityElement.textContent = quantity;
        updateCartDisplay();
      });
    });

    document.querySelectorAll(".decrease-qty").forEach((button) => {
      button.addEventListener("click", () => {
        const itemContainer = button.closest(".cart-item");
        const quantityElement = itemContainer.querySelector(".item-quantity");
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 1) {
          quantity--;
          quantityElement.textContent = quantity;
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
      url: "/assets/images/demo1/carouselImage1.svg",
      title: "A Latest Article that was Publish on the Blog",
      description:
        "A short description about image and article, details or synopsis stories, short learning or something.",
    },
    {
      url: "/assets/images/demo1/blogImage1.svg",
      title: "A Latest Article that was Publish on the Blog",
      description:
        "A short description about image and article, details or synopsis stories, short learning or something.",
    },
    {
      url: "/assets/images/demo1/blogImage2.svg",
      title: "A Latest Article that was Publish on the Blog",
      description:
        "A short description about image and article, details or synopsis stories, short learning or something.",
    },
  ];

  const blogPreviews = [
    {
      url: "/assets/images/demo1/blogImage1.svg",
      title: "Name of Deal goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque incidunt quibusdam, earum est.",
    },
    {
      url: "/assets/images/demo1/blogImage2.svg",
      title: "Name of Deal goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque incidunt quibusdam, earum est.",
    },
    {
      url: "/assets/images/demo1/blogImage3.svg",
      title: "Name of Deal goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque incidunt quibusdam, earum est.",
    },
    {
      url: "/assets/images/demo1/blogImage4.svg",
      title: "Name of Deal goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque incidunt quibusdam, earum est.",
    },
    {
      url: "/assets/images/demo1/blogImage5.svg",
      title: "Name of Deal goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque incidunt quibusdam, earum est.",
    },
    {
      url: "/assets/images/demo1/blogImage6.svg",
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
      imgSrc: "/assets/images/demo1/otherImg1.svg",
      alt: "Other Story 1",
      title: "Name of Deal goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque incidunt quibusdam, earum est.",
    },
    {
      imgSrc: "/assets/images/demo1/otherImg2.svg",
      alt: "Other Story 2",
      title: "Name of Deal goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque incidunt quibusdam, earum est.",
    },
    {
      imgSrc: "/assets/images/demo1/otherImg3.svg",
      alt: "Other Story 3",
      title: "Name of Deal goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque incidunt quibusdam, earum est.",
    },
    {
      imgSrc: "/assets/images/demo1/otherImg4.svg",
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
