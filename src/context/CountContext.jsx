import { createContext, useContext, useReducer } from "react";
import { counterReducer } from "../reducers/countReducer";
import { counterInitialState } from "../reducers/countReducer";

const CountContext = createContext();
export const useCountContext = () => useContext(CountContext);

export const CountContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(counterReducer, counterInitialState);

    const ContextData = { state, dispatch }

    return <CountContext.Provider value={ContextData}>
        {children}
    </CountContext.Provider>
}