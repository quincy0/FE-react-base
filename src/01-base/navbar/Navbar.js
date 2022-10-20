import { Component } from "react";
import myprops from "prop-types";

export default class Navbar extends Component {

    static propTypes = {
        title:myprops.string,
        leftBar:myprops.bool
    }

    static defaultProps = {
        leftBar: true
    }

    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.leftBar && <button>返回</button>}
                {this.props.title}
                <button>Home</button>
            </div>
        )
    }
}