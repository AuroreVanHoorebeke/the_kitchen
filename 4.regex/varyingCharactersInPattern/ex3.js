// 2 regex patterns:
// One to check if blog post starts with one greeting included in this group: Hello, Hi, Hey, Hej,Greetings.
// One to check if there are at least two ending formulas: Thank you, Thanks, Merci, Cheers, I am grateful.

//---testGreet cases---//
// Hi! - correct
// Whoop, Hello! - incorrect

// testEnding cases
// thanks, merci - correct
// I am grateful, thanks - correct
// thank you - false
// Thanks - false

let greetPattern = /^((h(e(llo|y|j)|i)|greetings)){1}/img;

let endingPattern = /((thank(\syou|s)|merci|cheers|I\sam\sgrateful)(,\s)?){2,}$/im;