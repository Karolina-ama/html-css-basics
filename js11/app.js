// 1. Nuspalvinti Visus žodžius iš NR1 sekcijos raudonai. Naudoti forEach

const nr1 = document.querySelectorAll('#nr1 div').forEach(div => div.style.color = 'crimson');

// 2. Nuspalvinti visus =od=ius is NR1, kurie prasideda raide "J". NAUDOTI FOR EACH\

document.querySelectorAll('#nr1 div').forEach(div => {
    if (div.innerText[0]== 'J') {
        div.style.color = 'skyblue';
    }
}) 

//2 nuspalvinti visus skaicius is nr2 sekcijos kurie yra daugiau nei 10. naudoti foreach/

// 5. 