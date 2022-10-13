import { Component } from "react"
import Navbar from "./navbar/Navbar"
import SideBar from "./sidebar"


export default class App extends Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <SideBar bg="yellow" position="right"></SideBar>
            </div>
        )
    }
}