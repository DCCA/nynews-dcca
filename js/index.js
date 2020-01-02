import Card from './Cards.min.js';
import { MY_KEY }from './config.min.js'

// Start of document ready function
$( document ).ready(function() {
// Input code inside


let thereIsNews = false;
const news = $('.news'),
      sections = $('.sections'),
      loader = $('.loader'),
      nytUrl = 'https://api.nytimes.com/svc/topstories/v2/',
      APIkey = MY_KEY,
      endUrl = '.json?api-key=' + APIkey,
      objSection = [
  { value : '',
  text: 'Sections...', 
  },  
  { value : 'arts',
    text: 'Arts', 
  },
  { value : 'automobiles',
    text: 'Automobiles', 
  },
  { value : 'books',
    text: 'Book', 
  },
  { value : 'business',
    text: 'Business', 
  },
  { value : 'fashion',
    text: 'Fashion', 
  },
  { value : 'food',
    text: 'Food', 
  },
  { value : 'health',
    text: 'Health', 
  },
  { value : 'home',
    text: 'Home', 
  },
  { value : 'insider',
    text: 'Insider', 
  },
  { value : 'magazine',
    text: 'Magazine', 
  },
  { value : 'movies',
    text: 'Movies', 
  },
  { value : 'national',
    text: 'National', 
  },
  { value : 'nyregion',
    text: 'NY Region', 
  },
  { value : 'obituaries',
    text: 'Obituaries', 
  },
  { value : 'opinion',
    text: 'Opinion', 
  },
  { value : 'politics',
    text: 'Politics', 
  },
  { value : 'realestate',
    text: 'Real State', 
  },
  { value : 'science',
    text: 'Science', 
  },
  { value : 'sports',
    text: 'Sports', 
  },
  { value : 'sundayreview',
    text: 'Sunday Review', 
  },
  { value : 'technology',
    text: 'Technology', 
  },
  { value : 'theater',
    text: 'Theater', 
  },
  { value : 'tmagazine',
    text: 'T Magazine', 
  },
  { value : 'travel',
    text: 'Travel', 
  },
  { value : 'upshot',
    text: 'Upshot', 
  },
  { value : 'world',
    text: 'World', 
  }
]

start();

function start(){
    // Create the options in the dropdown
    objSection.forEach(element => {
        sections.append( '<option value="' + element.value + '">' + element.text + '</option>');
    });
    // Add the event listener
    sections.on('change', makeApiCall)
}

function toggleClasses(){
  $('main').toggleClass('main-with-news');
  $('.logo').toggleClass('logo-with-news');
  $('.search-box').toggleClass('search-box-with-news');
  $('select').toggleClass('select-with-news');
  $('.search-box').slideUp("slow");
  $('.search-box').slideDown("slow");
 

  $(".news").mouseover(function(){
    $("figcaption").fadeOut("slow");
});

  $(".news").mouseleave(function(){
     $("figcaption").fadeIn();
 });
}



function createNewsCards(jData, news){
  for(let i = 0; i < 12 ; i++){
    let abstract = jData.results[i].abstract,
        urlC = jData.results[i].url,
        imgArr = jData.results[i].multimedia.length
    if(abstract !== '' && urlC !== '' && imgArr > 3){
      let img = jData.results[i].multimedia[4].url;
      let newCard = new Card(abstract, urlC, img);
      newCard.create(news);
    }
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
      $('.card').addClass('animate');
    })
    .fail(function() {
      loader.toggle();
      news.text('');
      news.append('<li class="fail"><img class="warning-icon" src="../../assets/images/warning.svg" alt="warning-sign">Fail to load... Try again</li>');
    });
  }


// End of document ready function
});
// Don't right code after this line

