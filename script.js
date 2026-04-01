// 1. Find your specific form by its ID
const myForm = document.getElementById('contactForm');

// 2. Only listen for a submit if the form actually exists on this page
if (myForm) {
    myForm.addEventListener('submit', function(event) {
        // event.preventDefault();
        const userName = document.getElementById('name').value;
        console.log("Strategy Request initiated by: " + userName);
        console.log("Handing over to Formspree for delivery...");
    });
}

// --- Hamburger Menu Logic ---
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navLinks = document.getElementById('navLinks');

if (hamburgerBtn && navLinks) {
    hamburgerBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
}

// --- Day 10: Scroll Animation Observer ---
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.15, 
    rootMargin: "0px 0px -50px 0px" 
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return; 
        } else {
            entry.target.classList.add('visible'); 
            observer.unobserve(entry.target); 
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});