import { Component } from "react";
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';

export default class App extends Component {
    state = {
        list: ["aaa","vvv","sss"]
    }

    componentDidMount() {
        new Swiper(".swiper",
            {
                modules: [Navigation, Pagination],
                pagination: {
                    el: '.swiper-pagination',
                },
            }
        )
    }

    render() {
        return (
            <div>
                <div className="swiper" style={{height:"200px", background:"yellow"}}>
                    <div className="swiper-wrapper">
                        {
                            this.state.list.map(item=>
                                <div className="swiper-slide" key={item}>{item}</div>
                            )
                        }
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        )
    }
}