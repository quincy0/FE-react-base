import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import "./css/index.css"


// 创建context对象
const GlobalContext = React.createContext()

export default function App() {
    const [filmList, setFilmList] = useState([])
    const [info, setInfo] = useState("1111")

    useEffect(()=>{
        axios.get("/test.json").then(res=>{
            setFilmList(res.data.data.films)
        })
    }, [])

    return (
        <GlobalContext.Provider value={{
            call:"打电话", 
            sms:"短信", 
            info:info, 
            changeInfo:(value)=>{
                setInfo(value)
            }
            }}>
            <div>
                {
                    filmList.map(item => 
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
    const context = useContext(GlobalContext)
    return (
        <div className="filmitem" onClick={()=>{
            context.changeInfo(synopsis)
        }}>
            <img src={poster} alt={name}/>
            <h4>{name}</h4>
            <h4>观众评分：{grade}</h4>
        </div>
    )
}

function FilmDetail() {
    const context = useContext(GlobalContext)
    return <div className="filmdetail">{context.info}</div>
}