import axios from "axios"
import { useEffect, useMemo, useState } from "react"

export default function App() {

    const [list, setList] = useState([])
    const [mytext, setMytext] = useState("")
    useEffect(()=>{
        axios({
            url:"https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=4697595",
            method:"get",
            headers:{
                'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.2.1","e":"16655858183771694250459137"}',
                'X-Host':'mall.film-ticket.cinema.list'
            }
        }).then(res => setList(res.data.data.cinemas))
    },[list])

    const getCinemaList = useMemo(()=> list.filter(item=>
        item.name.toUpperCase().includes(mytext.toUpperCase()) ||
        item.address.toUpperCase().includes(mytext.toUpperCase())
    ), [list, mytext])

    return (
        <div>
            <input value={mytext} onChange={(evt)=> {
                setMytext(evt.target.value)
            }} />
            {
                getCinemaList.map(item =>
                    <dl key={item.cinemaId}>
                        <dt>{item.name}</dt>
                        <dd>{item.address}</dd>
                    </dl>
                )
            }
        </div>
    )
}