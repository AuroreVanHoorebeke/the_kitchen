// Replace occurrences of "god" with "deity", "God" with a captial letter cannot be modified.
const text = `In ancient Egypt a god was an entity with the head of an animal and a human body. An egyptian god is not to be mistaken with the God that is worshipped in churches and mosque around the globe these days! God is not a god!`;

const pattern = /god/gm;

if(text.match(pattern)){
    const newText = text.replace(pattern, "deity");
    console.log(newText);
};