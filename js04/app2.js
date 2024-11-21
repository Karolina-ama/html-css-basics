console.log('app2');

const s1 = document.querySelector('#s1'); //// kai ieskom id dedam # i skliaustelius, cia susiradau s1 html dokumente

const html1 = `
    <h2 style="color: skyblue;">
        HTML1
    </h2>
    `; 
// visas html turi buti kabutese

s1.innerHTML = html1; // cia idedam 


const s2 = document.querySelector('#s2');

let bulve = '';


for (let i = 0; i <= 100; i++) {

    // bulve = bulve + '<div>' +  i + '</div>';

    if (i == 5 || i == 7) {
        bulve = bulve + `<div style="background-color:green";>${i}</div>`;
    } else {
        bulve = bulve + `<div>${i}</div>`;
    }
    // bulve = bulve + `<div>${i}</div>`; // tas pats kaip ir eilute auksciau


} 




const html2 = `<div></div>` ;
s2.innerHTML = bulve;