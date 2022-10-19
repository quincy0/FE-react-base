import { useEffect, useState } from "react"

export default function App() {
    const [create, setCreate] = useState(true)
    return (
        <div>
            <button onClick={()=>{
                setCreate(false)
            }}>click</button>
            {create && <Child />}
        </div>
    )
}

function Child() {
    useEffect(()=>{
        window.onresize = () => {
            console.log("resize")
        }
        let timer = setInterval(()=>{
            console.log("111")
        }, 1000)

        return () => {
            console.log('组件销毁')
            window.onresize = null
            clearInterval(timer)
        }
    },[])
    return (
        <div>Child</div>
    )
}