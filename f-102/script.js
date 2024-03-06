//
// const name = prompt("Please enter your name", "Andrzej");
//
// const result = confirm("Are you sure you want to delete this");
//
//
// alert(result);
//
//
//
//
// alert(`hellow! ${name}`);
const themeChanger = document.getElementById("theme-changer");
const body = document.body;

themeChanger.addEventListener('click', () => {
    console.log("theme-changer clicked!");
    document.body.classList.toggle('lightMode');
})
