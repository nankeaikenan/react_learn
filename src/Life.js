import React, {Component} from "react";

class Life extends Component{
    state = {
        num: 1
    }
    UNSAFE_componentWillMount() {
        console.log('UNSAFE_componentWillMount')
    }
    componentDidMount() {
        console.log('更新完毕')
    }
    handClick(){
        this.setState({
            num: this.state.num + 1
        })
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('shouldComponentUpdate')
        console.log('nextState:', nextState)
        console.log('thisState:', this.state.num)
        return nextState.num !== 3
    }
    UNSAFE_componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('componentWillUpdate' + this.state.num)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate')
    }
    componentWillUnmount() {
        console.log("componentWillUnmount 做一些回收的操作")
    }
    render() {
        console.log('render')
        return (
            <div>
                <p>{this.state.num}</p>
                <button onClick={this.handClick.bind(this)}>按钮</button>
            </div>
        );
    }
}

export default Life