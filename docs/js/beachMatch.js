import { generateCodeWindow } from './codeWindow.js';

export function createBeachMatchTab() {
    const pythonCodeSnippet = `
<span class="comment"># Fetch beach match list from tournament</span>
<span class="keyword">import</span> fivbvis.pyfivbvis as

<span class="keyword">def</span> <span class="function">fetch_beach_tournaments</span>():
    url = <span class="string">'https://api.fivb.com/beach-tournaments'</span>
    response = requests.get(url)
    
    <span class="keyword">if</span> response.status_code == 200:
        <span class="keyword">return</span> response.json()
    <span class="keyword">else</span>:
        <span class="keyword">return</span> <span class="string">'Error fetching data.'</span>
    `;
    return `
            <h2>Beach Match List</h2>
            <a href="https://www.fivb.org/VisSDK/VisWebService/#GetBeachMatchList.html" target="_blank">
                https://www.fivb.org/VisSDK/VisWebService/#GetBeachMatchList.html
            </a>

    `;
}