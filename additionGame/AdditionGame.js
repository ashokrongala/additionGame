let firstElement = document.getElementById("firstNumber")
let secondElement = document.getElementById("secondNumber")
let userInput = document.getElementById("userInput")
let notified = document.getElementById("gameResult")
firstElement.textContent = Math.ceil(Math.random() * 100);
secondElement.textContent = Math.ceil(Math.random() * 100);
notified.textContent = ""

function check() {
    let value = parseInt(userInput.value)
    let total = parseInt(firstElement.textContent) + parseInt(secondElement.textContent);
    if (value === total) {
        notified.textContent = "Congratulations! You got it right."
        notified.style.backgroundColor = "#028a0f"
    } else {
        notified.textContent = "Please Try again !"
        notified.style.backgroundColor = "#1e217c"

    }
}

function restart() {
    firstElement.textContent = Math.ceil(Math.random() * 100);
    secondElement.textContent = Math.ceil(Math.random() * 100);
    notified.textContent = ""
    userInput.value = ""
}