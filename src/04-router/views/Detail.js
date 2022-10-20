import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Detail() {

    const params = useParams()

    const [film, setFilm] = useState({
            filmId: 6112,
            name: "",
            poster: ""
    })

    useEffect(()=>{
        axios({
            url: `https://m.maizuo.com/gateway?filmId=${params.filmId}&k=964474`,
            method: "get",
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16655858183771694250459137","bc":"110100"}',
                'X-Host': 'mall.film-ticket.film.info'
            }
        }).then(res=>{
            console.log(res.data.data.film)
            const data = res.data.data.film
            console.log(data.filmId, data.name, data.poster)
            setFilm({filmId:data.filmId, name:data.name, poster:data.poster})
        })
    }, [])

    return (
        <div>
            <h1>{film.name}</h1>
            <img src={film.poster} style={{width:"200px", height:"100%"}} />
        </div>
    )
}