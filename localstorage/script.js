const addButton = document.getElementById("addTask");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

loadTasks();

function addTaskfunc() {
  const task = taskInput.value.trim();
  if (task) {
    createTaskElement(task);
    taskInput.value = " ";
    saveTasks();
  } else {
    alert("Enter a task");
  }
}

addButton.addEventListener("click", addTaskfunc);

function createTaskElement(task) {
  const listItem = document.createElement("li");

  listItem.textContent = task;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.className = "deleteTask";
  deleteButton.addEventListener('click', ()=>{
    taskList.removeChild(listItem)
  })

  taskList.appendChild(deleteButton)


  taskList.appendChild(listItem);
}

function saveTasks() {
  let tasks = [];
  taskList.querySelectorAll("li").forEach((item) => {
    tasks.push(item.textContent);
  });

  localStorage.setItem("tasks", JSON.stringify(tasks)); //Didn't understand
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || []; //did't understand
  tasks.forEach(createTaskElement); //didn't understand
}
