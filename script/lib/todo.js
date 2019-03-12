class Todo {
    constructor({ title, category, status }) {
        Object.assign(this, { title, category, status });
    }

    generateDOMNode(id) {
        let todo = document.createElement('li');
        todo.classList.add('c-todo');
        todo.innerHTML += `<input class="o-hide-accesible c-tdo-input" type="checkbox" ${this.status ? 'checked="checked"' : ''} id=${id} />`;
        let todoLabel = document.createElement('label');
        todoLabel.classList.add('c-todo-label');
        todoLabel.innerHTML = `
        <div class="c-form__item todoHolderClass">
                <div class="c-round c-input">
                    <input type="checkbox" id="checkbox">
                    <label class="c-round" for="checkbox"></label>
                </div>
                <p class="titleClass js-todo-items">${this.title}</p>
                <span class="c-categorie categoryClass">${this.category}</span>
            </div>`;

        todo.appendChild(todoLabel);
        return todo;
    };
}