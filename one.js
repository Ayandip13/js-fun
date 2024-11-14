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
    tasksList.innerHTML = ' ';
    tasks.forEach((task, index) => {
        const listitem = document.createElement('li')

        listitem.innerHTML = `
        <div class='taskItem'>
            <div class='task ${task}'>
                <input type='checkbox' class='checkbox'/>
                <p>Finish this project</p>
            </div>
            <div>
                <i class="fa-regular fa-pen-to-square"></i>
                <i class="fa-solid fa-trash"></i>
            </div>
        </div>
        `

        console.log(index);
        

        listitem.addEventListener('change', ()=> toggletaskComplete(index))

        tasksList.append(listitem);
    })
}


document.getElementById("newTask").addEventListener("click", function (e) {
  e.preventDefault();

  addTask();
});
