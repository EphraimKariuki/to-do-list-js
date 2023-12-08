const todoList = [];

function addList(){
    const name = document.querySelector('.js-name-input').value;
    const date = document.querySelector('.js-date-input').value;

    
    todoList.push({name, date});


    renderTodoList();
    
    
} 

function renderTodoList(){

    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++){

        const todoObject = todoList[i];
        const {name, date} = todoObject;

        const html = `
          <div>${name}</div>
          <div>${date}</div>
          <button onclick="
            todoList.splice(${i}, 1);
            renderTodoList();
          " class="delete-button">Delete</button>
        `;

        todoListHTML += html;

        
       
    }
    console.log(todoListHTML);
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}
