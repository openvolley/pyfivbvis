export function createIntroductionTab() {
    return `
        <div class="tab-pane show active" id="introduction" role="tabpanel" aria-labelledby="introduction-tab">
            <u><h1>Welcome!</h1></u>
            <p>This library provides a comprehensive interface to interact with the FIVB VIS web service system.</p>
            <p>If you need to loop through some of the functions, using threading might be an advantage in order to speed up the process.</p>
            <p>Examples will utilize <a href="https://pandas.pydata.org/" target="_blank">pandas</a>, 
            <a href="https://requests.readthedocs.io/en/latest/" target="_blank">requests</a>, 
            <a href="https://beautiful-soup-4.readthedocs.io/en/latest/" target="_blank">BeautifulSoup</a>.</p>
            <hr>
            <h5>Official documentation for the FIVB VisWebService:</h5>
            <a href="https://www.fivb.org/VisSDK/VisWebService/#Introduction.html" target="_blank">
                https://www.fivb.org/VisSDK/VisWebService/#Introduction.html
            </a>
            <hr>
            <div class="p-2 text-success-emphasis bg-success-subtle border border-success-subtle rounded-3">
                Player Number is different across tournaments!
            </div>
        </div>
    `;
}
