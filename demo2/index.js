const cart = [
    { id: 1, name: "Name of Product", price: 100000, size: "Large", color: "White", image: "../../assets/images/cart-item1.svg" },
    { id: 2, name: "Name of Product", price: 100000, size: "Large", color: "White", image: "../../assets/images/cart-item2.svg" },
    { id: 3, name: "Name of Product", price: 100000, size: "Large", color: "White", image: "../../assets/images/cart-item3.svg" },
    // { id: 4, name: "Product 4", price: 100000, size: "Large", color: "White", image: "../../assets/images/cart-item4.svg" }
];

function renderCart() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";
    cart.forEach(item => {
        cartItems.innerHTML += `
            <div class="flex items-center p-4 bg-gray-25 border-b-[0.5px] border-gray-100">
                <img src="${item.image}" alt="${item.name}" class="object-cover rounded-lg">
                <div class="ml-4 flex-1 space-y-2">
                  <div class="flex justify-between items-center">
                  <h4 class="text-lg font-medium text-[#101928]">${item.name}</h4>
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_72_12439" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="25">
                    <rect y="0.205078" width="24" height="24" fill="#D9D9D9"/>
                    </mask>
                    <g mask="url(#mask0_72_12439)">
                    <path d="M7 21.2051C6.45 21.2051 5.97917 21.0092 5.5875 20.6176C5.19583 20.2259 5 19.7551 5 19.2051V6.20508H4V4.20508H9V3.20508H15V4.20508H20V6.20508H19V19.2051C19 19.7551 18.8042 20.2259 18.4125 20.6176C18.0208 21.0092 17.55 21.2051 17 21.2051H7ZM9 17.2051H11V8.20508H9V17.2051ZM13 17.2051H15V8.20508H13V17.2051Z" fill="#4B5563"/>
                    </g>
                    </svg>
                  </div>
                    <p class="text-[#4B5563]">N${item.price.toLocaleString()}</p>
                    <p class="text-[#4B5563] text-sm">Size: <span class="text-[#111827]">${item.size}</span> | Colour:  <span class="text-[#111827]"> ${item.color}</span></p>
                    <div class="mt-2 flex w-6/12 items-center border-gray-200 pl-4 border space-x-6 bg-[#F0F2F5] rounded-full py-2.5">
                        <button class="">
                           <svg width="17" height="17" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.49991 6.89648C2.16692 6.89648 1.89697 7.16643 1.89697 7.49943C1.89697 7.83242 2.16692 8.10237 2.49991 8.10237H12.147C12.48 8.10237 12.7499 7.83242 12.7499 7.49943C12.7499 7.16643 12.48 6.89648 12.147 6.89648H2.49991Z" fill="#667185"/>
                            </svg>
                        </button>
                        <span class="text-[#0EA5E9] font-bold">1</span>
                        <button class="">
                          <svg width="17" height="17" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.2799 2.67521C8.2799 2.34221 8.00995 2.07227 7.67696 2.07227C7.34396 2.07227 7.07402 2.34221 7.07402 2.67521V6.89579H2.85343C2.52043 6.89579 2.25049 7.16574 2.25049 7.49874C2.25049 7.83173 2.52043 8.10168 2.85343 8.10168H7.07402V12.3223C7.07402 12.6553 7.34396 12.9252 7.67696 12.9252C8.00995 12.9252 8.2799 12.6553 8.2799 12.3223V8.10168H12.5005C12.8335 8.10168 13.1034 7.83173 13.1034 7.49874C13.1034 7.16574 12.8335 6.89579 12.5005 6.89579H8.2799V2.67521Z" fill="#0EA5E9"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
    updateSummary();
}

function updateSummary() {
    const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
    const discount = 10000;
    const delivery = 100000;
    const tax = 120000;
    const total = subtotal - discount + delivery + tax;

    document.getElementById("subtotal").textContent = `N${subtotal.toLocaleString()}`;
    document.getElementById("discount").textContent = `-N${discount.toLocaleString()}`;
    document.getElementById("delivery").textContent = `+N${delivery.toLocaleString()}`;
    document.getElementById("tax").textContent = `+N${tax.toLocaleString()}`;
    document.getElementById("total").textContent = `N${total.toLocaleString()}`;
    document.getElementById("cart-count").textContent = cart.length;
}
document.addEventListener("DOMContentLoaded", renderCart);




document.getElementById('pay-btn').addEventListener('click', function() {
    const name = document.getElementById('cardholder-name').value.trim();
    const cardNumber = document.getElementById('card-number').value.trim();
    const expiry = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value.trim();

    if (!name || !cardNumber || !expiry || !cvv) {
        alert('Please fill in all fields.');
        return;
    }

    if (!/^[0-9]{16}$/.test(cardNumber.replace(/\s/g, ''))) {
        alert('Invalid card number. It should be 16 digits.');
        return;
    }

    if (!/^[0-9]{3,4}$/.test(cvv)) {
        alert('Invalid CVV. It should be 3 or 4 digits.');
        return;
    }

    alert('Payment Successful!');
});


