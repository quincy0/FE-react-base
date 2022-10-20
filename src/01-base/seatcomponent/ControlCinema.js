import { Component } from "react";
import axios from "axios";

export default class Cinema extends Component {

    constructor() {
        super()

        this.state = {
            cinemaList:[],
            mytext:""
        }

        axios({
            url:"https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=4697595",
            method:"get",
            headers:{
                'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.2.1","e":"16655858183771694250459137"}',
                'X-Host':'mall.film-ticket.cinema.list'
            }
        })
        .then(res => this.setState(
                {cinemaList:res.data.data.cinemas, bakCinemaList:res.data.data.cinemas}
            )
        )
        .catch(err => console.log(err))
    }


    render() {
        return (
            <div>
                <input value={this.state.mytext} onChange={(evt)=> {
                    this.setState({mytext:evt.target.value})
                }} />
                {
                    this.getCinemaList().map(item =>
                        <dl key={item.cinemaId}>
                            <dt>{item.name}</dt>
                            <dd>{item.address}</dd>
                        </dl>
                    )
                }
            </div>
        )
    }

    getCinemaList(){
        return this.state.cinemaList.filter(item=>
            item.name.toUpperCase().includes(this.state.mytext.toUpperCase()) ||
            item.address.toUpperCase().includes(this.state.mytext.toUpperCase())
        )
    }
}