const body = document.querySelector("body");

//Exercise 1
const ex1 = document.createElement("div");
ex1.className = "ex1";
body.appendChild(ex1);

const title1 = document.createElement("h1");
title1.textContent = "Exercise 1"
ex1.appendChild(title1);

const clock = document.createElement("div");
clock.className = "clock";
ex1.appendChild(clock);

let cities = [
    {
    city: "Brussels",
    offset: 1
    },
    {
    city: "Anchorage",
    offset: -9
    },
    {
    city: "Reykjavik",
    offset: 0
    },
    {
    city: "Saint Petersburg",
    offset: 3
    }];

function currentTime(){
    clock.innerHTML = "";

for(elem of cities){
    const dateOffset = calcTime(elem.offset);

    // body.innerHTML = "The time in "+ elem.name + " is " + dateOffset.toLocaleString();
    console.log("The time in "+ elem.city + " is " + dateOffset.toLocaleString());

    const timeDiv = document.createElement("div");
    timeDiv.className = elem.city;
    timeDiv.innerHTML = "The time in "+ elem.city + " is " + dateOffset.toLocaleString();
    clock.appendChild(timeDiv);

}

    function calcTime(offset){
        //1- Finding out what time it is in ms
        let date = new Date();
        console.log("local date: " + date);
        localTime = date.getTime(); // in ms
        console.log("localTime (ms): " + localTime);

        //2- get local timezone. Default: in minutes. Now: transformed in miliseconds.
        let localOffset = date.getTimezoneOffset()*60000;
        console.log("localOffset(ms): "+ localOffset);

        //3- get current utc time

        let utcTime = localTime + localOffset;
        console.log("local utc time (ms, from 1/1/70): "+utcTime);

        //5- change value to a readable value
        newDate = new Date(utcTime + (3600000 * offset));
        console.log("local time: " + newDate.toLocaleString()+ "<br/>");

        return newDate
    };
};

setInterval(currentTime, 1000);

// Exercise 2
y