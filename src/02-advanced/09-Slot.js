import { Component } from "react";

class Child extends Component {
    render() {
        return (
            <div>
                Child
                {this.props.children[0]}
                {this.props.children[2]}
                {this.props.children[1]}
            </div>
        )
    }
}

export default class App extends Component {
    render() {
        return (
            <div>
                <Child>
                    <div>11111</div>
                    <div>22222</div>
                    <div>33333</div>
                </Child>
            </div>
        )
    }
}

/**
 * 1.方便服用
 * 2.一定程度减少父子通信
 */