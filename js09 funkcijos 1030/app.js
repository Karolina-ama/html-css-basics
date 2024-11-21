///1 Sukurti funkcija kuri priima du kintamuosius ir grazina didesni

function rand(min, max) 
{
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

console.log('lokys');

const skaicius1 = rand(1, 10);
const skaicius2 = rand(1, 10);

function didesnisSkaicius (skaicius1, skaicius2) {

if (skaicius1> skaicius2) {
    return skaicius1;
}
    else {
        return skaicius2;
    }
}

console.log(didesnisSkaicius(skaicius1, skaicius2));

//mokytojo pavyzdys

const funIf = (a, b) => {
    if (a > b) {
        return a;
}
 return b;

}

//2 sukurti funkcija, kuri priima 2 stringus irasytus i kintamuosiusir graina trumpesni

// const pirmasZodis = Asfaltas;
// const antrasZodis = Valgis;

// const antraFunkcija = (pirmasZodis, antrasZodis) => {
//     if (pirmasZodis)
// }

// mokytojo pavyzdys
 const fun2 = (a, b) => {
    if(a.length < b.length) {
        return a;
    }
    return b;
 }
  console.log(fun2('labas', 'pats tu toks geras'));


  //3  Sukurti funkciją, kuri priima 2 kintamuosius. Jeigu didesnis pirmas grąina 1, jeigu didesnis antras grąžina -1, jeigu lygūs grąžina 0.

  const fun3 = (a, b) => {
    if (a> b) {
        return 1
    }
    else if (b> a) {
        return -1
    } 
    else {
    return 0
    }
  }

  console.log(fun3(5, 1)); 


  // 5

  function funSum1(a, b) {
    return a + b;
}
 
const funSum2 = function (a, b) {
    return a + b;
}
 
const funSum3 = (a, b) => {
    return a + b;
}
 
const funSum4 = (a, b) => a + b;
 
 
console.log(funSum4(2, 3));











function funBig1(a, b) {
    if (a > b) {
        return a;
    }
    return b;
}
 
const funBig2 = function (a, b) {
    if (a > b) {
        return a;
    }
    return b;
}
 
const funBig3 = (a, b) => {
    if (a > b) {
        return a;
    }
    return b;
}
 
const funBig4 = (a, b) => a > b ? a : b;





function funStrLen1(a) {
    return a.length;
}
 
const funStrLen2 = function (a) {
    return a.length;
}
 
const funStrLen3 = (a) => {
    return a.length;
}
 
const funStrLen4 = a => a.length;





 
function FunReturnLabas1() {
    return 'labas';
}
 
const FunReturnLabas2 = function () {
    return 'labas';
}
 
const FunReturnLabas3 = () => {
    return 'labas';
}
 
const FunReturnLabas4 = _  => 'labas';







const funSumMany1 = (a, b, ...rest) => {
    console.log(rest);
 
    let sumAll = 0;
    for (let i = 0; i < rest.length; i++) {
        sumAll += rest[i];
       
    }
    return a + b + sumAll;
}
console.log(funSumMany1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));




const animals = ['cat', 'dog', 'elephant', 'lion', 'tiger'];

/// gyvunus galiu pasiimti is sio saraso masyvo naudojant ju numerius, naudojant spread



const animals2 = [...animals];

const animals3 = animals;



// cia yra spread, spread ir rest atrodo beveik taip pat.  const funSumMany1 = (a, b, ...rest) => { cia turim daug skaiciu ir jie visi vienoj kruvoj,
// const animals2 = [...animals]; cia turiu masyva ir jeigu parasau ... priekyje jie gali issispreadinti is sio masyvo

// const animals = ['cat', 'dog', 'elephant', 'lion', 'tiger']; const animals2 = [...animals]; jeigu as i animals [0] vieta idesiu meska pas mus bus`