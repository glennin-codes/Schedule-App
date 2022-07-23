      
       //selectors
        const todoInput=document.querySelector(".todo-input")
        const todobtn=document.querySelector(".todo-btn")
        const todoList=document.querySelector(".todo-list")
        const filterOption=document.querySelector(".filter-todo") 
        // event listener
        document.addEventListener("DOMContentLoaded",getTodos)
         todobtn.addEventListener("click", addTodo);
         todoList.addEventListener("click",deleteCheck)
        filterOption.addEventListener("click" ,filterTodo)
          //function
        
         function addTodo(event){
             //prevent form from submiting
         event.preventDefault()
         
         //Todo DIV
         const todoDiv=document.createElement("div")
         todoDiv.classList.add("todo")
         //create li
           const newTodo=document.createElement("li")
           newTodo.innerText=todoInput.value
           //clear input after 
           
           newTodo.classList.add("todo-item")    
           todoDiv.appendChild(newTodo)
           //add todo to localstorage
           saveLocalTodos(todoInput.value)
           //check mark  button
           const completedButton=document.createElement("button")
            completedButton.innerHTML=`<i class="fas fa-check">Done</i>`
            completedButton.classList.add("completed-btn")
            todoDiv.appendChild(completedButton)

             //check trash button
                const trashButton=document.createElement("button")
                 trashButton.innerHTML=`<i class="fas fa-trash">delete </i>`
                  trashButton.classList.add("trash-btn")
                  todoDiv.appendChild(trashButton)
                //append tododiv to the todolist    
                   todoList.appendChild(todoDiv)
                   todoInput.value=""
         
            }
            //delete todo
            function deleteCheck(e){
              const item=e.target
              if(item.classList[0]=== "trash-btn"){
              const todo  = item.parentElement
              todo.classList.add("full")
              removeLocalTodos(todo)
              //animation
              todo.addEventListener("transitionend", function(){
                    todo.remove()
              })
                
              }
               //check mark
               if(item.classList[0]==="completed-btn"){
                const todo= item.parentElement
                todo.classList.toggle("completed")

               }
            }
            function filterTodo(e){
              const todos  = todoList.childNodes
          
               todos.forEach(function(todo){
                  switch(e.target.value){
                    case "all":
                    todo.style.display="flex"
                    break;
                    case "completed":
                      if(todo.classList.contains("completed")){
                          todo.style.display="flex"
                      }else{
                        todo.style.display="none"
                      
                      }
                      break;
                      case"uncompleted":
                      if (!todo.classList.contains("completed")){
                        todo.style.display="flex"
                      }else{
                        todo.style.display="none"

                      }

                      
                  }
            
           });
            
            } 
            function saveLocalTodos(todo){
              //check if i have todos in there?
              let todos;
              if(localStorage.getItem('todos')===null){
                    todos=[]

              }else{
                todos=JSON.parse(localStorage.getItem("todos"))
              }
              todos.push(todo)
            localStorage.setItem("todos",JSON.stringify(todos))

            }
            
                  function getTodos() {
                    let todos;
                    if(localStorage.getItem('todos')===null){
                          todos=[]
      
                    }else{
                      todos=JSON.parse(localStorage.getItem("todos"))
                    }
                   
               todos.forEach(function(todo){

                      //Todo DIV
         const todoDiv=document.createElement("div")
         todoDiv.classList.add("todo")
         //create li
           const newTodo=document.createElement("li") 
           newTodo.innerText=todo
           newTodo.classList.add("todo-item")    
           todoDiv.appendChild(newTodo)
           //check mark  button
           const completedButton=document.createElement("button")
            completedButton.innerHTML=`<i class="fas fa-check">sure</i>`
            completedButton.classList.add("completed-btn")
            todoDiv.appendChild(completedButton)

             //check trash button
                const trashButton=document.createElement("button")
                 trashButton.innerHTML=`<i class="fas fa-trash">delete </i>`
                  trashButton.classList.add("trash-btn")
                  todoDiv.appendChild(trashButton)
                //append tododiv to the todolist    
                   todoList.appendChild(todoDiv)
         
                    })
                    }
                    function removeLocalTodos(todo){
                      let todos;
              if(localStorage.getItem('todos')===null){
                    todos=[]

              }else{
                todos=JSON.parse(localStorage.getItem("todos"))
              }
             const todoIndex= todo.children[0].innerText
             todos.splice(todos.indexOf(todoIndex),1)
             localStorage.setItem("todos",JSON.stringify(todos))
            
                    }
                    
                  