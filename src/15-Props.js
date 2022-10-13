import { Component } from "react";
import Navbar from "./navbar/Navbar";

export default class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <h2>首页</h2>
                    <Navbar title="首页" leftBar={false} />
                </div>
                <div>
                    <h2>列表</h2>
                    <Navbar title="列表" />
                </div>
                <div>
                    <h2>购物车</h2>
                    <Navbar title="购物车" />
                </div>
            </div>
        )
    }
}