import React, {Component} from "react";
import PropTypes from 'prop-types'

class First extends Component{
    static defaultProps = {
        num: 666
    }
    static propTypes = {
        num: PropTypes.number
    }
    handClick(){
        this.props.changeNum()
    }
    render() {
        return (
            <div>
               <p>父组件的值:{this.props.num}</p>
                <button onClick={this.handClick.bind(this)}>改变父组件的值</button>
            </div>
        )
    }
}
export default First;