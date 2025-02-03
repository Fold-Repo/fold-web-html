$(function(){
   console.log("initiatinzing");
   
   $(".xzoom, .xzoom-gallery").xzoom({
    zoomWidth:400,
    tint:"#333",
     Xoffset:40,
   }); 
});

function showCartModal(){
   let dialog = document.getElementById("cartModal");
   dialog.classList.remove('hidden');
   dialog.classList.add('opacity-100');

}


function closeCart(){
   let dialog = document.getElementById("cartModal");
   dialog.classList.add('hidden');
   dialog.classList.remove('opacity-100');

}

function showPaymentModal(){
   let dialog = document.getElementById("paymentModal");
   dialog.classList.remove('hidden');
   dialog.classList.add('opacity-100');
}


function closePayment(){
   let dialog = document.getElementById("paymentModal");
   dialog.classList.add('hidden');
   dialog.classList.remove('opacity-100');

}