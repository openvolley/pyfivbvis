export function createHeader() {
    return `
        <header class="main-header">
            <div class="container-fluid">
                <div class="header-title d-flex justify-content-between align-items-center h-100">
                    <div class="d-flex align-items-center gap-3 py-2">
                        <a href="https://openvolley.org">
                            <img src="assets/open-volley.png" alt="OpenVolley Logo" style="width: 40px;">
                        </a>
                        <h1>pyfivbvis</h1>
                        <span class="header-description">Python client for FIVB VIS web service system - openvolley</span>
                    </div>
                    <a href="https://github.com/openvolley/pyfivbvis" class="github-link" target="_blank">
                        <i class="bi bi-github"></i>
                    </a>
                </div>
            </div>
        </header>
    `;
}

export function createSidebar() {
    const items = [
        { id: 'introduction', target: 'introduction', label: 'Introduction', isActive: true },
        { id: 'installation', target: 'installation', label: 'Installation', isActive: false },
        { id: 'beach-tournament', target: 'fetch_beach_tournament_list', label: 'Beach Tournament List', isActive: false },
        { id: 'beach-match', target: 'fetch_beach_match_list', label: 'Beach Match List', isActive: false },
        { id: 'beach-stats', target: 'fetch_beach_stats_list', label: 'Beach Tournament Stats', isActive: false }
    ];

    const sidebarItems = items.map(item => `
        <li class="nav-item" role="presentation">
            <button class="nav-link${item.isActive ? ' active' : ''}" 
                    id="${item.id}-tab" 
                    data-bs-toggle="tab"
                    data-bs-target="#${item.target}" 
                    type="button" 
                    role="tab" 
                    aria-controls="${item.target}"
                    aria-selected="${item.isActive}">
                ${item.label}
            </button>
        </li>
    `).join('');

    return `
        <aside class="sidebar px-2">
            <div class="sidebar-header">
                <h2>Contents</h2>
            </div>
            <ul class="nav nav-pills flex-column" id="myTab" role="tablist">
                ${sidebarItems}
            </ul>
        </aside>
    `;
}