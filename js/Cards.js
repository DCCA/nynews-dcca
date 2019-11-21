export default class Card {
    constructor(abstract, url, img) {
        this.abstract = abstract;
        this.url = url;
        this.img = img;
    }
    create(section){
        section.append('<li class="card"><a href="' + this.url + '" target="_blank"><img src="' + this.img + '"alt=""></a><figcaption>' + this.abstract + '</figcaption></li>');
    }
  }