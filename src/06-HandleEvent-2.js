import { Component } from "react";

export default class App extends Component {
    a = 100
    
    render() {
        return (
            <div>
                <input />
                <button onClick={ () => {
                    /* 箭头函数， this跟外边一致 */
                    console.log("click1", this.a)
                    } 
                    }>add1</button>
                <button onClick={ this.handleClik2.bind(this) }>add2</button>
                <button onClick={ this.handleClik3 }>add3</button>
                <button onClick={ () => this.handleClik4() }>add4</button>
            </div>
        )
    }

    handleClik2() {
        console.log("click2", "不推荐", this.a)
    }

    handleClik3 = () => {
        console.log("click3", this.a)
    }

    handleClik4 = () => {
        console.log("click4", "非常推荐", this.a)
    }
}