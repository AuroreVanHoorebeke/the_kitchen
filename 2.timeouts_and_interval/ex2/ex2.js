/*AIM:
Write a function that displays every second that has passed on the page since it was opened. -> interval 
The display should be refreshed every second. If 60 seconds are elapsed, write "a minute has passed", then "2 minutes have passed" (for 120 seconds and more), etc.*/

const body = document.querySelector("body");

const paragraph = document.createElement("p");
body.appendChild(paragraph);
let sec = 0;
let min = 0;

window.addEventListener("load", launchTimer());

function launchTimer() {
    setInterval(timer, 1000);

    function timer() {
        console.log(sec);
        paragraph.textContent = `${min} minutes and ${sec} seconds have passed since the page was opened`;
        sec++;
        if(sec == 60){
            min++
            sec = 0;
        }
    }
}
