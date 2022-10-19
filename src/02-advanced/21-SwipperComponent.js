import { Component } from "react";
import QSwiper from "./swiper/Swiper";
import QSwipperItem from "./swiper/SwiperItem";

export default class App extends Component {
    state = {
        list:[]
    }

    componentDidMount() {
        console.log("App Swipper")
        setTimeout(() => {
            this.setState({list:["Slide 4", "Slide 2", "Slide 3"]})
        }, 1000);
    }

    render() {
        return (
            <div>
                <QSwiper>
                    {
                        this.state.list.map(item => <QSwipperItem key={item}>{item}</QSwipperItem>)
                    }
{/*                     
                    <QSwipperItem>Slide 2</QSwipperItem>
                    <QSwipperItem>Slide 3</QSwipperItem> */}
                </QSwiper>
            </div>
        )
    }
}