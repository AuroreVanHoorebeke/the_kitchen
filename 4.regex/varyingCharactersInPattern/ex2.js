// make regex pattern to check if characters are X, Y & Zs and there must be 4 blocks of 4 with spaces.

const test1 = "XXYX XYYY XXXX YYYY" // true
const test2 = "XJYZ XYYY XZXZ YZYZ" // false, incorrect character
const test3 = "XYZ XXXX ZZZZ YYYY" // false, missing character
const test4 = "XXXXZZZZYYYYXYZX" // false, no spaces
const test5 = "XYZX XXXX ZZZZ YYYY YYYX" // false, too many strings

const tests = [test1, test2, test3, test4, test5];

const pattern = /^((((X|Y|Z){4})\s){3}(X|Y|Z){4})$/gi;

for (let test of tests){
if(test.match(pattern)){
    console.log(`${test} has the correct pattern!`);
} else {
    console.log(`${test} has an incorrect pattern!`);
};
}