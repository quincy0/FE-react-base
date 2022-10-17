import { Component } from "react";

export default class App extends Component {
    state = {
        type: 1
    }
    render() {
        return (
            <div>
                <ul>
                    <li onClick={()=>{
                        this.setState({type:1})
                    }}>正在热映</li>
                    <li onClick={()=>{
                        this.setState({type:2})
                    }}>即将上映</li>
                    <FilmList type={this.state.type}></FilmList>
                </ul>
            </div>
        )
    }
}

class FilmList extends Component {

    state = {
        list:["film1","film2"]
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.list.map(item =>
                        <li key={item}>{item}</li>
                    )}
                </ul>
            </div>
        )
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log(nextProps.type)
        if (nextProps.type === 1) {
            this.setState({list:["film1", "film=2"]})
        } else {
            this.setState({list:["film3", "film4"]})
        }

        
    }
}