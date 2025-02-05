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


 document.addEventListener("DOMContentLoaded", function () {
   const slider = document.getElementById("testimonial-slider");
   const prevBtn = document.getElementById("prevBtn");
   const nextBtn = document.getElementById("nextBtn");

   let currentIndex = 0;
   const totalItems = document.querySelectorAll(
     "#testimonial-slider > div"
   ).length;

   function updateSlider() {
     slider.style.transform = `translateX(-${currentIndex * 100}%)`;
   }

   nextBtn.addEventListener("click", function () {
     currentIndex = (currentIndex + 1) % totalItems;
     updateSlider();
   });

   prevBtn.addEventListener("click", function () {
     currentIndex = (currentIndex - 1 + totalItems) % totalItems;
     updateSlider();
   });
 });
