// Document Element Selectors
const openModalBtn = document.getElementById('open-modal-btn');
const heroCtaBtn = document.getElementById('hero-cta');
const closeModalBtn = document.getElementById('close-modal-btn');
const contactModal = document.getElementById('contact-modal');

// Functions to handle state transitions
function toggleModal() {
    contactModal.classList.toggle('active');
}

// Event Listeners for UI interaction
openModalBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Prevents jump behavior on empty href anchor links
    toggleModal();
});

heroCtaBtn.addEventListener('click', () => {
    alert('Thank you for getting started! Replace this alert in script.js with your layout logic.');
});

closeModalBtn.addEventListener('click', toggleModal);

// Close overlay if background area outside the box is clicked
window.addEventListener('click', (e) => {
    if (e.target === contactModal) {
        toggleModal();
    }
});
