let question = prompt('Enter add, sub, mult, div');

do {
    question = prompt('Enter add, sub, mult, div');
} while (question !== 'add' && question !== 'sub' && question !== 'mult' && question !== 'div');

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

let div = arr[0] / arr[1];


switch (question) {
    case 'add':
        alert(`${arr.join(' + ')} = ${sum}`);
        break;
    
    case 'mult':
        alert(`${arr.join(' * ')} = ${mult}`);
        break;
    
    case 'sub':
        alert(`${arr.join(' - ')} = ${sub}`);
        break;
    
    case 'div':
        alert(`${arr.join(' / ')} = ${div}`);
        break;
    
    default:
        alert('sorry, you did not enter any of the options');
}