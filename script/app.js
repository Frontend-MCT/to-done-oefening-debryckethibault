(function () {
    document.addEventListener('DOMContentLoaded', function () {
        todoUI.setupTodoApp({
            titleClass: '.js-new-title',
            categoryClass: '.js-new-category',
            todoHolderClass: '.js-todo-items',
            todoCounterClass: '.js-todo-counter',
            todoAddClass: '.js-new-add'
        });
        todoUI.handleNewTodo(function(title, category){
            todoModule.addTodo(title, category);
        });
    });
})();   