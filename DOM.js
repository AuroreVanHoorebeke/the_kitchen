const body = document.querySelector("body");
const ul = document.querySelector("ul");

let childrenList = ul.childNodes;

let i = 0;

for (let child of childrenList) {
    //Reordering the list
    if (child.textContent == "Fast and Furious") {
        const firstChild = ul.firstElementChild;
        ul.insertBefore(child, firstChild);
        child.className = "important";
    }

    //Alerts
    child.addEventListener("click", function () {

        if (child.textContent == "Fast and Furious") {
            alert("The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.")
        } else {
            alert(child.textContent);
        };
    })

    //Deletes duplicates in the list
    for (j = i + 1; j < childrenList.length; j++) {
        if (child.isEqualNode(childrenList[j])) {
            ul.removeChild(childrenList[j]);
        }
    }

    i++;

    //Shuffling the list on keyup
    function randomize() {
        const oldUl = document.querySelector('ul')
        const newUl = document.createElement('ul')

        newUl.appendChild(oldUl.children[0])

        for (let i = 0; oldUl.children.length > 0; i++) {
            const oldLi = oldUl.children
            const randomIndex = Math.floor(oldLi.length * Math.random())
            newUl.appendChild(oldLi[randomIndex])
        }

        document.body.removeChild(oldUl)
        document.body.appendChild(newUl)

    }

    document.body.addEventListener("keyup", function (e) {
        if (e.key == "r") {
            randomize()
        };
    })



}

// important-normal franchises
    const newDiv = document.createElement("div");
    body.insertBefore(newDiv, ul);
