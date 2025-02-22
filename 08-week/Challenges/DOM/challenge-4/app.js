/**
 * Write your challenge solution here
 */
console.log("hello");
let total = 0;
let completed = 0;

// ["keydown", "click"].forEach((eventType) => {
document.getElementById("addButton").addEventListener("click", () => {
  const val = document.getElementById("taskInput");

  if (val.value) {
    document.getElementsByClassName("empty-list")[0].innerHTML = "";
    const list = document.createElement("li");
    list.className = "task-item ";
    list.innerHTML = `
        <span><input id="check" class="complete-checkbox" type="checkbox"></span>
        <p class=" task-text">${val.value}</p>
        <span><button id="del" class="delete-button">Delete</button></span>
        
        
        `;
    console.log(list);
    total += 1;
    document.getElementById("taskList").appendChild(list);
    val.value = "";
    document.getElementById("totalTasks").textContent = `Total tasks: ${total}`;
    
  }
});
// })


//strike through complted text
document.getElementById("taskList").addEventListener("change", (event) => {
  if (event.target.classList.contains("complete-checkbox")) {
    event.target.closest(".task-item").classList.toggle("completed");
    if (event.target.checked) {
        completed += 1; // Increase count when checked
      } else {
        completed -= 1; // Decrease count when unchecked
      }
}
    document.getElementById(
        "completedTasks"
    ).textContent = `Completed: ${completed}`;

});


//deleting a task
document.getElementById("taskList").addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-button")) {
   const task= event.target.closest(".task-item")
    if (task.querySelector(".complete-checkbox").checked) {
      completed -= 1;
      document.getElementById("completedTasks").textContent = `Completed: ${completed}`;
    }
    task.remove();
    total-=1;
    document.getElementById("totalTasks").textContent = `Total tasks: ${total}`;
    
  }
});
