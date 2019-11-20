import Card from "./Cards.min.js";


const sectionsDrop = document.querySelector('.sections');
const nytUrl = 'https://api.nytimes.com/svc/topstories/v2/'
const endUrl = '.json?api-key=CLl9cdH4BgVqWucoFHZ3wdB1rsXAtoBt'
const arrSection = [
    'Select your category',
    'arts',
    'automobiles',
    'books',
    'business',
    'fashion',
    'food',
    'health',
    'home',
    'insider',
    'magazine',
    'movies',
    'national',
    'nyregion',
    'obituaries',
    'opinion',
    'politics',
    'realestate',
    'science',
    'sports',
    'sundayreview',
    'technology',
    'theater',
    'tmagazine',
    'travel',
    'upshot',
    'world'
]

start();

function start(){
    arrSection.forEach(element => {
        $('.sections').append( '<option value="' + element + '">' + element + '</option>');
    });
    createCards();
}

function createCards(){
    sectionsDrop.addEventListener('change', function(event){
        let section = event.target.value;
        let jData = getNews(section);
        console.log(jData);
        jData = JSON.stringify(jData);
        console.log(jData);
        jData = JSON.parse(jData);
        console.log(jData);
        // for(let i = 0; i < 5; i++){
        // }
    });
}


function getNews(section) {
    $.getJSON(nytUrl + section + endUrl)
        .done(function (json) {
            let jData = json;
            // jData = JSON.parse(jData)
            // console.log(jData);
            return jData;
        })
        .fail(function (jqxhr, textStatus, error) {
            var err = textStatus + ', ' + error;
            return 'Request Failed: ' + err;
        });
}
