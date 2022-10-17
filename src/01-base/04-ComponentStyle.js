import { Component } from "react";
import './css/01-index.css'

export default class App extends Component {
    render() {
        const myname = "quincy"
        const obj = {
            background:"yellow",
            fontSize:"24px"
        }
        return (
            <div>
                app04 - {10+20} - {myname} - {10>20?'aaa':'bbb'}
                <div style={obj}>11111</div>
                <div style={{background:"red"}}>2222</div>
                {/* react推荐使用行内模式，因为react觉得每个组件都是一个独立的整体 */}
                <div className="active">333</div>
                <label htmlFor="username">用户名:</label>
                <input type="text" id="username" />
            </div>
        )
    }
}