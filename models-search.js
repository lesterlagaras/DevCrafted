// models-search.js

// Kunin ang input at lahat ng model cards
const searchBar = document.getElementById('searchBar');
const modelCards = document.querySelectorAll('.model-card');

searchBar.addEventListener('input', () => {
    const query = searchBar.value.toLowerCase();

    modelCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();

        if (title.includes(query) || description.includes(query)) {
            card.style.display = 'block'; // Ipakita kung match
        } else {
            card.style.display = 'none';  // I-hide kung wala match
        }
    });
});