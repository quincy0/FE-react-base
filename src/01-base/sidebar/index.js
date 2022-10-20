import { Component } from "react";

export default function SideBar(props) {
    // console.log(props)
    let {position, bg} = props
    console.log(bg, position)
    let obj1 = {
        left: 0
    }
    let obj2 = {
        right: 0
    }
    let obj = {
        background:bg, 
        width:"200px",
        position:"fixed",
    }
    var styleObj = position==="left"?{...obj, ...obj1}:{...obj, ...obj2}
    console.log(styleObj)

    return (
        <div style={styleObj}>
            <ul>
                <li>11111</li>
                <li>11111</li>
                <li>11111</li>
                <li>11111</li>
                <li>11111</li>
            </ul>
        </div>
    )
}