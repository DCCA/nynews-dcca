const sectionsDrop = document.querySelector('.sections');
const nytUrl = 'https://api.nytimes.com/svc/topstories/v2/'
let section = 'arts'
const json = '.json?api-key=CLl9cdH4BgVqWucoFHZ3wdB1rsXAtoBt'
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
    sectionsDrop.addEventListener('change', function(event){
        let sec = event.target.value;
        console.log(event.target.value);
        console.log(getNews(sec));
    });

}


function getNews(section) {
    $.getJSON(nytUrl + section + json)
        .done(function (json) {
            console.log(json);
            return json;
        })
        .fail(function (jqxhr, textStatus, error) {
            var err = textStatus + ', ' + error;
            return 'Request Failed: ' + err;
        });
}
