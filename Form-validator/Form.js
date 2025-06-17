const form = document.getElementById("registerForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Stop form from refreshing the page

  if (username.value === "" || email.value === "") {
    message.textContent = "Please fill in all fields.";
    message.style.color = "orange";
    
  } else {
    message.textContent = "Form submitted!";
    message.style.color = "green";
  }
})