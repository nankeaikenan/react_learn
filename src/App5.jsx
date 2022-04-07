import React, {Component} from 'react';

const hocFunc = (Comp, timer) => {
    return class extends Component{
        state = {
            num: 2
        }
        addNumFn(){
            setTimeout(()=>{
                this.setState({num: 2})
            }, timer)
        }
        render() {
            return (
                <Comp num={this.state.num} addNumFn={this.addNumFn.bind(this)}/>
            )
        }
    }
}

class Sub1 extends Component {
    render(){
        // 要用props接收
        return <button onClick={this.props.addNumFn}>Sub1数字为：{this.props.num}</button>
    }
}

class Sub2 extends Component {
    render(){
        return <div onClick={this.props.addNumFn}>
            <p>Sub2数字为：{this.props.num}</p>
            <button onClick={this.props.addNumFn}>change</button>
        </div>
    }
}
const Sub1Com = hocFunc(Sub1, 1000);	// 使用高阶组件返回出来的是组件，可以在App8中直接调用
const Sub2Com = hocFunc(Sub2, 2000);
class App5 extends Component {
    render() {
        return (
            <div>
                <Sub1Com/>
                <hr/>
                <Sub2Com/>
            </div>
        );
    }
}

export default App5;