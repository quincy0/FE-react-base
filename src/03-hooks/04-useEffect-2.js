import { useEffect, useState } from "react"

export default function App() {
    const [name, setName] = useState("quicny")
    useEffect(()=>{
        setName(name.substring(0,1).toUpperCase()+name.substring(1))
    },[name])
    return (
        <div>
            App-{name}
            <button onClick={()=>{
                setName("xiaoming")
            }}>click</button>
        </div>
    )
}