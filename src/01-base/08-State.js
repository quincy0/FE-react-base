import React, { Component } from "react";

export default class App extends Component {

    constructor() {
        super()
        this.state = { like: true }
    }

    // state =  {
    //     like: true
    // }

    render() {
        return (
            <div>
                <h1>Welcome to React</h1>
                <button onClick={ () => this.handleClick() }>
                    {this.state.like ? '收藏':'取消收藏'}
                </button>
            </div>
        )
    }

    handleClick = () => {
        this.setState({
            like: !this.state.like
        })
        console.log("click")
    }
}