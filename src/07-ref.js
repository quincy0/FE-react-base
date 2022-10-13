import React, { Component } from "react";

export default class App extends Component {
    myref = React.createRef()
    render() {
        return (
            <div>
                <input ref={this.myref} />
                <button onClick={ () => this.handleClik() }>add</button>
            </div>
        )
    }
    handleClik = () => {
        console.log("click", "非常推荐", this.myref.current.value)
    }
}