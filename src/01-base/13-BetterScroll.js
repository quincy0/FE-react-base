import { Component } from "react";
import BScroll from "better-scroll";

export default class App extends Component {
    state = {
        list:[]
    }
    render() {
        return (
            <div>
                <button onClick={()=>this.getData()}>add</button>
                <div className="wrapper" style={{height:'200px', background:'yellow', overflow:'hidden'}}>
                    <ul className="content">
                        {this.state.list.map(item=><li key={item}>{item}</li>)}
                    </ul>
                </div>
            </div>
        )
    }

    getData() {
        var l = [1,2,3,4,5,6,7,8,9,10,11,12,13]
        this.setState({list: l}, ()=>{
            new BScroll(".wrapper")
        })
    }
}