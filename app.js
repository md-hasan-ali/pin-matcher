function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}
function genaratePin() {
    const pin = getPin();
    // display pin 
    document.getElementById('display-pin').value = pin;
}

// keypad number 
document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const inputNumber = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            inputNumber.value = '';
        }
    }
    else {
        const prevousCalc = inputNumber.value;
        const newCalc = prevousCalc + number;
        inputNumber.value = newCalc;
    }
});

function errorMessage() {
    const displayPin = document.getElementById('display-pin').value;
    const typeNumber = document.getElementById('typed-numbers').value;

    const success = document.getElementById('success-message');
    const error = document.getElementById('error-message');

    if (displayPin == typeNumber) {
        error.style.display = 'none';
        success.style.display = 'block';
    } else {
        success.style.display = 'none';
        error.style.display = 'block';
    }
}

