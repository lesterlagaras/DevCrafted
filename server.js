// Kunin lahat ng copy buttons
const copyButtons = document.querySelectorAll('.copy-ip-btn');

copyButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Kunin ang IP mula sa data-ip attribute
        const serverIP = button.getAttribute('data-ip');

        // Kopyahin sa clipboard
        navigator.clipboard.writeText(serverIP).then(() => {
            // Gumawa ng "Copied!" text
            let copiedText = document.createElement('span');
            copiedText.textContent = "Copied!";
            copiedText.classList.add('copied-text');
            copiedText.style.display = 'block';
            copiedText.style.marginTop = '5px';
            copiedText.style.color = '#4ade80';
            copiedText.style.fontSize = '0.9rem';

            // Idagdag sa button parent
            button.parentElement.appendChild(copiedText);

            // Tanggalin after 2 seconds
            setTimeout(() => {
                copiedText.remove();
            }, 2000);
        });
    });
});
