const todoUI = (function(){
    let newTodo = {
        title: null,
        category: null,
    },
    todoHolder = null,
    todoCounter = null;

    const setupTodoApp = function({titleClass, categoryClass, todoHolderClass, todoCounterClass, todoAddClass}){
        newTodo.title = document.querySelector(titleClass);
        newTodo.category = document.querySelector(categoryClass);
        todoHolder = document.querySelector(todoHolderClass);
        todoCounter = document.querySelector(todoCounterClass);
        todoAddButton = document.querySelector(todoAddClass);
        console.log(todoAddButton);
    };

    const handleNewTodo = function(callback){
        todoAddButton.addEventListener('click', function(e){
            e.preventDefault();
            callback(newTodo.title.value, newTodo.category.value);
        });
    }
        return {
            setupTodoApp: setupTodoApp,
            handleNewTodo: handleNewTodo
        }
})();