/**
 * Write your challenge solution here
 */
console.log("hello");
let total = 0;
let completed = 0;

// ["keydown", "click"].forEach((eventType) => {
// document.getElementById("addButton").addEventListener("click", () => {
//   const val = document.getElementById("taskInput");

//   if (val.value) {
//     document.getElementsByClassName("empty-list")[0].innerHTML = "";
//     const list = document.createElement("li");
//     list.className = "task-item";
//     list.innerHTML = `
//         <span><input id="check" class="complete-checkbox" type="checkbox"></span>
//         <p class=" task-text">${val.value}</p>
//         <span><button id="del" class="delete-button">Delete</button></span>
//         `;
//     console.log(list);
//     total += 1;
//     document.getElementById("taskList").appendChild(list);
//     val.value = "";
//     document.getElementById("totalTasks").textContent = `Total tasks: ${total}`;

//   }
// });
// // })

// //strike through complted text
// document.getElementById("taskList").addEventListener("change", (event) => {
//   if (event.target.classList.contains("complete-checkbox")) {
//     event.target.closest(".task-item").classList.toggle("completed");
//     if (event.target.checked) {
//         completed += 1;
//       } else {
//         completed -= 1;
//       }
// }
//     document.getElementById(
//         "completedTasks"
//     ).textContent = `Completed: ${completed}`;

// });

// //deleting a task
// document.getElementById("taskList").addEventListener("click", (event) => {
//   if (event.target.classList.contains("delete-button")) {
//    const task= event.target.closest(".task-item")
//     if (task.querySelector(".complete-checkbox").checked) {
//       completed -= 1;
//       document.getElementById("completedTasks").textContent = `Completed: ${completed}`;
//     }
//     task.remove();
//     total-=1;
//     document.getElementById("totalTasks").textContent = `Total tasks: ${total}`;

//   }
// });


//By own

//add task
const taskValue = document.getElementById("taskInput");
document.getElementById("addButton").addEventListener("click", (e) => {
  if (taskValue.value.length <= 0) return;
  const list = document.createElement("li");
  list.innerHTML = `
  <li class="task-item">
  
  <input class="complete-checkbox" type="checkbox" />
 
  <span class="task-text">${taskValue.value}</span>
  <span > <button class="delete-button">Delete</button></span>
  </li>
  `;
  if (total === 0) {
    document.querySelector(".empty-list").remove();
  }
  document.getElementById("taskList").appendChild(list);
  taskValue.value = "";
  total++;
 updateTotalCompleted();
});


//strike through

  document.querySelector("#taskList").addEventListener("change",(e)=>{
    if(e.target.classList.contains("complete-checkbox")){
      e.target.closest(".task-item").classList.toggle("completed");
      if (e.target.checked) {
        completed++;
      }else{
        completed--;
      }
    }
    console.log(total,completed);
    updateTotalCompleted()
  })

//deleteing item
// if(total>0){

  document.getElementById("taskList").addEventListener("click",(e)=>{
    if(e.target.classList.contains("delete-button")){
     const task= e.target.closest(".task-item")
     if(task.querySelector(".complete-checkbox").checked){
      completed--;
     }
     total--;
     task.remove();
     updateTotalCompleted();
    }
    })
    
  // }

  function updateTotalCompleted(){
    document.getElementById("totalTasks").innerText=`Total tasks: ${total}`
    document.getElementById("completedTasks").innerText=`Completed: ${completed}`
  }