//scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

//observe all sections
document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

//form handling (placeholder)
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    //get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);

    //send data (placeholder)
    console.log('Form data:', data);

    //success message (placeholder)
    alert('Vielen Dank für Ihre Anfrage! Wir melden uns schnellstmöglich bei Ihnen.');

    //reset form
    this.reset();
});

//smooth parallax effect for hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');

    if (scrolled < hero.offsetHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

//add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});