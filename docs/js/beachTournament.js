import { generateCodeWindow } from './codeWindow.js';

export function createBeachTournamentTab() {
    const pythonCodeSnippet = `
<span class="comment"># Fetch beach tournament list</span>
<span class="import">import</span> <span class="lib">pyfivbvis.vis_fetcher</span> <span class="import">as</span> <span class="lib">vis</span>
<span class="import">import</span> <span class="lib">pandas</span> <span class="import">as</span> <span class="lib">pd</span>

<span class="variable">all_tournaments</span> = <span class="mainfunc">vis</span><span class="function">.fetch_beach_tournament_list()</span>
<span class="variable">df</span> = <span class="lib">pd.DataFrame</span><span class="function">(</span><span class="variable">all_tournaments</span><span class="function">)</span>
<span class="function">print</span><span class="function">(</span><span class="variable">df</span><span class="import">[</span><span class="keyword">(</span><span class="variable">df</span><span class="function">[</span><span class="string">'Type'</span><span class="function">]</span> == <span class="string">'51'</span><span class="keyword">)</span> & <span class="keyword">(</span><span class="variable">df</span><span class="function">['</span><span class="string">StartDateMainDraw</span><span class="function">']</span>.str<span class="function">.startswith</span>(<span class="string">'2024'</span>)<span class="keyword">)</span><span class="import">]</span><span class="function">)</span>

+------+-----------------------------+------+---------+----------+--------+-----------------------------+-------------+------------------------+-------------------+----------------------+-----------------+----------------------+-----------------+--------------------------+
|  No  |            Title            | Type | NoEvent |   Code   | Gender |            Name             | CountryCode | StartDateQualification | StartDateMainDraw | EndDateQualification | EndDateMainDraw | NbTeamsQualification | NbTeamsMainDraw | NbTeamsFromQualification |
+------+-----------------------------+------+---------+----------+--------+-----------------------------+-------------+------------------------+-------------------+----------------------+-----------------+----------------------+-----------------+--------------------------+
| 7610 | BPT Elite16 João Pessoa     |   51 |    1422 | WJOA2024 |      1 | BPT Elite16 João Pessoa     | BR          | 2024-10-16             | 2024-10-17        | 2024-10-16           | 2024-10-20      |                   16 |              16 |                        4 |
| 7611 | BPT Elite16 Brasilia        |   51 |    1397 | MNAT2024 |      0 | BPT Elite16 Brasilia        | BR          | 2024-05-01             | 2024-05-02        | 2024-05-01           | 2024-05-05      |                   16 |              16 |                        4 |
| 7612 | BPT Elite16 Brasilia        |   51 |    1397 | WNAT2024 |      1 | BPT Elite16 Brasilia        | BR          | 2024-05-01             | 2024-05-02        | 2024-05-01           | 2024-05-05      |                   16 |              16 |                        4 |
| 8128 | BPT Elite 16 Rio de Janeiro |   51 |    1497 | MRIO2024 |      0 | BPT Elite 16 Rio de Janeiro | BR          | 2024-11-06             | 2024-11-07        | 2024-11-06           | 2024-11-10      |                   16 |              16 |                        4 |
| 8129 | BPT Elite 16 Rio de Janeiro |   51 |    1497 | WRIO2024 |      1 | BPT Elite 16 Rio de Janeiro | BR          | 2024-11-06             | 2024-11-07        | 2024-11-06           | 2024-11-10      |                   16 |              16 |                        4 |
+------+-----------------------------+------+---------+----------+--------+-----------------------------+-------------+------------------------+-------------------+----------------------+-----------------+----------------------+-----------------+--------------------------+




    `;

    return `
        <h2>Beach Tournament List</h2>
        <a href="https://www.fivb.org/VisSDK/VisWebService/#GetBeachTournament.html" target="_blank">
            https://www.fivb.org/VisSDK/VisWebService/#GetBeachTournament.html
        </a>
        <p>Using this function will return every beach tournament in the FIVB VIS database. 
           This is advantageous when you need to use all tournament numbers in order to process further data.</p>
        <hr>
        <h4>Fetch all tournaments</h4>
        ${generateCodeWindow('Python', pythonCodeSnippet)}
        <hr>
        <h4>Notes</h4>
    <span>
        <li>No: This no is the "NoTournament" in other calls and useful when needing to loop through multiple tournaments. </li>
        <li>Gender: 0 = Men, 1 = Women</li>
    `;
}

