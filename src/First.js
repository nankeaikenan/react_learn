import React, {Component} from "react";
import Child1 from "./Child1";

class First extends Component{
    state = {
        f_num: 1
    }
    handClick(){
        this.setState({
            f_num: this.state.f_num + 1
        })
    }
    render() {
        return (
            <div>
                <p>{this.state.f_num}</p>
                <Child1 num = {this.state.f_num} changeNum = {this.handClick.bind(this)}/>
            </div>
        )
    }
}

export default First;