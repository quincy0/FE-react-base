import { useState } from "react"

export default function App() {
    const [name, setName] = useState("")
    const [list, setList] = useState([])

    const handleChange = (evt) => {
        setName(evt.target.value)
    }
    const handleAdd = () => {
        console.log(name)
        setList([...list, name])
        setName("")
    }
    const handleDel = (index) => {
        let newList = [...list]
        newList.splice(index, 1)
        setList(newList)
    }
    
    return (
        <div>
            <input onChange={handleChange} value={name} />
            <button onClick={handleAdd}>add</button>
            <ul>
                {
                    list.map((item, index) => 
                        <li key={item}>
                            {item}
                            <button onClick={()=>handleDel(index)}>del</button>
                        </li>
                    )
                }
            </ul>
            {!list.length && <div>暂无待办事项</div>}
        </div>
    )
}