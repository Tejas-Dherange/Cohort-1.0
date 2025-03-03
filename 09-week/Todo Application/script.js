console.log("hello");
const container = document.querySelector(".container");
const todoContainer = document.querySelector(".taskContainer");

//add and remove flying class
function addFlying(element) {
  element.addEventListener("dragstart", (e) => {
    element.classList.add("flying");
  });
  element.addEventListener("dragend", (e) => {
    element.classList.remove("flying");
  });
}

//function for adding elemt on dragover
function OnDragAdd(element) {
  element.addEventListener("dragover", (e) => {
    const flying = document.querySelector(".flying");
    console.log(element.closest(".card").id);
    let key = element.closest(".card").id;
    element.appendChild(flying);
    get();
    console.log("Done");
  });
  // localStorage.getItem()
}

//getting current time
function getTime() {
  const d = new Date();

  const timeStr = d.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
  return timeStr;
}

//getting all tasks here
const allItems = document.querySelectorAll(".item");
allItems.forEach(addFlying);

document.querySelectorAll(".card").forEach((card) => {
  OnDragAdd(card.querySelector(".taskContainer"));
});

//fetch tasks
function showTasks() {
  console.log(Object.keys(localStorage));

  // for (let i = 0; i < localStorage.length; i++) {
  Object.keys(localStorage).map((key) => {
    console.log(key.split("m"));
    const task = document.createElement("p");
    task.setAttribute("draggable", "true");
    task.setAttribute("class", "flexfortask");
    task.setAttribute("id", `${key}`);
    addFlying(task);
    task.innerHTML = `
    <div class="flexforContent">
     <span class="task-text"> ${localStorage.getItem(key)} </span>
     <div class="editDeleteButtons">
     <button id="editBtn">edit </button>
     <button id="deleteBtn"> del</button>
     </div>
     </div>
      
      ${key}
      `;
    if (key.split("k")[1] === "todo") {
      let element = key.split("k")[1] + "Container";
      console.log(element);

      document.querySelector(`#${element}`).appendChild(task);

      get();
    }
  });
}

showTasks();
// localStorage.clear()

//add task
let count = localStorage.length;
const addButton = document.getElementById("addBtn");
addButton.addEventListener("click", (e) => {
  count++;
  const time = getTime();
  const data = prompt("Enter a task");
  localStorage.setItem(`${time}ktodo`, `${data}`);

  const newTask = document.createElement("p");

  newTask.setAttribute("class", "flexfortask");
  newTask.setAttribute("draggable", "true");
  newTask.setAttribute("id", `${time}`);
  addFlying(newTask);
  newTask.innerHTML = `
  <div class="flexforContent">
     <span class="task-text"> ${data} </span>
     <div class="editDeleteButtons">
     <button id="editBtn">edit </button>
     <button id="deleteBtn"> del</button>
     </div>
     </div>
  ${time.split("k")[0]}
  `;

  todoContainer.appendChild(newTask);
  // console.log(localStorage.length);
  get();
});

//Add board
document.getElementById("addBoard").addEventListener("click", (e) => {
  const board = document.createElement("div");
  const name = prompt("Enter container name");
  board.setAttribute("id", name);
  board.setAttribute("class", "card");
  board.innerHTML = `<div class="newBoardHeader">
   <h1>${name} <span id="count">(0)</span></h1>
   <button class="pointer" id="delete-board">Delete</button>
   </div>
        <div class="taskContainer">

        </div>
  `;

  OnDragAdd(board.querySelector(".taskContainer"));
  container.appendChild(board);
  localStorage.setItem(`boardk${getTime()}`, `boradk${name}`);
  get();
});

//delete and edit task
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", (e) => {
    if (e.target.id === "editBtn") {
      const taskElement = e.target.closest(".flexfortask");
      const taskId = taskElement.id;
      const newData = prompt(
        "Edit the task",
        taskElement.querySelector(".task-text").innerText
      );
      localStorage.setItem(taskId, newData);
      taskElement.querySelector(".task-text").innerText = newData;
    }

    if (e.target.id === "deleteBtn") {
      // console.log(e.target);

      const taskElement = e.target.closest(".flexfortask");
      const taskId = taskElement.id;
      localStorage.removeItem(taskId);
      taskElement.remove();
    }
    get();
  });
});

function get() {
  document.querySelectorAll(".card").forEach((board) => {
    // console.log(board.querySelector("#count"));

    board.querySelector("#count").textContent = `(${
      board.querySelector(".taskContainer").childNodes.length - 1
    })`;
    // console.log(board.querySelector(".taskContainer").childNodes.length - 1);
  });
}

//fetch boards
function fetchBoards() {
  Object.keys(localStorage).map((key) => {
    console.log(key.split("k")[0]);
    if (key.split("k")[0] === "board") {
      const board = document.createElement("div");
      let name=localStorage.getItem(key).split("k")[1]
      board.setAttribute("id", name);
      board.setAttribute("class", "card");
      board.innerHTML = `<div class="newBoardHeader">
          <h1>${name} <span id="count">(0)</span></h1>
          <button class="pointer" id="delete-board">Delete</button>
          </div>
          <div class="taskContainer">
         </div> `;

      OnDragAdd(board.querySelector(".taskContainer"));
      container.appendChild(board);
      get();
    }
  });
}
fetchBoards();

//delete-boards
document.querySelector("#delete-board").addEventListener("click",(e)=>{
  e.target.closest(".card").querySelector(".taskContainer").querySelectorAll(".flexfortask").forEach((item)=>{
    item.remove();
    localStorage.removeItem(item.id);
  });
  console.log(
    e.target.closest(".card"));
  
    e.target.closest(".card").remove()
    localStorage.removeItem()
  get()
  });
  

 