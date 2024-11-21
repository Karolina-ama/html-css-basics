const uzduotis1 = document.querySelector(".select1");
const uzduotis2 = document.querySelector(".select2");
const uzduotis3 = document.querySelector(".select3");
const uzduotis4 = document.querySelector(".select4");
const uzduotis5 = document.querySelector(".select5");
const uzduotis6 = document.querySelector(".select6");
const uzduotis7 = document.querySelector(".select7");
const uzduotis8 = document.querySelector(".select8");
const uzduotis9 = document.querySelector(".select9");
const uzduotis10 = document.querySelector(".select10");


const rand = function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

const skaicius = rand(-1000, 1000);
console.log(skaicius);

if (skaicius>0) { 
 uzduotis1.innerText = `Skaicius ${skaicius} yra teigiamas`   
} 

else if (skaicius<0){
    uzduotis1.innerText = `Skaicius ${skaicius} yra neigiamas`
}

else {
     uzduotis1.innerText = `Skaicius ${skaicius} yra 0`
}



/////2

const skaicius1 = rand(0, 1000)

console.log(skaicius1);

if (skaicius1 % 2 === 0 ) {
    uzduotis2.innerText = `Skaicius ${skaicius1} yra lyginis`  
}
else {
    uzduotis2.innerText = `Skaicius ${skaicius1} yra nelyginis`  
}

//////3

const temp=rand(-30, 100);

if (temp<0) {
    uzduotis3.innerText = `temperatura ${temp}yra neigiama`
}
 else if (temp>=0 && temp<=30) {
    uzduotis3.innerText = `temperatura ${temp}yra tarp nulio ir 30 laipsniu`
 }

 else {
    uzduotis3.innerText = `temperatura ${temp}yra daugiau negu 30 laipsniu`
 }




// if (temp>0) {
//     uzduotis3.innerText = `temperatura ${temp} yra teigiama` 
// } 

// else if (temp<0) {uzduotis3.innerText = `temperatura ${temp} yra neigiama` 

// }
   
// else {
//  uzduotis3.innerText = `temperatūra yra nulis`
// }


////5

const skaicius5 = rand(1000, 2000);
const skaicius50 = rand(1000, 2000);

console.log(skaicius5, skaicius50)

if (skaicius5>skaicius50) {
    uzduotis5.innerText = ` ${skaicius5} yra didesnis uz ${skaicius50}`
}

else if (skaicius5<skaicius50) {
    uzduotis5.innerText = `${skaicius5} yra mazesnis uz ${skaicius50}`
}

else {
    uzduotis5.innerText = `${skaicius5} yra lygus skaiciui ${skaicius50}`
}



///// Užduotis 4: Amžiaus tikrinimas
// Aprašymas: Sukurk kintamąjį amzius ir patikrink, ar amžius yra mažesnis nei 18, tarp 18 ir 65, ar virš 65. Atspausdink rezultatą.
// Pavyzdys: Jei amzius = 70, konsolėje turėtų atsirasti tekstas „Asmuo yra pensinio amžiaus“.

const age = rand(0, 100);

console.log(age)

if (age<18) {
    uzduotis4.innerText = `asmuo yra nepilnametis, ${age} metų`;
}
else if (age>18 && age<65) {
    uzduotis4.innerText = `asmuo yra darbingo amziaus ${age}metų`;
}

else {
    uzduotis4.innerText = `asmuo yra pensijinio amziaus ${age} metų`;
}


// Užduotis 6: Pasiūlymas pirkėjui
// Aprašymas: Sukurk kintamąjį suma. Jei suma mažesnė nei 100, pasiūlyk „Įsigyk daugiau prekių“. Jei suma tarp 100 ir 500, parašyk „Jūs gaunate nuolaidą!“. Jei virš 500, parašyk „Jūs gaunate papildomą dovaną!“.
// Pavyzdys: Jei suma = 250, konsolėje turėtų atsirasti tekstas „Jūs gaunate nuolaidą!“.

const amount = rand(0, 500);

console.log(amount);

if(amount<100) {
    uzduotis6.innerText =`Krepšelio suma ${amount}eur,  įsigyk daugiau prekių, iki papildomos nuolaidos jums trūksta įsigyti prekių už ${100-amount} eur`;
}
else {
    uzduotis6.innerText =`Jūs gaunate nuolaidą`;
}

// Užduotis 7: Vardų patikrinimas
// Aprašymas: Sukurk kintamąjį vardas. Jei vardas yra „Jonas“, atspausdink „Labas, Jonai!“, jei „Ona“ – „Labas, Ona!“, o kitu atveju – „Labas, [vardas]!“.
// Pavyzdys: Jei vardas = „Ona“, konsolėje turėtų atsirasti tekstas „Labas, Ona!“.


const vardai = [ "Ona", "Jonas", "Petrai", "Gediminai", "Kotryna"];

const vardasSkaicius = rand(1, 5);

if (vardasSkaicius === 1) {
    uzduotis7.innerText = `Labas, Ona!`;
} else if (vardasSkaicius === 2) {
    uzduotis7.innerText = `Labas, Jonai!`;
} else {
    uzduotis7.innerText = `Labas, ${vardai}!`;
}


// Užduotis 8: Egzaminų rezultatas
// Aprašymas: Sukurk kintamąjį rezultatas. Jei rezultatas didesnis nei 90, parašyk „Puiku!“, jei tarp 60 ir 90 – „Gerai!“, jei žemiau 60 – „Nepakanka!“.
// Pavyzdys: Jei rezultatas = 85, konsolėje turėtų atsirasti tekstas „Gerai!“.

const result = rand(0,100);

console.log(result);

if (result<60) {
 uzduotis8.innerText =`Rezultatas ${result} nepakankamas`;
}

else if (result>=60 && result<=90) {
    uzduotis8.innerText = `Rezultatas ${result} Gerai!`
}
else {
    uzduotis8.innerText = `Rezultatas ${result} Puiku! `
}

// Užduotis 9: Darbo valandos
// Aprašymas: Sukurk kintamąjį valandos. Jei valandos reikšmė tarp 9 ir 17 (imtinai), parašyk „Dabar darbo laikas“, kitu atveju – „Ne darbo laikas“.
// Pavyzdys: Jei valandos = 14, konsolėje turėtų atsirasti tekstas „Dabar darbo laikas“.

const hour = rand(0, 24);

if (hour>9 && hour<17) {
    uzduotis9.innerText = ` Dabar yra ${hour} valandų, dabar yra darbo laikas`
}

else {
    uzduotis9.innerText = `Ne darbo laikas`
}

// Užduotis 10: Studentų balai
// Aprašymas: Sukurk kintamuosius studentas1 ir studentas2. Patikrink, kuris iš jų gavo daugiau balų, ir atspausdink atitinkamą pranešimą.
// Pavyzdys: Jei studentas1 = 75 ir studentas2 = 85, konsolėje turėtų atsirasti tekstas „Studentas 2 gavo daugiau balų“.

const student1 = rand(0, 100)
const student2 = rand(0,100)

console.log(student1, student2);

if (student1>student2)  {
    uzduotis10.innerText = `Pirmas studentas surinko ${student1} taškų, antras studentas surinko ${student2} taškų, Pirmas studentas surinko daugiau taškų`
}
    else if (student1<student2)  {
    uzduotis10.innerText = `Pirmas studentas surinko ${student1} taškų, antras studentas surinko ${student2} taškų, antras studentas surinko daugiau taškų`
    }

    else {
        uzduotis10.innerText = ` abu studentai surinko vienodą ${student1} taškų skaičių`
    }