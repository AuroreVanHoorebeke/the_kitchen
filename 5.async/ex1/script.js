const body = document.querySelector("body");

const button = document.createElement("button");
button.textContent = "click me!";
body.appendChild(button);
let pattern = /\-\s(\w\s?.*)+/gm;

button.addEventListener("click", () => {
    const request = fetch("becode.txt");
    console.log('Making the request:', request);

    const response = request.then(response => response.text());
    console.log('Treating the response', response);

    response.then(text => {
        console.log('Response', response);
        let ul = document.createElement("ul");
        ul.style.listStyleType = "none";
        document.body.appendChild(ul);

        let resultPattern = text.match(pattern);
        console.log(resultPattern);

        for(let element of resultPattern){
        console.log('found pattern!')

        let li = document.createElement("li");
        li.textContent=element;
        ul.appendChild(li)
        }

    });
    request.catch(error=>{
        console.log('There was an error!', error
    )});
})