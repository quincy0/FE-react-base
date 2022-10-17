import { Component } from "react";

export default class App extends Component {
    state = {
        myname: "Alice"
    }
    static getDerivedStateFromProps(nextProps, nextState) {
        console.log("getDerivedStateFromProps")
        return {myname:nextState.myname}
    }
    render() {
        return (
            <div>
                {this.state.myname}
            </div>
        )
    }
}