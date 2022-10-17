import { Component } from "react";
import './css/11-SeatCard.css'
import Center from "./seatcomponent/Center";
import Cinema from "./seatcomponent2/Cinema";
import Film from "./seatcomponent2/Film";
import Navbar from "./seatcomponent2/Navbar";
import Tabbar from "./seatcomponent2/FunctionalTabbar";

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
                <Navbar navEvent={()=>{
                    console.log("navbar")
                    this.setState({current:2})
                }}></Navbar>

                { this.whichPage() }
                
                <Tabbar event={(index) => this.handleEvent(index)} current={this.state.current} list={this.state.list}></Tabbar>
            </div>
        )
    }

    handleEvent = (index) => {
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