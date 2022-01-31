import { useReducer } from "react";

const initialState = {count: 0};

// function init(initState){
// return initialState;
// }

function CustomReducer(state, action) {
    switch(action.type) {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        case 'reset': 
            return action.payload;
        default: 
            throw  new Error("Something wrong with code snippet !");
    }
}

function CustomReducerHook() {
    const [state, dispatchAction] = useReducer(CustomReducer, initialState);

    return(
        <>
            <label>Count:</label>{state.count}
            <div>
                <button onClick={() => {dispatchAction({type: 'increment'})}}>Add +</button>{' '}
                <button onClick={() => {dispatchAction({type: 'decrement'})}}>Reduce -</button>
                <button onClick={() => {dispatchAction({type: 'reset', payload: initialState})}}>Reset page State</button>

            </div>
        </>

    );

}

export default CustomReducerHook;