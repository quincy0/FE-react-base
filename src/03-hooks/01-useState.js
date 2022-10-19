import { useState } from "react"

export default function App() {
    const [name, setName] = useState("q")
    const [age, setAge] = useState(100)
    console.log(name)
    return (
        <div>
            <button onClick={()=>{
                setName("w")
                setAge(18)
                }}>click</button>
            app-{name}
        </div>
    )
}