// Password validator: a multipattern function
// at least 1 lowercase letter, 
// at least 1 uppercase, 
// at least 1 number, 
// contain a special character (+, ?, $, ^), 
// is between 8 and 18 chars long.

const test1 = 'Hopper2020\$';// valid
const test2 = 'Hopp2020er\$'; //valid
const test3 = 'hopper2020\$'; // NOT valid (no uppercase)
const test4 = 'HOPPER2020\$'; //NOT valid (no lowercase)
const test5 = 'HopperHopper\$'; //NOT valid (no number)
const test6 = 'Hopper2020'; //NOT valid (no special character)
const test7 = 'HopperHopperHopper20202020\$'; //NOT valid (too long)
const test8 = 'Hop20\$'; // NOT valid (too short)


const tests = [test1, test2, test3, test4, test5, test6, test7, test8];

function matchPatterns(){
    const pattern1 = /[A-Z]+/g; //is uppercase?
    const pattern2 = /[a-z]+/g; //is lowercase?
    const pattern3 = /\d+/g; //digit?
    const pattern4 = /[\+\?\$\^]+/g; //special character?
    const pattern5 = /^(.{8,18})$/g; //range between 8 and 18?

    for (let test of tests){
        if(test.match(pattern1)&&test.match(pattern2)&&test.match(pattern3)&&test.match(pattern4)&&test.match(pattern5)){
            console.log(`${test} is valid!`);
        } else {
            console.log(`${test} has an incorrect pattern!`);
        };
    };
}

matchPatterns();