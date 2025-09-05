// version.js

// Kunin lahat ng version buttons
const versionButtons = document.querySelectorAll('.version-btn');

versionButtons.forEach(button => {
    // Hanapin ang version list sa loob ng parehong plugin card
    const versionList = button.parentElement.querySelector('.version-list');
    if (versionList) {
        // Siguraduhing naka-hide by default
        versionList.style.display = 'none';
    }

    // Add click event
    button.addEventListener('click', () => {
        const versionList = button.parentElement.querySelector('.version-list');
        if (versionList) {
            // Toggle display: kung hidden -> show, kung visible -> hide
            versionList.style.display = versionList.style.display === 'block' ? 'none' : 'block';
        }
    });
});
