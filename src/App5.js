import React, {Component} from "react";

class App5 extends Component{
    state = {
        arr : [
            {id: 1, txt: '6月21日峡谷龙舟赛挑战局数异常修复公告', time: '06/25'},
            {id: 2, txt: '6月22日峡谷龙舟赛挑战局数异常说明', time: '06/25'},
            {id: 3, txt: '6月23日体验服停机更新公告', time: '06/25'},
            {id: 4, txt: '6月24日峡谷龙舟赛异常修复公告', time: '06/24'},
            {id: 5, txt: '6月25日“演员”惩罚名单', time: '06/24'},
            {id: 6, txt: '6月26日外挂专项打击公告', time: '06/24'}
        ]
    }
    handClick(id){
        let arrTemp = JSON.parse(JSON.stringify(this.state.arr))
        let index = arrTemp.findIndex(v => v.id === id );
        if(index !== -1){
            arrTemp.splice(index, 1);
            this.setState({
                arr: arrTemp
            })
        }

    }
    render() {
        console.log('render执行了')
        console.log(this.state.arr)
        return (
            <div>
               <ul>
                   {this.state.arr.map(v => {
                        return <li key={v.id}>
                            <span>公告</span>
                            <span>{v.txt}</span>
                            <span>{v.time}</span>
                            <button onClick={this.handClick.bind(this, v.id)}>删除</button>
                        </li>;
                    })
                   }
               </ul>
            </div>
        )
    }
}
export default App5;