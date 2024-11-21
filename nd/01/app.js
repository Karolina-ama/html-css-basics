function rand(min, max) 
{
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

console.log('lokys');


//1

const tagH2 = document.querySelector('h2');
tagH2.innerText = 2;

const tagH3 = document.querySelector('h3');
tagH3.innerText = 3;

const tagH1 = document.querySelector('h1');
tagH1.innerText = 1;

const tagH4 = document.querySelector('h4');
tagH4.innerText = 4;


 // 2

//  const circle = document.querySelector('div:nth-of-type(2)');
//  circle.innerHTML = '<svg height="100" width="100" xmlns="http://www.w3.org/2000/svg"><circle r="45" cx="50" cy="50"fill="red" /></svg>';

document.querySelector('div:nth-of-type(2)').innerHTML = '<svg height="100" width="100" xmlns="http://www.w3.org/2000/svg"><circle r="45" cx="50" cy="50"fill="red" /></svg>';

const rectangle = document.querySelector('div');
rectangle.innerHTML = '<svg width="300" height="130" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="100" x="10" y="10" rx="20" ry="20" fill="blue" /></svg>';

//3
const didesnis = document.querySelector('span:nth-of-type(1)');
const mazesnis = document.querySelector('span:nth-of-type(2)');
const atsakymas = document.querySelector('span:nth-of-type(3)');

console.log(mazesnis);

const A = rand(0, 4);
const B = rand(0, 4);

console.log(A);
console.log(B);

if (A > B) {
    console.log(A / B);
    mazesnis.innerText = B;
    didesnis.innerText = A;
    atsakymas.innerText = A / B;
}
else if (B > A) {
    console.log(B / A);
    mazesnis.innerText = A;
    didesnis.innerText = B;
    atsakymas.innerText = B / A;
}

///4

const section = document.getElementById('go4');
const DIV1 = section.querySelector('div:nth-of-type(1)');
const DIV2 = section.querySelector('div:nth-of-type(2)');
const DIV3 = section.querySelector('div:nth-of-type(3)');

const C = rand(50, 200);
const D = rand(50, 200);
const E = rand(50, 200);


if (C<D && C<E) 
{
    DIV1.innerHTML = '<svg height="400" width="400" xmlns="http://www.w3.org/2000/svg"><circle r="' +C+ '" cx="200" cy="200"fill="yellow" /></svg>';
    if (D < E)
    {
        DIV2.innerHTML = '<svg height="400" width="400" xmlns="http://www.w3.org/2000/svg"><circle r="' +D+ '" cx="200" cy="200"fill="green" /></svg>';
    }
    else
    {
        DIV2.innerHTML = '<svg height="400" width="400" xmlns="http://www.w3.org/2000/svg"><circle r="' +E+ '" cx="200" cy="200"fill="green" /></svg>';
    }
    if (E>D)
    {
        DIV3.innerHTML = '<svg height="400" width="400" xmlns="http://www.w3.org/2000/svg"><circle r="' +E+ '" cx="200" cy="200"fill="red" /></svg>';
    }
    else{
        DIV3.innerHTML = '<svg height="400" width="400" xmlns="http://www.w3.org/2000/svg"><circle r="' +D+ '" cx="200" cy="200"fill="red" /></svg>';
    }
} 
if (D<C && D<E) 
    {
        DIV1.innerHTML = '<svg height="400" width="400" xmlns="http://www.w3.org/2000/svg"><circle r="' +D+ '" cx="200" cy="200"fill="yellow" /></svg>';
        if (C < E)
        {
            DIV2.innerHTML = '<svg height="400" width="400" xmlns="http://www.w3.org/2000/svg"><circle r="' +C+ '" cx="200" cy="200"fill="green" /></svg>';
        }
         
        
        else
        {
            DIV2.innerHTML = '<svg height="400" width="400" xmlns="http://www.w3.org/2000/svg"><circle r="' +E+ '" cx="200" cy="200"fill="green" /></svg>';
        }
        if (E>C)
        {
            DIV3.innerHTML = '<svg height="400" width="400" xmlns="http://www.w3.org/2000/svg"><circle r="' +E+ '" cx="200" cy="200"fill="red" /></svg>';
        }
        else{
            DIV3.innerHTML = '<svg height="400" width="400" xmlns="http://www.w3.org/2000/svg"><circle r="' +C+ '" cx="200" cy="200"fill="red" /></svg>';
        }
    } 
    
    if (E<C && E<D) 
        {
            DIV1.innerHTML = '<svg height="400" width="400" xmlns="http://www.w3.org/2000/svg"><circle r="' +E+ '" cx="200" cy="200"fill="yellow" /></svg>';
            if (C < D)
            {
                DIV2.innerHTML = '<svg height="400" width="400" xmlns="http://www.w3.org/2000/svg"><circle r="' +C+ '" cx="200" cy="200"fill="green" /></svg>';
            }
            else
            {
                DIV2.innerHTML = '<svg height="400" width="400" xmlns="http://www.w3.org/2000/svg"><circle r="' +D+ '" cx="200" cy="200"fill="green" /></svg>';
            }
            if (D>C)
            {
                DIV3.innerHTML = '<svg height="400" width="400" xmlns="http://www.w3.org/2000/svg"><circle r="' +D+ '" cx="200" cy="200"fill="red" /></svg>';
            }
            else{
                DIV3.innerHTML = '<svg height="400" width="400" xmlns="http://www.w3.org/2000/svg"><circle r="' +C+ '" cx="200" cy="200"fill="red" /></svg>';
            }
        } 
    

/////5
// Naudokite funkcija rand(). 
// Į section tage su id=go5 esančius span įrašykite 3 skaičius nuo -10 iki 10. 
// Skaičius mažesnių už 0 spausdinkite raudonai,
//   didesnius už 0 mėlynai,
//    o 0 žaliai.


const go5span1 = rand(-10, 10);
const go5span2 = rand(-10, 10);
const go5span3 = rand(-10, 10);


const spans = document.querySelectorAll('#go5 span'); 
spans[0].textContent = go5span1;
spans[1].textContent = go5span2;
spans[2].textContent = go5span3;


if (go5span1 > 0) {
    spans[0].style.color = "blue";
} else if (go5span1 < 0) {
    spans[0].style.color = "red";
} else {
    spans[0].style.color = "green";
}



if (go5span2 > 0) {
    spans[1].style.color = "blue";
} else if (go5span2 < 0) {
    spans[1].style.color = "red";
} else {
    spans[1].style.color = "green";
}


if (go5span3 > 0) {
    spans[2].style.color = "blue";
} else if (go5span3 < 0) {
    spans[2].style.color = "red";
} else {
    spans[2].style.color = "green";
}



// 6////////////////////

// Įmonė parduoda žvakes po 1 EUR. 
// Perkant daugiau kaip 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. 

// Parašykite skriptą, kuris skaičiuos žvakių kainą 

// ir užpildykite formą easnčią section tage su id=go6. 

// Žvakių kiekį generuokite ​rand() funkcija nuo 5 iki 3000.

const uzduotis6span = document.querySelectorAll('#go6 span');

const zvakiuKiekis = rand(1, 10000);

document.querySelector("[data-amount] span").textContent = zvakiuKiekis;

const zvakiuKainaBeNuolaidos = zvakiuKiekis * 1;

document.querySelector("[data-subtotal] span").textContent = zvakiuKainaBeNuolaidos;


// const nuolaida= document.querySelector("[data-discount] span");The reason you're getting NaN (Not a Number) in galutineKaina is because nuolaida is a DOM element, not a numeric value. When you calculate nuolaidosSuma, JavaScript tries to use nuolaida as a number, but since it’s actually an element, it results in NaN.
const nuolaidaElement = document.querySelector("[data-discount] span")

 if (zvakiuKainaBeNuolaidos>1000 && zvakiuKainaBeNuolaidos<1999) {
    nuolaida= ` 3 `
 }
  else if (zvakiuKainaBeNuolaidos>2000) {
    nuolaida = ` 4 `
  }
 else {
    nuolaida = ` 0 `
 }

 nuolaidaElement.textContent = nuolaida;
 // updatina html kad ?

 
 const nuolaidosSuma = zvakiuKainaBeNuolaidos * (nuolaida/100);

const galutineKaina = zvakiuKainaBeNuolaidos - nuolaidosSuma;
 
 document.querySelector("[data-total] span").textContent = galutineKaina.toFixed(2);

///////7/////

const uzduotis7 = document.getElementById('go7');
const divGo7 = uzduotis7.querySelector('div:nth-of-type(1)');

const forma = rand(1, 3);

const square = {
    height: "100px",
    width: "100px",
    backgroundColor: "#1995"
};

const triangle = {
    width: "0",
    height: "0",
    borderLeft: "75px solid transparent",
    borderRight: "75px solid transparent",
    borderBottom: "100px solid #1995"
};

const circle = {
    height: "100px",
    width: "100px",
    borderRadius: "50%",
    backgroundColor: "#1995"
};

if (forma === 1) {
    Object.assign(divGo7.style, square);
} else if (forma === 2) {
    Object.assign(divGo7.style, triangle);
} else if (forma === 3) {
    Object.assign(divGo7.style, circle);
}

//////8//////



const circle1 = document.querySelectorAll("#go8 div")[0];
const circle2 = document.querySelectorAll("#go8 div")[1];
const circle3 = document.querySelectorAll("#go8 div")[2];
const circle4 = document.querySelectorAll("#go8 div")[3];
const circle5 = document.querySelectorAll("#go8 div")[4];
const circle6 = document.querySelectorAll("#go8 div")[5];






let zalia = 0;
let raudona = 0;
let melyna = 0;


if (circle1.style.backgroundColor === "green") {
    zalia++;
} else if (circle1.style.backgroundColor === "red") {
    raudona++;
} else if (circle1.style.backgroundColor === "blue") {
    melyna++;
}

if (circle2.style.backgroundColor === "green") {
    zalia++;
} else if (circle2.style.backgroundColor === "red") {
    raudona++;
} else if (circle2.style.backgroundColor === "blue") {
    melyna++;
}

if (circle3.style.backgroundColor === "green") {
    zalia++;
} else if (circle3.style.backgroundColor === "red") {
    raudona++;
} else if (circle3.style.backgroundColor === "blue") {
    melyna++;
}

if (circle4.style.backgroundColor === "green") {
    zalia++;
} else if (circle4.style.backgroundColor === "red") {
    raudona++;
} else if (circle4.style.backgroundColor === "blue") {
    melyna++;
}

if (circle5.style.backgroundColor === "green") {
    zalia++;
} else if (circle5.style.backgroundColor === "red") {
    raudona++;
} else if (circle5.style.backgroundColor === "blue") {
    melyna++;
}

if (circle6.style.backgroundColor === "green") {
    zalia++;
} else if (circle6.style.backgroundColor === "red") {
    raudona++;
} else if (circle6.style.backgroundColor === "blue") {
    melyna++;
}

document.querySelector("[data-green] span").textContent = zalia;
document.querySelector("[data-red] span").textContent = raudona;
document.querySelector("[data-blue] span").textContent = melyna;




/////9///////

    const uzduotis9span = document.querySelectorAll('#go9 span');

    const num1 = parseInt(uzduotis9span[0].innerText);
    const num2 = parseInt(uzduotis9span[1].innerText);
    
    const result = num1 * num2;
    
    uzduotis9span[2].innerText = result;


    const num3 = parseInt(uzduotis9span[3].innerText);
    const num4 = parseInt(uzduotis9span[4].innerText);
    
    const result2 = num3 * num4;
    
    uzduotis9span[5].innerText = result2;

    const num6 = parseInt(uzduotis9span[6].innerText);
    const num7 = parseInt(uzduotis9span[7].innerText);
    
    const result3 = num6 * num7;
    
    uzduotis9span[8].innerText = result3;

    const num9 = parseInt(uzduotis9span[9].innerText);
    const num10 = parseInt(uzduotis9span[10].innerText);
    
    const result4 = num9 * num10;
    
    uzduotis9span[11].innerText = result4;

    const num12 = parseInt(uzduotis9span[12].innerText);
    const num13 = parseInt(uzduotis9span[13].innerText);
    
    const result5 = num12 * num13;
    
    uzduotis9span[14].innerText = result5;



////10/////

const elements = document.querySelectorAll('#go10 div');



const divSq1 = elements[0];
const divSq2 = elements[1];
const divSq3 = elements[2];
const divSq4 = elements[3];
const divSq5 = elements[4];




const width1 = parseInt(divSq1.style.width);
const height1 = parseInt(divSq1.style.height);
if (width1 * height1 > 10000) {
  divSq1.style.backgroundColor = 'red';
}




const width2 = parseInt(divSq2.style.width);
const height2 = parseInt(divSq2.style.height);
if (width2 * height2 > 10000) {
  divSq2.style.backgroundColor = 'red';
}




const width3 = parseInt(divSq3.style.width);
const height3 = parseInt(divSq3.style.height);
if (width3 * height3 > 10000) {
  divSq3.style.backgroundColor = 'red';
}




const width4 = parseInt(divSq4.style.width);
const height4 = parseInt(divSq4.style.height);
if (width4 * height4 > 10000) {
  divSq4.style.backgroundColor = 'red';
}



const width5 = parseInt(divSq5.style.width);
const height5 = parseInt(divSq5.style.height);
if (width5 * height5 > 10000) {
  divSq5.style.backgroundColor = 'red';
}




































// elements.forEach((element) => {
//     elements- mano divai 
//     for each- ciklas kiekvienam
//     (element) => Arrow functions allow us to write shorter function syntax:Arrow Function With Parameters:


//   const width = parseInt(element.style.width);
//   const height = parseInt(element.style.height);
  
//   const area = width * height;

//   if (area > 10000) {
//     element.style.backgroundColor = 'red';
//   }
// });



















