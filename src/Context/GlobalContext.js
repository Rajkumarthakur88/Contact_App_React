import { createContext, useReducer, useEffect } from "react";
import GlobalReducer from "./GlobalReducer";

const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {

    const initialState = {
        Data:  [],
        // localStorage.getItem("Data") ? JSON.parse(localStorage.getItem("Data")) :
        Edit: {
            MyContact:{},
            isEdit: false
        },
        Filter:[]
    }
    const [state, dispatch] = useReducer(GlobalReducer, initialState)

    return (
        <GlobalContext.Provider value={{ ...state, dispatch }} >
            {children}
        </GlobalContext.Provider >
    )


}
export default GlobalContext