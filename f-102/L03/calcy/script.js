const numberA = Number(prompt("Podaj pierwsza liczbe"));
const action = prompt("Podaj operator arytmetyczny (+,-,/,* lub %)");
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

function chooseAction() {
    return prompt("Podaj operator arytmetyczny (+,-,/,* lub %). Jeżeli chcesz zakończyć działanie" +
        " kalkulatora zostaw puste pole i kliknij OK/nacisniej ENTER.");

}

//----------------------------------------------------------------

let result = 0;
let anotherLoop = true;

function calcy(action, firstNumber, secondNumber) {
    switch (action) {
        case "+" :
            result = add(firstNumber, secondNumber);
            break;
        case "*" :
            result = multiply(firstNumber, secondNumber);
            break;
        case "-" :
            result = subtract(firstNumber, secondNumber);
            break;
        case "%" :
            result = modulo(firstNumber, secondNumber);
            break;
        case "/" :
            result = divide(firstNumber, secondNumber);
            break;
        default:
            result = "Nieoczekiwany błąd";
            break;
    }
    return result;
}

if (isNaN(numberA) || isNaN(numberB)) {
    alert("Podane wartości muszą być liczbami😊.");
} else {
    alert(calcy(action, numberA, numberB));
    if (result === "Nieoczekiwany błąd") {
        anotherLoop = false;
    }
    while (anotherLoop) {
        let anotherAction = chooseAction();
        if (anotherAction === "") {
            alert("Dziekujemy za wspólne obliczenia 🔝✅");
            break;
        }
        const numberC = Number(prompt("Podaj drugą liczbę."));

        if (isNaN(numberC) || isNaN(result)) {
            break;
        }
        alert(calcy(anotherAction, result, numberC));
    }
}
