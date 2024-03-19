const numberA = Number(prompt("Podaj pierwsza liczbe"));
const action = prompt("Podaj operator arytmetyczny (+,-,/,* lub %)")
const numberB = Number(prompt("Podaj druga liczbe"));


let result = null;
let errorMessage = '';

if (isNaN(numberA) || isNaN(numberB)) {
    alert("Podane wartości muszą być liczbami😊.");
} else {
    switch (action) {
        case "+" :
            result = numberA + numberB;
            break;
        case "*" :
            result = numberA * numberB;
            break;
        case "-" :
            result = numberA - numberB;
            break;
        case "%" :
            if (numberB === 0) {
                errorMessage = "nie ma cechy podzielności przez 0, ponieważ żadna liczba nie dzieli się przez 0.";
                break;
            }
            result = numberA % numberB;
            break;
        case "/" :
            if (numberB === 0) {
                errorMessage = "Nie mozna dzielic przez zero.";
                break;
            }
            result = numberA / numberB;
            break;
        default:
            errorMessage("Nieoczekiwany błąd");
    }
    alert(result === null ? errorMessage : result);
}
