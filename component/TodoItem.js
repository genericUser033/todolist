import html from '../core.js'

function TodoItem({todo, index}) {
    return html`
        <li class="${todo.completed && 'completed'}">
            <div class="view">
                <input 
                        class="toggle" 
                        type="checkbox" 
                        ${todo.completed && 'checked'}
                        onchange="dispatch('toggle', ${index})"
                >
                <label style="${todo.completed ? 'text-decoration: line-through;' : ''}">${todo.title}</label>
                <button 
                        class="destroy"
                        onclick="dispatch('delete', ${index})"
                >
                    
                </button>
            </div>
            <input class="edit" value="${todo.title}">
        </li>
    `
}

export default TodoItem;