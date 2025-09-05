document.addEventListener('DOMContentLoaded', () => {
    // Toggle Search Bar
    const searchToggle = document.getElementById('searchToggle');
    const searchContainer = document.getElementById('searchContainer');

    if (searchToggle && searchContainer) {
        searchToggle.addEventListener('click', () => {
            if (searchContainer.style.display === 'none' || searchContainer.style.display === '') {
                searchContainer.style.display = 'block';
            } else {
                searchContainer.style.display = 'none';
            }
        });
    }

    // Live Plugin Search
    const searchInput = document.getElementById('pluginSearch');
    const pluginCards = document.querySelectorAll('.plugin-card');

    if (searchInput && pluginCards.length > 0) {
        searchInput.addEventListener('input', () => {
            const query = searchInput.value.toLowerCase();

            pluginCards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const description = card.querySelector('p').textContent.toLowerCase();

                if (title.includes(query) || description.includes(query)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    // Hamburger Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
});
