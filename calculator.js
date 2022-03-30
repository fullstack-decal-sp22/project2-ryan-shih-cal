let total = 0;
let strbuffer = "0";
let operator = null;

function calculations() {
    const intBuffer = parseInt(strbuffer);
    if (operator === "+") {
        total += intBuffer;
    }
    if (operator === "x") {
        total *= intBuffer;
    }
    if (operator === "-") {
        total -= intBuffer;
    }
    if (operator === "÷") {
        total /= intBuffer;
    }
}

function makesNumber(value) {
    if (strbuffer === "0") {
        strbuffer = value;
    } else {
        strbuffer += value;
    }
}

function makesSymbol(symbol) {
    if (symbol === "C") {
        total = 0;
        strbuffer = "0";
        operator = null;
    } else if (symbol === "←") {
        strbuffer = strbuffer.substring(0, strbuffer.length - 1);
        if (strbuffer.length == 0) {
            strbuffer = "0";
        }
    } else if (symbol === "=") {
        if (operator == null) {
            return;
        } else {
            calculations();
            strbuffer = total.toString();
        }
    } else {
        const intBuffer = parseInt(strbuffer);
        total = intBuffer;
        operator = symbol;
        strbuffer = "0";
    }
}

function setListeners() {
    let buttons = document.querySelectorAll(".buttons");
    for (item of buttons) {
        item.addEventListener("click", function(text) { 
            buttonClicked(this.innerHTML);
        });
    }
}

setListeners();

function buttonClicked(valueClicked) {
    if (isNaN(parseInt(valueClicked))) { 
        makesSymbol(valueClicked);
    } else {
        makesNumber(valueClicked);
    }
    const result = document.querySelector(".result-screen");
    result.innerHTML = strbuffer;
}