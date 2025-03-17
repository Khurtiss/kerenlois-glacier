document.addEventListener("DOMContentLoaded", function() {
    const orderForm = document.querySelector("form");
    
    orderForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const item = document.getElementById("item").value;
        const quantity = document.getElementById("quantity").value;
        
        if (!name || !phone || !item || !quantity) {
            alert("Please fill in all fields before placing your order.");
            return;
        }
        
        const whatsappLink = "https://wa.link/rua9p6"; 
        const message = encodeURIComponent(`Order Summary:\nName: ${name}\nPhone: ${phone}\nItem: ${item}\nQuantity: ${quantity}`);
        
        const whatsappURL = `${whatsappLink}?text=${message}`;
        window.location.href = whatsappURL;
        alert("Your order has been placed successfully! We will contact you shortly to confirm your order.");
    });
});
