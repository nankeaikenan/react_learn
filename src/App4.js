import React, {Component} from "react";

class App4 extends Component{
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         num: 0
    //     }
    // }
    state = {
        num: 1
    }
    handClick(){
        this.setState({
            num: this.state.num + 1
        }, () => {
            console.log('i am back')
        })
        console.log((this.state.num));
    }
    handClick2(){
        this.setState({
            num: this.state.num + 2
        })
        console.log((this.state.num));
    }
    render() {
        console.log('render执行了')
        return (
            <div>
                <p>{this.state.num}</p>
                <button onClick={this.handClick.bind(this)}>按钮</button>
                <button onClick={() => this.handClick2()}>按钮2</button>
            </div>
        )
    }
}
export default App4;