import axios from "axios";
import { Component } from "react";
import "./css/06-MidState.css"

export default class App extends Component {
    constructor(){
        super()
        this.state = {
            filmList: [],
            synopsis:""
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
                        <FilmItem key={item.filmId} {...item} onEvent={(value)=>{
                            this.setState({synopsis:value})
                        }}></FilmItem>
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
                this.props.onEvent(synopsis)
            }}>
                <img src={poster} alt={name}/>
                <h4>{name}</h4>
                <h4>观众评分：{grade}</h4>
            </div>
        )
    }
}

class FilmDetail extends Component {
    render() {
        return (
            <div className="filmdetail">
                {this.props.synopsis}
            </div>
        )
    }
}