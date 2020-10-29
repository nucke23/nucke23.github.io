let img = document.getElementById("gallery");

img.onclick = () => {
    let src = img.getAttribute("src");

    let index = number(src);
    index++;
    index = index%8;
    if (!index)
        index = 1;
    src = `images/00${index}.png`;

    img.setAttribute("src", src);
    console.log("the source now is " + src);
};

function number(str) {
    for (let c of str) {
        if (c != '0') {
            let char = parseInt(c);
            if (!isNaN(char))
                return char;
        }
    }
}


let button = document.querySelector("button");
let h2 = document.querySelector("h2");

function setUserName() {
    let name = prompt("Please enter your name!");
    if (!name)
        setUserName();
    else {
        localStorage.setItem("name", name);
        h2.textContent = "Welcome " + name + ", it's good to see you back."
    }
}

window.onload = () => {
    if (!localStorage.getItem("name"))
        setUserName();
    else {
        h2.textContent = "Welcome " + localStorage.getItem("name") + ", it's good to see you back."
    }
}

button.onclick = () => setUserName();