const copyButtons = document.querySelectorAll('.copy-ip-btn');

copyButtons.forEach(button => {
    button.addEventListener('click', () => {
        const serverIP = button.getAttribute('data-ip');
        const copiedText = button.parentElement.querySelector('.copied-text');

        if (navigator.clipboard) {
            // Modern browsers with HTTPS support
            navigator.clipboard.writeText(serverIP)
                .then(() => {
                    copiedText.style.display = 'block';
                    setTimeout(() => copiedText.style.display = 'none', 2000);
                })
                .catch(err => alert("Failed to copy IP: " + err));
        } else {
            // Fallback for HTTP or old browsers
            const textArea = document.createElement("textarea");
            textArea.value = serverIP;
            document.body.appendChild(textArea);
            textArea.select();
            try {
                document.execCommand('copy');
                copiedText.style.display = 'block';
                setTimeout(() => copiedText.style.display = 'none', 2000);
            } catch (err) {
                alert("Failed to copy IP: " + err);
            }
            document.body.removeChild(textArea);
        }
    });
});