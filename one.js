// Array to store the tasks
let tasks = [];

/**
 * Adds a new task to the tasks array and updates the UI.
 */
const addTask = () => {
  const taskInput = document.getElementById("taskInput"); // Get the input field
  const text = taskInput.value.trim(); // Get the trimmed value of the input

  // If the input is not empty, add the task
  if (text) {
    tasks.push({ text: text, completed: false }); // Add the new task with default `completed` as false
    taskInput.value = ""; // Clear the input field
    updateTasksList(); // Re-render the task list to include the new task
    updateStats(); // Update the task statistics (progress and counts)
  }
};

/**
 * Updates the DOM to reflect the current state of the tasks array.
 */
const updateTasksList = () => {
  const tasksList = document.getElementById("task-list"); // Get the task list container
  tasksList.innerHTML = ""; // Clear all existing tasks from the DOM

  // Iterate through each task and create its HTML representation
  tasks.forEach((task, index) => {
    const listItem = document.createElement("li"); // Create a new list item

    // Create the HTML structure for each task
    listItem.innerHTML = `
      <div class='taskItem'>
        <div class='task ${task.completed ? "completed" : ""}'> <!-- Add 'completed' class if the task is marked complete -->
          <input 
            type='checkbox' 
            class='checkbox' 
            ${task.completed ? "checked" : ""} <!-- Dynamically add 'checked' if the task is complete -->
            onchange='toggleTaskComplete(${index})' <!-- Call toggleTaskComplete when the checkbox changes -->
          />
          <p>${task.text}</p> <!-- Display the task text -->
        </div>
        <div>
          <i class="fa-regular fa-pen-to-square" onclick="editTask(${index})"></i> <!-- Edit task button -->
          <i class="fa-solid fa-trash" onclick="deleteTask(${index})"></i> <!-- Delete task button -->
        </div>
      </div>
    `;

    tasksList.append(listItem); // Add the created task item to the task list container
  });
};

/**
 * Toggles the `completed` status of a task.
 * @param {number} index - The index of the task to toggle.
 */
const toggleTaskComplete = (index) => {
  tasks[index].completed = !tasks[index].completed; // Toggle the `completed` property of the task
  updateTasksList(); // Re-render the task list to reflect the change (important to show checked/unchecked state)
  updateStats(); // Update the stats to reflect changes in completed tasks
};

/**
 * Deletes a task from the tasks array.
 * @param {number} index - The index of the task to delete.
 */
const deleteTask = (index) => {
  tasks.splice(index, 1); // Remove the task from the array
  updateTasksList(); // Re-render the task list to remove the deleted task from the UI
  updateStats(); // Update the stats after the task is deleted
};

/**
 * Allows editing the text of a task.
 * @param {number} index - The index of the task to edit.
 */
const editTask = (index) => {
  const newTask = prompt("Edit your task:", tasks[index].text); // Prompt the user to enter the new task text
  if (newTask !== null && newTask.trim() !== "") { // If a valid input is provided
    tasks[index].text = newTask.trim(); // Update the task text
    updateTasksList(); // Re-render the task list to reflect the updated text
    updateStats(); // Update the stats (optional, though not strictly needed here)
  }
};

/**
 * Updates the stats section of the UI to show progress and task counts.
 */
const updateStats = () => {
  const completedTasks = tasks.filter((task) => task.completed).length; // Count the number of completed tasks
  const totalTasks = tasks.length; // Total number of tasks
  const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0; // Calculate the completion percentage

  // Update the stats in the UI
  document.getElementById("numbers").textContent = `${completedTasks} / ${totalTasks}`; // Show completed/total tasks
  document.getElementById("progress").style.width = `${progress}%`; // Update the width of the progress bar
};

// Attach the addTask function to the "Add" button
document.getElementById("newTask").addEventListener("click", function (e) {
  e.preventDefault(); // Prevent form submission (default behavior)
  addTask(); // Call the function to add a new task
});
