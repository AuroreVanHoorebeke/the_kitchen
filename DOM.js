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

// Duplicate function
document.body.addEventListener("keyup", function (e) {
        if (e.key == "d") {
            const fnf = ul.firstElementChild;
            const fnfClone = fnf.cloneNode(true);
            ul.insertBefore(fnfClone, fnf);
            console.log("I don’t have friends, I have family.");
        };
    });

// important-normal franchises
const newDiv = document.createElement("div");
body.insertBefore(newDiv, ul);

const select = document.createElement("select");
newDiv.appendChild(select);
const chooseFr = document.createElement("option");
chooseFr.textContent = "Select a franchise type";
select.appendChild(chooseFr);
const impFr = document.createElement("option");
impFr.textContent = "Important franchises";
select.appendChild(impFr);
const normFr = document.createElement("option");
normFr.textContent = "Normal franchises";
select.appendChild(normFr);


select.addEventListener("change", function (e) {
    const allLi = document.querySelectorAll("li");

    for (let elem of allLi) {

        if (select.selectedIndex == "0") {
            elem.style.visibility = "hidden";
        }
        //if important franchise, normal franchises are hidden
        if (select.selectedIndex == "1") {
            if (elem.className == "important") {
                elem.style.visibility = "visible";
            } else {
                elem.style.visibility = "hidden";
            }
        }

        //if normal franchise, important franchises are hidden
        if (select.selectedIndex == "2") {
            if (elem.className !== "important") {
                elem.style.visibility = "visible";
            } else {
                elem.style.visibility = "hidden";
            }
        }
    }
});