const myBtn = document.getElementById("clickBtn");
const countCounter = document.getElementById("count");

let count = 0;

myBtn.addEventListener("click", () => {
    count++;
    countCounter.textContent = count;
});