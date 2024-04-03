// Dynamic content loading
document.addEventListener('DOMContentLoaded', function() {
    // Function to toggle visibility of pages
    function togglePage(pageId) {
        const pages = document.querySelectorAll('.page');
        pages.forEach(page => {
            if (page.id === pageId) {
                page.style.display = 'block';
            } else {
                page.style.display = 'none';
            }
        });
    }

    // Initial page setup
    togglePage('home');

    // Navigation event listeners
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const pageId = link.getAttribute('href').substring(1);
            togglePage(pageId);
        });
    });

    // Fetch dynamic content for Home page
    fetch('https://api.example.com/home-content')
        .then(response => response.json())
        .then(data => {
            const homeContent = document.getElementById('home-content');
            homeContent.innerHTML = `<h2>${data.title}</h2><p>${data.description}</p>`;
        });

    // Fetch dynamic content for About Us page
    fetch('https://api.example.com/about-content')
        .then(response => response.json())
        .then(data => {
            const aboutContent = document.getElementById('about-content');
            aboutContent.innerHTML = `<h2>${data.title}</h2><p>${data.description}</p>`;
        });

    // Fetch dynamic content for Complaint page
    fetch('https://api.example.com/complaint-content')
        .then(response => response.json())
        .then(data => {
            const complaintContent = document.getElementById('complaint-content');
            complaintContent.innerHTML = `<h2>${data.title}</h2><p>${data.description}</p>`;
        });

    // Fetch dynamic content for Contact page
    fetch('https://api.example.com/contact-content')
        .then(response => response.json())
        .then(data => {
            const contactContent = document.getElementById('contact-content');
            contactContent.innerHTML = `<h2>${data.title}</h2><p>${data.description}</p>`;
        });
});
