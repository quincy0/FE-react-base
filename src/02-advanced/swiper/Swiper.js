import { Component } from "react";
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';

export default class QSwiper extends Component {

    // componentDidMount() {
    //     console.log("Component QSwiper")
    //     new Swiper(".swiper",
    //         {
    //             modules: [Navigation, Pagination],
    //             pagination: {
    //                 el: '.swiper-pagination',
    //             },
    //         }
    //     )
    // }

    componentDidUpdate() {
        console.log("Component QSwiper componentDidUpdate")
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
                            this.props.children
                        }
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        )
    }
}