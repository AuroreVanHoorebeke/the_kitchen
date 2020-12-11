/*
AIM: Write a function that mimics the behaviour of a typewriter.
Using setInterval display the word prout one character at a time (one letter per second). Once the word is written on the screen clear the interval.
*/

const body = document.querySelector("body");

const paragraph = document.createElement("p");
body.appendChild(paragraph);


let interval;
const word = "prout";

let wordArr = word.split("");
console.log(wordArr);
let i = 0;

interval = setInterval(displayLetter, 1000);

displayLetter()
function displayLetter(){
    console.log("in function");
    let newWord = wordArr[i];
    i++;

    if(wordArr[i] == undefined){
        paragraph.textContent += newWord;
        clearInterval(interval);
        console.log("cleared");
    } else {
        console.log(newWord);
        paragraph.textContent += newWord;
    }
}