import html from '../core.js'
import {connect} from "../store.js";

function Footer({ todos, filters, filter }) {
    return html`
        <footer class="footer">
            <!-- This should be \`0 items left\` by default -->
            <span class="todo-count"><strong>${todos.filter(filters.active).length}</strong> item left</span>
            <!-- Remove this if you don't implement routing -->
            <ul class="filters">
            ${
                Object.keys(filters).map(type => html`
                    <li>
                        <a 
                                class="${ type === filter && 'selected' }" href="#"
                                onclick="dispatch('switchFilter', '${type}')"
                        >
                            ${type[0].toUpperCase() + type.slice(1)}
                        </a>
                    </li>`
            )}
            </ul>
            ${todos.filter(filters.completed).length > 0 &&
            html`
            <button 
                    class="clear-completed"
                    onclick="dispatch('deleteCompleted')"
            >
                Clear completed
            </button>`}
        </footer>
    `
}

export default connect()(Footer);