"use strict";
const ArtikelsTonen = {

Articles() {

    console.log('init')
    const filteren = document.getElementById('filterInputField').value;
    console.log(filteren);
    this.opstart(filteren);

}


}
class artikels {
    constructor(UUID, title, content, imageURL, likes, datum  ) {
      this.UUID = UUID
      this.title = title
      this.content = content
      this.imageURL = imageURL
      this.likes = likes
      this.datum = datum

      likes.sort(function (a, b) {

    return a.value - b.value;
        
        })

    }
  }
  
  async function Weergeven()
  {
    let response = await fetch('http://thecrew.cc/news/read.php')
    .then(response => response.json())
    .then(data => {
      return data.news.map(a => new artikels(a.UUID, a.title, a.content, a.imageURL, a.likes, a.datum));
      });
  
      console.log(response)
    }


  Weergeven();



