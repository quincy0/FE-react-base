import axios from "axios";
import BScroll from "better-scroll";
import { Component } from "react";

export default class App extends Component {
    state = {
        myname: "alice",
        list: []
    }


    componentDidMount() {
        axios.get("/test.json").then(res=>{
            console.log(res.data.data.films)
            this.setState({list:res.data.data.films})
        })
    }

    render() {
        return (
            <div>
                <button onClick={()=>{
                    this.setState({
                        myname:"bob"
                    })
                }}>click</button>
                <span id="myname">{this.state.myname}</span>

                <div id="wrapper" style={{height:"100px",background:"yellow",overflow:"hidden"}}>
                    <ul>
                        {
                            this.state.list.map(item=>
                                <li key={item.filmId}>{item.name}</li>
                            )
                        }
                    </ul>
                </div>
            </div>
        )
    }

    UNSAFE_componentWillUpdate(){
        console.log("componentWillUpdate", document.getElementById("myname").innerHTML)
    }

    componentDidUpdate(prevProps, prevState){
        console.log("componentDidUpdate", document.getElementById("myname").innerHTML)
        if (prevState.list.length === 0) {
            new BScroll("#wrapper")
        }
    }
}