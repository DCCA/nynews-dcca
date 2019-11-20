export default class Card {
    constructor(img, text) {
        this.img = img;
        this.text = text;
    }
    create(section){
        let sec = section
        sec.append();
    }
  }