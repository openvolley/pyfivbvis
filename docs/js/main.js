// js/main.js
import { createHeader, createSidebar } from './headerSidebar.js';
import { createIntroductionTab } from './intro.js';
import { createInstallationTab } from './installation.js';
import { createBeachTournamentTab } from './beachTournament.js';
import { createBeachMatchTab } from './beachMatch.js';
import { createBeachStatsTab } from './beachStats.js';
import { createFooter } from './footer.js';

function initializePage() {
    // Load header and sidebar
    document.getElementById('header-container').innerHTML = createHeader();
    document.getElementById('sidebar-container').innerHTML = createSidebar();

    // Load all tab content with matching IDs
    const mainContent = document.querySelector('.main-content .tab-content');
    mainContent.innerHTML = `
        <div class="tab-pane show active" id="introduction" role="tabpanel" aria-labelledby="introduction-tab">
            ${createIntroductionTab()}
        </div>
        <div class="tab-pane" id="installation" role="tabpanel" aria-labelledby="installation-tab">
            ${createInstallationTab()}
        </div>
        <div class="tab-pane" id="fetch_beach_tournament_list" role="tabpanel" aria-labelledby="beach-tournament-tab">
            ${createBeachTournamentTab()}
        </div>
        <div class="tab-pane" id="fetch_beach_match_list" role="tabpanel" aria-labelledby="beach-match-tab">
            ${createBeachMatchTab()}
        </div>
        <div class="tab-pane" id="fetch_beach_stats_list" role="tabpanel" aria-labelledby="beach-stats-tab">
            ${createBeachStatsTab()}
        </div>
    `;

    // Add footer
    document.querySelector('.main-content').innerHTML += createFooter();

    // Initialize Prism.js for syntax highlighting
    if (window.Prism) {
        Prism.highlightAll();
    }

    // Initialize Bootstrap tabs
    const triggerTabList = document.querySelectorAll('button[data-bs-toggle="tab"]');
    triggerTabList.forEach(triggerEl => {
        triggerEl.addEventListener('click', event => {
            event.preventDefault();
            const tabTrigger = new bootstrap.Tab(triggerEl);
            tabTrigger.show();
        });
    });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initializePage);