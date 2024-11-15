let tasks = [];

let addTask = () => {
    let taskInput = document.getElementById('taskInput');
    const text = taskInput.value.trim();

    if (text){
        tasks.push({text:text, completed:false})

        updateTasksList()
    }    
};

let updateTasksList = () => {
    let tasksList = document.getElementById('task-list');
    tasksList.innerHTML = 'no';
    tasks.forEach((task, index) => {
        const listitem = document.createElement('li')

        listitem.innerHTML = `
        <div class='taskItem'>
            <div class='task ${task.completed? 'completed':""}'>               
                <input type='checkbox' class='checkbox' ${task.completed? 'checked' : ""}/>
                <p>${task.text}</p>
            </div>
            <div>
                <i class="fa-regular fa-pen-to-square" onClick="editTask(${index})"></i>
                <i class="fa-solid fa-trash" onclick="deletTask(${index})"></i>
            </div>
        </div>
        `  //did not understand the specific line inside string interpolations...

        console.log(index);
        

        listitem.addEventListener('change', ()=> toggletaskComplete(index))

        tasksList.append(listitem);
    })
}


document.getElementById("newTask").addEventListener("click", function (e) { 
  e.preventDefault();

  addTask();
});
