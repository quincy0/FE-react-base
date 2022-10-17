import { Component } from "react";

export default class App extends Component {
    state = {
        isShow: false
    }

    render() {
        return (
            <div>
                App1-1
                <Navbar event={this.handleEvent} />
                {this.state.isShow && <Sidebar />}
            </div>
        )
    }

    handleEvent = () => {
        this.setState({isShow:!this.state.isShow})
    }
}

class Navbar extends Component {
    render() {
        return (
            <div style={{background:"red"}}>
                <button onClick={()=>{
                    this.props.event()
                }}>click</button>
                <span>navbar</span>
            </div>
        )
    }
}

class Sidebar extends Component {
    render() {
        return (
            <div style={{background:"yellow", width:"100px"}}>
                <ul>
                    <li>1111</li>
                    <li>1111</li>
                    <li>1111</li>
                    <li>1111</li>
                    <li>1111</li>
                    <li>1111</li>
                    <li>1111</li>
                </ul>
            </div>
        )
    }
}