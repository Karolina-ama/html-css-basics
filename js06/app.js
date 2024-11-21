console.log("Bebras");

const nr1 = document.querySelector("#nr1");

const kiekLegoReikia = 5; // max kaladeliu kiekis yra 11

let sqDivs = "";

for (let i = 0; i < 11; i++) {

    if(i >= kiekLegoReikia) {
         break;
    }
 
  sqDivs += "<div>";

  for (let j = 0; j < 3; j++) {
    sqDivs += "<span></span>";
    if (j >= 1 && i % 2 === 1) {
        break;
    }
  }
  sqDivs += "</div>";
}

nr1.innerHTML = sqDivs;
