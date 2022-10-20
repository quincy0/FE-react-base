import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import "./css/index.css"


// 创建context对象
const GlobalContext = React.createContext()

const initialState = {
    filmList: [],
    info: ""
}

const reducer = (prevState, action) => {
    let newState = {...prevState}
    switch (action.type) {
        case "init-list":
            newState.filmList = action.value
            return newState
        case "show-detail":
            newState.info = action.value
            return newState
        default:
            return prevState
    }
}

export default function App() {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(()=>{
        axios.get("/test.json").then(res=>{
            dispatch({
                type:"init-list",
                value: res.data.data.films
            })
        })
    }, [])

    return (
        <GlobalContext.Provider value={{
            state,
            dispatch
            }}>
            <div>
                {
                    state.filmList.map(item => 
                        <FilmItem key={item.filmId} {...item} ></FilmItem>
                    )
                }
                <FilmDetail></FilmDetail>
            </div>
        </GlobalContext.Provider>
    )
}

function FilmItem(props) {
    let {name, poster, grade, synopsis} = props
    const {dispatch} = useContext(GlobalContext)
    return (
        <div className="filmitem" onClick={()=>{
            dispatch({
                type: "show-detail",
                value: synopsis
            })
        }}>
            <img src={poster} alt={name}/>
            <h4>{name}</h4>
            <h4>观众评分：{grade}</h4>
        </div>
    )
}

function FilmDetail() {
    const {state} = useContext(GlobalContext)
    return <div className="filmdetail">{state.info}</div>
}