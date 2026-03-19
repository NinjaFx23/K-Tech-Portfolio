// 1. Find your specific form by its ID
const myForm = document.getElementById('contactForm');

// 2. Listen for the moment the user clicks "Send Strategy Request"
myForm.addEventListener('submit', function(event) {
    
    // event.preventDefault();

    const userName = document.getElementById('name').value;
    
    console.log("Strategy Request initiated by: " + userName);
    console.log("Handing over to Formspree for delivery...");

});