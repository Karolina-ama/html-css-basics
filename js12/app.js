console.log('app.js');

const machines = [
    'Traktorius',
    'Kombainas',
    'Volavimo mašina',
    'Buldozeris',
    'Krautuvas',
    'Keltuvas',
    'Kranas',
    'Kompresorius',
];

// 1. Create a <ul> list with class "machines-list" and add each machine as an <li>
const ul = document.querySelector('.machines-list'); // Use class selector with '.'
machines.forEach(machine => {
    const li = document.createElement('li');
    li.textContent = machine; // Set textContent directly
    ul.appendChild(li);
});

// 2. Create a <ul> list with class "machines-list-1" excluding "Kranas"
const ul1 = document.querySelector('.machines-list-1'); // Use class selector with '.'
machines
    .filter(machine => machine !== 'Kranas') // Filter out "Kranas"
    .forEach(machine => {
        const li = document.createElement('li');
        li.textContent = machine;
        ul1.appendChild(li);
    });

// 3. Create a <ul> list with class "machines-list-2" excluding "Volavimo mašina" and "Keltuvas"
// and add " - mašina" to each machine name
const ul2 = document.querySelector('.machines-list-2'); // Use class selector with '.'
machines
    .filter(machine => machine !== 'Volavimo mašina' && machine !== 'Keltuvas')
    .map(machine => machine + ' - mašina')
    .forEach(machine => {
        const li = document.createElement('li');
        li.textContent = machine;
        ul2.appendChild(li);
    });





// Sorting and logging the digits array
const digits = [44, 87, 43, 0, 87, 58, 95, 21];
digits.sort((a, b) => a - b); // Sort in ascending order
console.log(digits);

machines.sort((a, b) => {
    if (a[1] < b[1]) {
        return -1;
    }
    if (a[1] > b[1]) {
        return 1;
    }
    return 0;
});

