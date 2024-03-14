const numberA = Number(prompt("Podaj pierwsza liczbe"));
const action = prompt("Podaj operator arytmetyczny (+,-,/,* lub %)")
const numberB = Number(prompt("Podaj druga liczbe"));


let result;
let errorMessage = '';
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
            errorMessage = "nie ma cechy podzielności przez 0, ponieważ żadna liczba nie dzieli się przez 0."
            result = null;
            break;
        }
        result = numberA % numberB;
        break;
    case "/" :
        if (numberB === 0) {
            errorMessage ="Nie mozna dzielic przez zero.";
            result = null;
            break;
        }
        result = numberA / numberB;
        break;
    default:
        result = null;
        errorMessage("Podane wartosci musza byc liczbami")

}
alert(!result ?  errorMessage : result);
