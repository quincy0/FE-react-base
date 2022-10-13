import React, { Component } from "react";

export default class App extends Component {
    myref = React.createRef()
    state = {
        list:[
            {
                id: 1,
                text: "aaa"
            },
            {
                id: 2,
                text: "bbb"
            },
            {
                id: 3,
                text: "ccc"
            },
        ]
    }

    render() {
        return (
            <div>
                <input ref={this.myref} />
                <button onClick={ () => this.handleClik() }>add</button>

                <ul>
                    {
                        this.state.list.map((item, index) =>
                        <li key={item.id}>
                        {item.text}
                        {/** 富文本 */}
                        {/* <span dangerouslySetInnerHTML={{__html:item.text}}></span> */}
                        <button onClick={ () => this.handleDelete(index) }>delete</button>
                        </li>
                        )
                    }
                </ul>

                {/* {this.state.list.length === 0 ? <div>暂无待办事项</div> : ""} */}
                { this.state.list.length === 0 && <div>暂无待办事项</div> }
            </div>
        )
    }

    handleClik = () => {
        console.log(this.myref.current.value)
        let newList = this.state.list
        newList.push({
            id: this.state.list.length+1,
            text: this.myref.current.value
        })
        this.setState({
            list: newList
        })

        //清空数据框
        this.myref.current.value = ""
    }

    handleDelete = (index) => {
        console.log("delete", index)
        let newList = this.state.list.slice()
        newList.splice(index,1)
        this.setState({
            list: newList
        })
    }
}