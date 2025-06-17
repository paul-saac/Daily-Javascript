const options = document.querySelectorAll(".option");
const result = document.getElementById("result");

const correctAnswer = "Paris";

options.forEach(button => {
  button.addEventListener("click", function () {
    const selectedAnswer = button.textContent;

    if (selectedAnswer === correctAnswer) {
      result.textContent = "✅ Correct!";
      result.style.color = "green";
    } else {
      result.textContent = "❌ Wrong. Try again.";
      result.style.color = "red";
    }
  });
});