let input = document.getElementById("display");
let buttons = document.getElementsByTagName("button");
for (let i = 0; i < buttons.length; i++){
    if (buttons[i].textContent != "DEL" && buttons[i].textContent != "AC" && buttons[i].textContent != "=") {
        buttons[i].onclick = function () {
            input.value = input.value + buttons[i].textContent;
        }
    }
}
let newInpu;
let equalButton = document.getElementById("id-eq");
equalButton.onclick = function () {
    newInpu = '';
    for (let i = 0; i < `${input.value}`.length; i++){
        if (`${input.value}`[i] === "×") {
            newInpu += "*";
        }
        else {
            newInpu += `${input.value}`[i];
        }
    }
    try {
        if (eval(newInpu) == "Infinity") {
            input.value = "Can't divide by 0."
        }
        else {
            input.value = eval(newInpu);
        }
        
    }
    catch(err) {
        input.value = "What ?";
    }
}

let AcButton = document.getElementById("id-ac");
AcButton.onclick = function () {
    input.value = "";
}

let DelButton = document.getElementById("id-rem");
DelButton.onclick = function () {
    let currentText = input.value;
    if (currentText.length > 0) {
        currentText = currentText.slice(0, -1);
        input.value = currentText;
    }
}


