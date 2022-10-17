import axios from "axios";
import React, { Component } from "react";
import "./css/06-MidState.css"


// 创建context对象
const GlobalContext = React.createContext()


export default class App extends Component {
    constructor(){
        super()
        this.state = {
            filmList: [],
            info:"11111",
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
            <GlobalContext.Provider value={{
                call:"打电话", 
                sms:"短信", 
                info:this.state.info, 
                changeInfo:(value)=>{
                    this.setState({info:value})
                }
                }}>
                <div>
                    {
                        this.state.filmList.map(item => 
                            <FilmItem key={item.filmId} {...item} ></FilmItem>
                        )
                    }
                    <FilmDetail></FilmDetail>
                </div>
            </GlobalContext.Provider>
        )
    }
}

class FilmItem extends Component {
    render() {
        let {name, poster, grade, synopsis} = this.props
        return (
            <GlobalContext.Consumer>
                {
                    (value) => {
                        console.log(value)
                        return (
                            <div className="filmitem" onClick={()=>{
                                value.changeInfo(synopsis)
                            }}>
                                <img src={poster} alt={name}/>
                                <h4>{name}</h4>
                                <h4>观众评分：{grade}</h4>
                            </div>
                        )
                    }
                }
            </GlobalContext.Consumer>
        )
    }
}

class FilmDetail extends Component {
    render() {
        return (
            <GlobalContext.Consumer>
                {
                    (value) => <div className="filmdetail">{value.info}</div>
                }
            </GlobalContext.Consumer>
        )
    }
}