/*AIM: 
Using timestamps, find how many days have passed since the date of your birth. Feeling old, yet?
Write a function to find how many days have passed since any point in time (after 1970).*/

const sinceBirth = document.querySelector(".sinceBirth");
const sinceUndefined = document.querySelector(".sinceUndefined");

let now = new Date();
let nowDate = now/(1000*60*60*24)

console.log(now);
function getDaysSinceBirth(){
    let birthDate =  new Date('1998-01-13')
    const sinceBirthTime = Math.floor(nowDate - (birthDate.getTime()/(1000*60*60*24)));

    sinceBirth.textContent = `${sinceBirthTime} days have passed since my birth.`
}
function getDaysSinceUndefined(){
    // Console Version
    // const readlineSync = require('readline-sync');
    // console.log("We are going to calculate how many days have passed since a date of your choice in the past.");
    // let dayUser = question.readlineSync("Enter the day (e.g. 24: ");
    // let monthUser = question.readlineSync("Enter the month (e.g. 12): ");
    // let yearUser = question.readlineSync("Enter the year (e.g. 2004): ");

    //Web version
    alert("We are going to calculate how many days have passed since a date of your choice in the past.");
    let dayUser = Number(prompt("Enter the day (e.g. 24: "));
    let monthUser = Number(prompt("Enter the month (e.g. 12): "));
    let yearUser = Number(prompt("Enter the year (e.g. 2004): "));

    
    let undefinedDate =  new Date(`${yearUser}-${monthUser}-${dayUser}`);
    const sinceUndefinedTime = Math.floor(nowDate - (undefinedDate.getTime()/(1000*60*60*24)));

    sinceUndefined.textContent = `${sinceUndefinedTime} days have passed since your date.`
}

getDaysSinceBirth();
getDaysSinceUndefined();
