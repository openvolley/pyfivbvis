import { generateCodeWindow } from './codeWindow.js';

export function createInstallationTab() {
    return `
            <h2>Installation</h2>
            <p>You can install your package using pip - you may also need to install lxml:</p>
            ${generateCodeWindow('Python', "pip install pyfivbvis\npip install lxml")}
    `;
}