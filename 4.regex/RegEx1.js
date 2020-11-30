// Write a regex to replace all occurrences of Emily with Kelian.

const text = `Emily is probably the best coach I've ever had. I'm an absolute fan of Emily's exercices on regular expressions. 
I wouldn't be as fluent in JavaScript if I had not crossed Emily's path`

const pattern = /emily/igm;

if(text.match(pattern)){
    const newSentence = text.replace(pattern, "Kelian");
    console.log(newSentence);
};