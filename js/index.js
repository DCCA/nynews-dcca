import Card from './Cards.min.js';

$( document ).ready(function() {

const news = $('.news')
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
    // sectionsDrop.addEventListener('change', createCards);
    $('.sections').on('change', function( event ) {
        let section = event.target.value;
        $('.news').text('');
        $.ajax({
          method: 'GET',
          url: nytUrl + section + endUrl
        })
          .done(function(data) {
            let jData = data;
            for(let i = 0; i < 20 ; i++){
                let newCard = new Card(jData.results[i].abstract, jData.results[i].url,jData.results[i].multimedia[4].url);
                newCard.create(news);
            }
          })
          .fail(function() {
            console.log('FAIL!');
          });
      });
}

});