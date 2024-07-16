const init = {
    cars: ['BMW']
}

export default function reducer(state = init, action, args){
    switch (action) {
        case 'ADD':
            const [newCar] = args;//get the last element of args array
            return {
                ...state,// Spread the existing state object
                cars: [...state.cars, newCar]// Update the 'cars' array in the state
            };
        default:
            return state;
    }
}