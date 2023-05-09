document.querySelectorAll('.image-container img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.pop-image').style.display = 'block';
        document.querySelector('.pop-image img').src = image.getAttribute('src');
    }
});

document.querySelector('.pop-image span').onclick = () => {
    document.querySelector('.pop-image').style.display = 'none';
}
 // Add event listener to the donate PayPal button
 document.querySelector(".donate-paypal").addEventListener("click", function() {
    window.location.href = "https://www.paypal.com/donate/?hosted_button_id=828SQZ8HAPX3C";
});

// Add event listener to the donate blockchain button
document.querySelector(".donate-blockchain").addEventListener("click", function() {
    // Add your blockchain donation link or code here
    // For example:
    window.location.href = "https://commerce.coinbase.com/checkout/35d995c2-cf44-480a-a466-7228bf21eb79";
});
