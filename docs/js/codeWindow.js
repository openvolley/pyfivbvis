// Function to generate code window HTML with provided code and language
export function generateCodeWindow(language, codeSnippet) {
    return `
        <div class="code-window">
            <div class="code-header">
                <span class="language-label">${language}</span>
                <button class="copy-button">Copy</button>
            </div>
            <div class="code-content">
                <pre><code>${codeSnippet}</code></pre>
            </div>
        </div>
    `;
}

// JavaScript for the copy functionality
function copyCode(button) {
    const codeContent = button.closest('.code-window').querySelector('code').textContent;
    navigator.clipboard.writeText(codeContent).then(() => {
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        setTimeout(() => {
            button.textContent = originalText;
        }, 2000);
    });
}

// Event delegation for copy functionality
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('copy-button')) {
        copyCode(event.target);
    }
});
