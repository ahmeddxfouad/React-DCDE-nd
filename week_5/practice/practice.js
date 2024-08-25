// The store should have four parts
// 1. Create practice.html file. -> Done
// 2. Import redux library and previously code and run it. -> Done
// 3. Add UI to the project for the user to interact. -> Done
// 4. Add Middleware logger, validator and combine them. -> Done


//actions variables
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const INCRMENETBYTWO = 'INCREMENTBYTWO'
const DECREMENTBYTWO = 'DECREMENTBYTWO'


//actions-functions
const increment = () => {
    return {
        type: INCREMENT
    }
}

const decrement = () => {
    return {
        type: DECREMENT
    }
}

const incrementByTwo = () => {
    return {
        type: INCRMENETBYTWO
    }
}

const decrementByTwo = () => {
    return {
        type: DECREMENTBYTWO
    }

}

//store
const createStore = (reducer) => {

    let state;
    let listeners = []


    const getState = () => state;

    const subscribe = (listener) => {

        listeners.push(listener);

        return () => {
            listeners.filter((l) => l !== listener)
        }

    }

    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach((listener) => listener());
    }

    return {
        getState,
        subscribe,
        dispatch
    }


}

//initial state
const initialState = {
    counter: 0
}

const counterReducer = (state = initialState, action) => {

    if(action.type === INCREMENT){
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    else if (action.type === DECREMENT){
        return {
            ...state,
            counter: state.counter - 1
        }
    }
    else if (action.type === INCRMENETBYTWO){
        return {
            ...state,
            counter: state.counter + 2
        }
    }
    else if (action.type === DECREMENTBYTWO){
        return {
            ...state,
            counter: state.counter - 2
        }
    }
    else {
        return state;
    }

}

const store = createStore(counterReducer);

const render = () => {
    console.log('This is the current state: ', store.getState())
}

//subscribe
store.subscribe(render)

//dispatch
store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(decrementByTwo())
store.dispatch(incrementByTwo())
store.dispatch(incrementByTwo())

