const TODO_STORAGE_KEY = 'TODOS'
export default {
    get() {
        return JSON.parse(localStorage.getItem(TODO_STORAGE_KEY)) || []; //todos is an array
    },
    set(todos) {
        localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(todos))
    }
}