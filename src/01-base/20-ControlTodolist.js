import React, { Component } from "react";

export default class App extends Component {
    state = {
        list:[
            {
                id: 1,
                text: "aaa",
                isChecked: false
            },
            {
                id: 2,
                text: "bbb",
                isChecked: false
            },
            {
                id: 3,
                text: "ccc",
                isChecked: false
            },
        ],
        mytext:""
    }

    render() {
        return (
            <div>
                <input value={this.state.mytext} onChange={(evt) => {this.setState({mytext:evt.target.value})}} />
                <button onClick={ () => this.handleClik() }>add</button>

                <ul>
                    {
                        this.state.list.map((item, index) =>
                        <li key={item.id}>
                        <input type="checkbox" checked={item.isChecked} onChange={()=>this.handleChecked(index)} />
                        <span style={{textDecoration: item.isChecked?"line-through":""}}>{item.text}</span>
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

    handleChecked = (index) => {
        console.log(index)
        let newList = [...this.state.list]
        newList[index].isChecked = !this.state.list[index].isChecked
        this.setState({list:newList})
    }

    handleClik = () => {
        let newList = this.state.list
        newList.push({
            id: this.state.list.length+1,
            text: this.state.mytext
        })
        this.setState({
            list: newList,
            mytext: ""
        })
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