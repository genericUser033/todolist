export default function html([first, ...strings], ...values) {
    return values.reduce(
        (acc, cur) => acc.concat(cur, strings.shift()), //strings.shift() => get the first element of strings and remove it
        [first] // the initial value of acc
    )
    .filter(x => x && x !== true || x === 0)//interpolated values are filtered
    .join('')
}

export function createStore(reducer) {
    let state = reducer();
    const roots = new Map();

    function render() {
        for(const [root, component] of roots) {
            root.innerHTML = component();
        }
    }

    return {
        attach(component, root) {
            roots.set(root, component);
            render();
        },
        dispatch(action, ...args) {
            state = reducer(state, action, args)
            render();
        },
        connect(selector = state => state) {
            return component => (props, ...args) =>
                component(Object.assign({}, props, selector(state), ...args))
        }
    }
}





















// <ul>
//     <h1>${isSuccess && 'Success'}</h1>
//     ${cars.map(car => `<li>${car}</li>`).join('')}
// </ul>

// Explanation
// first: <ul>
//     <h1>
// values[1] => ${isSuccess && 'Success'} (curr)
// strings.shift() => </h1>

// => assign to acc
// Loop 2nd
// acc+ ${cars.map(car => `<li>${car}</li>`) n times + ....</ul>