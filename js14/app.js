//1//

const numbers = [-150, 410, 104, 258];

// Atspausdinti visus masyvo skaičius ul tage nr1, įdėtus į <li> elementus nuo didžiausio iki mažiausio.

const ul = document.querySelector('#nr1');
const numbersSorted = numbers.sort((a, b) => b - a);
 
numbersSorted.forEach(number => {
    const li = document.createElement('li');
    li.innerText = number;
    ul.appendChild(li);
});



 //2. Html'e nupiešti kvadratą. Paspaudus ant kvadrato jis virsta į apskritimą. Paspaudus dar kartą, vėl tampa kvadratu ir t.t.

 
 const div = document.createElement('div');
 
 div.style.width = '100px';
 div.style.height = '100px';
 div.style.backgroundColor = 'black';
 div.style.transition = 'border-radius 0.5s';
 // div.style.borderRadius = '0px';
 div.dataset.figurosBusena = 'kvadratas';
  
 document.body.appendChild(div);
  
 div.addEventListener('click', _ => {
     if (div.dataset.figurosBusena === 'kvadratas') {
         div.style.borderRadius = '50%';
         div.dataset.figurosBusena = 'rutulys';
     } else {
         div.style.borderRadius = '0px';
         div.dataset.figurosBusena = 'kvadratas';
     }
 });


 //3. Sekcijoje nr2 įrašius tekstą į input laukelį ir paspaudus mygtuką, tas tekstas atsiranda sekcijoje nr2, virš input laukelio.

 const input = document.querySelector('#teksto-laukelis');
 
 const h1 = document.querySelector('h1');
  
 const button = document.querySelector('#mygtukas');
  
 button.addEventListener('click', _ => {
     h1.innerText = input.value;
     input.value = '';
 });
  
////\

// surasti ir atspausidnti ilgiausia zodi mayve with reduce

const mas2 = ['antis', 'višta', 'povas', 'kiaušas', 'puodas', 'šakė'];

const trumpiausias = mas2.reduce((trumpiausias, zodis) => zodis.length > trumpiausias.length ? zodis : ilgiausias, mass2[0]);
 
console.log(ilgiausias);

// surasti ir atspausidnti trumpiausia zodi mayve with reduce

const ilgiausias = mas2.reduce((ilgiausias, zodis) => zodis.length > ilgiausias.length ? zodis : trumpiausias, mas2[0]);

const trumpiausiasDidesnisUz5 = mas2.reduce((trumpiausias, zodis) => {
    return (zodis.length < trumpiausias.length && zodis.length > 5)? zodis : trumpiausias
}, mas2.find(zodis => zodis.length >5));







const temp1 = mas2.filter(zodis => zodis.length > 5);
const trumpiausiasDidesnisUz5WithFilter = temp1.reduce((trumpiausias, zodis) => zodis.length < trumpiausias.length ? zodis : trumpiausias, temp1[0]);
 
console.log(trumpiausiasDidesnisUz5WithFilter);

const trumpiausiasDidesnisUz5 = mas2.reduce((trumpiausias, zodis) => {
    return (zodis.length < trumpiausias.length && zodis.length > 5) ? zodis : trumpiausias
}, mas2.find(zodis => zodis.length > 5));
 
console.log(trumpiausiasDidesnisUz5);



///su for  each 

let trumpiausiasDidesnisUz5WithForeache = mas2.find(zodis => zodis.length > 5);
 
mas2.forEach(zodis => {
    if (zodis.length < trumpiausiasDidesnisUz5WithForeache.length && zodis.length > 5) {
        trumpiausiasDidesnisUz5WithForeache = zodis;
    }
});
 
console.log(trumpiausiasDidesnisUz5WithForeache); 
