export default class Card {
    constructor(abstract, url, img, id) {
        this.abstract = abstract;
        this.url = url;
        this.img = img;
        this.id = id;
    }
    create(section){
        section.append('<li class="card" id="' + this.id + '"><a href="' + this.url + '" target="_blank"></a><figcaption>' + this.abstract + '</figcaption></li>');
        $('#' + this.id).css({'background-image': 'url(' + this.img + ')'});
    }
  }

//   'height': '20em'