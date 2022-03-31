import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from "./store";

export default class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        store.subscribe(this.handState.bind(this));
    }
    handState(){
        this.setState(store.getState())
    }
    handChange(e){
        const action = {
            type: "changeInputValue",       // type属性是必须要写的，用于校验
            value: e.target.value
        };
        store.dispatch(action);
    }
    render() {
        return (
            <div>
                <div style={{ margin: '20px' }}>
                    <Input
                        placeholder="请输入文字"
                        value={this.state.inputVal}
                        onChange={this.handChange.bind(this)}
                        style={{ width: '250px', marginRight: "10px" }}
                    />
                    <Button type="primary">增加</Button>
                </div>
                <div style={{ margin: '10px', width: '300px' }}>
                    <List bordered dataSource={this.state.list} renderItem={item => (<List.Item>{item}</List.Item>)}/>
                </div>
            </div>
        )
    }
}