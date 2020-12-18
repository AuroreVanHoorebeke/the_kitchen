/*AIM:
Create a <div> with a className apple (make a 50px-radius red circle, for example). When you click on it it should fall 400px down on the page, accelarating 1px every 100 milisecond. Once the apple has fallen down 400px, the function should stop. Use the arrow keys to move the apple from left to right. Create a button to reset the position of the apple on top of the screen.
*/

const body = document.querySelector("body");
const main = document.createElement("main");
main.style.border = "1px solid black";
main.style.height = "400px";
main.style.width = "400px";

const reset = document.createElement("button");
reset.innerHTML = "reset";
body.appendChild(reset);

body.appendChild(main);
const appleDiv = document.createElement("div");
appleDiv.className = "apple";
main.appendChild(appleDiv);

let apple = {
    x: 0,
    y: 0,
    a: 0
}

function gravity(){
    if(apple.y < 350){
        apple.a += 1;
        apple.y += apple.a;
        appleDiv.style.top = `${apple.y}px`
        setTimeout(gravity, 100)
    }
}

function resetPos(interval){
    apple.x= 0;
    apple.y= 0;
    apple.a= 0;
    appleDiv.style.top = `${apple.y}px`
    appleDiv.style.left = `${apple.x}px`
}

function move(e){
    if(apple.x < 350 && apple.x > 0){

        switch(e.key){
        
            case "ArrowLeft":
            apple.x -= 5;
            appleDiv.style.left = `${apple.x}px`
            break

            case "ArrowRight":
            apple.x += 5;
            appleDiv.style.left = `${apple.x}px`
            break

        }
    } else if(apple.x == 350) {

        switch(e.key){
            case "ArrowRight":
            apple.x += 0;

            appleDiv.style.left = `${apple.x}px`
            break;

            case "ArrowLeft":
            apple.x -= 5;
            appleDiv.style.left = `${apple.x}px`
            break;
        }
    } else {
        if(apple.x == 0){
            switch(e.key){
                
                case "ArrowRight":
                apple.x += 5;
                appleDiv.style.left = `${apple.x}px`
                break;

                case "ArrowLeft":
                apple.x -= 0;
                appleDiv.style.left = `${apple.x}px`
                break;
            }
        }
    }
}

document.addEventListener("keydown", move);

appleDiv.addEventListener("click", gravity);

reset.addEventListener("click", resetPos);





//TODO: Faire bouger la boule, posApple.left -= 1 / += 1 marche pas. 