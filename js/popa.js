const paragraph = document.querySelector('.test-text')
paragraph.innerHTML = "Привет, <strong>мир!</strong> Меня зовут <em>Паша.</em>"
paragraph.style.backgroundColor = "lightblue"
paragraph.style.color = "blue"
paragraph.style.border = "2px solid blue"
paragraph.style.fontSize = "24px"

const emailInput = document.getElementById("email");
emailInput.value = "mail@mail.ru";
emailInput.disabled = true;
const rememberCheckbox = document.getElementById("remember");
rememberCheckbox.checked = true;
const submitButton = document.getElementById("btn");
submitButton.textContent = "Войти";

const link = document.createElement("a")
link.textContent = "ссылка на мидис"
link.href = "https://midis.ru/"

link.target = "_blank"
link.style.padding = "10px"
link.style.color = "blue"
link.style.textDecoration = "none"

link.addEventListener("mouseenter", () => {
link.style.color = "white";          
link.style.backgroundColor = "blue"
})
link.addEventListener("mouseleave", () => {
link.style.color = "blue";                  
link.style.backgroundColor = "transparent"; 
})
document.body.appendChild(link)

