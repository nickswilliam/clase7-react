import { useReducer } from "react"
import { CounterButton } from "./CounterStyles"
import { counterInitialState, counterReducer } from "../../reducers/countReducer"
import { TYPES } from "../../actionTypes/countActions";
import { useCountContext } from "../../context/CountContext";

const Counter = () => {
    const { state, dispatch } = useCountContext();

    const increment = () => {
        dispatch({ type: TYPES.INCREMENT })
    }

    const incrementBy5 = () => {
        dispatch({ type: TYPES.INCREMENT_5 })
    }

    const decrement = () => {
        dispatch({ type: TYPES.DECREMENT })
    }

    const decrementBy5 = () => {
        dispatch({ type: TYPES.DECREMENT_5 })
    }

    const multiply = () => {
        dispatch({ type: TYPES.MULTIPLY })
    }

    const divide = () => {
        dispatch({ type: TYPES.DIVIDE })
    }

    const reset = () => {
        dispatch({ type: TYPES.RESET })
    }
    return (
        <>

            <CounterButton onClick={divide}>(:2)</CounterButton>
            <CounterButton onClick={decrementBy5}>(-5)</CounterButton>
            <CounterButton onClick={decrement}>(-)</CounterButton>

            <p>{state.count}</p>

            <CounterButton onClick={increment}>(+)</CounterButton>
            <CounterButton onClick={incrementBy5}>(+5)</CounterButton>
            <CounterButton onClick={multiply}>(*2)</CounterButton>

            <CounterButton onClick={reset}>Reset</CounterButton>

        </>
    )
}
export default Counter