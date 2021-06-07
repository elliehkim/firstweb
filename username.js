const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greeting");

function printName(text) {
    form.classList.remove ("showing");
    greeting.classList.add("showing");
    greeting.innerText = `Hello ${text}`
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue=input.value;
    printName(currentValue);
}

function askName(){
    form.classList.add("showing");
    form.addEventListener("submit", handleSubmit);
}

askName();