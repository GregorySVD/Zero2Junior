const numberA = Number(prompt("Podaj pierwsza liczbe"));
const action = prompt("Podaj operator arytmetyczny (+,-,/,* lub %)")
const numberB = Number(prompt("Podaj druga liczbe"));

//MATHEMATICS OPERATIONS
function add(numberA, numberB) {
    return numberA + numberB;
}

function subtract(numberA, numberB) {
    return numberA - numberB;
}

function multiply(numberA, numberB) {
    return numberA * numberB;
}

function divide(numberA, numberB) {
    if (numberB === 0) {
        return "Nie mozna dzielic przez zero.";
    }
    return numberA / numberB;
}

function modulo(numberA, numberB) {
    if (numberB === 0) {
        return "nie ma cechy podzielności przez 0, ponieważ żadna liczba nie dzieli się przez 0.";
    }
    return numberA % numberB;
}
//----------------------------------------------------------------

let result = 0;

if (isNaN(numberA) || isNaN(numberB)) {
    alert("Podane wartości muszą być liczbami😊.");
} else {
    switch (action) {
        case "+" :
            result = add(numberA, numberB);
            break;
        case "*" :
            result = multiply(numberA, numberB);
            break;
        case "-" :
            result = subtract(numberA, numberB);
            break;
        case "%" :
            result = modulo(numberA, numberB);
            break;
        case "/" :
            result = divide(numberA, numberB);
            break;
        default:
            result = "Nieoczekiwany błąd";
    }
    alert(result);
}
