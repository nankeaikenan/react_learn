import React, {Component} from "react";
import PropTypes from 'prop-types'

class First extends Component{
    static contextTypes = {
        context_num: PropTypes.number
    }
    render() {
        return (
            <div>
               <p>祖父组件的值:{this.context.context_num}</p>
            </div>
        )
    }
}
export default First;