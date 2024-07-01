let currentDisplay = '';

function clearDisplay() {
    currentDisplay = '';
    document.querySelector('#display').value = currentDisplay;
}

function deleteLastCharacter() {
    currentDisplay = currentDisplay.slice(0, -1);
    document.querySelector('#display').value = currentDisplay;
}

function appendToDisplay(value) {
    currentDisplay += value;
    document.querySelector('#display').value = currentDisplay;
}

function calculateResult() {
    try {
        let result = eval(currentDisplay);
        currentDisplay = result.toString();
        document.querySelector('#display').value = currentDisplay;
    } catch (error) {
        document.querySelector('#display').value = 'Error';
        currentDisplay = '';
    }
}

document.querySelector('#display').value = currentDisplay;
