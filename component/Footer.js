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
                        <a className="${ type === filter && 'selected' }" href="#">
                            ${type[0].toUpperCase() + type.slice(1)}
                        </a>
                    </li>`
            )}
            </ul>
            <!-- Hidden if no completed items are left ↓ -->
            <button class="clear-completed">Clear completed</button>
        </footer>
    `
}

export default connect()(Footer);