import { useEffect, useState } from "react"

export default function App() {
    const [type, setType] = useState(1)
    return (
        <div>
            <ul>
                <li onClick={()=>{
                    setType(1)
                }}>正在热映</li>
                <li onClick={()=>{
                    setType(2)
                }}>即将上映</li>
                <FilmList type={type}></FilmList>
            </ul>
        </div>
    )
}

function FilmList(props) {
    const [list, setList] = useState([])
    useEffect(()=>{
        props.type === 1 ? setList(["film1","film2"]) : setList(["film4","film3"])
    },[props.type])
    return (
        <div>
            <ul>
                {
                    list.map(item => 
                        <li key={item}>{item}</li>
                    )
                }
            </ul>
        </div>
    )
}