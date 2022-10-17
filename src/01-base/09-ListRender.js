import { Component } from "react";

export default class App extends Component {

    state = {
        list: [
            {
                id: 1,
                text: "1111"
            },
            {
                id: 2,
                text: "2222"
            },
            {
                id: 3,
                text: "3333"
            },
            {
                id: 4,
                text: "4444"
            },
        ]
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.list.map(item=>
                            <li key={item.id}>{item.text}</li>
                        )
                    }
                </ul>
            </div>
        )
    }
}