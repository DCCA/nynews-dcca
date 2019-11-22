import Card from './Cards.min.js';

// Start of document ready function
$( document ).ready(function() {
// Input code inside


let thereIsNews = false;
const news = $('.news')
const sections = $('.sections')
const loader = $('.loader');
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
    // Create the options in the dropdown
    arrSection.forEach(element => {
        sections.append( '<option value="' + element + '">' + element + '</option>');
    });
    // Add the event listener
    sections.on('change', makeApiCall)
}

function toggleClasses(){
  $('main').toggleClass('main-with-news');
  $('.logo').toggleClass('logo-with-news');
  $('.search-box').toggleClass('search-box-with-news');
  $('select').toggleClass('select-with-news');
}

function createNewsCards(jData, news){
  for(let i = 0; i < 12 ; i++){
    let newCard = new Card(jData.results[i].abstract, jData.results[i].url,jData.results[i].multimedia[4].url);
    newCard.create(news);
  }
}

function makeApiCall(event){
  let section = event.target.value;
  loader.toggle();
  $.ajax({
    method: 'GET',
    url: nytUrl + section + endUrl
  })
    .done(function(data) {
      loader.toggle();
      let jData = data;
      if(!thereIsNews){
        toggleClasses();
      }
      news.text('');
      createNewsCards(jData, news);
      thereIsNews = true;
    })
    .fail(function() {
      loader.toggle();
      console.log('FAIL!');
    });
  }


// End of document ready function
});
// Don't right code after this line

