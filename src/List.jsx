import React, {Component} from "react";

export default class List extends Component{
    goHomePage(){
        console.log(22,this.props)
        this.props.history.push("/home/2")
    }
    componentDidMount() {
        console.log(99,this.props.history.location.state)
    }

    render() {
        return (
            <div>
                <h2>list页面</h2>
                <button onClick={this.goHomePage.bind(this)}>跳转home页面</button>
            </div>
        )
    }
}