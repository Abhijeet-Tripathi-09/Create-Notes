let button = document.querySelector(".btn");
let notes_container = document.querySelector(".notes-container");
let input_box = document.querySelector(".input-box");

let box = 3

function disable(){
    
    
    if(box < 5){
        notes_container.classList.remove("disable")
        box = 7
    }else {
        let inputBox = document.createElement("p");
        let i = document.createElement("i");
        inputBox.className = "input-box";
        inputBox.setAttribute("contenteditable", "true");
        inputBox.setAttribute("onclick", "deleteed");
        i.className = "fa-solid fa-trash-can"
        notes_container.appendChild(inputBox);
        notes_container.appendChild(i);
    }
}

function deleted(){
    if (box = 3){
        input_box.innerHTML = ""
    }
}
