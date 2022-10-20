import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function NowPlaying() {

    const [list, setList] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        axios({
            url:"https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=9510628",
            method: "get",
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16655858183771694250459137","bc":"110100"}',
                'X-Host': 'mall.film-ticket.film.list'
            }
        }).then(res => setList(res.data.data.films))
    }, [])

    const handleChangePage = (filmId) => {
        // window.location.href="#/detail/" + filmId
        navigate(`/detail/${filmId}`)
    }

    return (
        <div>
            NowPlaying
            <ul>
                {
                    list.map(item => 
                        <li key={item.filmId} onClick={()=>handleChangePage(item.filmId)}>{item.name}</li>
                    )
                }
            </ul>
        </div>
    )
}