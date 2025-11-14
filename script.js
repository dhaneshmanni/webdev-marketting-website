// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Function to scroll to a section (used in CTA button)
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Contact form submission (simulated - in a real app, send to server)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    alert(`Thank you, ${name}! Your message has been sent. (This is a demo - no email sent.)`);
    // Reset form
    this.reset();
});

// Newsletter subscription (simulated)
function subscribeNewsletter() {
    const email = document.getElementById('newsletter-email').value;
    if (email) {
        alert(`Subscribed ${email} to our newsletter! (This is a demo.)`);
        document.getElementById('newsletter-email').value = '';
    } else {
        alert('Please enter a valid email.');
    }
}