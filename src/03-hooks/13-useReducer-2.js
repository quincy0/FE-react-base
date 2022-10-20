import React, { useContext, useReducer } from "react"


const GlobalContext = React.createContext()

const initialState = {
    a:"aaaa",
    b:"bbbb"
}

const reducer = (prevState, action) => {
    let newSate = {...prevState}
    switch (action.type) {
        case "change-a":
            newSate.a = action.valueA
            return newSate
        case "change-b":
            newSate.b = "hhhh"
            return newSate
        default:
            return prevState
    }
    
}

export default function App() {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <GlobalContext.Provider value={
            {state, dispatch}
        }>
            <div>
                <Child1 />
                <Child2 />
                <Child3 />
            </div>
        </GlobalContext.Provider>
    )
}

function Child1() {
    const {dispatch} = useContext(GlobalContext)
    return (
        <div style={{background:"red"}}>
            <button onClick={()=>{
                dispatch({
                    type:"change-a",
                    valueA:"vvvv"
                })
            }}>C2</button>
            <button onClick={()=>{
                dispatch({
                    type:"change-b"
                })
            }}>C3</button>
        </div>
    )
}

function Child2() {
    const {state} = useContext(GlobalContext)
    return (
        <div style={{background:"yellow"}}>
            child2-{state.a}
        </div>
    )
}

function Child3() {
    const {state} = useContext(GlobalContext)
    return (
        <div style={{background:"gray"}}>
            child3-{state.b}
        </div>
    )
}