// split a text into an array of words and create a text input returning an array of words matching the user input.

const body = document.querySelector("body");

const input = document.createElement("input");
input.type = "text";
input.innerHTML = "";
body.appendChild(input);

const myTextDiv = document.createElement("div");
myTextDiv.className = "myTextDiv";
body.appendChild(myTextDiv);


const sentences = `In ancient Egypt a god was an entity with the head of an animal and a human body. An egyptian god is not to be mistaken with the God that is worshipped in churches and mosque around the globe these days! God is not a god!`;
myTextDiv.innerHTML = sentences;

const words = sentences.split(" ");
console.log(words);


// myTextDiv.innerHTML = words;

body.addEventListener("keyup", function (e){
    let userInput = e.target.value;
    let pattern = new RegExp(userInput, "mi");
    console.log(pattern);

    const searchResults = [];
    for(let elem of words){
        if(elem.match(pattern)){
            searchResults.push(elem);
            myTextDiv.innerHTML = searchResults.join(" ");
        }
    ;}
 });