const ul = document.querySelector("ul");

let children = ul.childNodes;

for (let child of children) {
    if (child.nodeType === 1) {
        console.log(child);
    }
}