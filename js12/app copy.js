document.querySelector('#btn1').addEventListener('click', e => {
    console.log('Button 1 clicked');
});
document.querySelector('#btn1').addEventListener('dblclick', e => {
    console.log('Button 1 dbclicked');
});
document.querySelector('#btn2').addEventListener('click', e => {
    console.log('Button 2 clicked');
});
 
 
window.addEventListener('scroll', e => {
    console.log('Scrolling, window.scrollY');
});
 
document.querySelector('#btn2').addEventListener('scroll', e => {
    console.log('Scrolling button 2');
});

document.querySelector('#btn2').addEventListener('scroll', e => {
    console.log('Scrolling button 2');
});

document.querySelector('.vaikas').addEventListener('click', e => {
    e.stopPropagation();
    document.querySelector('.vaikas').style.backgroundColor = 'darkblue';
});