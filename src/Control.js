import React, {Component} from "react";

class Control extends Component{
    constructor(props) {
        super(props);
        this.state = {
            password: ''
        }
        this.myRefs = React.createRef()
    }
    onChange(){
        console.log(this.myRefs.current.value)
    }
    onChangePassword(e){
        console.log(e.target.value)
        // this.setState({
        //     password: e.target.value
        // })
        this.setState({
            password: 'pass'
        })
    }
    render() {

        return (
            <div>
                用户名：<input type="text" ref={this.myRefs} onChange={this.onChange.bind(this)}/>
                密码：<input type="text" value={this.state.password} onChange={this.onChangePassword.bind(this)}/>
            </div>
        )
    }
}

export default Control