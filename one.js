let tasks = [];

const addTask = () => {
  const taskInput = document.getElementById("taskInput");
  const text = taskInput.value.trim();

  if (text) {
    tasks.push({ text: text, completed: false });
    taskInput.value = ""; // Clear the input field
    updateTasksList();
    updateStats();
  }
};

const updateTasksList = () => {
  const tasksList = document.getElementById("task-list");
  tasksList.innerHTML = ""; // Clear existing tasks

  tasks.forEach((task, index) => {
    const listItem = document.createElement("li");

    listItem.innerHTML = `
      <div class='taskItem'>
        <div class='task ${task.completed ? "completed" : ""}'>
          <input 
            type='checkbox' 
            class='checkbox' 
            ${task.completed ? "checked" : ""}
            onchange='toggleTaskComplete(${index})' 
          />
          <p>${task.text}</p>
        </div>
        <div>
          <i class="fa-regular fa-pen-to-square" onclick="editTask(${index})"></i>
          <i class="fa-solid fa-trash" onclick="deleteTask(${index})"></i>
        </div>
      </div>
    `;

    tasksList.append(listItem);
  });
};

const toggleTaskComplete = (index) => {
  tasks[index].completed = !tasks[index].completed;
  updateTasksList();
  updateStats();
};

const deleteTask = (index) => {
  tasks.splice(index, 1); // Remove task at the given index
  updateTasksList(); // Re-render the task list
  updateStats(); // Update stats after deletion
};

const editTask = (index) => {
  const newTask = prompt("Edit your task:", tasks[index].text);
  if (newTask !== null && newTask.trim() !== "") {
    tasks[index].text = newTask.trim();
    updateTasksList();
    updateStats();
  }
};

const updateStats = () => {
  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;
  const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  document.getElementById("numbers").textContent = `${completedTasks} / ${totalTasks}`;
  document.getElementById("progress").style.width = `${progress}%`;
};

document.getElementById("newTask").addEventListener("click", function (e) {
  e.preventDefault();
  addTask();
});
