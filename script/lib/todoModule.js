const todoModule = (function(){
    const addTodo = function(title, category){
        console.log(title, category);
        const todo = new todo({title: title, category: category});
        const id = dataAcces.addItem(todo);

        todoUI.appendTodo(todo.generateDOMNode(id));
    };

    return {
        addTodo: addTodo
    };
})