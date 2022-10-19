import { Component } from "react";

export default class QSwipperItem extends Component {
    render() {
        return (
            <div className="swiper-slide">{this.props.children}</div>
        )
    }
}