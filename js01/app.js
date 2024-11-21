
console.log('Hello, Bebrai!');
console.log(4 + 5 * 7)

// kintamasis turi varda ir 2 pagrindines savybes
// 1-a koki reiksme turi kintamasis
// 2-a reiksme tipas

const manoPirmasSkaicius = 4;
const manoAntrasSkaicius = 3.14; 

// tarkim mes norim juos sudeti, rezultata galim iskarto atspausdinti arba surasyti i trecia kintamaji

let manoPirmojiSuma = manoPirmasSkaicius + manoAntrasSkaicius;

manoPirmojiSuma = manoPirmasSkaicius + 100;

// console.log('%c' + manoPirmojiSuma, 'color: red; font-size:20px;');

console.log(manoPirmojiSuma);  

const as = {};

as.vardas = 'Jonas'
as.pavarde = 'Jonaitis'

as.pavarde = 'Petraitis'

console.log(as, typeof as)

as.apie = {};

as.apie.amzius = 99;
as.apie.miestas = 'Vilnius';


console.log(as, typeof as);


console.log(document);

const Manoh1 = document.querySelector('h1');

console.log(Manoh1)

Manoh1.innerText = manoPirmojiSuma;

console.log(Manoh1);