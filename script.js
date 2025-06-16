const myBtn = document.getElementById("myBtn");

function changeColor(event) {
  event.target.style.backgroundColor = "red";
  console.log(event)
} 

myBtn.addEventListener("click", changeColor);
