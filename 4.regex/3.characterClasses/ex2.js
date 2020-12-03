// validate credit card number. 4*4 numbers with a space inbetween.

const test1 = '3567 2587 1212 9978';//valid
const test2 = 'A123 GG78 9017 1245'; // NOT valid (letter)
const test3 = '1113 14'; //NOT valid (too short)
const test4 = '3567 2587 1212 9978 9096'; //NOT valid (too long)
const test5 = '3567258712129978'; // NOT valid (no spaces)
const test6 = '3567258712129978   '; //NOT valid (spaces at the wrong place)

const tests = [test1, test2, test3, test4, test5, test6];

const pattern = /^(\d{4}\s){3}(\d{4})$/g;

console.log(pattern);

for (let test of tests){
if(test.match(pattern)){
    console.log(`${test} has the correct pattern!`);
} else {
    console.log(`${test} has an incorrect pattern!`);
};
}