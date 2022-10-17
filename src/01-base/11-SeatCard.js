import { Component } from "react";
import './css/11-SeatCard.css'
import Center from "./seatcomponent/Center";
import Cinema from "./seatcomponent/Cinema";
import Film from "./seatcomponent/Film";

export default class App extends Component {
    state = {
        list:[
            {
                id:1,
                text:"电影"
            },
            {
                id:2,
                text:"影院"
            },
            {
                id:3,
                text:"我的"
            },
        ],
        current: 0
    }
    render() {
        return (
            <div>
                {/* { this.state.current === 0 && <Film></Film> }
                { this.state.current === 1 && <Cinema></Cinema> }
                { this.state.current === 2 && <Center></Center> } */}

                { this.whichPage() }
            
                <ul>
                    {
                        this.state.list.map((item, index) =>
                        <li key={item.id} 
                        className={this.state.current === index ? "active":""}
                        onClick={ () => this.handleClick(index) }
                        >
                        {item.text}
                        </li>
                        )
                    }
                </ul>
            </div>
        )
    }

    handleClick = (index) => {
        this.setState({current:index})
    }

    whichPage(){
        switch (this.state.current) {
            case 0:
                return <Film></Film>
            case 1:
                return <Cinema></Cinema>
            case 2:
                return <Center></Center>
            default:
                return null
        }
    }
}