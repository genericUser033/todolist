import {attach} from "./store.js";
import App from "./component/App.js";

const cars = ['BMW', 'Mazda', 'Porsche', true, 'Mercedes']

// const isSuccess = true;
// const output = html`
//     <ul>
//         <h1>${isSuccess && 'Success'}</h1>
//         ${cars.map(car => `<li>${car}</li>`)}
//     </ul>
// `
 // tagged template literal

attach(App, document.getElementById('root'))
