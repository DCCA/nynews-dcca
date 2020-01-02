export default class Card {
    constructor(abstract, url, img) {
        this.abstract = abstract;
        this.url = url;
        this.img = img;
    }
    create(section){
        section.append('<li class="card" style="background-image: url(' + this.img + ');"><a href="' + this.url + '" target="_blank"></a><figcaption id = "figcaption1">' + this.abstract + '</figcaption></li>');
    }
  }