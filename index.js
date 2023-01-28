let question = prompt('Enter add, sub, mult, div');

let num = prompt('Enter 2 numbers separated by commas');

let arr = num.split(',');

let sum = 0;

arr.forEach(
    (elem) => {
        sum += Number(elem)
    }
);

let mult = 1;

arr.forEach(
    (elem) => {
        mult *= Number(elem)
    }
);

let sub = 0;

arr.forEach(
    (elem) => {
        sub = -sub - Number(elem)
    }
);

let div = 100;

arr.forEach(
    (elem) => {
        div /= Number(elem)
    }
);

switch (true) {
    case question === 'add':
        alert(`${arr.join(' + ')} = ${sum}`);
        break;
    
    case question === 'mult':
        alert(`${arr.join(' * ')} = ${mult}`);
        break;
    
    case question === 'sub':
        alert(`${arr.join(' - ')} = ${sub}`);
        break;
    
    case question === 'div':
        alert(`${arr.join(' / ')} = ${div}`);
        break;
    
    default:
        alert('sorry, you did not enter any of the options');
}