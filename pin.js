function getPin() {
    const pinNumber = Math.round(Math.random() * 10000);
    const pinStirg = pinNumber + '';
    if (pinStirg.length == 4) {
        return pinNumber;
    }
    else {
        return getPin();
    }
}

function genaratePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const inputNumber = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if(number == 'C') {
            inputNumber.value = '';
        }
    }
    else {
        const previousNumber = inputNumber.value;
        const newNumber = previousNumber + number;
        inputNumber.value = newNumber;
    }
})

function errorMessage() {
    const displayPin =  document.getElementById('display-pin').value;
    const typeNumber = document.getElementById('typed-numbers').value;
    
    const error = document.getElementById('error-message');
    const success = document.getElementById('success-message');

    if(displayPin == typeNumber) {
        error.style.display = 'none';
        success.style.display = 'block';
    }
    else {
        success.style.display = 'none';
        error.style.display = 'block';
    }
}