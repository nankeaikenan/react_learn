import React, {Component} from 'react';
import {Link} from "react-router-dom";

class MyIndex extends Component {
    render() {

        return (
            <div>
                <ul>
                    <li><Link to="/home/1">首页</Link></li>
                    <li><Link to="/list">详情页</Link></li>
                    <li><Link to="/404">404</Link></li>
                </ul>
                <div className="box">{this.props.children}</div>
            </div>
        );
    }
}

export default MyIndex;