import React, {Component} from "react";

export default class Home extends Component{
    goToList(){
        this.props.history.push({
            pathname:'/list',
            state: {
                user: 'nicai',
                psd:'123'
            }
        })
    }
    render() {
        return (
            <div>
                <p>Home页面</p>
                <button onClick={this.goToList.bind(this)}>跳转list页</button>
            </div>
        )
    }
}