

const todoList =[];
rendertodolist();

function rendertodolist(){
    let todoListHTML = '';

    for (let i =0; i<todoList.length; i++){
        const todoObject =todoList[i];
        //const name = todoObject.name;
        //const dueDate =todoListHTML.dueDate;
        const {name , dueDate} = todoObject;

        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button onclick ="
                todoList.splice(${i}, 1);
                rendertodolist();
            ">Delete</button>
        `;
        todoListHTML += html;
    }

    document.querySelector('.js-todo-list')
    .innerHTML= todoListHTML;
}

function addTodo() {
    const inputElement = document.querySelector('.js-input-dolist');
    const name = inputElement.value.trim();

    const dateInputElement = document.querySelector('.js-duedate-input');
    let dueDate = dateInputElement.value;

    // If no date is picked, use today's date
    if (dueDate === '') {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        dueDate = `${year}-${month}-${day}`;
    }

    if (name === '') {
        alert('Please enter a task name.');
        return;
    }

    todoList.push({ name, dueDate });
    inputElement.value = '';
    dateInputElement.value = '';

    rendertodolist();
}


/*function addTodo(){
    const inputElement = document.querySelector('.js-input-dolist');
    const name =inputElement.value;

    const dateInputElelment = document.querySelector('.js-duedate-input');
    const dueDate =dateInputElelment.value;

    //<!--Adding to the empty array-->
    todoList.push({
        //name: name,
        //dueDate: dueDate, (These two mean the same thing as the one below.)
        name, 
        dueDate});
    
    inputElement.value = '';

    rendertodolist();
}
*/
