const response = confirm("Czy chcesz zostac mistrzem swiata?");
if (response === true) {
    alert("Gratulacje oby tak dalej!!");
    const hoursWorked = prompt("Ile godzin dziennie cwiczysz?");
    (hoursWorked > 0) ? alert("Gratulacje oby tak dalej! Kropla drazy skale! 🛸") : alert("Odpoczynek tez sie nalezy 😊!")
}
