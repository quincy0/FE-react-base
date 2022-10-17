import BScroll from "better-scroll";
import { Component } from "react";

export default class App extends Component {
    state = {
        list: ["1111","2222","3333","44444","5555","7777","8888","99999","100101"]
    }
    render() {
        return (
            <div>
                <div id="wrapper" style={{height:"150px",background:"yellow",overflow:"hidden"}}>
                    <ul>
                        {
                            this.state.list.map(item=>
                                <li key={item}>{item}</li>
                            )
                        }
                    </ul>
                </div>
            </div>
        )
    }

    componentDidMount(){
        new BScroll("#wrapper")
    }
}