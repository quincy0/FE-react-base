import axios from "axios"
import { useEffect, useState } from "react"

export default function App() {
    const [list, setList] = useState([])
    useEffect(()=>{
        axios.get("/test.json").then(res=>{
            setList(res.data.data.films)
            console.log(res.data.data.films)
        })
    },[])
    return (
        <div>
            <ul>
                {
                    list.map(item=>
                        <li key={item.filmId}>{item.name}</li>
                    )
                }
                
            </ul>
        </div>
    )
}