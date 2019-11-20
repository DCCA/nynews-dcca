export default class Card {
    constructor(abstract, img, url) {
        this.abstract = abstract;
        this.img = img;
        this.url = url;
    }
    create(section){
        section.append('<li class="card"><img src="' + this.img + '"alt=""><figcaption>' + this.abstract + '</figcaption></li>');
    }
  }