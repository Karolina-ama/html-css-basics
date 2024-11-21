function rand(min, max) {const minCeiled = Math.ceil(min);const maxFloored = Math.floor(max);return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);}


console.log('Veikia');

const pTag = document.querySelector('p');

pTag.style.solor = 'skyblue';

const text = pTag.innerText;

console.log(text); 

pTag.innerText = 'Labas rytas';

const color = pTag.style.color;

console.log(color);


const A = 300;
const B = 300;

const t = true;
const f = false;

console.log(typeof t);


if (B > A) {
    console.log('B didesnis');

} else if (A > B) {
    console.log('A didesnis');
} else {
    console.log('Lygu');
}

// const Z = rand(1, 100);
// const X = rand(1, 100);
// const Y = rand(1, 100);

const Z = rand(100);
const X = rand(200);
const Y = rand(200);
 
console.log('Z:', Z, 'X:', X, 'Y:', Y);

if (Z > X) {
    if (Z > Y) {
        console.log('Z didziausas');
    } else if (Z == Y) {
    } else {
        console.log('Y didziausas');
    }
} else if (X > Z) {
    if (X > Y) {
        console.log('X didziausas');
    } else {
        console.log('Y didziausas');
    }
} else {
    console.log('Y didziausas');
}
