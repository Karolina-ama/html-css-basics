console.log('labas');

const nr1 = document.querySelector('#nr1');

let nr1DivsHtml = '';

for (let i = 1; i <=7; i++) {

    if(i % 2){
        nr1DivsHtml += `<div>${i}</div>`;
}else {
    nr1DivsHtml += `<div style="background-color: skyblue;">${i}</div>`;
    }
}

nr1.innerHTML = nr1DivsHtml;

const nr2 = document.querySelector('#nr2');

let nr2DivsHtml = '';

for (let i = 1; i <=7; i++) {

    if(i % 2){
        nr1DivsHtml += `<div class="blue">${i}</div>`;
}else {
    nr1DivsHtml += `<div class="red">${i}</div>`;
    }
}

nr2.innerHTML = nr2DivsHtml;

const word = 'Andromeda';

const nr3= document.querySelector('#nr3');
 let nr3DivsHtml = '';

for (let i = 0; i <word.length; i++) {
    nr3DivsHtml += `<div>${word[i]}</div>`;
}
    nr3.innerHTML = nr3DivsHtml;


    const span2 = document.querySelector('#nr4 span:nth-child(2)');

    const spans = document.querySelectorAll('#nr4 span');

    console.log(spans);

    for (let i = 0; i <spans.length; i++) {
        spans[i].style.fontSize = (i + 1) * 10 + 'px';
    }
