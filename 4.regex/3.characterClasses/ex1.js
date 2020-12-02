// Create regex validating if sentence is question.
// Requirements
// starts with: What, Why, How, When, Who
// ends with: ?
// Should have at least 3 words

//---Test cases---/
const test1 = "Why am I ugly?"// OK
const test2 = "How do you make babies?" // OK
const test3 = "What the fuck" // NOT OK (no question mark)
const test4 = "Who?"// NOT OK (single word)
const test5 = "What is?" // NOT OK (2 words)


const tests = [test1, test2, test3, test4, test5];

const pattern = /^((wh(at|y|en|o))|how){1}(\s\w+\s?){2,}\?$/gi;

console.log(pattern);

for (let test of tests){
if(test.match(pattern)){
    console.log(`${test} has the correct pattern!`);
} else {
    console.log(`${test} has an incorrect pattern!`);
};
}