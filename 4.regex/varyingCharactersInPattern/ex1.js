// change occurrences of clé/clef by an emoji 🔑

const sentence = `In french the word "key" used to be written "clef", but now it is written with an accent : "clé".
You might find medieval stories, such as the "clefs sanglantes de barbe bleue" and more recents ones "les clés du mystère"`

const pattern = /cl(é(s){0,1}|ef(s){0,1})/gm;

if(sentence.match(pattern)){
    let newSentence = sentence.replace(pattern, "🔑");
    console.log(newSentence);
};