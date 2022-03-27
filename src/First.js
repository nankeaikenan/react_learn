import React, {Component} from "react";
import Child1 from "./Child1";
import Sunzi1 from "./Sunzi1";
import PropTypes from "prop-types";

class First extends Component{
    state = {
        f_num: 1
    }
    static childContextTypes = {
        context_num: PropTypes.number
    }
    getChildContext(){
        return {
            context_num: this.state.f_num
        }
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
                <Sunzi1/>
            </div>
        )
    }
}

export default First;