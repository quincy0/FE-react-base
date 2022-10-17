import { Component } from "react";
import './css/11-SeatCard.css'
import Center from "./seatcomponent/Center";
import Cinema from "./seatcomponent/Cinema";
import Film from "./seatcomponent/Film";
import Navbar from "./seatcomponent/Navbar";
import Tabbar from "./seatcomponent/Tabbar";

export default class App extends Component {
    state = {
        current: 2
    }
    render() {
        return (
            <div>
                <Navbar navEvent={()=>{
                    console.log("navbar")
                    this.setState({current:2})
                }}></Navbar>

                { this.whichPage() }
                
                <Tabbar event={(index) => this.handleEvent(index)} defaultValue={this.state.current}></Tabbar>
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