

let array = [1, 2, 3, 4, 5];

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);
}


 
// Lyginių skaičių radimas sąraše
// Sukurkite sąrašą skaičių. Naudodami for ciklą ir if sąlygą, išrinkite ir išspausdinkite tik lyginius skaičius iš sąrašo.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];



for (let i = 0; 
    i < array.length;
    i++) {
   if (numbers[i] % 2 === 0 ) {
    console.log(numbers[i])
    
   }
    
}
 
 
// Žodžių, ilgesnių nei 5 raidės, spausdinimas
// Sukurkite sąrašą žodžių. Išspausdinkite tik tuos žodžius, kurių ilgis yra didesnis nei 5 raidės.
// 

let words = ["apple", "banana", "kiwi", "watermelon", "pear"];

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
    if (words[i].length > 5) {
console.log(words[i]);
        
    }
}

 
 
// Skaičių dalinimas iš 3 be liekanos
// Sukurkite sąrašą skaičių nuo 1 iki 20. Išrinkite ir išspausdinkite tik tuos skaičius, kurie dalijasi iš 3 be liekanos.
// 

let numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for (let i = 0; i < numbersArr.length; i++) {
   if (numbers[i] % 3 === 0 ) {
    console.log(numbers[i])
    
   }
    
}


 
 
// Neigiamų skaičių suradimas sąraše
// Sukurkite sąrašą teigiamų ir neigiamų skaičių. Išspausdinkite tik neigiamus skaičius.
// 

// let negativenumbers = [4, -3, 2, -1, 0, -5, 8, -9];

// for (let i = 0; index < negativeNumbers.length; i++) {
//     if (negativeNumbers)
    
// }
 
 
 
// Teksto paieška sąraše
// Sukurkite sąrašą sakinių. Išspausdinkite tik tuos sakinius, kurie turi žodį „JavaScript“.
// 

let sentences = ["I love programming", "JavaScript is awesome", "Coding is fun", "Learn JavaScript"];

for (let i = 0; i < sentences.length; i++) {
    if(sentences[i].includes("JavaScript"))
    console.log(sentences[i]);
}
 
 
// Skaičių kvadratų suradimas
// Sukurkite sąrašą skaičių. Išspausdinkite tik tuos skaičius, kurių kvadratas yra didesnis nei 50.
// let numbers = [2, 5, 7, 8, 10, 12];
 
 
 
// Didžiausio skaičiaus paieška sąraše
// Sukurkite sąrašą skaičių ir raskite didžiausią skaičių. Tikrinkite kiekvieną reikšmę cikle.
// let numbers = [3, 45, 23, 67, 12, 90, 34];
 
 
 
 
// Raidžių skaičiavimas žodyje
// Sukurkite žodį ir suskaičiuokite, kiek kartų žodyje pasikartoja raidė „a“.
// let word = "banana";
 
 
// Amžių filtravimas sąraše
// Sukurkite sąrašą žmonių amžių. Išspausdinkite tik tuos, kurie yra vyresni nei 18.
// let ages = [12, 17, 22, 19, 15, 30, 18];
 
 
 
// Skaičių dalybos liekanos tikrinimas
// Sukurkite sąrašą skaičių. Išspausdinkite tik tuos skaičius, kurie, dalijant iš 2, turi liekaną.
// let numbers = [5, 8, 13, 22, 31, 40];
 