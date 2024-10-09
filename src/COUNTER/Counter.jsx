import { useReducer } from 'react'

const initialState = {
    count: 0,
    message: "",
};

const Reducer = (state, action) => {
    if (action.type === 'Inc') {
        return { count: state.count + 1 };
    }
    else if (action.type === 'Decr') {
        if (state.count <= 0) {

            return { count: 0 , message : 'Can not be less then 0.' };
        }
        else {
            return { count: state.count - 1 }
        }
    }
    else if (action.type === 'Incby') {
        return { count: state.count + action.payload };
    }
}
const Counter = () => {

    const [state, dispatch] = useReducer(Reducer, initialState);

    const Decrement = () => {
        dispatch({ type: 'Decr' })
    }
    return (
        <div>
            <div>{state.count}</div>
            <div>{state.message}</div>
            <div>
                <button onClick={() => dispatch({ type: 'Inc' })}>Increment</button>
                <button onClick={Decrement}>Decrement</button>
                <button onClick={() => dispatch({ type: 'Incby', payload: 10 })}>IncrementBy</button>
            </div>
        </div>
    )
}

export default Counter
