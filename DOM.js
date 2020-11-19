const ul = document.querySelector("ul");

let children = ul.childNodes;

let i = 0;

for (let child of children) {
    if (child.textContent == "Fast and Furious") {
        const firstChild = ul.firstElementChild;
        ul.insertBefore(child, firstChild);
        child.className = "important";
    }

    child.addEventListener("click", function () {

        if (child.textContent == "Fast and Furious") {
            alert("The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.")
        } else {
            alert(child.textContent);
        };
    })

    for (j = i + 1; j < children.length; j++) {
        if (child.isEqualNode(children[j])) {
            ul.removeChild(children[j]);
        }
    }

    i++;
}
