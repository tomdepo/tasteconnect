// Handle form submissions
function handleFormSubmit(event) {
    event.preventDefault();
    alert('Thank you for your application! We will review it and get back to you soon.');
    event.target.reset();
}

function handleContactSubmit(event) {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you as soon as possible.');
    event.target.reset();
}
function handleFaqRequest(event) {
    event.preventDefault();
    alert('✅ Thank you for your question! We will reply by email as soon as possible.');
    event.target.reset();
}


// Mobile menu toggle (if needed)
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling for better UX
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
            }
        });
    });
});