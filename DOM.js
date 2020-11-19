const ul = document.querySelector("ul");

let children = ul.childNodes;

for (let child of children) {
    if (child.textContent == "Fast and Furious") {
        const firstChild = ul.firstElementChild;
        ul.insertBefore(child, firstChild);
        child.className = "important";
    }

    child.addEventListener("click", function(){alert(child.textContent);})
}