window.addEventListener('load',()=>{
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list = document.querySelector("#tasks");


    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;

        if(!task){
            alert("Please fill out the task");
            return
        }

        const tasksList = document.createElement("div");
        tasksList.classList.add("task");

        const taskContent = document.createElement("div");
        taskContent.classList.add("content");

        tasksList.appendChild(taskContent);

        const taskInput = document.createElement("input");
        taskInput.classList.add("text");
        taskInput.type = "text";
        taskInput.value = task;
        taskInput.setAttribute("readonly", "readonly");

        taskContent.appendChild(taskInput);

        const taskActions = document.createElement("div");
        taskActions.classList.add("actions");

        const taskEdit = document.createElement("button");
        taskEdit.classList.add("edit");
        taskEdit.innerHTML = ("Edit");

        const taskDelete = document.createElement("button");
        taskDelete.classList.add("delete");
        taskDelete.innerHTML = ("Delete");

        taskActions.appendChild(taskEdit);
        taskActions.appendChild(taskDelete);

        tasksList.appendChild(taskActions);

        list.appendChild(tasksList)

        input.value = "";

        taskEdit.addEventListener('click', () =>{
            if( taskEdit.innerText.toLowerCase() == "edit"){
                taskInput.removeAttribute("readonly");
                taskInput.focus();
                taskEdit.innerText ="Save";
            }else{
                taskInput.setAttribute("readonly", "readonly");
                taskEdit.innerText = "Edit";
            }
        });

        taskDelete.addEventListener('click', () => {
            list.removeChild(tasksList);
        });

    })


});