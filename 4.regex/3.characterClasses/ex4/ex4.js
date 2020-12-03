//BeKnit
//create a frontend registration form (name, email, password validation)
const body = document.querySelector("body");

const main = document.createElement("main");
body.appendChild(main);

const titleDiv = document.createElement("div");
titleDiv.className = "titleDiv";
main.appendChild(titleDiv);

const mainTitle = document.createElement("h1");
mainTitle.className = "mainTitle";
mainTitle.innerHTML = "BeKnit";
titleDiv.appendChild(mainTitle);

const mainSubTitle = document.createElement("h2");
mainSubTitle.className = "mainSubTitle";
mainSubTitle.innerHTML = "In knitting we trust";
titleDiv.appendChild(mainSubTitle);

const contentDiv = document.createElement("contentDiv");
contentDiv.className = "contentDiv";
main.appendChild(contentDiv)

//_____Input_____
const inputsDiv = document.createElement("div");
inputsDiv.className = "inputsDiv";
contentDiv.appendChild(inputsDiv);

//-fname-//
const fnameDiv = document.createElement("div");
fnameDiv.className = "fnameDiv";
inputsDiv.appendChild(fnameDiv);

const fnameLabel = document.createElement("label");
fnameLabel.for = "fnameField";
fnameLabel.className = "fnameLabel";
fnameLabel.innerHTML = "First name";
fnameDiv.appendChild(fnameLabel);

const fnameField = document.createElement("input");
fnameField.type = "text";
fnameField.id = "fnameField";
fnameField.innerHTML = "";
fnameDiv.appendChild(fnameField);

//--email--//
const emailDiv = document.createElement("div");
emailDiv.className = "emailDiv";
inputsDiv.appendChild(emailDiv);

const emailLabel = document.createElement("label");
emailLabel.for = "emailField";
emailLabel.className = "emailLabel";
emailLabel.innerHTML = "Email";
emailDiv.appendChild(emailLabel);

const emailField = document.createElement("input");
emailField.type = "text";
emailField.id = "emailField";
emailField.innerHTML = "";
emailDiv.appendChild(emailField);

//--pwd--//
const pwdDiv = document.createElement("div");
pwdDiv.className = "pwdDiv";
inputsDiv.appendChild(pwdDiv);

const pwdLabel = document.createElement("label");
pwdLabel.for = "pwdField";
pwdLabel.className = "pwdLabel";
pwdLabel.innerHTML = "Password";
pwdDiv.appendChild(pwdLabel);

const pwdField = document.createElement("input");
pwdField.type = "text";
pwdField.id = "pwdField";
pwdField.innerHTML = "";
pwdDiv.appendChild(pwdField);

//_____Completion______
const completionDiv = document.createElement("div");
completionDiv.className = "completionDiv";
contentDiv.appendChild(completionDiv);

const titleCompl = document.createElement("p");
titleCompl.className = "titleCompl";
titleCompl.innerHTML = "Profile Completion";
completionDiv.appendChild(titleCompl);

const numCompl = document.createElement("p");
numCompl.className = "numCompl";
numCompl.innerHTML = "";
completionDiv.appendChild(numCompl);

//____Validation____//

//-*-*-First name-*-*-//
function matchFName(){

let firstName = fnameField.value;
const fnamePattern = /^([A-Z]{1})([a-z])+(\-[A-Z]+[a-z]+)?$/g;

const patterns = [fnamePattern, fnameSignPattern];
console.log("Avant fonction consoleChecker()");
consoleChecker(tests, patterns);

    fnameField.addEventListener("change", function fnameCheck(){
        if(firstName.match(fnamePattern)){
        console.log('fname valid!');
        }else{
            console.log('fname not valid!')
        }
    });
};