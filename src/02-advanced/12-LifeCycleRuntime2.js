import { Component } from "react";

export default class App extends Component {

    state = {
        myname: "Alice"
    }

    render() {
        console.log("render")
        return (
            <div>
                <button onClick={()=>{
                    this.setState({myname:"Bob"})
                }}>click</button>

                {this.state.myname}
            </div>
        )
    }
    
    shouldComponentUpdate(nextProps, nextState){
        console.log(nextState.myname, this.state.myname)
        if(JSON.stringify(this.state) !== JSON.stringify(nextState)) {
            return true
        }
        return false
    }
}