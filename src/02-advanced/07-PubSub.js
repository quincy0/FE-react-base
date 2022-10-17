import axios from "axios";
import { Component } from "react";
import "./css/06-MidState.css"

//调度中心
var dispatcher = {
    list: [],
    subscribe(callback) {
        this.list.push(callback)
    },
    publish(text){
        this.list.forEach(callback=>{
            callback && callback(text)
        })
    },
}


export default class App extends Component {
    constructor(){
        super()
        this.state = {
            filmList: []
        }
        axios.get('/test.json').then(res=>{
            console.log(res.data)
            this.setState({
                filmList: res.data.data.films
            })
        })
    }
    render() {
        return (
            <div>
                {
                    this.state.filmList.map(item => 
                        <FilmItem key={item.filmId} {...item} ></FilmItem>
                    )
                }
                <FilmDetail synopsis={this.state.synopsis}></FilmDetail>
            </div>
        )
    }
}

class FilmItem extends Component {
    render() {
        let {name, poster, grade, synopsis} = this.props
        return (
            <div className="filmitem" onClick={()=>{
                dispatcher.publish(synopsis)
            }}>
                <img src={poster} alt={name}/>
                <h4>{name}</h4>
                <h4>观众评分：{grade}</h4>
            </div>
        )
    }
}

class FilmDetail extends Component {
    constructor(){
        super()
        this.state = {
            synopsis:""
        }
        dispatcher.subscribe((info)=>{
            console.log(info)
            this.setState({synopsis:info})
        })
    }
    render() {
        return (
            <div className="filmdetail">
                {this.state.synopsis}
            </div>
        )
    }
}