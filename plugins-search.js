// Live Plugin Search
const searchInput = document.getElementById('searchBar');
const pluginCards = document.querySelectorAll('.plugin-card');

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
