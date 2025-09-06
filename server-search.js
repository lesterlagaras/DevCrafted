// Live Server Search
const searchInput = document.getElementById('searchBar');
const serverCards = document.querySelectorAll('.server-card');

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    serverCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();
        if (title.includes(query) || description.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});