import { useRef, useState } from "react"

export default function App() {
    const mytext = useRef()
    const [list, setList] = useState([])

    const handleAdd = () => {
        setList([...list, mytext.current.value])
        mytext.current.value = ""
    }
    const handleDel = (index) => {
        let newList = [...list]
        newList.splice(index, 1)
        setList(newList)
    }
    
    return (
        <div>
            <input ref={mytext} />
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