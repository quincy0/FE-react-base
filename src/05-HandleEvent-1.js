import { Component } from "react";

export default class App extends Component {
    a = 100
    
    render() {
        return (
            <div>
                <input />
                <button onClick={ () => {console.log("click1")} }>add1</button>
                <button onClick={ this.handleClik2 }>add2</button>
                <button onClick={ this.handleClik3 }>add3</button>
                <button onClick={ () => {
                    this.handleClik4()
                } }>add4</button>
            </div>
        )
    }

    handleClik2() {
        console.log("click2")
    }

    handleClik3 = () => {
        console.log("click3")
    }

    handleClik4 = () => {
        console.log("click4")
    }
}