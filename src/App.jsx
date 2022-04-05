import React, { Component } from 'react'
import {connect} from "react-redux";

class App extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.count}</h2>
                <button onClick={this.props.addCount}>增加</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCount(){
            const action = {
                type: "add_count",
                value: 2
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)