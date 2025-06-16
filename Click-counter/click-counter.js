const input = document.getElementById("todoInput")
const addButton = document.getElementById("addBtn")
const list = document.getElementById("todoList")

addButton.addEventListener("click", () => {
  const task = input.value;

  if (task !== "") {
      const li = document.createElement("li");
      li.textContent = task;
      list.appendChild(li);
      input.value = ""; // Clear input
  } else {
     alert("Please enter a task.");
  }
  
});