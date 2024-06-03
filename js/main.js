console.log('main loaded');


//functie voor het showen van de getallen als er op de knop wordt gedrukt
function showOnDisplay(value) {
    document.querySelector('.input-display').value += value;
}

//functie voor het legen van de display
function clearDisplay() {
    document.querySelector('.input-display').value = '';
}

//functei voor het deleten van 1 cijfer
function deleteNumber() {
    const display = document.querySelector('.input-display');
    display.value = display.value.toString().slice(0, -1);
}

//functie voor het genereren van de uitkomst van de som en checken of de som wel goed is
function result() {
    try {
        const result = eval(document.querySelector('.input-display').value);
        document.querySelector('.input-display').value = result;
    } catch (error) {
        document.querySelector('.input-display').value = 'Error';
    }
}