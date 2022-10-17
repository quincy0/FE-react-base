import { Component } from "react";

class Child extends Component {
    render() {
        return <div>Child</div>
    }

    UNSAFE_componentWillReceiveProps() {
        console.log("222")
    }
}

export default class App extends Component {
    state = {
        text: "1111"
    }
    render() {
        return (
            <div>
                <button onClick={()=>{
                    this.setState({text:"2222"})
                }}>click</button>
                <Child></Child>
            </div>
        )
    }
}