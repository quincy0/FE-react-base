import { useReducer } from "react"

const reducer = (prevState, action) => {
    console.log(prevState, action)
    let newState = {...prevState}
    switch(action.type){
        case "minus":
            newState.count--
            return newState
        case "plus":
            newState.count++
            return newState
        default:
            return prevState
    }
}

const initialState = {
    count: 0 
}

export default function App() {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <button onClick={()=>{
                dispatch({
                    type:"minus"
                })
            }}>-</button>
            {state.count}
            <button onClick={()=>{
                dispatch({
                    type:"plus"
                })
            }}>+</button>
        </div>
    )
}