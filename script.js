// 1. Find the form on the page
const myForm = document.getElementById('contactForm');

// 2. Listen for the moment the user clicks "Submit"
myForm.addEventListener('submit', function(event) {
    
    // 3. Stop the page from reloading
    event.preventDefault();

    // 4. Grab the data the user typed in the boxes
    const userName = document.getElementById('name').value;
    const userEmail = document.getElementById('email').value;

    // 5. Show a success message
    alert("Success! Thank you, " + userName + ". We will reply to " + userEmail);

    // 6. Clear the form boxes for the next person
    myForm.reset();
});